import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from '@/components/ui/sheet';
import { useState, useEffect } from 'react';
import { Search } from 'lucide-react';
import star from '../../assets/icons/star.svg';
import rerun from '../../assets/icons/rerun.svg';
const Panel = () => {
    const [screenWidth, setScreenWidth] = useState(window.innerWidth || 0);
    const [open, setOpen] = useState<boolean>(false);
    useEffect(() => {
        const handleResize = () => {
            setScreenWidth(window.innerWidth);
        };

        window.addEventListener('resize', handleResize);

        // Clean up event listener on component unmount
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <div>
            <Sheet
                key={`${screenWidth <= 640 ? 'bottom' : 'right'}`}
                open={open}
                onOpenChange={setOpen}
            >
                <SheetTrigger asChild>
                    <button
                        className="rounded-[var(--rounded-border)] px-4 h-10 place-items-center 
                        bg-[var(--hover-bg)] border border-[var(--border-color)]"
                    >
                        Edit Variables
                    </button>
                </SheetTrigger>
                <SheetContent
                    className="w-full h-full sm:max-w-[691px] bg-[var(--theme-color)]"
                    side={`${screenWidth <= 640 ? 'bottom' : 'right'}`}
                >
                    <SheetHeader>
                        <SheetTitle className="mx-4">
                            <div className="flex justify-between items-center pt-3 pl-1">
                                <SheetTitle className="text-white text-2xl font-medium">
                                    Edit Variables
                                </SheetTitle>
                            </div>
                            <div className="flex items-center gap-2 mt-4 w-full">
                                <div className="relative w-3/4">
                                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-white" />
                                    <input
                                        type="text"
                                        placeholder="Search"
                                        className="input w-full"
                                    />
                                </div>
                                <button className="buttonSelected text-white h-9 px-7 flex flex-row gap-2 ">
                                    <img src={star} className="filter brightness-0 invert" />
                                    <span>Autofill</span>
                                </button>
                                <button className="greenButton h-9 px-7 flex flex-row gap-2 ">
                                    <img src={rerun} />
                                    Rerun
                                </button>
                            </div>
                        </SheetTitle>
                        <SheetDescription className="m-4">
                            This action cannot be undone. This will permanently delete your
                            account and remove your data from our servers.
                        </SheetDescription>
                    </SheetHeader>
                </SheetContent>
            </Sheet>
        </div>
    );
};

export default Panel;
