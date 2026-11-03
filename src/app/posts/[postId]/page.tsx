import PostCardByIdComponent from "@/components/posts/swr/PostCardByIdComponent";


export default async function PostByIdPage({
  params
}:{
  params: Promise<{postId: number}>
}) {
  const {postId} = await params;
  return (
    <PostCardByIdComponent postId={postId}/>
  )
}
