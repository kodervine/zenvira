export const JournalsContainer = () => {
  return (
    <main className="px-4 py-10 bg-white shadow rounded-3xl ">
      <h2 className="text-lg font-bold">Your existing notes</h2>
      JournalCard goes here
      {/* {appNotes.length === 0 ? (
        <NoNotesMessage
          message="No notes yet. Your available notes will show here when you create
            them"
        />
      ) : (
        <section className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 w-full relative">
          <NotesCard />
        </section>
      )} */}
    </main>
  );
};
