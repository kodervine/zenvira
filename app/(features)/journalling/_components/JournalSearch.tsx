import { useNoteContext } from "src/contexts";
import { TbNewSection } from "react-icons/tb";
export const Header = () => {
  const {
    handleSortAppNotes,
    handleSearchValue,
    handleOpenFormModal,
    setIsEditingNote,
  } = useNoteContext();

  const handleSortChange = (event) => {
    const selectedOption = event.target.value;
    handleSortAppNotes(selectedOption);
  };

  const handleSearchInputChange = (event) => {
    handleSearchValue(event.target.value);
  };

  return (
    <form className="grid grid-cols-1 lg:grid-cols-5 gap-3 lg:mt-4">
      <section className="col-span-2">
        <input
          type="search"
          id="search-notes"
          className="block w-full px-4 py-2  text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 "
          placeholder="Search notes by tags..."
          onChange={handleSearchInputChange}
        />
      </section>

      <section className="col-span-2">
        <select
          id="sort-by"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg  block w-full p-2 cursor-pointer "
          onChange={handleSortChange}
          defaultValue="newest"
        >
          <option>Sort By</option>
          <option value="newest">Newest</option>
          <option value="oldest">Oldest</option>
        </select>
      </section>
      <section>
        <button
          type="button"
          className="text-white lg:w-full bg-gray-700 hover:bg-gray-800 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-4 py-2 flex  gap-3 items-center"
          onClick={() => {
            setIsEditingNote(false);
            handleOpenFormModal();
          }}
        >
          <TbNewSection className="text-white" />
          <span>New Journal</span>
        </button>
      </section>
    </form>
  );
};
