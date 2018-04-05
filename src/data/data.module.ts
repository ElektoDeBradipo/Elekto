import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { config } from 'dotenv';

import { UserSchema } from './schemas';
import { UsersService } from './services';

config();

// const mongoUrl = `mongodb://${process.env.MONGODB_USERNAME}:${
//   process.env.MONGODB_PASSWORD
// }@${process.env.MONGODB_HOST}:${process.env.MONGODB_PORT}/elekto`;

const mongoUrl = `mongodb://${process.env.MONGODB_HOST}:${
  process.env.MONGODB_PORT
}/elekto`;

@Module({
  imports: [
    MongooseModule.forRoot(mongoUrl),
    MongooseModule.forFeature([{ name: 'User', schema: UserSchema }]),
  ],
  controllers: [],
  components: [UsersService],
  exports: [UsersService],
})
export class DataModule {}
