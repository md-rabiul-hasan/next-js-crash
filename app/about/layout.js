import Link from 'next/link'
import React from 'react'

export default function AboutLayout({children}) {
  return (
    <main>
        <ul className='flex gap-4'>
            <li><Link href="/about/vision">Vision</Link></li>
            <li><Link href="/about/mission">Mission</Link></li>
        </ul>
        <hr></hr>
        {children}
    </main>
  )
}
