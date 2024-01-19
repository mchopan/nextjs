import Link from "next/link";
export default function Home() {
    return <>
        <h1>Home</h1>
        <Link href='/about'>About</Link>
        <br />
        <Link href='/blog'>Blog</Link>
        <br />
        <Link href='/docs'>Docs</Link>
        <br />
        <Link href='/login'>Login</Link>

    </>
}