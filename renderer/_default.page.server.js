import { escapeInject } from "vite-plugin-ssr/server";

export async function render() {
  return {
    documentHtml: escapeInject`<html><body><h1>Hello World</h1></body></html>`,
  };
}
