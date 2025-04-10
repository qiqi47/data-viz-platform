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

export interface ChargingStationHeaderProps {
    openPanel: boolean;
    setOpenPanel: (openPanel: boolean) => void;
}
