import { IsNotEmpty, IsString } from 'class-validator';

export class CreateItemDTO {
  @IsNotEmpty()
  @IsString()
  todo: string;
}
