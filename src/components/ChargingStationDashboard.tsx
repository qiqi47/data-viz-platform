// import { Navbar } from '@/components/navbar';
// import { ChargingStationHeader } from '@/components/charging-station-header';
// import { ScenarioResults } from '@/components/scenario-results';
// import { PerformanceMetrics } from '@/components/performance-metrics';
// import { ChartSection } from '@/components/chart-section';
import { Navbar } from './Navbar';
import { Sidebar } from './Sidebar';

export function ChargingStationDashboard() {
    return (
        <div className="flex h-screen bg-[#0e0d0d] text-white overflow-hidden">
            <Sidebar />
            <div className="flex-1 flex flex-col overflow-hidden">
                <Navbar />
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
            </div>
        </div>
    );
}
