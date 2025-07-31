import Image from 'next/image';
import React from 'react'
import remarkGfm from 'remark-gfm';
import ReactMarkdown from 'react-markdown';
import Link from 'next/link';
type props = {
    id: number
    slug: string;
    title: string;
    description: string;
}

const BlogCard = (prop: props) => {
    return (
        <div className='p-2.5 pb-3 flex flex-col gap-1.5 justify-between rounded-2xl shadow-[0_0_4px_rgba(0,0,0,0.5)] text-textColor bg-[white] snap-start overflow-hidden cursor-pointer w-[300px] h-auto flex-shrink-0'>
            
            <Image src={`/images/blog-image${prop.id+1}.jpg`} alt='blog image' width={500} height={500} className='w-full h-40 rounded-tl-2xl rounded-tr-2xl object-cover object-center'/>
            <h3 className='font-bold'>{prop.title}</h3>
            <div className='line-clamp-2 text-ellipsis overflow-hidden text-sm'>
                <ReactMarkdown remarkPlugins={[remarkGfm]}>
                    {prop.description.slice(0, 150)}
                </ReactMarkdown>...
            </div>
            <Link href={`/blogs/${prop.slug}`} className='mt-2 w-fit p-3 bg-[#57391d] text-white rounded-lg'>Read more</Link>
        </div>
    )
}

export default BlogCard;
