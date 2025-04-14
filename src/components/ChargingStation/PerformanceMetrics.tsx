import { Info, Plus } from 'lucide-react';
import { MetricCardProps } from '../../types/Types';

const MetricCard = ({ title, value, hasInfoIcon = true }: MetricCardProps) => {
    return (
        <div className="bg-[#18181a] border border-[#262628] rounded-md p-4">
            <div className="flex items-center justify-between mb-2">
                <p className="text-lg text-white">{title}</p>
                {hasInfoIcon && <Info className="h-5 w-5 text-[#999]" />}
            </div>
            <p className="text-xs text-[#999] mt-1">
                This describes variable two and what the shown data means.
            </p>
            <p className="text-4xl font-bold text-white mt-6">{value}</p>
        </div>
    );
};

export function PerformanceMetrics() {
    return (
        <div className="h-full flex flex-col">
            <div className="flex items-center justify-between mb-4">
                <h2 className="text-2xl font-bold text-white">Key Performance Indicators</h2>
                <button className="bg-[#212124] hover:bg-[#2a2a2d] text-white px-3 py-1 rounded flex items-center">
                    <span className="mr-1">Variables</span>
                    <Plus className="h-4 w-4" />
                </button>
            </div>
            <div className="grid grid-cols-2 gap-4 flex-grow">
                <MetricCard title="Infrastructure Units" value="€421.07" />
                <MetricCard title="Charging Growth" value="33.07" />
                <MetricCard title="Localization change" value="21.9%" />
                <MetricCard title="Fleet growth" value="7.03%" />
            </div>
        </div>
    );
}
