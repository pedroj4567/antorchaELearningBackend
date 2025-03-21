import { Server } from "./infrastructure/server/server";
import { envs } from "./infrastructure/config/envs";
async function main() {
  const server = new Server({ port: envs.PORT });
  await server.start();
}

(() => {
  main();
})();
