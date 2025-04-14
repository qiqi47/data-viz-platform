import {
    Sheet,
    SheetContent,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from '@/components/ui/sheet';
import { useState, useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Check, Search, ChevronDown, Info, Edit } from 'lucide-react';
import star from '../../assets/icons/star.svg';
import rerun from '../../assets/icons/rerun.svg';
import { VariableCategory as VariableCategoryType, VariableItemProps } from '../../types/Types';
import {
    toggleVariableSelection,
    resetAllVariables,
    VariableState,
} from '../../store/variablesSlice';
import { RootState, AppDispatch } from '../../store';

// Variable explanations
const variableExplanations: Record<string, string> = {
    Carbon: 'Total carbon emissions measured in metric tons CO2 equivalent (tCO2e) from vehicle operations and charging infrastructure.',
    'CO2 Distribution':
        'Geographic distribution of carbon emissions across different regions, helping identify high-impact areas for sustainability initiatives.',
    'Fleet sizing':
        'Optimal number of vehicles required to meet service demand while maintaining operational efficiency.',
    'Parking Rate':
        'Percentage of time vehicles spend parked at designated stations versus being in active service.',
    'Barrier Rule':
        'Regulatory constraints and operational rules affecting vehicle deployment and service coverage.',
    'Request rate':
        'Frequency of customer service requests per hour, indicating demand patterns and peak usage times.',
    'Variable 1': 'Additional operational metric being monitored for performance optimization.',
    'Variable 2': 'Secondary performance indicator tracking system efficiency.',
    'Variable 3': 'Supplementary measurement for service quality assessment.',
};

const Panel = () => {
    const [screenWidth, setScreenWidth] = useState(window.innerWidth || 0);
    const [open, setOpen] = useState<boolean>(false);
    const dispatch = useDispatch<AppDispatch>();
    const variables = useSelector((state: RootState) => state.variables) as VariableState;
    const [search, setSearch] = useState<string>('');
    const [hoveredVariable, setHoveredVariable] = useState<string | null>(null);
    const [showExplanation, setShowExplanation] = useState<boolean>(false);
    const [selectedVariables, setSelectedVariables] = useState<string[]>([]);
    const hoverTimerRef = useRef<NodeJS.Timeout | null>(null);

    useEffect(() => {
        const handleResize = () => {
            setScreenWidth(window.innerWidth);
        };

        window.addEventListener('resize', handleResize);

        // Clean up event listener on component unmount
        return () => {
            window.removeEventListener('resize', handleResize);
            if (hoverTimerRef.current) {
                clearTimeout(hoverTimerRef.current);
            }
        };
    }, []);

    const handleItemClick = (category: keyof VariableState, name: string) => {
        dispatch(toggleVariableSelection({ category, name }));

        // Track selected variables (max 2)
        if (selectedVariables.includes(name)) {
            setSelectedVariables((prev) => prev.filter((item) => item !== name));
        } else {
            if (selectedVariables.length < 2) {
                setSelectedVariables((prev) => [...prev, name]);
            } else {
                // If already 2 selected, replace the first one
                setSelectedVariables((prev) => [prev[1], name]);
            }
        }
    };

    const handleVariableHover = (name: string) => {
        setHoveredVariable(name);

        if (hoverTimerRef.current) {
            clearTimeout(hoverTimerRef.current);
        }

        hoverTimerRef.current = setTimeout(() => {
            if (variableExplanations[name]) {
                setShowExplanation(true);
            }
        }, 1500);
    };

    const handleVariableLeave = () => {
        if (hoverTimerRef.current) {
            clearTimeout(hoverTimerRef.current);
        }
    };

    const handleReset = () => {
        dispatch(resetAllVariables());
        setSelectedVariables([]);
    };

    const VariableItem = ({ name, selected = false, onClick }: VariableItemProps) => {
        const isInExplanations = variableExplanations[name] !== undefined;

        return (
            <button
                className={`px-3 py-1 rounded-full text-sm flex items-center gap-1 transition-colors ${
                    selected
                        ? 'bg-[var(--green)] text-[#c8e972] border border-[#c8e972]'
                        : 'bg-[#262628] text-[#D5D5D5] border border-[var(--border-color)] hover:border-[#575757]'
                }`}
                onClick={onClick}
                onMouseEnter={() => isInExplanations && handleVariableHover(name)}
                onMouseLeave={handleVariableLeave}
            >
                {name}
                {selected && (
                    <div className="flex flex-row items-center gap-1">
                        <img src={star} alt="star" className="h-3 w-3 text-[#c8e972]"></img>
                        <Check className="h-3 w-3 text-[#c8e972]" />
                    </div>
                )}
            </button>
        );
    };

    const VariableCategory = ({ title, items, onItemClick }: VariableCategoryType) => {
        return (
            <div className="mb-4">
                <h3 className="text-sm text-[#D5D5D5] mb-2">{title}</h3>
                <div className="flex flex-wrap gap-2">
                    {items.map((item) => (
                        <VariableItem
                            key={item.name}
                            name={item.name}
                            selected={item.selected}
                            onClick={() => onItemClick?.(item.name)}
                        />
                    ))}
                </div>
            </div>
        );
    };

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
                        Edit <span className="hidden sm:inline">Variables</span>
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
                                        value={search}
                                        onChange={(e) => setSearch(e.target.value)}
                                    />
                                </div>
                                <button className="buttonSelected text-white h-9 px-7 flex flex-row gap-2 ">
                                    <img src={star} className="filter brightness-0 invert" />
                                    <span>Autofill</span>
                                </button>
                                <button
                                    className="greenButton h-9 px-7 flex flex-row gap-2"
                                    onClick={handleReset}
                                >
                                    <img src={rerun} />
                                    Rerun
                                </button>
                            </div>
                        </SheetTitle>
                    </SheetHeader>
                    <div className="flex flex-col gap-4 overflow-y-auto">
                        <div className="mx-8 p-4 h-full flex flex-col bg-[#161618] border border-[var(--border-color)] rounded-md">
                            <div className="p-3">
                                <VariableCategory
                                    title="Variable category 1"
                                    items={variables.category1}
                                    onItemClick={(name) => handleItemClick('category1', name)}
                                />
                            </div>

                            <div>
                                <div className="p-3">
                                    <VariableCategory
                                        title="Variable Category 2"
                                        items={variables.category2}
                                        onItemClick={(name) =>
                                            handleItemClick('category2', name)
                                        }
                                    />

                                    <VariableCategory
                                        title="Variable Category 3"
                                        items={variables.category3}
                                        onItemClick={(name) =>
                                            handleItemClick('category3', name)
                                        }
                                    />
                                </div>
                            </div>

                            {/* Explanation */}
                            {showExplanation && hoveredVariable && (
                                <div className="mt-auto p-4 border-t border-[var(--border-color)] bg-[#222324] -mx-4 -mb-4 px-4">
                                    <div className="flex items-center gap-2 mb-2 p-4">
                                        <h3 className="text-white font-semibold">
                                            {hoveredVariable}
                                        </h3>
                                        <Info className="text-white" />
                                    </div>
                                    <p className="text-sm text-[#D5D5D5] px-4 mb-4">
                                        {variableExplanations[hoveredVariable]}
                                    </p>
                                </div>
                            )}
                        </div>
                        <div className="mx-8 p-4 max-h-3/5 flex flex-row items-center justify-between overflow-y-auto bg-[#161618] border border-[var(--border-color)] rounded-md overflow-hidden">
                            <span className="text-[var(--green-border)]">
                                Primary Variables
                            </span>
                            <button className="border-[var(--green-border)] border-1 w-12 items-center justify-center flex rounded-4xl h-8">
                                <ChevronDown className="h-5 w-5 text-[var(--green-border)]" />
                            </button>
                        </div>
                        <div className="mx-8 p-4 max-h-3/5 flex flex-row items-center justify-between overflow-y-auto bg-[#161618] border border-[var(--border-color)] rounded-md overflow-hidden">
                            <span className="text-[var(--green-border)]">
                                Secondary Variables
                            </span>
                            <button className="border-[var(--green-border)] border-1 w-12 items-center justify-center flex rounded-4xl h-8">
                                <ChevronDown className="h-5 w-5 text-[var(--green-border)]" />
                            </button>
                        </div>
                    </div>
                </SheetContent>
            </Sheet>
        </div>
    );
};

export default Panel;
