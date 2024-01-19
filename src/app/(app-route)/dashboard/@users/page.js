import Card from "@/components/Card";
import Link from "next/link";

export default function Users() {
    return <>
        <Card name={'Users'} >
            <Link href="/dashboard/arched" >Arched</Link>
        </Card>
    </>
}

