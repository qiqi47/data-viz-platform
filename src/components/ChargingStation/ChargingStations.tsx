import ChargingStationHeader from './ChargingStationHeader';
import { ScenarioResults } from './ScenarioResults';
import { ChartSection } from './ChartSection';
import { PerformanceMetrics } from './PerformanceMetrics';

export function ChargingStations() {
    return (
        <div>
            <section className="px-8 py-6">
                <ChargingStationHeader />
            </section>
            <section className="px-8 py-6">
                <ScenarioResults />
            </section>
            <section className="px-8 py-6">
                <div className="grid grid-cols-1 lg:grid-cols-5 gap-6 min-h-[480px]">
                    <div className="lg:col-span-3 h-[449px]">
                        <ChartSection />
                    </div>
                    <div className="lg:col-span-2 h-[449px]">
                        <PerformanceMetrics />
                    </div>
                </div>
            </section>
        </div>
    );
}
