import { LucideIcon } from 'lucide-react';

export interface iconType {
    src: string;
    label: string;
    href: string;
}

export interface NavbarProps {
    currentTab: string;
    onTabChange: (tab: string) => void;
    tabs: { label: string; value: string; icon?: LucideIcon }[];
}

export interface tabType {
    label: string;
    value: string;
}

export interface VariableCategory {
    title: string;
    items: Array<{ name: string; selected: boolean }>;
    onItemClick: (item: string) => void;
}

export interface VariableItemProps {
    name: string;
    selected?: boolean;
    onClick?: () => void;
}

export interface MetricCardProps {
    title: string;
    value: string;
    hasInfoIcon?: boolean;
}

export interface ChartProps {
    data?: Array<any>;
    dataKey?: string;
    xAxisKey?: string;
    yAxisKey?: string;
    color?: string;
    height?: number;
    showArea?: boolean;
    showTooltip?: boolean;
}

export interface VariableItem {
    name: string;
    selected: boolean;
}

export interface VariableState {
    category1: VariableItem[];
    category2: VariableItem[];
    category3: VariableItem[];
}
