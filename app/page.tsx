// import createPost from "@/server/actions/create-post";
// import getPost from "@/server/actions/get-posts";
// import Image from "next/image";

export const revalidate = 5

export default async function Home() {
  return (
    <main>
      <div>{Date.now()}</div>
    </main>
  )
}
