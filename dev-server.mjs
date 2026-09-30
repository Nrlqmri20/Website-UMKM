import { createServer } from "node:http";
import { readFile, stat } from "node:fs/promises";
import { fileURLToPath } from "node:url";
import { dirname, join, extname, normalize } from "node:path";

const root = dirname(fileURLToPath(import.meta.url));
const port = Number(process.env.PORT) || 4173;

const types = {
  ".html": "text/html; charset=utf-8",
  ".css": "text/css; charset=utf-8",
  ".js": "text/javascript; charset=utf-8",
  ".mjs": "text/javascript; charset=utf-8",
  ".json": "application/json; charset=utf-8",
  ".svg": "image/svg+xml",
  ".jpg": "image/jpeg",
  ".jpeg": "image/jpeg",
  ".png": "image/png",
  ".webp": "image/webp",
  ".woff2": "font/woff2",
  ".xml": "application/xml; charset=utf-8",
  ".txt": "text/plain; charset=utf-8",
  ".ico": "image/x-icon",
};

const send = (res, status, body, type) => {
  res.writeHead(status, {
    "Content-Type": type || "text/plain; charset=utf-8",
    "Cache-Control": "no-cache",
  });
  res.end(body);
};

const serveFile = async (res, filePath) => {
  const body = await readFile(filePath);
  send(res, 200, body, types[extname(filePath).toLowerCase()]);
};

const server = createServer(async (req, res) => {
  const url = new URL(req.url, `http://${req.headers.host}`);
  const clean = decodeURIComponent(url.pathname).replace(/\/+$/, "") || "/";

  const safe = normalize(clean).replace(/^(\.\.[/\\])+/, "");
  const candidate = join(root, safe);

  if (!candidate.startsWith(root)) {
    send(res, 403, "Forbidden");
    return;
  }

  try {
    const info = await stat(candidate);

    if (info.isFile()) {
      await serveFile(res, candidate);
      return;
    }

    await serveFile(res, join(candidate, "index.html"));
  } catch {
    const fallback = join(root, safe, "index.html");

    try {
      await stat(fallback);
      await serveFile(res, fallback);
    } catch {
      if (extname(safe)) {
        send(res, 404, "Not found");
        return;
      }

      try {
        await serveFile(res, join(root, "index.html"));
      } catch {
        send(res, 500, "index.html tidak ditemukan");
      }
    }
  }
});

server.listen(port, () => {
  console.log(`Jalan di http://localhost:${port}`);
  console.log("Setiap route yang tidak ditemukan dilempar ke index.html.");
  console.log("Tekan Ctrl+C untuk berhenti.");
});
