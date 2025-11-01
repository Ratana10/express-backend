   import "dotenv/config";
    import pg from "pg";

    const { Pool } = pg;

    export const pool = new Pool({
      connectionString: process.env.PGCONNECT, // or individual variables
      max: 20, // Maximum number of connections in the pool
      idleTimeoutMillis: 30000, // How long a client is allowed to remain idle before being closed
    });

    // Optional: Add an error handler for the pool
    pool.on('error', (err, client) => {
      console.error('Unexpected error on idle client', err);
      process.exit(-1);
    });