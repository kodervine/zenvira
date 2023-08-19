import { create } from "zustand";

type Journal = {
  createdAt: string | Date;
  title: string;
  content: string;
  tag: string;
};

// Define the state type
interface AppJournalStore {
  appJournals: Journal[];
  selectedJournal: Journal | null;
  isEditingJournal: boolean;
  setSelectedJournal: (journal: Journal | null) => void;
  setIsEditingJournal: (isEditing: boolean) => void;
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

export const useAppJournalStore = create<AppJournalStore>((set) => ({
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
        new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
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

  // Implement action: Set selected journal
  setSelectedJournal: (journal) => {
    set({ selectedJournal: journal });
  },

  // Implement action: Set editing mode
  setIsEditingJournal: (isEditing) => {
    set({ isEditingJournal: isEditing });
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
        journal.createdAt === journalId
          ? { ...journal, ...updatedJournal }
          : journal
      ),
    }));
  },

  handleDeleteJournal: (journalId) => {
    set((state) => ({
      ...state,
      appJournals: state.appJournals.filter(
        (journal) => journal.createdAt !== journalId
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
              new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
          );
          break;
        case "oldest":
          sortedJournals.sort(
            (a, b) =>
              new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime()
          );
          break;
        default:
          sortedJournals.sort(
            (a, b) =>
              new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
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
