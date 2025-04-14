import { useState } from 'react';
import { Chart } from '../ui/Chart';
import { ChevronDown } from 'lucide-react';

const chartData = [
    { name: 'Apr', value: 20000 },
    { name: 'May', value: 58000 },
    { name: 'Jun', value: 41000 },
    { name: 'Jul', value: 92000 },
    { name: 'Aug', value: 60000 },
    { name: 'Sep', value: 35000 },
    { name: 'Oct', value: 65000 },
];

export function ChartSection() {
    const [metricType, setMetricType] = useState<string>('Unsatisfied Demand %');

    return (
        <div className="bg-[#18181a] border border-[#262628] rounded-md overflow-hidden">
            <div className="p-4 flex items-center justify-between">
                <div className="flex items-center space-x-2">
                    <div className="relative">
                        <button className="bg-transparent text-white flex items-center gap-2 text-sm font-medium">
                            {metricType}
                            <ChevronDown className="h-4 w-4" />
                        </button>
                    </div>
                </div>
            </div>

            <div className="p-4 pt-0">
                <Chart data={chartData} color="#DCFF7F" showArea={true} height={380} />
            </div>
        </div>
    );
}
