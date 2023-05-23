module.exports = ({ env }) => ({
  connection: {
    client: 'postgres',
    connection: {
      host: env('DATABASE_HOST', 'dpg-chm07n82qv27ib3ag07g-a.oregon-postgres.render.com'),
      port: env.int('DATABASE_PORT', 5432),
      database: env('DATABASE_NAME', 'guitarla_kd7p'),
      user: env('DATABASE_USERNAME', 'root'),
      password: env('DATABASE_PASSWORD', 'PNAH1nnTaA8lO0kDdaGB237bD79wLZ59'),
      ssl: env.bool('DATABASE_SSL', true),
    },
  },
});
