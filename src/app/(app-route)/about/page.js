import Link from "next/link"

export const metadata = {
    title: {
        absolute: "About"
    },
    description: "This is the metadata of about page"
}

export default function about() {
    return <>
        <h1>About page</h1>
        <Link href='/'>Home</Link>
    </>

}