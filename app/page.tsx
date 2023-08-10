import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col justify-between">
      <Link href="/goalsetting">Goal setting</Link>
      <Link href="/register">Register</Link>
      <Link href="/habittracker">Register</Link>
    </main>
  );
}
