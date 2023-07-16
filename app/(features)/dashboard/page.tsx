import { Toggle } from "@/app/_components";

// `app/dashboard/page.tsx` is the UI for the `/dashboard` URL
export default function Dashboard() {
  return (
    <h1>
      Hello, Dashboard Page! <Toggle />
    </h1>
  );
}
