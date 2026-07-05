const fs = require("fs");
const path = require("path");
const { spawnSync } = require("child_process");

const root = path.resolve(__dirname, "..");
const dist = path.join(root, "dist");

function run(command, args, options = {}) {
  const result = spawnSync(command, args, {
    cwd: root,
    env: { ...process.env, ...options.env },
    shell: process.platform === "win32",
    stdio: "inherit",
  });

  if (result.status !== 0) {
    process.exit(result.status || 1);
  }
}

function copyBuild(from, to) {
  fs.mkdirSync(path.dirname(to), { recursive: true });
  fs.cpSync(from, to, { recursive: true });
}

fs.rmSync(dist, { recursive: true, force: true });

run("npm", ["--prefix", "frontend", "run", "build"], {
  env: { CI: "false" },
});
run("npm", ["--prefix", "dashboard", "run", "build"], {
  env: { CI: "false", PUBLIC_URL: "/dashboard" },
});

copyBuild(path.join(root, "frontend", "build"), dist);
copyBuild(path.join(root, "dashboard", "build"), path.join(dist, "dashboard"));
