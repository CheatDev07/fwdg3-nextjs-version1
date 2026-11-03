
'use client'

import useSWR from 'swr'

type PostType ={
  id: number;
  title: string;
}

// use with SWR
const fetcher = (...args:PostType[]) => fetch(...args).then(res => res.json())

export default function PostCardComponent() {
  // in useSWR hook has 3 stage:data (success), error, isLoading (suspense)
  const {data, error, isLoading} = useSWR(`/api/posts`,fetcher);

  if (error) return <div>failed to load</div>
  if (isLoading) return <div>loading...</div>

  return (
    <div>
      {
        data.posts.map(
          ({title,id}:PostType)=> (
            <h1 key={id}>{title}</h1>
          )
        )
      }
    </div>
  )
}
