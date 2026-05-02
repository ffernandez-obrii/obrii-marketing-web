/**
 * Copies public/logo.png → src/app/icon.png + apple-icon.png (Next.js metadata files).
 * Run via npm run sync:favicon; hooked from prebuild and dev.
 */
const fs = require("fs");
const path = require("path");

const root = process.cwd();
const logo = path.join(root, "public", "logo.png");
const targets = [
  path.join(root, "src", "app", "icon.png"),
  path.join(root, "src", "app", "apple-icon.png"),
];

if (!fs.existsSync(logo)) {
  console.error("sync-favicon: falta public/logo.png");
  process.exit(1);
}

for (const dest of targets) {
  fs.copyFileSync(logo, dest);
}

console.log(
  "sync-favicon: public/logo.png → src/app/icon.png, src/app/apple-icon.png",
);
