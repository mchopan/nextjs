import { redirect } from "next/navigation";
import { comments } from "../data";

export async function GET(request, { params }) {

    if (params.id > comments.length) {
        redirect("/comments");
    }

    const comment = comments.find((comment) => comment.id == params.id)

    console.log(comment)

    return Response.json(comment)
}

export async function PATCH(request, { params }) {

    const body = await request.json()

    const { text } = body

    const index = comments.findIndex((commentIndex) => commentIndex.id == params.id)

    comments[index].text = text

    return Response.json(comments[index])
}

export async function DELETE(request, { params }) {

    const index = comments.findIndex((commentIndex) => commentIndex.id == params.id)

    const deletedComment = comments[index]

    comments.splice(index, 1);

    return Response.json(deletedComment)
}