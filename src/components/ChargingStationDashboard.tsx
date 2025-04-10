// import { Navbar } from '@/components/navbar';
// import { ChargingStationHeader } from '@/components/charging-station-header';
// import { ScenarioResults } from '@/components/scenario-results';
// import { PerformanceMetrics } from '@/components/performance-metrics';
// import { ChartSection } from '@/components/chart-section';
import { useState } from 'react';
import { Navbar } from './Navbar';
import { Sidebar } from './Sidebar';
import { ChargingStations } from './ChargingStations';
import { FleetSizing } from './FleetSizing';
import { Parking } from './Parking';

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
                {/*  <main className="flex-1 overflow-y-auto p-6 bg-[#161618]">
                    <ChargingStationHeader />
                    <ScenarioResults />
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-8">
                        <div className="lg:col-span-2">
                            <ChartSection />
                        </div>
                        <div className="lg:col-span-1">
                            <PerformanceMetrics />
                        </div>
                    </div>
                </main> */}
                <main className="flex-1 overflow-y-auto border border-[#262525] rounded-tl-[5px] rounded-tr-[0px] rounded-br-[5px] rounded-bl-[5px]">
                    {renderContent()}
                </main>
            </div>
        </div>
    );
}
