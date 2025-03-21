import { Server } from "./infrastructure/server/server";

async function main() {
  const server = new Server({ port: 3004 });
  await server.start();
}

(() => {
  main();
})();
