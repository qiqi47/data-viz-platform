import { ChevronDown, ChevronUp, MoreHorizontal } from 'lucide-react';
import { useState } from 'react';
import star from '../../assets/icons/star.svg';
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
                <button
                    onClick={() => setExpanded(!expanded)}
                    className="greenButton w-10 rounded-[50%]"
                >
                    {expanded ? (
                        <ChevronUp className="h-5 w-5 text-[var(--green-border)]" />
                    ) : (
                        <ChevronDown className="h-5 w-5 text-[var(--green-border)]" />
                    )}
                </button>
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
                            <button className="text-[var(--green-border)]">
                                <MoreHorizontal className="h-5 w-5" />
                            </button>
                        </div>
                    </div>

                    <div className="border border-[var(--green-border)] bg-[#18181a] rounded-md px-6 py-[15px]">
                        <div className="flex justify-between items-center">
                            <p className="text-[var(--green-border)] text-[16px]">
                                The best found configuration based on satisfied demand is
                                characterized by 11 zones (max) with charging stations and 48
                                total number of poles.
                            </p>
                            <button className="text-[var(--green-border)]">
                                <MoreHorizontal className="h-5 w-5" />
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}
