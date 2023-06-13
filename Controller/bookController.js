import bookModel from '../Model/bookModel.js';

export const createBook = async (req,res)=>{
    const {title,author,rating } = req.body;
    try {
        const book =  await bookModel({title,author,rating});
        res.send({
            message:'Book is Created',
            status:success,
            book,
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
        const book =  await bookModel.find({title} || {author});
        res.send({
            message:'List of books',
            status:success,
            book,
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
        await bookModel.findOneAndUpdate(title,{author,rating});
        res.send({
            message:'Book is Updated',
            status:success,
            book,
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
        await bookModel.deleteOne({ name} );
        res.send({
            message:'Book is Deleted',
            status:success,
            book,
        })
        
    } catch (error) {
        console.log('error : ',error);
        res.status(400).send({
            message:'Error in deleting a book'
        })
    }
}
