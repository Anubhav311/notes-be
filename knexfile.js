// Update with your config settings.

module.exports = {

  development: {
    client: 'postgresql',
    connection: {
      host: 'localhost',
      port: '5432',
      user: 'postgres',
      database: 'notes_db'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      directory: './data/migrations'
    },
    seeds: {
      directory: './data/seeds'
    }
  },

  production: {
    client: 'postgresql',
    connection: process.env.DATABASE_URL,
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      directory: './data/migrations'
    },
    seeds: {
      directory: './data/seeds'
    }
  }

};
