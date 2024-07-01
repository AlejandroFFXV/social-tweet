import { useState } from "react";

function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Botón de hamburguesa */}
      <button
        className="fixed top-4 left-4 z-20 p-2 rounded text-gray-700 bg-white md:hidden"
        onClick={() => setIsOpen(!isOpen)}
      >
        {/* Contenido del SVG directamente */}
        <svg
          width="24px"
          height="24px"
          viewBox="0 0 24 24"
          fill=""
          xmlns="http://www.w3.org/2000/svg"
          className=""
        >
          <path
            d="M4 18L20 18"
            stroke="#000000"
            strokeWidth="2"
            strokeLinecap="round"
          />
          <path
            d="M4 12L20 12"
            stroke="#000000"
            strokeWidth="2"
            strokeLinecap="round"
          />
          <path
            d="M4 6L20 6"
            stroke="#000000"
            strokeWidth="2"
            strokeLinecap="round"
          />
        </svg>
      </button>

      {/* Sidebar */}
      <div
        className={`${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } fixed top-0 left-0 h-full w-[80%] max-w-xs flex-shrink-0 overflow-y-auto bg-slate-500
        p-4 text-gray-700 shadow-xl transition-transform duration-300 md:translate-x-0 md:block md:w-[30em]`}
      >
        <div className="flex items-center justify-between mb-4 md:hidden">
          <h2 className="text-xl font-semibold text-white text-center">
            Sidebar
          </h2>
          <button
            onClick={() => setIsOpen(false)}
            className="p-2 text-gray-700 bg-white rounded"
          >
            <svg
              width="24px"
              height="24px"
              viewBox="0 0 24 24"
              fill=""
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M18 6L6 18"
                stroke="#000000"
                strokeWidth="2"
                strokeLinecap="round"
              />
              <path
                d="M6 6L18 18"
                stroke="#000000"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>
          </button>
        </div>
        {/* Contenido del Sidebar */}
        <p>Contenido del Sidebar</p>
      </div>
    </>
  );
}

export default Sidebar;
