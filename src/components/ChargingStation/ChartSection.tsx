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
        <div>
            <h1 className="text-white mb-4">Graphs</h1>
            <div className="bg-[#18181a] border border-[#262628] rounded-md overflow-hidden h-full">
                <div className="p-4 flex items-center justify-between">
                    <div className="flex items-center justify-end w-full">
                        <div className="relative">
                            <button className="px-2 py-1 buttonSelected">
                                {metricType}
                                <ChevronDown className="h-4 w-4" />
                            </button>
                        </div>
                    </div>
                </div>

                <div className="p-4 pt-0">
                    <Chart data={chartData} color="#DCFF7F" showArea={true} height={300} />
                </div>
            </div>
        </div>
    );
}
