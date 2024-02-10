import { redirect } from "next/navigation";
import { NextRequest } from "next/server";
import { comments } from "../../data";

export async function GET(
  _request: NextRequest,
  { params }: { params: { id: string } }
) {
  const index = comments.findIndex(
    (comment) => comment.id === parseInt(params.id)
  );
  if (index !== -1) return Response.json(comments[index]);
  redirect("/comments/api");
}

export async function PATCH(
  requset: NextRequest,
  { params }: { params: { id: string } }
) {
  const body = await requset.json();
  const { text } = body;
  const index = comments.findIndex(
    (comment) => comment.id === parseInt(params.id)
  );
  comments[index].text = text;
  return Response.json(comments[index]);
}

export async function DELETE(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  const index = comments.findIndex(
    (comment) => comment.id === parseInt(params.id)
  );
  if (index !== -1) {
    const deletedComment = comments.splice(index, 1);
    return Response.json(deletedComment);
  }
  return new Response("Not Found", { status: 404 });
}
