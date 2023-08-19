import React from "react";
// import { useNavigate } from 'react-router-dom';
// import Nav from '../components/NavComponet';
// import Note from '../types/classes/note';
// import NoteContext from '../context/NoteContext';

const NewNoteForm: React.FC = () => {
  return (
    <section className="max-w-4xl mx-auto min-h-screen pb-20 px-8 sm:px-10 md:px-20 pt-16">
      <div className="pb-14 pt-4 md:pt-12">Nav goes here I beleive</div>

      <form>
        <div>
          <input
            className="bg-transparent font-newsreader font-medium h-full outline-none text-3xl w-full"
            // onChange={(evt) => setNoteTitle(evt.target.value)}
            // onKeyDown={handleTitleChange}
            placeholder="Your journal title"
            title="Note Title"
            type="text"
            // value={noteTitle}
          />
        </div>

        <p className="pb-5 pt-3.5 text-neutral-500 text-sm">
          <span className="pr-1">🗓️</span>
          date goes here
        </p>

        <div>
          <ul className="flex flex-wrap items-center">
            {/* { noteTags.map((tag: string, index: number) => ( */}
            <li
              className="bg-neutral-200/60 font-medium inline-flex items-center mr-2 last:mr-0 my-1 px-2 py-1 rounded-full text-sm text-neutral-600"
              // key={index}
            >
              <span className="text-neutral-500">#</span>
              <span>tag</span>
              <button
                className="bg-neutral-500/25 inline-flex h-4 items-center justify-center ml-2 p-0.5 rounded-full w-4"
                title="Delete Tag"
                type="button"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2.5}
                  stroke="#636363"
                  className="w-full h-full"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </li>
            {/* ))
            } */}

            {/* { noteObj.tags && */}
            <div className="flex flex-1 min-w-[5.5rem]">
              <input
                className="bg-transparent h-full outline-none my-1 py-1 w-full"
                // onChange={(evt: React.ChangeEvent<HTMLInputElement>) => setTagInput(evt.target.value)}
                // onKeyDown={(evt: React.KeyboardEvent<HTMLInputElement>) => hanldleTagSubmit(evt)}
                placeholder="Enter a tag"
                type="text"
                // value={tagInput}
              />
            </div>
            {/* }             */}
          </ul>
        </div>

        <div className="flex pt-5">
          <textarea
            className="bg-transparent break-words min-h-[calc(100vh-21.5rem)] outline-none overflow-hidden resize-none w-full"
            // onChange={handleContentChange}
            placeholder="Enter Note"
            // ref={textAreaRef}
            // value={noteContent}
          />
        </div>
      </form>
    </section>
  );
};

export default NewNoteForm;
