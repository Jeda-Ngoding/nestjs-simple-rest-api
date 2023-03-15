import { Body, Controller, Delete, Get, Param, ParseIntPipe, Patch, Post } from "@nestjs/common";
import { Note } from "./Note.entity";
import { NoteService } from "./notes.service";

@Controller('notes')
export class NotesController {
    constructor(private notesService: NoteService) { }

    @Get()
    findAll() {
        return this.notesService.getNotes()
    }

    @Get(':id')
    findOne(@Param('id', ParseIntPipe) id) {
        return this.notesService.findOne(id)
    }

    @Post()
    create(@Body() note: Note) {
        return this.notesService.createNote(note)
    }

    @Patch(':id')
    async editNote(@Body() note: Note, @Param('id') id: number): Promise<Note> {
        const noteEdited = await this.notesService.editNote(id, note)
        return noteEdited
    }

    @Delete(':id')
    remove(@Param('id', ParseIntPipe) id) {
        this.notesService.remove(id)
    }
}