"use client"

import Link from "next/link";
import { usePathname } from "next/navigation";
import "./styles.css"

const navLinks = [
    { name: "Register", href: "/register" },
    { name: "Login", href: "/login" },
    { name: "Forget Password", href: "/forget-password" },
];

export default function AuthLayout({ children }) {

    const pathname = usePathname();

    return (
        <div>
            {
                navLinks.map((link, index) => {
                    const isActive = pathname.startsWith(link.href)
                    return (
                        <Link
                            href={link.href}
                            key={index}
                            className={isActive ? "font-bold mr-5" : "text-blue-500 mr-5"}
                        >
                            {link.name}
                        </Link>
                    )
                })
            }
            {children}
        </div>
    )
}