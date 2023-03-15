import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { NotesModule } from './notes/notes.module';
import ormConfig from 'ormconfig'

@Module({
  imports: [TypeOrmModule.forRoot(ormConfig), NotesModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
