import flash from '../../assets/icons/flash.svg';
import history from '../../assets/icons/history.svg';
import share from '../../assets/icons/share.svg';
import Panel from './Panel';

const ChargingStationHeader = () => {
    return (
        <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
                <img
                    src={flash}
                    alt="flash"
                    className="sm:h-[30px] sm:w-[30px] text-white h-4 w-4"
                />
                <h1 className="font-bold text-white sm:block hidden">Charging Station</h1>
                <h2 className="font-bold text-white sm:hidden">Charging Station</h2>
            </div>
            <div className="flex space-x-2">
                <button
                    className="rounded-[var(--rounded-border)] w-10 h-10 grid place-items-center 
                        bg-[var(--hover-bg)] border border-[var(--border-color)]"
                >
                    <img src={history} alt="history" />
                </button>
                <Panel />
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
