import Bookmark from "../Bookmark/Bookmark";


const Bookmarks = ({ bookmarks, times }) => {
    return (
        <>
            <div className="w-1/3">
            <div className="bg-purple-200 rounded-xl text-center ">
                <h1 className="text-lg font-bold text-purple-600 p-4 " >Spent time on read : {times} min </h1>
            </div>
            <div className=" bg-slate-200 rounded-xl mt-5 p-5">

                <h1 className="text-2xl font-bold " >Bookmarked Blogs : {bookmarks.length} </h1>
                {
                    bookmarks.map((bookmark, idx) => <Bookmark key={idx} bookmark={bookmark} ></Bookmark>)
                }
            </div>
            </div>
        </>

    );
};



export default Bookmarks;