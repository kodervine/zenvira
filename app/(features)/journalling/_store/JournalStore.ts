import { create } from "zustand";

type Journal = {
  dateCreated: string;
  // Other journal properties
};

// Define the state type
interface AppJournalStore {
  appJournals: Journal[];
  getJournalsFromLocalStorage: () => Journal[] | null;
  saveJournalsToLocalStorage: (journalsData: Journal[]) => void;
  sortAndUpdateJournals: (journals: Journal[]) => void;
  handleAddJournal: (journal: Journal) => void;
  handleEditJournal: (
    journalId: string,
    updatedJournal: Partial<Journal>
  ) => void;
  handleDeleteJournal: (journalId: string) => void;
  handleSortAppJournals: (sortingOption: string) => void;
  handleSearchValue: (value: string) => void;
}

const useAppJournalStore = create<AppJournalStore>((set) => ({
  searchJournalValue: "",
  appJournals: [],
  isEditingJournal: false,
  selectedJournal: null,
  openJournalFormModal: false,
  openConfirmationModal: false,

  // Implement action: Get journals from local storage
  getJournalsFromLocalStorage: () => {
    const journalsData = localStorage.getItem("appJournals");
    return journalsData ? JSON.parse(journalsData) : null;
  },

  // Implement action: Save journals to local storage
  saveJournalsToLocalStorage: (journalsData) => {
    localStorage.setItem("appJournals", JSON.stringify(journalsData));
  },

  // Implement action: Sort and update journals
  sortAndUpdateJournals: (journals) => {
    const sortedJournals = journals.sort(
      (a, b) =>
        new Date(b.dateCreated).getTime() - new Date(a.dateCreated).getTime()
    );

    set((state) => ({
      ...state,
      appJournals: sortedJournals,
    }));

    // Update local storage with the sorted journals
    const updatedJournals = sortedJournals.map((journal) => ({
      ...journal,
      // Update any additional properties if needed
    }));
    set((state) => ({
      ...state,
      appJournals: updatedJournals,
    }));
  },

  handleAddJournal: (journal) => {
    set((state) => ({
      ...state,
      appJournals: [...state.appJournals, journal],
    }));
  },

  handleEditJournal: (journalId, updatedJournal) => {
    set((state) => ({
      ...state,
      appJournals: state.appJournals.map((journal) =>
        journal.dateCreated === journalId
          ? { ...journal, ...updatedJournal }
          : journal
      ),
    }));
  },

  handleDeleteJournal: (journalId) => {
    set((state) => ({
      ...state,
      appJournals: state.appJournals.filter(
        (journal) => journal.dateCreated !== journalId
      ),
    }));
  },

  handleSortAppJournals: (sortingOption) => {
    set((state) => {
      const sortedJournals = [...state.appJournals];
      switch (sortingOption) {
        case "newest":
          sortedJournals.sort(
            (a, b) =>
              new Date(b.dateCreated).getTime() -
              new Date(a.dateCreated).getTime()
          );
          break;
        case "oldest":
          sortedJournals.sort(
            (a, b) =>
              new Date(a.dateCreated).getTime() -
              new Date(b.dateCreated).getTime()
          );
          break;
        default:
          sortedJournals.sort(
            (a, b) =>
              new Date(b.dateCreated).getTime() -
              new Date(a.dateCreated).getTime()
          );
          break;
      }
      return {
        ...state,
        appJournals: sortedJournals,
      };
    });
  },

  handleSearchValue: (value) => {
    set((state) => ({
      ...state,
      searchJournalValue: value,
    }));
  },
}));

export default useAppJournalStore;
