import SinglePost from '@/lib/SinglePost';
import React from 'react'

export async function generateMetadata({ params }) {
    const {id} = params;
    const post = await SinglePost(id);
    return {
      title: post.title,
    }
  }

export default async function PostDetails({params}) {
    const {id} = params;
    const post = await SinglePost(id);
  return (
    <div>
        <p>{post.title}</p>
        <p>{post.body}</p>
    </div>
  )
}
