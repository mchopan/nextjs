import Card from "@/components/Card";
import Link from "next/link";

export default function Users() {
    return <>
        <Card name={'Arched Users'} >
            <Link href="/dashboard" >Default</Link>
        </Card>
    </>
}

