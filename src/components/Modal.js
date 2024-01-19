"use client"

import Image from "next/image";

export default function Modal({ src, title, desc }) {

    return (
        <div className="w-full h-full bg-neutral-400 flex justify-center items-center">
            <div className="w-96 h-96 bg-slate-200 absolute">
                <h2>{title}</h2>
                <Image src={src} alt="modal" height={'100%'} width={'100%'} />
                <p>{desc}</p>
            </div >
        </div>
    )
}