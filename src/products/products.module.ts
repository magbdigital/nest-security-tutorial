import { Module } from '@nestjs/common';

import { AuthModule } from '../auth/auth.module';
import { ProductsService } from './products.service';
import { ProductsController } from './products.controller';

@Module({
  controllers: [ProductsController],
  providers: [ProductsService],
  imports: [
    AuthModule
  ]
})
export class ProductsModule {}
