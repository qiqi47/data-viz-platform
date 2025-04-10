import { Search } from 'lucide-react';

export function Navbar() {
    return (
        <div className="h-16 bg-[--theme-color] flex items-center px-4">
            <div className="flex space-x-2">
                <button className="bg-[#242424] text-white px-4 py-2 rounded-md text-sm font-medium">
                    Charging Stations
                </button>
                <button className="text-[#959595] px-4 py-2 rounded-md text-sm font-medium hover:bg-[#242424] transition-colors">
                    Fleet Sizing
                </button>
                <button className="text-[#959595] px-4 py-2 rounded-md text-sm font-medium hover:bg-[#242424] transition-colors">
                    Parking
                </button>
            </div>
            <div className="ml-auto relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-[#959595]" />
                <input
                    type="text"
                    placeholder="Search"
                    className="bg-[#242424] text-white pl-10 pr-4 py-2 rounded-md text-sm w-64 focus:outline-none focus:ring-1 focus:ring-[#575757]"
                />
            </div>
        </div>
    );
}
