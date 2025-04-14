import { ChevronDown, ChevronUp, MoreHorizontal } from 'lucide-react';
import { useState } from 'react';
import star from '../../assets/icons/star.svg';
import { Button } from '../ui/button';
export function ScenarioResults() {
    const [expanded, setExpanded] = useState<boolean>(true);

    return (
        <div className="mb-8">
            <div className="flex items-center justify-between mb-4">
                <div className="flex items-center space-x-2">
                    <img src={star} alt="star" className="w-[18px] h-[18px]" />
                    <h2 className="text-2xl font-semibold text-[#DCFF7F]">
                        Best Scenario Results
                    </h2>
                </div>
                <Button
                    onClick={() => setExpanded(!expanded)}
                    className="border-[var(--green-border)] border-1 w-12 items-center justify-center flex rounded-4xl h-8"
                >
                    {expanded ? (
                        <ChevronUp className="h-5 w-5 text-[var(--green-border)]" />
                    ) : (
                        <ChevronDown className="h-5 w-5 text-[var(--green-border)]" />
                    )}
                </Button>
            </div>

            {expanded && (
                <div className="space-y-3">
                    <div className="border border-[var(--green-border)] bg-[#18181a] rounded-md px-6 py-[15px]">
                        <div className="flex justify-between items-center">
                            <p className="text-[var(--green-border)] text-[16px]">
                                The best found configuration based on profit is characterized by
                                11 zones (max) with charging stations and 48 total number of
                                poles.
                            </p>
                            <Button className="text-[var(--green-border)]">
                                <MoreHorizontal className="h-5 w-5" />
                            </Button>
                        </div>
                    </div>

                    <div className="border border-[var(--green-border)] bg-[#18181a] rounded-md px-6 py-[15px]">
                        <div className="flex justify-between items-center">
                            <p className="text-[var(--green-border)] text-[16px]">
                                The best found configuration based on satisfied demand is
                                characterized by 11 zones (max) with charging stations and 48
                                total number of poles.
                            </p>
                            <Button className="text-[var(--green-border)]">
                                <MoreHorizontal className="h-5 w-5" />
                            </Button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}
