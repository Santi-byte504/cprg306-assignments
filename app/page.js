import Link from "next/link";
export default function Main(){
  return (
    <main>
      <header>
      <h1>CPRG 306: Web Development 2 - Assignments</h1>
      </header>
      <p>
        <Link href={"/week-2"}>Week 2</Link>
      </p>
    </main>
  )
}
