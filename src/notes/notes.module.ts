import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Note } from "./Note.entity";
import { NotesController } from "./notes.controller";
import { NoteService } from "./notes.service";

@Module({
    imports: [TypeOrmModule.forFeature([Note])],
    providers: [NoteService],
    controllers: [NotesController],
})

export class NotesModule{}