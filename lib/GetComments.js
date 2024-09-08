import React from 'react'

export default async function GetComments(id) {
    const result = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}/comments`);

    return result.json();
}
