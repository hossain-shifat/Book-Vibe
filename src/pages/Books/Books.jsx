import React, { Suspense, useEffect, useState } from 'react'
import Book from '../Book/Book'

const Books = ({data}) => {
    const [allBooks,setAllBooks] = useState()

    // useEffect(()=>{
    //     fetch('/public/booksData.json')
    //     .then(res=>res.json())
    //     .then(data=> console.log(data))
    //     setAllBooks(data)
    // },[])

    // const booksPromise = fetch('/public/booksData.json').then(res=>res.json())


  return (
    <div>
        <h1 className="text-center text-2xl md:text-3xl p-6">Books</h1>
        <Suspense fallback={<div className="flex justify-center items-center text-center"><span className="loading loading-dots loading-xl"></span></div>}>
            <div className="grid md:grid-cols-3 justify-center items-center gap-5 mb-10">
                {
                    data.map(book=> <Book key={book.bookId} book={book}/>)
                }
            </div>
        </Suspense>
    </div>
  )
}

export default Books
