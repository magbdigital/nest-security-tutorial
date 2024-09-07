import { BadRequestException, Injectable, InternalServerErrorException, Logger, NotFoundException } from '@nestjs/common';

import { CreateProductDto } from './dto/create-product.dto';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class ProductsService {

  constructor(
    private  prisma: PrismaService,
  ) {}

  async create(createProductDto: CreateProductDto) {
    try {
      const product = await this.prisma.product.create({data:createProductDto});

      return product;
    } catch (error) {
      throw new InternalServerErrorException(error.message);
    }

  }
/*
  findAll() {
    return this.productRepository.find({});
  }

  findOne(id: number) {
    return `This action returns a #${id} product`;
  }

  update(id: number, updateProductDto: UpdateProductDto) {
    return `This action updates a #${id} product`;
  }

  remove(id: number) {
    return `This action removes a #${id} product`;
  }*/
}
