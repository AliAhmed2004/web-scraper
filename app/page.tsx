import { DocumentMagnifyingGlassIcon } from "@heroicons/react/24/outline";

function HomePage() {
  return (
    <div className="flex flex-col items-center justify-center">
      <DocumentMagnifyingGlassIcon className="h-64 w-64 text-blue-600/20" />
      <h1 className="text-3xl text-center mt-2 text-black font-bold mb-5">
        Amazon Web Scraper
      </h1>

      <h2 className="text-lg italic text-center text-black/50">
        This is a web scraper that scrapes the Amazon website for the price of a
        produc and more.
      </h2>

      <h3 className="text-lg text-center italic text-black/50">
        Check out the code on{" "}
        <a href="https://github.com/AliAhmed2004/web-scraper">
          <span className="text-blue-400 hover:text-blue-600 hover:underline">
            Github
          </span>
          .
        </a>
      </h3>
    </div>
  );
}

export default HomePage;
