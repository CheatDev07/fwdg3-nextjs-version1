


'use client'

import useSWR from 'swr'

type PostType ={
  id: number;
  title: string;
}

// use with SWR
const fetcher = (...args:PostType[]) => fetch(...args).then(res => res.json())

type PostIdType = {
  postId: number;
}

export default function PostCardByIdComponent({postId}:PostIdType) {
  // in useSWR hook has 3 stage:data (success), error, isLoading (suspense)
  const {data, error, isLoading} = useSWR(`/api/posts/${postId}`,fetcher);

  if (error) return <div>failed to load</div>
  if (isLoading) return <div>loading...</div>

  return (
    <div>
      <h1>{data.title}</h1>
    </div>
  )
}
