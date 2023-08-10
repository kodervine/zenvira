import { Sidebar } from "@/app/_components";
import "@/app/globals.css";

export const metadata = {
  title: "Zenvira | Habit Tracker",
  description: "Track your habits with zenvira",
};

export default function HabitTrackerLayout({
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
