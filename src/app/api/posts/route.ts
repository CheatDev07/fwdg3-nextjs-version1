
// NextResponse, NextRequest
// GET, POST(update, delete, create)
import { NextResponse } from "next/server";

export async function GET(){
  //  logic 
  const response = await fetch(`${process.env.DUMMY_BASE_URL}/posts`);
  console.log(`====> Post fetching in Server Side <====`)
  const posts = await response.json(); // convert from json format to js object 
  console.log(`Data from posts: `, posts);
  return NextResponse.json(posts)
}

