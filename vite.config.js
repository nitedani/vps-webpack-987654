import ssr from "vite-plugin-ssr/plugin";
import vavite from "vavite";
import { join } from "path";

export default {
  buildSteps: [
    { name: "client" },
    {
      name: "server",
      config: {
        build: {
          ssr: true,
        },
      },
    },
  ],
  plugins: [
    ssr(),
    vavite({
      serverEntry: join(__dirname, "server", "main.js"),
      serveClientAssetsInDev: true,
    }),
  ],
};
