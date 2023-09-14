

const Bookmark = ({bookmark}) => {
    const {title} = bookmark;
    return (
        <div className="bg-white rounded-xl">
            <h2 className="text-xl m-3 p-2 ">{title}</h2>
        </div>
    );
};

export default Bookmark;