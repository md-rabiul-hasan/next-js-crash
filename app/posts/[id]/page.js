import Comments from '@/app/component/Comments';
import GetComments from '@/lib/GetComments';
import SinglePost from '@/lib/SinglePost';
import React, { Suspense } from 'react'

export async function generateMetadata({ params }) {
    const {id} = params;
    const post = await SinglePost(id);
    return {
      title: post.title,
    }
  }

export default async function PostDetails({params}) {
    const {id} = params;
    const postPromise =  SinglePost(id);
    const commentsPromise =  GetComments(id);

    const post = await postPromise;
  return (
    <div>
        <p>{post.title}</p>
        <p>{post.body}</p>
        <hr></hr>
        <Suspense fallback={<p>Loading comments...</p>}>
          <Comments promise={commentsPromise} />
        </Suspense>
    </div>
  )
}
