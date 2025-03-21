import express, { Router } from "express";
import helmet from "helmet";

interface Options {
  port?: number;
  routes?: Router;
}

export class Server {
  public readonly app = express();
  private readonly port: number;
  private readonly prefix = "/api/v1";
  //   private readonly routes: Router;

  constructor(options: Options) {
    const { port = 3100, routes } = options;
    this.port = port;
    // this.routes = routes;
  }

  async start() {
    this.app.use(express.json());
    this.app.use(express.urlencoded({ extended: true }));
    this.app.use(helmet());

    // this.app.use(t,this.routes);

    this.app.listen(this.port, () => {
      console.log(
        `Server runnint on -> http://localhost:${this.port}${this.prefix}`
      );
    });
  }
}
