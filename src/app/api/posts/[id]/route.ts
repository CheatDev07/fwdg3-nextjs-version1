import { NextRequest, NextResponse } from "next/server";
export async function GET(
  req: NextRequest,
  {
    params,
  }: {
    params: Promise<{ id: number }>;
  },
) {
  const { id } = await params;
  //  logic
  const response = await fetch(`${process.env.DUMMY_BASE_URL}/posts/${id}`);
  console.log(`====> Post fetching in Server Side <====`);
  console.log(`===> Log Get post by id: `, req.nextUrl.pathname);
  const posts = await response.json(); // convert from json format to js object
  console.log(`Data from posts: `, posts);
  return NextResponse.json(posts);
}
