import { Sidebar } from "@/app/_components";
import "@/app/globals.css";

export const metadata = {
  title: "Zenvira | Goal Setting",
  description:
    "Designed to inspire and support you on your path to personal growth and productivity.  Zenvira is your cheerleader, always ready to celebrate your achievements, big or small. Whether you reach a milestone, establish a new habit, or make progress towards your goals.",
};

export default function GoalSettingLayout({
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
