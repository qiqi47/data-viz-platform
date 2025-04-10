import flash from '../../assets/icons/flash.svg';
import history from '../../assets/icons/history.svg';
import share from '../../assets/icons/share.svg';

const ChargingStationHeader = () => {
    return (
        <div className="flex items-center justify-between mb-8 px-8 py-6">
            <div className="flex items-center space-x-3">
                <img src={flash} alt="flash" className="h-[30px] w-[30px] text-white" />
                <h1 className="font-bold text-white">Charging Station</h1>
            </div>
            <div className="flex space-x-2">
                <button
                    className="rounded-[var(--rounded-border)] w-10 h-10 grid place-items-center 
                        bg-[var(--hover-bg)] border border-[var(--border-color)]"
                >
                    <img src={history} alt="history" />
                </button>
                <button
                    className="rounded-[var(--rounded-border)] px-4 place-items-center 
                        bg-[var(--hover-bg)] border border-[var(--border-color)]"
                >
                    Edit Variables
                </button>
                <button
                    className="rounded-[var(--rounded-border)] w-10 h-10 grid place-items-center 
                        bg-[var(--hover-bg)] border border-[var(--border-color)]"
                >
                    <img src={share} alt="share" />
                </button>
            </div>
        </div>
    );
};

export default ChargingStationHeader;
