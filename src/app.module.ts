import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ItemModule } from './item/item.module';

@Module({
  imports: [TypeOrmModule.forRoot(), ItemModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
