import { ApiProperty } from '@nestjs/swagger';

export class CreateUserDto {
  @ApiProperty({ example: 'gggabo3' })
  readonly _id: string;

  @ApiProperty({ example: 'Gabriel Pérez' })
  readonly name: string;

  @ApiProperty({ example: 'jgperezp03@gmail.com' })
  readonly email: string;

  @ApiProperty({ example: 'Venezuela' })
  readonly country: string;
}
