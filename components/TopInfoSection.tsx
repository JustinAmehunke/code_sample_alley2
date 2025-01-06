
'use client'

import { useToast } from '@/contexts/ToastContext';
import IceCubes from '@/icons/IceCubes';
import Info from '@/icons/Info';
import Settings from '@/icons/Settings';
import { binanceLogo, dollarCoin, Groovy, iceToken, KeyIcon, paidTrophy1, useIcon } from '@/images';
import { LEVELS } from '@/utils/consts';
import { useGameStore } from '@/utils/game-mechanics';
import { formatNumber, triggerHapticFeedback } from '@/utils/ui';
import Image from 'next/image';

interface TopInfoSectionProps {
    isGamePage?: boolean;
    setCurrentView: (view: string) => void;
}



export default function TopInfoSection({ isGamePage = false, setCurrentView }: TopInfoSectionProps) {
    const showToast = useToast();

    const {
        points,
        energy,
        maxEnergy,
        userTelegramName,
        gameLevelIndex,
        profitPerHour
    } = useGameStore();

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

    const handleSettingsClick = () => {
        triggerHapticFeedback(window);
        setCurrentView('settings');
    };
    //

    const calculateProgress = () => {
        if (gameLevelIndex >= LEVELS.length - 1) {
          return 100;
        }
        const currentLevelMin = LEVELS[gameLevelIndex].minPoints;
        const nextLevelMin = LEVELS[gameLevelIndex + 1].minPoints;
        const progress = ((points - currentLevelMin) / (nextLevelMin - currentLevelMin)) * 100;
        return Math.min(progress, 100);
    };

    const calculateLevelProgress = () =>{
        if (gameLevelIndex >= LEVELS.length - 1) {
            return 100;
        }
        const levelProgress = ((gameLevelIndex + 1) / LEVELS.length) * 100;
        console.log(Math.min(levelProgress, 100));
        return Math.min(levelProgress, 100);
       
    }
    const formatProfitPerHour = (profit: number) => {
        if (profit >= 1000000000) return `+${(profit / 1000000000).toFixed(2)}B`;
        if (profit >= 1000000) return `+${(profit / 1000000).toFixed(2)}M`;
        if (profit >= 1000) return `+${(profit / 1000).toFixed(2)}K`;
        return `+${profit}`;
      };

    return (
        <div className="px-2 z-10">
            {/* <div className="flex items-center justify-between space-x-4 mt-4">
                <div className="flex items-center w-1/3">
                    <div className="flex items-center space-x-2">
                        <div className="p-1 rounded-lg bg-[#1d2025]">
                            <Image src={LEVELS[gameLevelIndex].smallImage} width={24} height={24} alt="Small Level Icon" />
                        </div>
                        <div>
                            <p className="text-sm">{userTelegramName}</p>
                        </div>
                    </div>
                </div>
                <div className={`flex items-center w-fit border-2 border-[#43433b] rounded-full ${isGamePage ? 'px-4' : 'px-8'} py-[2px] bg-[#43433b]/[0.6] max-w-64`}>
                    {
                        isGamePage &&
                        <>
                            <div className="flex-1 text-center">
                                <p className="text-xs text-[#85827d] font-medium">Sync</p>
                                <div className="flex items-center justify-center space-x-1">
                                    <div className="w-2 h-2 rounded-full bg-green-500 mt-1"></div>
                                </div>
                            </div>
                            <div className="h-[32px] w-[2px] bg-[#43433b] mx-2"></div>
                        </>
                    }
                    <div className="flex-1 text-center">
                        <p className="text-xs text-[#85827d] font-medium whitespace-nowrap overflow-hidden text-ellipsis">Ice per hour</p>
                        <div className="flex items-center justify-center space-x-1">
                            <IceCubes size={20} />
                            <p className="text-sm">+{formatNumber(profitPerHour)}</p>
                        </div>
                    </div>
                    {
                        isGamePage &&
                        <>
                            <div className="h-[32px] w-[2px] bg-[#43433b] mx-2"></div>
                            <button
                                onClick={handleSettingsClick}
                                className="flex-1 flex items-center justify-center text-white focus:outline-none"
                            >
                                <Settings className="w-6 h-6" /> 
                            </button>
                        </>
                    }
                </div>
            </div> */}
            <div className="px-2 z-10">
                <div className="flex items-center justify-between space-x-2 pt-4">
                   <div className="flex items-center">
                        <div className="p-1 rounded-lg bg-gray-400 ml-0 border-r-2  border-gray-950 z-10">
                        {/* LEVELS[gameLevelIndex].smallImage */}
                            <Image src={useIcon} width={24} height={24} 
                            className='rounded-lg'
                            style={{
                                objectFit: 'cover',
                                objectPosition: 'center',
                                transform: 'scale(1.35) translateY(5%)'
                              }}
                              alt="Small Level Icon" />
                        </div>
                        <button className="bg-orange-500 h-[30px] text-black text-xs px-1 rounded-md flex items-center space-x-1 -ml-1 mr-2"
                        onClick={() => handleViewChange("skin")}>
                            <span className="text-gray-200 ml-2 leading-none">Buy <br/> skin</span>
                            <div className="bg-orang-300 overflow-hidden w-8 h-8 rounded-full items-center -ml-[2px]" >
                                <Image src={Groovy} alt="Ice Token" 
                                 style={{
                                    objectFit: 'cover',
                                    objectPosition: 'center',
                                    transform: 'scale(1.55) translateY(25%)'
                                  }}
                                width={36} height={36} className="rounded-lg mr-2" />
                            </div>
                        </button>
                        <div>
                            <p className="text-sm">T-T-E Clone (CEO)</p>
                        </div>
                   </div>

                    <div className="flex items-center space-x-2">
                        <div className="bg-gray-800 px-2 py-1 rounded-full bg-opacity-50 ">
                            <div className="flex items-center justify-between">
                                <div className="bg-blu-500 w-4 h-4 rounded-full">
                                    {/* <img src="./game-images/unlock_skin_1.jpg" alt="Test" /> */}
                                    <Image src={KeyIcon} alt="Ice Token" width={96} height={96} className="rounded-lg mr-1" />
                                </div>
                                <div className="">
                                    <div className="text-xs text-gray-400 whitespace-nowrap"> <span className='mr-1'></span>12 <span className='text-gray-500'>&gt;</span></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex items-center justify-between space-x-4 mt-1">
                    <div className="flex items-center w-1/3">
                    <div className="w-full">
                        <div className="flex justify-between">
                        <p className="text-xs">{LEVELS[gameLevelIndex].name} <span className='font-light text-[13px]'>&gt;</span></p>
                        <p className="text-xs">{gameLevelIndex + 1}<span className="text-[#95908a]">/{LEVELS.length}</span></p>
                        </div>
                        <div className="flex items-center mt-1 border-2 border-[#43433b] rounded-full">
                        <div className="w-full h-2 bg-[#43433b]/[0.6] rounded-full">
                            <div className="progress-gradient h-2 rounded-full" style={{ width: `${calculateLevelProgress()}%` }}></div>
                        </div>
                        </div>
                    </div>
                    </div>
                    <div className="flex items-center w-2/3 border-2 border-[#43433b] rounded-full px-4 py-[2px] bg-[#43433b]/[0.6] max-w-64">
                    {/* <img src={binanceLogo} alt="Exchange" className="w-8 h-8" /> */}
                    <Image src={binanceLogo} alt="Ice Token" width={96} height={96} className="rounded-lg mr-1 w-6 h-6" />
                    <div className="h-[32px] w-[2px] bg-[#43433b] mx-2"></div>
                    <div className="flex-1 text-center">
                        <p className="text-xs text-[#85827d] font-medium">Profit per hour</p>
                        <div className="flex items-center justify-center space-x-1">
                        <Image src={dollarCoin} alt="Ice Token" width={96} height={96} className="rounded-lg mr-1 w-[18px] h-[18px]" />
                        <p className="text-xs">+105k</p>
                        <Info size={20} className="text-[#43433b]" />
                        </div>
                    </div>
                    {/* <div className="h-[32px] w-[2px] bg-[#43433b] mx-2"></div> */}
                    {/* <Settings className="text-white" /> */}
                    {
                        isGamePage &&
                        <>
                            <div className="h-[32px] w-[2px] bg-[#43433b] mx-2"></div>
                            <button
                                onClick={handleSettingsClick}
                                className="text-white"
                            >
                                <Settings className="w-6 h-6" /> 
                            </button>
                        </>
                    }
                    </div>
                </div>
            </div>
        </div>
    );
}