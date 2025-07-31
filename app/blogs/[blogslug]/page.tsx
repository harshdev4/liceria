import React from 'react'
import blogData from '../../blogs.json';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { Metadata } from 'next';

type props = {
  params: Promise<{ blogslug: string }>,
}

export async function generateStaticParams() {
  return blogData.blogs.map((blog) => ({
    blogslug: blog.slug,
  }));
}


export const generateMetadata = async ({ params }: props): Promise<Metadata> => {
  const slug = (await params).blogslug;
  const blog = blogData.blogs.find((blog) => blog.slug === slug);
    return {
      title: blog?.title,
      description: blog?.content.split('\n')[0],
      keywords: blog?.keyword,
    };
}

const page = async ({ params }: props) => {
  const slug = (await params).blogslug;
  const blog = blogData.blogs.find((blog) => blog.slug === slug);
  return (
    <main className='bg-white min-h-[100vh] px-3 py-10 sm:px-10'>
      <h1 className='text-[#5a3a1b] text-xl sm:text-3xl md:text-4xl font-extrabold sm:text-center mt-4'>{blog?.title}</h1>
      <article className="prose prose-lg py-8 text-[#5a3a1b] max-w-full">
        <ReactMarkdown remarkPlugins={[remarkGfm]}>
          {blog?.content}
        </ReactMarkdown>
      </article>
    </main>
  )
}

export default page
