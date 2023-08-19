"use client";
import { CgNotes } from "react-icons/cg";
import { useAppJournalStore } from "@/app/(features)/journal";
export const JournalTopCard = () => {
  const { appJournals } = useAppJournalStore();

  return (
    <section className="grid grid-cols-1 items-center justify-between my-2">
      <div className="flex items-center p-8 bg-white shadow rounded-lg">
        <div className="inline-flex  items-center justify-center h-16 w-16 text-yellow-900 bg-yellow-100 rounded-full mr-6">
          <CgNotes size={30} />
        </div>
        <div>
          <span className="block text-2xl font-bold">
            {appJournals?.length}
          </span>
          <span className="block text-gray-500">
            {appJournals?.length <= 1 ? "Total Note" : "Total Notes"}
          </span>
        </div>
      </div>
    </section>
  );
};
