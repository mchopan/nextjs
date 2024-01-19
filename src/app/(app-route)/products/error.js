"use client"
export default function ErrorBondary({ error, reset }) {
    return <>
        <h1>{error.message}</h1>
        <button onClick={reset}>retry</button>
    </>
}