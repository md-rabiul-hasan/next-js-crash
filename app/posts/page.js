import AllPost from '@/lib/allPost'
import Link from 'next/link';
import React from 'react'

export const metadata = {
  title: 'All Post',
}

export default async function Post() {
  const posts = await AllPost();

  return (
    <div>
      <h3>All Post</h3>
      <hr />
      <ul>
        {posts.map((post) => (
          <li key={post.id}>
             <Link href={`/posts/${post.id}`}>{post.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  )
}
