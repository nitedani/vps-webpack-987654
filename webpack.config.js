import { dirname, join } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
export default {
  experiments: {
    outputModule: true,
    topLevelAwait: true,
  },
  entry: join(__dirname, "dist", "server", "index.mjs"),
  mode: "production",
  target: "node",
  output: {
    path: join(__dirname, "dist"),
    filename: "main.mjs",
    chunkFormat: "module",
  },
  externalsType: "module",
  externalsPresets: { node: true },
  module: {
    parser: {
      javascript: { importMeta: false },
    },
  },
  ignoreWarnings: [
    /^(?!CriticalDependenciesWarning$)|CommonJsRequireContextDependency/,
  ],
  optimization: {
    minimize: false,
    nodeEnv: "production",
  },
};
