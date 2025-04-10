import { useState } from 'react';
import { Navbar } from '../layout/Navbar';
import { Sidebar } from '../layout/Sidebar';
import { ChargingStations } from './ChargingStations';
import { FleetSizing } from '../FleetSizing';
import { Parking } from '../Parking';

export function ChargingStationDashboard() {
    const [currentTab, setCurrentTab] = useState('charging-stations');
    const tabs = [
        {
            label: 'Charging Stations',
            value: 'charging-stations',
        },
        {
            label: 'Fleet Sizing',
            value: 'fleet-sizing',
        },
        {
            label: 'Parking',
            value: 'parking',
        },
    ];
    const renderContent = () => {
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
    };

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
