import mongoose from "mongoose"

const blogSchema = new mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    body:{
        type:String,
        default:false,
    },
    author:{
        type:String,
        required:true
    },
    createdAt:{
        type:String,
       
    }
})


const Blog = mongoose.model('blog',blogSchema);
export default Blog


 