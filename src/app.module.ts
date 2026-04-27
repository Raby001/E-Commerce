import { Module } from '@nestjs/common';
import { CategoryModule } from './category/category.module';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { join } from 'path';
import { GraphqlModule } from './graphql/graphql.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { ProductModule } from './product/product.module';

@Module({
  imports: [
    CategoryModule,
    ProductModule,
    GraphqlModule,
    ConfigModule.forRoot({
      isGlobal:true
    }),
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      typePaths: [join(process.cwd(), 'src/graphql/schema/*.graphql' )],
      playground: true,
    }),
    TypeOrmModule.forRootAsync({
      inject: [ConfigService],
      useFactory: (config: ConfigService) => ({
        type: 'postgres',
        host: config.get('DB_HOST'),
        port: parseInt(config.get('DB_PORT') || '5432'),
        username: config.get('DB_USERNAME'),
        password: config.get('DB_PASSWORD'),
        database: config.get('DB_NAME'),
        autoLoadEntities: true,
        synchronize: true,
      }),
    })
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
