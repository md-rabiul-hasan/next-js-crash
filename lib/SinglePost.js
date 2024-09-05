import React from 'react'

export default async function SinglePost(id) {
    const result = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
    return result.json();
}
