import { Module } from '@nestjs/common';

import { AuthModule } from '../auth/auth.module';
import { ProductsService } from './products.service';
import { ProductsController } from './products.controller';
import { TypeOrmModule } from "@nestjs/typeorm";
import { Product } from "./entities/product.entity";

@Module({
  controllers: [ProductsController],
  providers: [ProductsService],
  imports: [
    TypeOrmModule.forFeature([Product]),
    AuthModule
  ]
})
export class ProductsModule {}
