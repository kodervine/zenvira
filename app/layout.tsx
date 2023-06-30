import "./globals.css";

export const metadata = {
  title: "Zenvira - Goal-Setting, Habit Tracking, Journaling and more",
  description:
    "Designed to inspire and support you on your path to personal growth and productivity.  Zenvira is your cheerleader, always ready to celebrate your achievements, big or small. Whether you reach a milestone, establish a new habit, or make progress towards your goals.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
