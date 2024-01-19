"use client"

import Image from 'next/image'
import photos from './photo-array'
import Link from 'next/link'
export default function PhotoFeed() {
    return (
        <div className='flex gap-2'>
            {
                photos.map(({ title, src, alt, desc, id }) => {
                    return (
                        <Link key={id} href={`/photo-feed/${id}`}>
                            <p className=' font-medium bg-purple-300' >{title}</ p>
                            <Image className='w-full object-cover' src={src} alt={alt} />
                            <p className='bg-purple-100'>{desc}</p>
                        </Link >
                    )
                })
            }
        </div >
    )
}