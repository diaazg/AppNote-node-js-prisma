const prisma = require('../client');
const NoteService = require('../services/note_service');

exports.addNote = async(req,res,next)=>{
         try {
            const note = req.body;
            const succesRes = await NoteService.addNote(note);
            res.json({status:true,succes:"User Registered Successfully"});

         } catch (err) {
            throw err;
         }
}

exports.getAll = async(req,res,next)=>{
    try {
        
         const allNotes = await NoteService.getAll();
         res.json({status:true,succes:"Successfully",body:allNotes});

    } catch (err) {
        
    }
}

exports.userNotes = async(req,res,next)=>{
    try {
           const userID = await req.query.userID;
           const userNotes = await NoteService.userNotes(userID);
           res.json({status:true,succes:"Successfully",body:userNotes});


    } catch (err) {

        throw err;
        
    }
}
