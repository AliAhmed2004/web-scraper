import { DocumentMagnifyingGlassIcon } from "@heroicons/react/24/solid";

function Sidebar() {
  return (
    <div className="p-2 md:p-10 py-6 overflow-y-auto border-b border-blue-500/50">
      <div className="flex flex-col items-center justify-center mb-10">
        <DocumentMagnifyingGlassIcon className="h-16 md:w-16 text-blue-600" />

        <h1 className="hidden md:inline text-center text-3xl ml-2 mb-2 font-bold">
          Web Scraper
        </h1>
        <h2 className="hidden md:inline text-center text-xs italic">
          <a
            href="https://github.com/AliAhmed2004/web-scraper"
            className="text-blue-400 hover:text-blue-600 hover:underline"
          >
            Source code
          </a>
        </h2>
      </div>

      <ul></ul>
    </div>
  );
}

export default Sidebar;