import { Sidebar } from "@/app/_components";
import "@/app/globals.css";

export const metadata = {
  title: "Zenvira | Journalling",
  description: "What do you have in mind?",
};

export default function JournallingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="flex">
      <Sidebar />
      {children}
    </main>
  );
}
