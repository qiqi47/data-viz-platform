import ChargingStationHeader from './ChargingStationHeader';
import { ScenarioResults } from './ScenarioResults';
import { useState } from 'react';

export function ChargingStations() {
    const [openPanel, setOpenPanel] = useState<boolean>(false);
    return (
        <div>
            <section className="px-8 py-6">
                <ChargingStationHeader openPanel={openPanel} setOpenPanel={setOpenPanel} />
            </section>
            <section className="px-8 py-6">
                <ScenarioResults />
            </section>{' '}
            <section className="px-8 py-6"></section>
            {/* <ScenarioResults />
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-8">
                <div className="lg:col-span-2">
                    <ChartSection />
                </div>
                <div className="lg:col-span-1">
                    <PerformanceMetrics />
                </div>
            </div> */}
        </div>
    );
}
