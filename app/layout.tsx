import "./globals.css";
import { ThemeProvider } from "@/app/themes";

export const metadata = {
  title: "Zenvira - Goal-Setting, Habit Tracking, Journaling and more",
  description:
    "Designed to inspire and support you on your path to personal growth and productivity.  Zenvira is your cheerleader, always ready to celebrate your achievements, big or small. Whether you reach a milestone, establish a new habit, or make progress towards your goals.",
};

// alert - can't use this for general use case because it also affected the log in and register pages
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
