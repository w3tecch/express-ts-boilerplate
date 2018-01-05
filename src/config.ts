export = <config.Environments>{
    /**
     * Development Environment
     * ------------------------------------------
     *
     * This is the local development environment, which is used by the developers
     */
    development: {
        database: {
            connection: 'mysql://root@localhost:3306/my-database-dev',
            client: 'mysql',
            migrations: {
                directory: './src/database/migrations',
                tableName: 'version'
            },
            seeds: {
                directory: './src/database/seeds'
            }
        },
        server: {
            host: 'localhost',
            port: process.env.PORT || '3000',
            graphiql: true
        },
        logger: {
            debug: 'app*',
            console: {
                level: 'error'
            }
        }
    },
    /**
     * Test Environment
     * ------------------------------------------
     *
     * This environment is used by the unit, migration and database test.
     */
    test: {
        database: {
            connection: 'mysql://root:root@localhost:3306/my-database-test',
            client: 'mysql',
            migrations: {
                directory: './src/database/migrations',
                tableName: 'version'
            },
            seeds: {
                directory: './src/database/seeds'
            }
        },
        server: {
            host: 'localhost',
            port: process.env.PORT || '3000',
            graphiql: false
        },
        logger: {
            debug: '',
            console: {
                level: 'none'
            }
        }
    },
    /**
     * Production Environment
     * ------------------------------------------
     *
     * This configuration will be used by the cloud servers. You are able to override
     * them with the local cloud environment variable to make it even more configurable.
     */
    production: {
        database: {
            connection: 'mysql://root:root@localhost:3306/my-database-prod',
            client: 'mysql',
            migrations: {
                directory: './src/database/migrations',
                tableName: 'version'
            },
            seeds: {
                directory: './src/database/seeds'
            }
        },
        server: {
            host: 'localhost',
            port: process.env.PORT || '3000',
            graphiql: false
        },
        logger: {
            debug: '',
            console: {
                level: 'debug'
            }
        }
    }
};
