import React from 'react'
import book from '../../assets/book.jpg'

const Banner = () => {
  return (
    <div className="flex flex-col-reverse gap-10 lg:flex-row justify-between items-center text-center my-15 mx-5 md:mx-0 p-10 shadow-sm rounded-2xl bg-[#131313]/5">
        <div className="max-w-xl space-y-10">
            <h1 className="font-playfair font-bold text-3xl md:text-5xl leading-10 md:leading-20">Books to freshen up <br className="hidden md:block"/> your bookshelf</h1>
            <button className="btn font-bold text-white text-center border-none bg-[#23BE0A]">View The List</button>
        </div>
        <div>
            <img src={book} className="lg:w-[300px] lg:h-[400px]" alt="" />
        </div>
    </div>
  )
}

export default Banner
