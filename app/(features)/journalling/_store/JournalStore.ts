import { create } from "zustand";
import { immer } from "zustand/middleware";

type Journal = {
  dateCreated: string; // Adjust this type as per your actual journal structure
  // Other journal properties
};

type AppJournalStore = {
  searchJournalValue: string;
  appJournals: Journal[];
  isEditingJournal: boolean;
  selectedJournal: Journal | null;
  openJournalFormModal: boolean;
  openConfirmationModal: boolean;
  setSearchJournalValue: (value: string) => void;
  setIsEditingJournal: (isEditing: boolean) => void;
  setSelectedJournal: (journal: Journal | null) => void;
  setOpenJournalFormModal: (isOpen: boolean) => void;
  setOpenConfirmationModal: (isOpen: boolean) => void;
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
};

const useAppJournalStore = create<AppJournalStore>(
  immer((set) => ({
    searchJournalValue: "",
    appJournals: [],
    isEditingJournal: false,
    selectedJournal: null,
    openJournalFormModal: false,
    openConfirmationModal: false,

    setSearchJournalValue: (value: string) =>
      set((state) => {
        state.searchJournalValue = value;
      }),

    setIsEditingJournal: (isEditing: boolean) =>
      set((state) => {
        state.isEditingJournal = isEditing;
      }),

    setSelectedJournal: (journal: Journal | null) =>
      set((state) => {
        state.selectedJournal = journal;
      }),

    setOpenJournalFormModal: (isOpen: boolean) =>
      set((state) => {
        state.openJournalFormModal = isOpen;
      }),

    setOpenConfirmationModal: (isOpen: boolean) =>
      set((state) => {
        state.openConfirmationModal = isOpen;
      }),

    getJournalsFromLocalStorage: () => {
      const journalsData = localStorage.getItem("appJournals");
      return journalsData ? JSON.parse(journalsData) : null;
    },

    saveJournalsToLocalStorage: (journalsData: Journal[]) => {
      localStorage.setItem("appJournals", JSON.stringify(journalsData));
    },

    sortAndUpdateJournals: (journals: Journal[]) => {
      const sortedJournals = journals.sort(
        (a, b) => new Date(b.dateCreated) - new Date(a.dateCreated)
      );
      set((state) => {
        state.appJournals = sortedJournals;
      });
      saveJournalsToLocalStorage(sortedJournals);
    },

    handleAddJournal: (journal: Journal) =>
      set((state) => {
        const updatedJournals = [...state.appJournals, journal];
        state.appJournals = updatedJournals;
        state.sortAndUpdateJournals(updatedJournals);
      }),

    handleEditJournal: (journalId: string, updatedJournal: Partial<Journal>) =>
      set((state) => {
        const updatedJournalArray = state.appJournals.map((journal) => {
          return journal.dateCreated === journalId
            ? { ...journal, ...updatedJournal }
            : journal;
        });
        state.sortAndUpdateJournals(updatedJournalArray);
      }),

    handleDeleteJournal: (journalId: string) =>
      set((state) => {
        const updatedJournalArray = state.appJournals.filter((journal) => {
          return journal.dateCreated !== journalId;
        });
        state.sortAndUpdateJournals(updatedJournalArray);
      }),

    handleSortAppJournals: (sortingOption: string) =>
      set((state) => {
        const sortedJournals = [...state.appJournals];
        switch (sortingOption) {
          case "newest":
            sortedJournals.sort(
              (a, b) => new Date(b.dateCreated) - new Date(a.dateCreated)
            );
            break;
          case "oldest":
            sortedJournals.sort(
              (a, b) => new Date(a.dateCreated) - new Date(b.dateCreated)
            );
            break;
          default:
            sortedJournals.sort(
              (a, b) => new Date(b.dateCreated) - new Date(a.dateCreated)
            );
            break;
        }
        state.appJournals = sortedJournals;
      }),

    handleSearchValue: (value: string) =>
      set((state) => {
        state.searchJournalValue = value;
      }),

    init: () => {
      const journalsDataFromLocalStorage = getJournalsFromLocalStorage();
      if (journalsDataFromLocalStorage) {
        const sortedJournals = journalsDataFromLocalStorage.sort(
          (a, b) => new Date(b.dateCreated) - new Date(a.dateCreated)
        );
        set((state) => {
          state.appJournals = sortedJournals;
        });
      } else {
        set((state) => {
          state.appJournals = [];
        });
      }
    },
  }))
);

export default useAppJournalStore;
