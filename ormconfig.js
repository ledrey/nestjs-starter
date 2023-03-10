module.exports = {
  type: 'postgres',
  host: process.env.pg_host || 'localhost',
  port: +process.env.pg_port || 5432,
  username: process.env.pg_user,
  password: process.env.pg_pass,
  database: process.env.pg_base,
  entities: ['src/db/entities/**/*.ts'],
  migrations: ['src/db/migrations/**/*.ts'],
  cli: {
    migrationsDir: 'src/db/migrations',
  },
  migrationsTableName: 'typeorm_migrations',
};
