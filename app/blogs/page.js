import Link from 'next/link';
import React from 'react';

export default function Blogs() {
    const blogs = [
        {
            id: 1,
            title: "First Blog Post",
            content: "This is the first blog post"
        },
        {
            id: 2,
            title: "Second Blog Post",
            content: "This is the second blog post"
        }
    ];

    return (
        <div>
            <ul>
                {blogs.map((blog) => (
                   <li key={blog.id} className='my-2'>
                        <Link href={`/blogs/${blog.id}`}>{blog.title}</Link>
                    </li>
                ))}
            </ul>
        </div>
    );
}
