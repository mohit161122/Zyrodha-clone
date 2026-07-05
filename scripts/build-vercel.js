const fs = require("fs");
const path = require("path");
const { spawnSync } = require("child_process");

const root = path.resolve(__dirname, "..");
const dist = path.join(root, "dist");

function runNpm(args, options = {}) {
  const npmCli = process.env.npm_execpath;
  const command = npmCli ? process.execPath : process.platform === "win32" ? "npm.cmd" : "npm";
  const commandArgs = npmCli ? [npmCli, ...args] : args;
  const result = spawnSync(command, commandArgs, {
    cwd: root,
    env: { ...process.env, ...options.env },
    shell: false,
    stdio: "inherit",
  });

  if (result.error) {
    console.error(result.error.message);
    process.exit(1);
  }

  if (result.status !== 0) {
    process.exit(result.status || 1);
  }
}

function copyBuild(from, to) {
  fs.mkdirSync(path.dirname(to), { recursive: true });
  fs.cpSync(from, to, { recursive: true });
}

fs.rmSync(dist, { recursive: true, force: true });

runNpm(["--prefix", "frontend", "run", "build"], {
  env: { CI: "false" },
});
runNpm(["--prefix", "dashboard", "run", "build"], {
  env: { CI: "false", PUBLIC_URL: "/dashboard" },
});

copyBuild(path.join(root, "frontend", "build"), dist);
copyBuild(path.join(root, "dashboard", "build"), path.join(dist, "dashboard"));
