import {Router} from "express"
import { addBlog, deleteBlog, getBlogs, updateBlog } from "../controller/blogcontroller.js"

const blogRouter = Router()

blogRouter.post("/blogs",addBlog)
blogRouter.get("/blogs",getBlogs)
blogRouter.put("/blogs/:id", updateBlog)
 blogRouter.delete("/blogs/:id",deleteBlog)
export default blogRouter