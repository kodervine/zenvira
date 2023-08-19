import { JournalForm, JournalsContainer, JournalTopCard } from "./_components";

const JournalPage = () => {
  // const { openNotesFormModal, handleCloseFormModal } = useAppJournalStore();
  return (
    <main className="flex flex-col px-4 w-full relative">
      <JournalTopCard />
      {/* {openNotesFormModal && ( */}
      <>
        <div
          className="backdrop-filter backdrop-blur-lg bg-black opacity-70 z-20 fixed top-0 left-0 w-full h-full"
          // onClick={handleCloseFormModal}
        ></div>
        <section className="absolute z-50 w-[90%] lg:w-[80%]">
          <JournalForm />
        </section>
      </>
      {/* )} */}
      <JournalsContainer />
    </main>
  );
};

export default JournalPage;
