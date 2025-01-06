import { KeyIcon } from '@/images';
import { GAME } from '@/utils/consts';
import Image from 'next/image';
import React from 'react';

const HamsterKombatUI: React.FC = () => {
  const games = [
    { name: 'Cafe Dash', keys: '0/4', image: 'https://via.placeholder.com/150', newTag: true },
    { name: 'Mow and Trim', keys: '0/4', image: 'https://via.placeholder.com/150' },
    { name: 'Chain Cube 2048', keys: '0/4', image: 'https://via.placeholder.com/150' },
    { name: 'Train Miner', keys: '0/4', image: 'https://via.placeholder.com/150' },
    { name: 'Merge Away', keys: '0/4', image: 'https://via.placeholder.com/150' },
    { name: 'Twerk Race', keys: '0/4', image: 'https://via.placeholder.com/150' },
    { name: 'Polysphere', keys: '0/4', image: 'https://via.placeholder.com/150', timer: '09:03:52' },
    { name: 'Bike Ride 3D', keys: '0/4', image: 'https://via.placeholder.com/150', timer: '09:03:52' },
    { name: 'Mud Racing', keys: '0/4', image: 'https://via.placeholder.com/150' },
  ];

  return (
    <div className="bg-black flex justify-center min-h-screen">
      <div className="w-full bg-black text-white font-bold flex flex-col max-w-xl">
        <div className="flex-grow mt-4 bg-[#f3ba2f] rounded-t-[48px] relative top-glow z-0">
          <div className="mt-[2px] bg-gray-900 rounded-t-[46px] h-full overflow-y-auto no-scrollbar">
            <div className="px-2 pt-1 pb-24">
            <div className="bg-gray-900 text-white min-h-screen px-2">
                {/* Header */}
                {/* <div className="flex justify-between items-center py-4">
                    <div className="flex items-center space-x-2">
                    <button className="text-lg">←</button>
                    <h1 className="text-xl font-bold">Hamster Kombat <span className="text-blue-400">✔️</span></h1>
                    </div>
                    <div>
                      <div className=" bg-slate-800  px-4 pb-1 rounded-2xl">
                          <Image src={KeyIcon} alt="Ice Token" width={44} height={44} className="rounded-lg mr-1" />
                          <div className="bg-gray-500 px-2 py-1 ml-4 rounded-lg text-center text-sm ">
                            <span>0</span>
                          </div>
                      </div>
                    </div>
                </div> */}

                {/* Info Section */}
                
                <div className='flex justify-between pt-4'>
                  
                  <div className="mt-1 mb-3 mr-4">
                    <h2 className="text-2xl font-bold">Get more keys</h2>
                    <p className="text-sm text-gray-400">Each key is a valuable asset. Play Hamster FAM games and earn more keys.</p>
                  </div>

                  <div className=" bg-slate-800 w-32 h-24  mb-4 mt-2 px-4 pb-1 rounded-2xl">
                      <Image src={KeyIcon} alt="Ice Token" width={44} height={44} className="rounded-lg mr-1" />
                      <div className="bg-gray-500 px-2 py-1 ml-4 rounded-lg text-center text-sm ">
                        <span>0</span>
                      </div>
                  </div>
                </div>

                {/* Tab Section */}
                <div className="flex justify-between bg-gray-800 p-2 rounded-lg mb-4">
                    <button className="w-1/2 text-center py-2 bg-gray-700 rounded-md text-white">Games</button>
                    <button className="w-1/2 text-center py-2 text-gray-400">Minigames</button>
                </div>

                {/* Game Cards */}
                <div className="grid grid-cols-2 gap-4 md:grid-cols-3">
                    {GAME.map((game, index) => (
                    <div key={index} className="relative bg-gray-800 rounded-lg p-2">
                        <Image src={game.bigImage} alt={game.name} className="w-full h-32 object-cover rounded-lg" width={24} height={24} />
                        <div className="flex justify-between items-center mt-2">
                          <h3 className="text-xs w-full text-center">{game.name}</h3>
                        </div>
                        <div className='flex justify-center mt-4'>
                        <Image src={KeyIcon} alt="Ice Token" width={18} height={18} className="rounded-lg mr-1" />
                        <div className="text-xs text-yellow-500 "> {game.keys} <span className='text-gray-500'>received</span></div>
                        </div>
                       
                        {game.newTag && (
                        <div className="absolute top-0 right-0 bg-purple-500 text-white text-xs px-2 py-1 rounded-full">
                            New
                        </div>
                        )}
                        {game.timer && (
                        <div className="absolute top-0 left-0 bg-gray-900 text-white text-xs px-2 py-1 rounded-full">
                            ⏰ {game.timer}
                        </div>
                        )}
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

export default HamsterKombatUI;
