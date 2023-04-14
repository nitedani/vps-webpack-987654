import { renderPage } from "vite-plugin-ssr/server";
import express from "express";
const app = express();
app.get("*", async (req, res, next) => {
  const userAgent = req.headers["user-agent"];
  const pageContextInit = {
    urlOriginal: req.originalUrl,
    userAgent,
  };
  const pageContext = await renderPage(pageContextInit);
  const { httpResponse } = pageContext;
  if (!httpResponse) return next();
  const { statusCode, contentType, earlyHints } = httpResponse;
  if (res.writeEarlyHints)
    res.writeEarlyHints({ link: earlyHints.map((e) => e.earlyHintLink) });
  res.status(statusCode).type(contentType);
  httpResponse.pipe(res);
});
app.listen(3000, () => {
  console.log("Server listening on port 3000");
});
