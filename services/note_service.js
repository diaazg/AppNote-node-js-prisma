const prisma = require('../client');

class NoteService{
    static async addNote(note){
        try {
            
            const newNote = await prisma.note.create({data:note})
            return newNote;
        } catch (err) {
            throw err;
        }
    }

    static async getAll(){
        try {

             const allNotes = await prisma.note.findMany();
             return allNotes;
            
        } catch (err) {

            throw err;
            
        }
    }

    static async userNotes(id){
        try {

            const userNotes = await prisma.note.findMany({
                where: {
                    userId: id
                }
            });

            return userNotes;
            
        } catch (err) {
            throw err;
        }finally {
            await prisma.$disconnect();
        }
    }
}
module.exports = NoteService;