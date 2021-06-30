import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule } from '@nestjs/config';
import { EasyconfigModule } from 'nestjs-easyconfig';

import { TasksModule } from './tasks/tasks.module';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { configuration } from './config/configuration';
import { validationSchema } from './config/validation';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      load: [configuration],
      validationSchema
    }),
    MongooseModule.forRoot(process.env.MONGODB_URI, {
      useNewUrlParser: true, 
      useUnifiedTopology: true
    }),
    TasksModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
