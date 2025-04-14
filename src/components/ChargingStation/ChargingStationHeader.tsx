import { History, Share } from 'lucide-react';
import flash from '../../assets/icons/flash.svg';
import { Button } from '../ui/button';
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
                <h1 className="text-white">Charging Station</h1>
            </div>
            <div className="flex space-x-2 items-center justify-center">
                <Button
                    className="rounded-[var(--rounded-border)] w-10 h-10 grid place-items-center 
                        bg-[var(--hover-bg)] border border-[var(--border-color)]"
                >
                    <History className="text-[var(--button-color)]" />
                </Button>
                <Panel />
                <Button
                    className="rounded-[var(--rounded-border)] w-10 h-10 grid place-items-center 
                        bg-[var(--hover-bg)] border border-[var(--border-color)]"
                >
                    <Share className="text-[var(--button-color)]" />
                </Button>
            </div>
        </div>
    );
};

export default ChargingStationHeader;
