"use client"

import { useRouter } from "next/navigation"

export default function OrderProduct() {

    const router = useRouter()

    const handleOrder = () => {
        console.log("order placed ")
        router.push("/")
    }

    return (
        <>
            <h1>Order Product </h1>
            <button onClick={handleOrder}>Place Order</button>
        </>
    )
}