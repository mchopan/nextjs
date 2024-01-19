"use client"

import Image from 'next/image';
import photos from '../photo-array'
export default function Photo({ params: { id } }) {
    console.log(id)

    const photoData = photos.find((p) => p.id == id);

    if (!photoData) {
        return (
            <h1>Photo Not Found</h1>
        )
    }

    return (
        <div className='w-full mt-2 flex items-center justify-center'>
            <div className='w-96'  >
                <p className=' font-medium bg-purple-300' >{photoData?.title}</ p>
                <Image className='w-full object-cover' src={photoData?.src} alt={photoData?.alt} />
                <p className='bg-purple-100'>{photoData?.desc}</p>
            </div >
        </div>
    )
}