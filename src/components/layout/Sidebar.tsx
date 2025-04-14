import { useState } from 'react';
import bell from '../../assets/icons/bell.svg';
import home from '../../assets/icons/home.svg';
import clock from '../../assets/icons/clock.svg';
import cloud from '../../assets/icons/cloud.svg';
import settings from '../../assets/icons/settings.svg';
import user from '../../assets/icons/user.svg';
import menu from '../../assets/icons/menu.svg';
import { iconType } from '../../types/Types';
import { Button } from '../ui/button';

export function Sidebar() {
    const [current, setCurrent] = useState<string>('Home');
    const icons: iconType[] = [
        {
            src: home,
            label: 'Home',
            href: '/',
        },
        {
            src: bell,
            label: 'Notifications',
            href: '/Notifications',
        },
        {
            src: clock,
            label: 'History',
            href: '/History',
        },
        {
            src: cloud,
            label: 'Cloud',
            href: '/Cloud',
        },
        {
            src: settings,
            label: 'Settings',
            href: '/Settings',
        },
    ];
    return (
        <div className="w-20 bg-[var(--theme-color)] flex flex-col items-center justify-center mt-6">
            <div className="flex flex-col items-center space-y-6 flex-1">
                <Button key={menu} className="button">
                    <img src={menu} alt="Menu" className="filter brightness-0 invert" />
                </Button>
                {icons.map((item, key) => {
                    return (
                        <button
                            key={key}
                            onClick={() => setCurrent(item.label)}
                            className={`w-10 h-10 ${
                                current === item.label ? 'buttonSelected' : 'button'
                            }`}
                        >
                            <img
                                src={item.src}
                                alt={item.label}
                                className={`${
                                    current === item.label ? 'filter brightness-0 invert' : ''
                                }`}
                            />
                        </button>
                    );
                })}
            </div>
            <button key={user} className="button w-10 h-10">
                <img src={user} alt="user profile" className="filter brightness-0 invert" />
            </button>
        </div>
    );
}
