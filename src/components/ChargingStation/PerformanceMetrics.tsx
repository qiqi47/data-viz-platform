import { Info } from 'lucide-react';
import { MetricCardProps } from '../../types/Types';

const MetricCard = ({ title, value, hasInfoIcon = true }: MetricCardProps) => {
    return (
        <div className="bg-[#18181a] border border-[#262628] rounded-md p-4">
            <div className="flex items-center justify-between mb-2">
                <p className="text-sm text-[#999]">{title}</p>
                {hasInfoIcon && <Info className="h-4 w-4 text-[#999]" />}
            </div>
            <p className="text-3xl font-bold text-white">{value}</p>
            <p className="text-xs text-[#999] mt-1">
                This describes variable text and what the shown data means.
            </p>
        </div>
    );
};

export function PerformanceMetrics() {
    return (
        <div className="grid grid-cols-1 gap-4">
            <MetricCard title="Infrastructure Units" value="€421.07" />
            <MetricCard title="Charging Growth" value="33.07" />
            <MetricCard title="Localization change" value="21.9%" />
            <MetricCard title="Fleet growth" value="7.03%" />
        </div>
    );
}
