import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Blog = () => {
    const blogs = useLoaderData();

    return (
        <div className='text-[#172652] font-semibold my-12 mb-24 md:w-[80%] m-auto'>
            <h1 className='text-4xl font-extrabold mb-10'>Blog</h1>
            <p className='text-2xl text-[#0072ce] font-extrabold'>Total Blogs: {blogs.length}</p>
            {
                blogs.map(blog => <div className='text-left p-6 m-6 rounded shadow-xl'>
                    <h2 className='text-2xl mb-3'>{blog.title}</h2>
                    <p>{blog.body}</p>
                </div>)
            }
        </div>
    );
};

export default Blog;