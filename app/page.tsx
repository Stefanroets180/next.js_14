import Image from "next/image";

export default function Home() {
throw new Error("somthe went wring ") //just error testing
  return (
    <main>
      <h1>Welcome to Next.js</h1>
      <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16}/>
    </main>
  )
}
