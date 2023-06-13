import bookModel from '../Model/bookModel.js';

export const createBook = async (req,res)=>{
    const {title,author,rating } = req.body;
    try {
        const book = new bookModel({title,author,rating});
        await book.save();
        res.send({
            message:'Book is Created',
            book
        })
        
    } catch (error) {
        console.log('error : ',error);
        res.status(400).send({
            message:'Error in creating a book'
        })
    }
}

export const getBook =async (req,res)=>{
    const {title,author} = req.body;
    try {
        const book =  await bookModel.find({title});
        res.send({
            message:'List of books',
            book
        })
        
    } catch (error) {
        console.log('error : ',error);
        res.status(400).send({
            message:'Error in creating a book'
        })
    }
}

export const UpdateBook =async (req,res)=>{
    const {title,author,rating } = req.body;
    try {
        const book =  await bookModel.findOne({title});
        if(!book){
            res.status(400).send({
                message:'Book Not found',
            })
        }
        await bookModel.findOneAndUpdate({title},{author,rating});
        const updatedBook = await bookModel.findOne({title});
        res.send({
            message:'Book is Updated',
            updatedBook
        })
        
    } catch (error) {
        console.log('error : ',error);
        res.status(400).send({
            message:'Error in updating a book'
        })
    }
}

export const deleteBook =async (req,res)=>{
    const {title,author,rating } = req.body;
    try {
        const book =  await bookModel.findOne({title});
        if(!book){
            res.status(400).send({
                message:'Book Not found',
            })
        }
        await bookModel.deleteMany({ title} );
        res.send({
            message:'Book is Deleted',
            book
        })
        
    } catch (error) {
        console.log('error : ',error);
        res.status(400).send({
            message:'Error in deleting a book'
        })
    }
}
