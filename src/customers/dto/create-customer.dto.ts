import { ApiProperty } from '@nestjs/swagger';
export class CreateCustomerDto {
  @ApiProperty({
    example: '27893048',
  })
  readonly idCard: string;

  @ApiProperty({ example: 'Pedro' })
  readonly name: string;

  @ApiProperty({
    example: 'Pascal',
  })
  readonly lastName: string;

  @ApiProperty({ example: 'San Critobal, Tachira, 1-21 Casa Nueva Granada' })
  readonly address: string;

  @ApiProperty({ example: new Date() })
  readonly createdAt: Date;

  @ApiProperty({ example: new Date() })
  readonly updatedAt: Date;

  @ApiProperty({ example: new Date() })
  readonly deletedAt: Date;

  @ApiProperty({
    example: 'https://m.media-amazon.com/images/I/41fveBeDWmL._SY346_.jpg',
  })
  readonly image_url: string;
}
