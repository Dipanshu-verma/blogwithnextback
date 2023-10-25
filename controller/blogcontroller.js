import Blog from "../model/blogmodel.js";
 


export const addBlog = async (req, res) => {
  const{title,body,author,createdAt} =  req.body
  try {
    const newBlog = await Blog.create({
       
      title,body,author,createdAt
    });


    await newBlog.save();
    return res.status(200).json(newBlog);

     

  }catch (error) {
    return res.status(500).json(error.message);
  }
};



export const getBlogs = async (req, res) => {

  try {
    const blogs = await Blog.find({}).sort({ createdAt: -1 });
    return res.status(200).json(blogs);

  }catch (error){
    return res.status(500).json(error.message);
  }
};


 



export const updateBlog = async (req, res) => {
  

const{title,body,author,createdAt} =  req.body

  try {
     
    await Blog.findOneAndUpdate(
          { _id: req.params.id },
          {title,body,author,createdAt}
      )

      const blog = await Blog.findById(req.params.id);

      return res.status(200).json(blog);
  } catch (error) {
      return res.status(500).json(error.message);
  }
}




export const deleteBlog = async (req, res) => {
  try {
    
      const blog = await Blog.findByIdAndDelete(req.params.id)

      return res.status(200).json(blog);
  } catch (error) {
      return res.status(500).json(error.message);
  }
}