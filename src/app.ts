import express, { Application } from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import { config } from 'dotenv';

config();

class App {
  public app: Application;

  constructor() {
    this.app = express();
    this.setConfig();
  }

  private setConfig = () => {
    // Allows us to revieve requests with data in json format
    this.app.use(bodyParser.json({ limit: '50mb' }));

    // Allows us to receive requests with data in x-www-form-urlencoded format
    this.app.use(bodyParser.urlencoded({ limit: '50mb', extended:true}));

    // Enables cors
    this.app.use(cors());
  }
}

export default new App().app;
