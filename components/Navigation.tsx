
'use client'

import Image, { StaticImageData } from 'next/image';
import Mine from '@/icons/Mine';
import Friends from '@/icons/Friends';
import Coins from '@/icons/Coins';
import { binanceLogo, earn_axe, friend_axe, hamsterCoin, iceToken, mine_axe, playground_axe } from '@/images';
import IceCube from '@/icons/IceCube';
import Rocket from '@/icons/Rocket';
import { FC } from 'react';
import { IconProps } from '@/utils/types';
import { triggerHapticFeedback } from '@/utils/ui';

type NavItem = {
    name: string;
    icon?: FC<IconProps> | null;
    image?: StaticImageData | null;
    view: string;
};

const navItems: NavItem[] = [
    { name: 'Exchange', image: binanceLogo, view: 'game' },
    { name: 'Mine', image: mine_axe, view: 'mine' },
    { name: 'Game', image: playground_axe, view: 'games' },
    { name: 'Friends', image: friend_axe, view: 'friends' },
    { name: 'Earn', image: earn_axe, view: 'earn' },
    { name: 'Airdrop', image: hamsterCoin, view: 'airdrop' },
];

interface NavigationProps {
    currentView: string;
    setCurrentView: (view: string) => void;
}

export default function Navigation({ currentView, setCurrentView }: NavigationProps) {
    console.log('Navigation props:', {
        currentView,
        setCurrentView,
        isSetCurrentViewFunction: typeof setCurrentView === 'function'
    });

    const handleViewChange = (view: string) => {
        console.log('Attempting to change view to:', view);
        if (typeof setCurrentView === 'function') {
            try {
                triggerHapticFeedback(window);
                setCurrentView(view);
                console.log('View change successful');
            } catch (error) {
                console.error('Error occurred while changing view:', error);
            }
        } else {
            console.error('setCurrentView is not a function:', setCurrentView);
        }
    };

    if (typeof setCurrentView !== 'function') {
        console.error('setCurrentView is not a function. Navigation cannot be rendered properly.');
        return null; // or return some fallback UI
    }

    return (
        <div className="fixed bottom-0 left-1/2 transform -translate-x-1/2 w-[calc(100%-2rem)] w-full max-w-xl bg-[#272a2f] flex justify-around items-center z-40 text-xs border-t border-[#43433b] max-h-24">
            {navItems.map((item) => (
                <button
                    key={item.name}
                    onClick={() => handleViewChange(item.view)}
                    className="flex-1"
                >
                    <div className={`flex flex-col items-center justify-center ${currentView === item.view ? 'text-white bg-[#1c1f24]' : 'text-[#85827d]'} h-16 m-1 p-2 rounded-2xl`}>
                        <div className="w-8 h-8 relative">
                            {item.image && (
                                <div className="w-full h-full relative">
                                    <Image
                                        src={item.image}
                                        alt={item.name}
                                        width={32}
                                        height={32}
                                    />
                                </div>
                            )}
                            {item.icon && <item.icon className="w-full h-full" />}
                        </div>
                        <p className="mt-1">{item.name}</p>
                    </div>
                </button>
            ))}
        </div>
    );
}