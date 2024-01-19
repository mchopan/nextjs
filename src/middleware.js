const { NextResponse } = require("next/server");

// First Approch
// export default function middleware(request) {
//     return NextResponse.redirect(new URL("/", request.url))
// }

// export const config = {
//     matcher: "/blog"
// }

// second Approch

export default function middleware(request) {
    if (request.nextUrl.pathname === "/profile") {
        return NextResponse.redirect(new URL("/about", request.url))
    }
}