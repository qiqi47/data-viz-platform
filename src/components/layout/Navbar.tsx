import { Search } from 'lucide-react';
import { NavbarProps } from '../../types/Types';
import { useState } from 'react';
import { Button } from '../ui/button';
export function Navbar({ currentTab, onTabChange, tabs }: NavbarProps) {
    const [search, setSearch] = useState('');
    return (
        <nav>
            {/* Desktop navbar */}
            <div className="sm:block hidden">
                <div className="h-16 bg-[--theme-color] flex items-center justify-between px-6">
                    <div className="flex flex-row space-x-2">
                        {tabs.map((item, key) => {
                            return (
                                <Button
                                    key={key}
                                    onClick={() => onTabChange(item.value)}
                                    className={`rounded-sm ${
                                        currentTab === item.value ? 'buttonSelected' : 'button'
                                    }`}
                                >
                                    {item.label}
                                </Button>
                            );
                        })}
                    </div>
                    <div className="ml-auto relative">
                        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-white" />
                        <input
                            type="text"
                            placeholder="Search"
                            className="input"
                            value={search}
                            onChange={(e) => setSearch(e.target.value)}
                        />
                    </div>
                </div>
            </div>
            {/* Mobile navbar */}
            <div className="sm:hidden">
                <div className="h-16 bg-[--theme-color] flex items-center justify-between px-6">
                    <div className="flex flex-row space-x-2">
                        {tabs.map((item, key) => {
                            const IconComponent = item.icon;
                            return (
                                <Button
                                    key={key}
                                    onClick={() => onTabChange(item.value)}
                                    className={`rounded-sm p-2 ${
                                        currentTab === item.value ? 'buttonSelected' : 'button'
                                    }`}
                                >
                                    {IconComponent ? (
                                        <IconComponent className="h-5 w-5" />
                                    ) : (
                                        item.label
                                    )}
                                </Button>
                            );
                        })}
                    </div>
                    <div className="ml-auto relative">
                        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-white" />
                        <input
                            type="text"
                            placeholder="Search"
                            className="input"
                            value={search}
                            onChange={(e) => setSearch(e.target.value)}
                        />
                    </div>
                </div>
            </div>
        </nav>
    );
}
