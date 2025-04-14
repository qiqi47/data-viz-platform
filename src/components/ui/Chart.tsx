import { ChartProps } from '@/types/Types';
import { useState } from 'react';
import {
    Area,
    CartesianGrid,
    ComposedChart,
    Line,
    ResponsiveContainer,
    Tooltip,
    XAxis,
    YAxis,
} from 'recharts';

// Sample data for demonstration
const sampleData = [
    { name: 'Apr', value: 30000 },
    { name: 'May', value: 50000 },
    { name: 'Jun', value: 60000 },
    { name: 'Jul', value: 90000 },
    { name: 'Aug', value: 58000 },
    { name: 'Sep', value: 40000 },
    { name: 'Oct', value: 60000 },
];

export function Chart({
    data = sampleData,
    dataKey = 'value',
    xAxisKey = 'name',
    color = '#DCFF7F',
    height = 300,
    showArea = false,
    showTooltip = true,
}: ChartProps) {
    const [activeIndex, setActiveIndex] = useState<number | null>(null);

    const handleMouseEnter = (data: any, index: number) => {
        setActiveIndex(index);
    };

    const handleMouseLeave = () => {
        setActiveIndex(null);
    };

    const CustomTooltip = ({ active, payload, label }: any) => {
        if (active && payload && payload.length) {
            return (
                <div className="bg-[#1a1a1c] p-3 border border-[#333] rounded-md shadow-lg">
                    <p className="text-[#DCFF7F] font-medium">{`${label}`}</p>
                    <p className="text-white font-bold">{`$${payload[0].value.toLocaleString()}`}</p>
                </div>
            );
        }
        return null;
    };

    return (
        <div className="w-full h-full bg-[#18181a] rounded-md p-4">
            <ResponsiveContainer width="100%" height={height}>
                <ComposedChart
                    data={data}
                    margin={{ top: 10, right: 10, left: 0, bottom: 10 }}
                    onMouseLeave={handleMouseLeave}
                >
                    <defs>
                        <linearGradient id="colorValue" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="5%" stopColor={color} stopOpacity={0.3} />
                            <stop offset="95%" stopColor={color} stopOpacity={0} />
                        </linearGradient>
                    </defs>

                    <CartesianGrid strokeDasharray="3 3" stroke="#333" />

                    <XAxis
                        dataKey={xAxisKey}
                        axisLine={true}
                        tickLine={false}
                        tick={{ fill: '#999', fontSize: 12 }}
                    />

                    <YAxis
                        axisLine={true}
                        tickLine={false}
                        tick={{ fill: '#999', fontSize: 12 }}
                        tickFormatter={(value) => `$${value / 1000}k`}
                        ticks={[20000, 40000, 60000, 80000, 100000]}
                        domain={[0, 100000]}
                    />

                    {showTooltip && <Tooltip content={<CustomTooltip />} cursor={false} />}

                    {showArea && (
                        <Area
                            type="monotone"
                            dataKey={dataKey}
                            fill="url(#colorValue)"
                            stroke={color}
                            strokeWidth={2}
                            activeDot={{ r: 6, fill: '#fff', stroke: color, strokeWidth: 2 }}
                            animationDuration={300}
                        />
                    )}

                    <Line
                        type="monotone"
                        dataKey={dataKey}
                        stroke={color}
                        strokeWidth={2}
                        dot={(props: any) => {
                            const { cx, cy, index } = props;

                            const isActive = index === activeIndex;

                            return (
                                <g
                                    onMouseEnter={() => handleMouseEnter(props.payload, index)}
                                    className="transition-all duration-300"
                                >
                                    {/* Larger outer circle (only visible on hover) */}
                                    {isActive && (
                                        <circle
                                            cx={cx}
                                            cy={cy}
                                            r={8}
                                            fill="rgba(220, 255, 127, 0.3)"
                                            className="animate-pulse"
                                        />
                                    )}

                                    {/* Base dot */}
                                    <circle
                                        cx={cx}
                                        cy={cy}
                                        r={isActive ? 6 : 4}
                                        fill={isActive ? '#FFFFFF' : color}
                                        stroke={color}
                                        strokeWidth={2}
                                        className="transition-all duration-300"
                                    />
                                </g>
                            );
                        }}
                        activeDot={false}
                        animationDuration={300}
                    />
                </ComposedChart>
            </ResponsiveContainer>
        </div>
    );
}
