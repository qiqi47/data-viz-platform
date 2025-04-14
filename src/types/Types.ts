export interface iconType {
    src: string;
    label: string;
    href: string;
}

export interface NavbarProps {
    currentTab: string;
    onTabChange: (tab: string) => void;
    tabs: { label: string; value: string }[];
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
