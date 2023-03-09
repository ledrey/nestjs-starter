import * as dotenv from 'dotenv';
import { DataSource } from 'typeorm';

dotenv.config();

const AppDataSource = new DataSource({
  type: 'postgres',
  // url: process.env.pg_url,
  host: process.env.pg_host,
  port: +process.env.pg_port,
  username: process.env.pg_user,
  password: process.env.pg_pass,
  database: process.env.pg_base,
  logging: true,
  entities: ['./src/db/entities/*.entity.ts'],
  migrations: ['./src/db/migrations/*{.js,.ts}'],
  subscribers: [],
});

export default AppDataSource;
