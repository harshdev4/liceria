import React from 'react'
import blogData from '../blogs.json';
import BlogCard from '@/components/BlogCard';
import { AiOutlineMacCommand } from "react-icons/ai";

const page = () => {
    return (
        <main className='px-pHSm lg:px-pHLg min-h-[calc(100dvh-300px)]'>
            <div className='flex gap-x-1 items-center text-textColor pt-5 pb-3'>
                <AiOutlineMacCommand />
                <h2>Blogs</h2>
            </div>
            <div className="flex flex-wrap justify-center gap-5 py-4">
                {
                    blogData.blogs.map((blog, index) => (
                        <div key={index} className="p-3 flex flex-col gap-3 justify-between rounded-xl shadow-md text-textColor bg-white snap-start overflow-hidden cursor-pointer transition-transform duration-200 hover:scale-[1.02] hover:shadow-lg w-full sm:w-[48%] md:w-[31%] lg:w-[300px]">
                            <BlogCard id={index} slug={blog.slug} title={blog.title} description={blog.content}/>
                        </div>
                    ))
                }
            </div>

        </main>
    )
}

export default page
