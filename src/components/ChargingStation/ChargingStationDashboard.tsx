import { useCallback, useState } from 'react';
import { Navbar } from '../layout/Navbar';
import { Sidebar } from '../layout/Sidebar';
import { ChargingStations } from './ChargingStations';
import { FleetSizing } from '../FleetSizing';
import { Parking } from '../Parking';
import { PlugZap, Truck, ParkingCircle } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

export function ChargingStationDashboard() {
    const [currentTab, setCurrentTab] = useState<string>('charging-stations');
    const tabs: Array<{
        label: string;
        value: string;
        icon: LucideIcon;
    }> = [
        {
            label: 'Charging Stations',
            value: 'charging-stations',
            icon: PlugZap,
        },
        {
            label: 'Fleet Sizing',
            value: 'fleet-sizing',
            icon: Truck,
        },
        {
            label: 'Parking',
            value: 'parking',
            icon: ParkingCircle,
        },
    ];
    const renderContent = useCallback(() => {
        switch (currentTab) {
            case 'charging-stations':
                return <ChargingStations />;
            case 'fleet-sizing':
                return <FleetSizing />;
            case 'parking':
                return <Parking />;
            default:
                return <ChargingStations />;
        }
    }, [currentTab]);

    return (
        <div className="flex h-screen bg-[#0e0d0d] text-white overflow-hidden">
            <Sidebar />
            <div className="flex-1 flex flex-col overflow-hidden">
                <Navbar currentTab={currentTab} onTabChange={setCurrentTab} tabs={tabs} />
                <main className="flex-1 overflow-y-auto border border-[#262525] rounded-tl-[5px] rounded-tr-[0px] rounded-br-[5px] rounded-bl-[5px]">
                    {renderContent()}
                </main>
            </div>
        </div>
    );
}
