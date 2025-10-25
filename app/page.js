import Link from "next/link";
export default function Main(){
  return (
    <main>
      <header>
      <h1>CPRG 306: Web Development 2 - Assignments</h1>
      </header>
      <p>
        <Link href={"/week-2"}>| Week 2</Link>
        <Link href={"/week-3"}> | Week 3</Link>
        <Link href={"/week-4"}> | Week 4</Link>
        <Link href={"/week-5"}> | Week 5</Link>
        <Link href={"/week-6"}> | Week 6</Link>
        <Link href={"/week-7"}> | Week 7</Link>
      </p>
    </main>
  )
}
