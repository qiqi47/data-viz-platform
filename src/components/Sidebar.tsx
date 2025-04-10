import { useState } from 'react';
import bell from '../assets/icons/bell.svg';
import home from '../assets/icons/home.svg';
import clock from '../assets/icons/clock.svg';
import cloud from '../assets/icons/cloud.svg';
import settings from '../assets/icons/settings.svg';
import user from '../assets/icons/user.svg';
import menu from '../assets/icons/menu.svg';
export function Sidebar() {
    const [current, setCurrent] = useState('Home');
    const icons = [
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
        <div className="w-20 bg-primary border-r border-border flex flex-col items-center justify-center py-4">
            <div className="flex flex-col items-center space-y-6 flex-1 mt-8">
                <button
                    key={menu}
                    className="cursor-pointer rounded-lg w-10 h-10 hover:bg-[#262525] hover:border hover:border-[#525252] grid place-items-center"
                >
                    <img src={menu} alt="Menu" className="filter brightness-0 invert" />
                </button>
                {icons.map((item, key) => {
                    return (
                        <button
                            key={key}
                            onClick={() => setCurrent(item.label)}
                            className="cursor-pointer rounded-lg w-10 h-10 hover:bg-[#262525] hover:border hover:border-[#525252] grid place-items-center"
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
            <button
                key={user}
                className="cursor-pointer rounded-lg w-10 h-10 hover:bg-[#262525] hover:border hover:border-[#525252] grid place-items-center"
            >
                <img src={user} alt="user profile" className="filter brightness-0 invert" />
            </button>
        </div>
    );
}
