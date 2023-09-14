
import { useState } from 'react'
import './App.css'
import Blogs from './Components/Blogs/Blogs'
import Bookmarks from './Components/Bookmarks/Bookmarks'
import Headers from './Components/Headers/Headers'

function App() {
 const [bookmarks, setBookmarks] = useState([]);
 const [times, setTimes] = useState(0);


 const handlerBookmarks = blog =>{
  const newBookmarks = [...bookmarks, blog];
  setBookmarks(newBookmarks);
 }

 const handleSpendTime = (time, id) =>{
  const newTimes = times + time;
  setTimes(newTimes);

  const reamaingBookmarks = bookmarks.filter( bookmark => bookmark.id !== id);
  setBookmarks(reamaingBookmarks);
 }
  

  return (
    <div className='max-w-5xl mx-auto'>
      
     <Headers></Headers>

     <main className='flex mx-6 gap-5 '>
      <Blogs handleSpendTime={handleSpendTime} handlerBookmarks={handlerBookmarks}></Blogs>
      <Bookmarks times={times} bookmarks={bookmarks}></Bookmarks>
     </main>
      
    </div>
  )
}

export default App
