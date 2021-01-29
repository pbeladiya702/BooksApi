const express = require('express');
const Book = require('./Model/book');
const router = express.Router();

//fetch record
router.get("/books",async (req,res)=>{
    const book = await Book.find();
    res.send(book);
});

//insert record
router.post("/books",async(req,res)=>{
    const book = new Book({
        name:req.body.name,
        qty:req.body.qty
    });
    await book.save();
    res.send(book);
});

//delete record
router.delete("/books/:id",async(req,res)=>{

    try {
        await Book.deleteOne({_id:req.params.id});
        res.send("deleted");
    } catch (error) {
        res.status(404).send({error:"books is not found"});
    }
    
});
module.exports = router;