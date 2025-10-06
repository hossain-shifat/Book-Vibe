import { Star } from 'lucide-react'
import React, { use } from 'react'
import { Link } from 'react-router-dom'


const Book = ({book}) => {
    // const data = use(booksPromise)
  return (
    <Link to={`/bookDetails/${book.bookId}`}>
        <div className="rounded-2xl pt-1 m-2 mx-4 shadow-sm">
            <div className="bg-[#F3F3F3] m-4 py-4 shadow-sm rounded-2xl">
                <img src={book.image} className="h-[200px] rounded-sm mx-auto object-cover" alt="" />
            </div>
            <div className="p-4 space-y-2">
                <div className="flex justify-between text-[#23BE0A] font-work-sans font-medium">
                    {
                        book.tags.map(tag=><h1>{tag}</h1>)
                    }
                </div>
                <div className="space-y-2 pt-2 mb-4">
                    <h1 className="font-semibold font-playfair text-xl">{book.bookName}</h1>
                    <p className="font-medium font-work-sans">By: {book.author}</p>
                </div>
                <div className="flex justify-between">
                    <p>{book.category}</p>
                    <div className="flex gap-1 items-center justify-center">
                        <p>{book.rating}</p>
                        <p><Star size={15}/></p>
                    </div>
                </div>
            </div>
        </div>
    </Link>
  )
}

export default Book
