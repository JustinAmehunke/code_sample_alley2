
'use client'

import { useState, useEffect, useCallback } from 'react';
import Image from 'next/image';
import { black_diamond, check, iceToken, paidTrophy1, skinMap, tonWallet } from '@/images';
import { useTonConnectUI } from '@tonconnect/ui-react';
import Angle from '@/icons/Angle';
import Copy from '@/icons/Copy';
import Cross from '@/icons/Cross';
import Wallet from '@/icons/Wallet';
import { useGameStore } from '@/utils/game-mechanics';
import { useToast } from '@/contexts/ToastContext';
import IceCube from '@/icons/IceCube';
import { Address } from "@ton/core";
import { triggerHapticFeedback } from '@/utils/ui';
import { SKINS } from '@/utils/consts';


export default function Skin() {
    const [selectedCharacter, setSelectedCharacter] = useState(SKINS[0]);
    return (
        <div className="bg-black flex justify-center min-h-screen">
            <div className="w-full bg-black text-white font-bold flex flex-col max-w-xl">
                <div className="flex flex-col h-screen p-2">
      {/* Header */}
        <div className=" bg-gray-800 p-2 pt-4 rounded-lg mb-3">
            <div className='flex justify-between'>
                <p className=" text-white text-xs">Achievements</p>
                <div className='bg-[#5a60ff] p-2 rounded-md'>
                    <p className=" text-white text-xs">See All</p>
                </div>
            </div>

            <div className=" bg-[#1c1f24] w-20 h-24 items-center px-2 pb-1 rounded-2xl">
               <div className="flex justify-center pt-2">
                    <Image src={black_diamond} alt="Ice Token" width={44} height={44} className="rounded-lg mr-1" />
               </div>
                <div className="flex justify-center px-2 py-1 text-xs rounded-lg text-center ">
                    <span>2 skin</span>
                </div>
            </div>
        </div>

      {/* Main Content */}
      <div className=" bg-[#000]">
        {/* Tab Section */}
        <div className="flex justify-between  p-2 rounded-lg mb-4">
            <button className="w-1/2 text-center py-2  rounded-md text-white">Skin</button>
            <button className="w-1/2 text-center bg-[#1c1f24] border-2 rounded-lg border-[#26292e] py-2 text-gray-400">All</button>
        </div>
        {/* Selected Character Display  */}
        <div className="relative flex justify-between w-full bg-[#1c1f24] p-2 rounded-3xl">
          {/* Check Icon */}
            <div className='flex flex-col' >
                <div className='items-center text-center '>
                    {/* <div className="absolute top-0 left-0 bg-green-500 text-white p-1 rounded-full m-2">
                        ✔️
                    </div> */}
                    <Image src={selectedCharacter.bigImage} alt={selectedCharacter.name} className="w-64 h-64 object-cover mb-4" />
                    <h2 className="text-lg font-bold mb-2">{selectedCharacter.name}</h2>
                    <p className="text-xs text-gray-400 w-[180px]">{selectedCharacter.description}</p>
                    <div className="mt-4">
                        {selectedCharacter.purchased ? (
                        <button className="bg-green-500 text-white px-4 py-2 rounded-lg">Purchased</button>
                        ) : (
                        <button className="bg-blue-500 text-white px-4 py-2 rounded-lg">Unlock</button>
                        )}
                    </div>
                </div>
               
            </div>
             {/* Character List */}
            <div className=" w-1/2 ml-1  overflow-y-scroll scrollbar-hide">
                <div className='grid grid-cols-2 gap-2 h-64'>
                        {SKINS.map((char) => (
                            
                        <div
                        key={char.id}
                        className={`relative flex justify-center items-center mb-2 p-2 w-[60px] cursor-pointer text-xs bg-[#272a2f] rounded-lg py-2
                            ${selectedCharacter.id === char.id ? 'border-2 border-purple-600' : 'border-1 border-gray-700'}`}
                        onClick={() => setSelectedCharacter(char)}
                        >
                        {/* Show check icon only if selected */}
                        {selectedCharacter.id === char.id && (
                             <Image src={check} alt="check" className="w-6 h-6 p-1 absolute top-0 right-0" />
                            // <div className="absolute top-0 right-0 bg-green-500 text-white p-1 rounded-full m-1">
                            // ✔️check
                           
                            // </div>
                        )}

                        <div className='items-center text-center'>
                            <Image src={char.bigImage} alt={char.name} className="w-12 h-12 object-cover" />
                            <div className='items-center text-center'>
                                <h3 className="text-xs">{char.name}</h3>
                            </div>
                        </div>
                        
                        </div>
                    ))}
                </div>
            </div>
        </div>

       
      </div>

      {/* Bottom Navigation */}
      <div className="fixed bottom-0 left-0 right-0 bg-gray-900 text-white flex justify-around py-2">
        <button className="text-lg">Exchange</button>
        <button className="text-lg">Mine</button>
        <button className="text-lg">Playground</button>
        <button className="text-lg">Friends</button>
        <button className="text-lg">Earn</button>
        <button className="text-lg">AirDrop</button>
      </div>
    </div>
            </div>
        </div>
    );
}