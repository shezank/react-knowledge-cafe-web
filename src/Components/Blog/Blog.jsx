

const Blog = ({ blog, handlerBookmarks, handleSpendTime }) => {
    const { id, title, author_img, author, post_date, reading_time, cover, hashtags } = blog;
    return (
        <div>
            <img className="w-full" src={cover} alt="" />
            <div className="flex justify-between mt-4">
                <div className="flex">
                    <img className="h-14" src={author_img} alt="" />
                    <div className="ml-3">
                        <h4>{author}</h4>
                        <p>{post_date}</p>
                    </div>

                </div>
                <div className="flex">
                    <p>{reading_time} min read
                        <button onClick={()=>handlerBookmarks(blog)}>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="red" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0111.186 0z" />
                            </svg>

                        </button>
                    </p>

                </div>
            </div>
            <div>
                <h1>{title}</h1>
            </div>
            <div>
                {
                    hashtags.map((hash, id) => <span key={id}>#{hash} </span>)
                }
            </div>
                <button className=" font-bold text-blue-600 underline" onClick={()=>handleSpendTime(reading_time, id)}>Mark as read</button>
        </div>
    );
};

export default Blog;