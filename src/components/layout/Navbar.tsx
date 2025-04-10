import { Search } from 'lucide-react';

interface NavbarProps {
    currentTab: string;
    onTabChange: (tab: string) => void;
    tabs: { label: string; value: string }[];
}

export function Navbar({ currentTab, onTabChange, tabs }: NavbarProps) {
    return (
        <div className="h-16 bg-[--theme-color] flex items-center justify-between px-6">
            <div className="flex flex-row space-x-2">
                {tabs.map((item, key) => {
                    return (
                        <button
                            key={key}
                            onClick={() => onTabChange(item.value)}
                            className={`${
                                currentTab === item.value
                                    ? 'bg-[var(--hover-bg)] outline outline-[var(--border-color)]'
                                    : ''
                            } text-white px-4 py-2 rounded-md text-sm font-medium`}
                        >
                            {item.label}
                        </button>
                    );
                })}
            </div>
            <div className="ml-auto relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-white" />
                <input
                    type="text"
                    placeholder="Search"
                    className="bg-[var(--hover-bg)] text-white pl-10 pr-4 py-2 rounded-[5px] text-sm w-64 focus:outline-none focus:ring-1 focus:ring-[#575757]"
                />
            </div>
        </div>
    );
}
