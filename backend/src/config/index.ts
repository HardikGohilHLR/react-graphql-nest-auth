// Configuration
import { ApolloDriver, ApolloDriverConfig } from "@nestjs/apollo";
import { TypeOrmModuleAsyncOptions } from "@nestjs/typeorm";
import { join } from "path";

export const typeOrmConfig: TypeOrmModuleAsyncOptions = {
    useFactory: () => {
        return {
            type: 'mongodb',
            host: process.env.DB_HOST,
            port: parseInt(process.env.DB_PORT),
            database: 'rgnauth',
            autoLoadEntities: true,
            useNewUrlParser: true,
            logging: true,
            synchronize: true,
        }
    }
}

export const graphQLConfig: ApolloDriverConfig = {
    driver: ApolloDriver,
    autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
    formatError: (error) => {
        const graphQLFormattedError = {
            message: error.message,
            errors: error?.extensions?.response,
            code: error.extensions?.code,
            // original: error
        };
        return graphQLFormattedError;
    },
} 