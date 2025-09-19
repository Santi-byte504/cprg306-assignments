import Link from "next/link";
export default function StudentInfo() {
  return (
    <main>
      <h1>Name: Santi Zonco</h1>
      <h1>
        GitHub:{" "}
        <Link
          href="https://github.com/Santi-byte504/cprg306-assignments"
        >
          Santi-byte504/cprg306-assignments
        </Link>
      </h1>
    </main>
  );
}
