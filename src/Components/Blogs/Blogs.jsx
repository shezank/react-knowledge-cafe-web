import { useEffect, useState } from "react";
import Blog from "../Blog/Blog";


const Blogs = ({handlerBookmarks, handleSpendTime}) => {
    const [blogs, setBlogs] = useState([]);

    useEffect(()=>{
        fetch('posts.json')
        .then(res => res.json())
        .then(data => setBlogs(data))
    },[])
    return (
        <div className="w-2/3">
            
            {
                blogs.map(blog => <Blog key={blog.id} blog={blog} handlerBookmarks={handlerBookmarks} handleSpendTime={handleSpendTime} ></Blog>)
            }
        </div>
    );
};

export default Blogs;