import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Request } from 'express';
import { Model } from 'mongoose';
import { CreateCustomerDto } from './dto/create-customer.dto';
import { UpdateCustomerDto } from './dto/update-customer.dto';
import { Customer, CustomerDocument } from './schemas/customer.schema';

@Injectable()
export class CustomersService {
  constructor(
    @InjectModel(Customer.name)
    private readonly customerModel: Model<CustomerDocument>,
  ) {}

  async create(createCustomerDto: CreateCustomerDto) {
    return this.customerModel.create(createCustomerDto);
  }

  async findAll(request: Request): Promise<Customer[]> {
    return this.customerModel
      .find(request.query)
      .setOptions({ sanitizeFilter: true })
      .exec();
  }

  async findOne(id: string): Promise<Customer> {
    return this.customerModel.findOne({ _id: id }).exec();
  }

  async update(id: string, updateCustomerDto: UpdateCustomerDto) {
    return this.customerModel.findOneAndUpdate({ _id: id }, updateCustomerDto, {
      new: true,
    });
  }

  async remove(id: string) {
    return this.customerModel.remove({ _id: id }).exec();
  }
}
