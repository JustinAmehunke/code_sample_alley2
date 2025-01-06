
'use client';

import React, { useState, useEffect, useCallback, useMemo, useRef } from 'react';
import Image from 'next/image';
import IceCube from '@/icons/IceCube';
import { useGameStore } from '@/utils/game-mechanics';
import { capitalizeFirstLetter, formatNumber, triggerHapticFeedback } from '@/utils/ui';
import { binanceLogo, ceo, daily_combo_mrk, dollarCoin, imageMap, marketing } from '@/images';
import Time from '@/icons/Time';
import TaskPopup from './popups/TaskPopup';
import { Task } from '@/utils/types';
import Coins from '@/icons/Coins';
import { LEVELS } from '@/utils/consts';
import Info from '@/icons/Info';
import Settings from '@/icons/Settings';

interface GameProps {
  isGamePage:boolean;
  setCurrentView: (view: string) => void;
}
export default function Games({isGamePage = false, setCurrentView }: GameProps) {
  const {
    points,
    pointsBalance,
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
const formatProfitPerHour = (profit: number) => {
  if (profit >= 1000000000) return `+${(profit / 1000000000).toFixed(2)}B`;
  if (profit >= 1000000) return `+${(profit / 1000000).toFixed(2)}M`;
  if (profit >= 1000) return `+${(profit / 1000).toFixed(2)}K`;
  return `+${profit}`;
};
const calculateLevelProgress = () =>{
  if (gameLevelIndex >= LEVELS.length - 1) {
      return 100;
  }
  const levelProgress = ((gameLevelIndex + 1) / LEVELS.length) * 100;
  console.log(Math.min(levelProgress, 100));
  return Math.min(levelProgress, 100);
 
}
  // Dummy data for the cards
  const cards = [
    {
      role: 'CEO',
      level: 4,
      profitPerHour: 444,
      totalProfit: 1.98,
      icon: daily_combo_mrk, // replace with actual icon paths
    },
    {
      role: 'Marketing',
      level: 2,
      profitPerHour: 145,
      totalProfit: 1.28,
      icon: daily_combo_mrk, // replace with actual icon paths
    },
  ];

  return (
    <div className="bg-black  min-h-screen">
       <div className="flex items-center justify-between space-x-4 mt-1 p-2 pt-4">
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
      <div className="w-full bg-black text-white font-bold flex flex-col max-w-xl">
        <div className="flex-grow mt-2 bg-[#f3ba2f] rounded-t-[48px] relative top-glow z-0">
          <div className="mt-[2px] bg-gray-900 rounded-t-[46px] h-full overflow-y-auto no-scrollbar">
            <div className="px-2 pt-1 pb-24">
            <div className="bg-gray-900 min-h-screen p-2">
            {/* Daily Combo Section */}
            <div className="flex items-center bg-gray-800 p-2 rounded-lg justify-between mb-4">
              <div className="text-white text-base ml-2">Daily combo</div>
              <div className="flex space-x-1">
                {[1, 2, 3].map((dot) => (
                  <div key={dot} className="w-4 h-4 bg-gray-600 rounded-full border-2 border-gray-700"></div>
                ))}
              </div>
              <div style={{ background: 'linear-gradient(to right, rgb(95, 96, 255), rgb(177, 90, 255))',}} className=" text-white px-4 py-2 rounded-lg text-sm flex items-center space-x-2">
                <Image src={dollarCoin} className='w-4 h-4' alt='dollar coin' />
                <span>+5,000,000</span>
              </div>
            </div>

            {/* Mystery Boxes Section */}
            <div className="flex justify-center space-x-4 mb-6">
              {[1, 2, 3].map((box) => (
                <div key={box} className="w-24 h-28 bg-gray-800 rounded-2xl flex items-center justify-center  top-glow-purple">
                  <div className='bg-gray-700 rounded-xl'>
                  <Image src={daily_combo_mrk} className='h-20 w-20' alt='Mystery Box' />
                  </div>
                  
                </div>
              ))}
            </div>

            {/* Coin Display */}

            <div className="px-2 mt-4 flex justify-center mb-4">
                <div className="px-4 py-2 flex items-center space-x-2">
                  <Image src={dollarCoin} className='w-12 h-12' alt='dollar coin' />
                  <p className="text-4xl text-white" suppressHydrationWarning >{Math.floor(pointsBalance).toLocaleString()}</p>
                </div>
              </div>

            {/* Tabs Section */}
            <div className="flex justify-around bg-gray-800 p-2 rounded-lg text-white mb-6">
              {['PR&Team', 'Markets', 'Legal', 'Web3', 'Specials'].map((tab) => (
                <div
                  key={tab}
                  className="text-gray-400 hover:text-white cursor-pointer text-sm p-1"
                >
                  {tab}
                </div>
              ))}
            </div>

      {/* Cards Section */}
      <div className="grid grid-cols-2 gap-2">
        {cards.map((card, index) => (
          <div key={index} className="bg-gray-800 text-white rounded-lg p-2 flex flex-col items-center justify-center space-y-2">
           
            <div className='flex justify-center'>
              <div>
                <div className="text-2xl mr-3">
                  <Image src={index > 0 ? marketing : ceo} className='w-12 h-12' alt='Hi' />
                </div>
              </div>
              <div>
                <div className="mb-2 text-sm">{card.role}</div>
              
                <div className="text-xs text-gray-400 mb-0.5">Profit per hour</div>
                <div className="text-sm text-yellow-400 flex ">
                  <Image src={dollarCoin} className='w-4 h-4' alt='dollar coin' />
                  <span className='ml-2'>{card.profitPerHour}</span>
                </div>
              </div>
            </div>
           
           
            <div className="grid grid-cols-[auto,1fr] gap-2">
             
              <div className="text-sm">
                lvl {card.level}
              </div>
              
              <div className="text-sm text-yellow-400 flex items-center border-l border-gray-500 pl-2">
                <Image src={dollarCoin} className='w-5 h-5' alt='dollar coin' />
                <span className='ml-2'>{card.totalProfit}K</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
            </div>
          </div>
        </div>
      </div>
    </div>

   
  );
};

