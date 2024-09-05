import { Module } from '@nestjs/common';
import { ConfigModule } from "@nestjs/config";

import { ProductsModule } from './products/products.module';
import { AuthModule } from './auth/auth.module';
import * as process from "node:process";
import { PrismaModule } from './prisma/prisma.module';


@Module({

  imports: [
    ConfigModule.forRoot(),
    PrismaModule,
    ProductsModule,
    AuthModule
  ],

})
export class AppModule {}
