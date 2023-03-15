import { Injectable, NotFoundException } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { Note } from "./Note.entity";

@Injectable()
export class NoteService {

    constructor(
        @InjectRepository(Note) private notesRepository: Repository<Note>
    ) { }

    async getNotes(): Promise<Note[]> {
        return await this.notesRepository.find()
    }

    findOne(id: string): Promise<Note> {
        return this.notesRepository.findOne({ where: { id: parseInt(id) } })
    }

    async createNote(note: Note) {
        return this.notesRepository.save(note)
    }

    async remove(id: string): Promise<void> {
        this.notesRepository.delete(id)
    }

    async editNote(id: number, note: Note): Promise<Note> {
        const editNote = await this.notesRepository.findOne({ where: { id: id } })
        if (!editNote) {
            throw new NotFoundException('Note is not found')
        }

        editNote.description = note.description
        editNote.title = note.title
        await editNote.save()
        return editNote
    }

}