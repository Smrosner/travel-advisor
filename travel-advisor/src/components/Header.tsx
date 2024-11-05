import { Search } from "./Search";

export const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 bg-white shadow-md z-50">
      <div className="flex items-center justify-between px-4 py-2 min-w-[320px] gap-4">
        <h1 className="text-2xl font-bold text-gray-800">Travel Advisor</h1>
        <div className="flex items-center gap-4">
          <h2 className="text-lg font-medium text-gray-600">
            Explore new places
          </h2>
          <Search />
        </div>
      </div>
    </header>
  );
};
