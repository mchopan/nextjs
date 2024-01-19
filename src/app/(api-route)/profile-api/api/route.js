// import dynamic from 'next/dynamic';
import { headers, cookies } from 'next/headers'
export default dynamic = "force-dynamic" // by default nextjs cache every req by using this it prevents caching

export async function GET(request) {

    // const reqHeaders = new Headers(request.headers)
    // console.log(reqHeaders.get("Authorization"))

    cookies().set("result", "20");

    const cookieByNext = cookies().get("result");

    console.log(cookieByNext)

    const theme = request.cookies.get("theme") //getting cookie using request object

    console.log(theme)

    const hearderList = headers()
    console.log(hearderList.get("Authorization"))

    return new Response("<h1>Hello from Profile Api<h1>", {
        headers: {
            "Content-type": "text/html", //setting content type using headers
            "Set-Cookie": "theme=dark" //setting cookie using headers
        }
    })
}