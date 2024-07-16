import Link from "next/link";
export default function Home() {
  console.log('Executing Home Page');
  return (
    <main>

      <p>
        <Link href="/about"> About</Link>
      </p>
    </main>
  );
}


