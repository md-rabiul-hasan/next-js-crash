import React from 'react'

export default function SingleBlog({params}) {
    const {id} = params;
  return (
    <div>Blog id is {id}</div>
  )
}
