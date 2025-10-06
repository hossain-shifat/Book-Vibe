import { Star } from 'lucide-react'
import React from 'react'
import { useLoaderData, useParams } from 'react-router-dom'
import { addToStoreDB } from '../../utility/addToDb'

const BookDetails = () => {
    const {id} = useParams()
    const data = useLoaderData()
    const singleBook = data.find(book => book.bookId === parseInt(id))

    const handleMarkAsRead = (id) =>{
        addToStoreDB(id)
    }

  return (
    <div className="flex flex-col md:flex-row justify-around p-5 md:p-10 gap-5 my-5 md:my-10 rounded-2xl border border-gray-200 shadow-sm mx-4 md:mx-0">
        <div>
            <img className="w-[350px] h-[500px]" src={singleBook.image} alt="" />
        </div>
        <div>
            <div className="space-y-2">
                <h1 className="font-bold text-2xl md:text-4xl font-playfair">{singleBook.bookName}</h1>
                <p className="font-work-sans font-medium">By: {singleBook.author}</p>
            </div>
            <hr className="my-4"/>
            <div className="font-work-sans font-semibold">
                <p>{singleBook.category}</p>
            </div>
            <hr className="my-4"/>
            <div className="max-w-[450px]">
                <p className="text-[#131313]/70"><span className="font-bold text-[#131313]">Review:  </span>{singleBook.review}</p>
            </div>
            <div className="mt-5 font-work-sans">
                <div className="flex gap-4 font-bold"><p>Tags:</p>
                    {
                        singleBook.tags.map(tag=> <h1 key={tag} className="font-semibold text-[#23BE0A]">#{tag}</h1>)
                    }
                </div>
            </div>
            <hr className="my-4"/>
            <div className="font-work-sans">
                <h1 className="flex gap-10 font-bold"><span className = "font-normal text-[#131313]/70">Number of Pages:</span>{singleBook.totalPages}</h1>
                <h1 className="flex gap-10 font-bold"><span className = "font-normal text-[#131313]/70">Publisher:</span>{singleBook.publisher}</h1>
                <h1 className="flex gap-10 font-bold"><span className = "font-normal text-[#131313]/70">Year of Publishing:</span>{singleBook.yearOfPublishing}</h1>
                <h1 className="flex gap-10 font-bold"><span className = "font-normal text-[#131313]/70">Rating:</span>{singleBook.rating}</h1>
            </div>
            <div className="flex gap-4 mt-6 my-5">
                <button onClick={()=>handleMarkAsRead(id)} className="btn font-bold text-center bg-white">Mark as Read</button>
                <button className="btn font-bold text-white text-center border-none bg-[#59C6D2]">Add to Wishlist</button>
            </div>
        </div>
    </div>
  )
}

export default BookDetails
