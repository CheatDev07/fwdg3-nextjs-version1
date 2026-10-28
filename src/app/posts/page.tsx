
export const instant = false;

import { Suspense } from "react";

type PostResponse = {
  id: number;
  title: string;
}
// default : sever-component 
export default async function Page() {

  // using fetch API 
  const response = await fetch('https://dummyjson.com/posts'); //set location api url
  const posts = await response.json(); //convert from json to js object 
  console.log("===> Posts: ", posts)
  // AON = all-or-nothing
  return (
    <div>
      <Suspense fallback={<h1>Loading...</h1>}
      >
        {posts.posts.map(({id,title}:PostResponse) => (
          <h1 key={id}>{title}</h1>
        ))}
      </Suspense>
    </div>
  )
}
