// // Friends.tsx
// import React from 'react';

// interface FriendsProps {
//   onBack: () => void;
//   onInvite: () => void;
// }

// const Friends: React.FC<FriendsProps> = ({ onBack, onInvite }) => {
//   const handleInviteClick = () => {
//     const shareData = {
//       title: 'Join Simple Tapify!',
//       text: 'Join Simple Tapify and earn bonuses!',
//       url: 'https://t.me/tapify_bot/simpleTapifyApp',
//     };
//     navigator.share(shareData).then(() => {
//       onInvite();
//     }).catch(console.error);
//   };

//   return (
//     <div className="bg-[#dfe6e9] text-[#2d3436] h-screen flex flex-col items-center justify-center">
//       <h1 className="text-2xl font-bold mb-6">Invite friends!</h1>
//       <p className="mb-4">You and your friend will receive bonuses.</p>
//       <button
//         className="bg-[#74b9ff] text-white py-2 px-4 rounded-full mb-6"
//         onClick={handleInviteClick}
//       >
//         Invite a friend (500,000)
//       </button>
//       <button
//         className="bg-[#0984e3] text-white py-2 px-4 rounded-full"
//         onClick={onBack}
//       >
//         Back
//       </button>
//     </div>
//   );
// };

// export default Friends;

import React from 'react';
import Hamster from './icons/Hamster';
import { binanceLogo, dailyCipher, dailyCombo, dailyReward, hamsterCoin, dollarCoin } from './images';
import Mine from './icons/Mine';
import FriendsIcon from './icons/Friends';
import Coins from './icons/Coins';
import Info from './icons/Info';
import Settings from './icons/Settings';

interface FriendsProps {
  onInvite: () => void;
  dailyRewardTimeLeft: string;
  dailyCipherTimeLeft: string;
  dailyComboTimeLeft: string;
  collectDailyReward: () => void;
  collectDailyCipher: () => void;
  collectDailyCombo: () => void;
  setCurrentPage: (page: string) => void;
}

const Friends: React.FC<FriendsProps> = ({
  onInvite,
  dailyRewardTimeLeft,
  dailyCipherTimeLeft,
  dailyComboTimeLeft,
  collectDailyReward,
  collectDailyCipher,
  collectDailyCombo,
  setCurrentPage
}) => {
  return (
    <div className="bg-[#dfe6e9] flex justify-center">
      <div className="w-full bg-[#dfe6e9] text-[#2d3436] h-screen font-bold flex flex-col max-w-xl">
        <div className="px-4 z-10">
          <div className="flex items-center space-x-2 pt-4">
            <div className="p-1 rounded-lg bg-[#74b9ff]">
              <Hamster size={24} className="text-[#2d3436]" />
            </div>
            <div>
              <p className="text-sm">David (CEO)</p>
            </div>
          </div>
          <div className="flex items-center justify-between space-x-4 mt-1">
            <div className="flex items-center w-1/3">
              <div className="w-full">
                <div className="flex justify-between">
                  <p className="text-sm">Legendary</p>
                  <p className="text-sm">7 <span className="text-[#74b9ff]">/ 10</span></p>
                </div>
                <div className="flex items-center mt-1 border-2 border-[#6c5ce7] rounded-full">
                  <div className="w-full h-2 bg-[#6c5ce7]/[0.6] rounded-full">
                    <div className="bg-[#6c5ce7] h-2 rounded-full" style={{ width: `75%` }}></div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex items-center w-2/3 border-2 border-[#6c5ce7] rounded-full px-4 py-[2px] bg-[#6c5ce7]/[0.6] max-w-64">
              <img src={binanceLogo} alt="Exchange" className="w-8 h-8" />
              <div className="h-[32px] w-[2px] bg-[#6c5ce7] mx-2"></div>
              <div className="flex-1 text-center">
                <p className="text-xs text-[#50e3c2] font-medium">Profit per hour</p>
                <div className="flex items-center justify-center space-x-1">
                  <img src={dollarCoin} alt="Dollar Coin" className="w-[18px] h-[18px]" />
                  <p className="text-sm">+126.42K</p>
                  <Info size={20} className="text-[#6c5ce7]" />
                </div>
              </div>
              <div className="h-[32px] w-[2px] bg-[#6c5ce7] mx-2"></div>
              <Settings className="text-[#2d3436]" />
            </div>
          </div>
        </div>

        <div className="flex-grow mt-4 bg-[#74b9ff] rounded-t-[48px] relative z-0">
          <div className="absolute top-[2px] left-0 right-0 bottom-0 bg-[#dfe6e9] rounded-t-[46px]">
            <div className="px-4 mt-6 flex justify-between gap-2">
              <div className="bg-[#6c5ce7] rounded-lg px-4 py-2 w-full relative">
                <div className="dot"></div>
                <img src={dailyReward} alt="Daily Reward" className="mx-auto w-12 h-12" />
                <p className="text-[10px] text-center text-[#2d3436] mt-1">Daily reward</p>
                <p className="text-[10px] font-medium text-center text-gray-400 mt-2">{dailyRewardTimeLeft}</p>
                {dailyRewardTimeLeft === "00:00" && (
                  <button onClick={collectDailyReward} className="text-white mt-2 bg-blue-500 rounded px-2 py-1">Collect</button>
                )}
              </div>
              <div className="bg-[#6c5ce7] rounded-lg px-4 py-2 w-full relative">
                <div className="dot"></div>
                <img src={dailyCipher} alt="Daily Cipher" className="mx-auto w-12 h-12" />
                <p className="text-[10px] text-center text-[#2d3436] mt-1">Daily cipher</p>
                <p className="text-[10px] font-medium text-center text-gray-400 mt-2">{dailyCipherTimeLeft}</p>
                {dailyCipherTimeLeft === "00:00" && (
                  <button onClick={collectDailyCipher} className="text-white mt-2 bg-blue-500 rounded px-2 py-1">Collect</button>
                )}
              </div>
              <div className="bg-[#6c5ce7] rounded-lg px-4 py-2 w-full relative">
                <div className="dot"></div>
                <img src={dailyCombo} alt="Daily Combo" className="mx-auto w-12 h-12" />
                <p className="text-[10px] text-center text-[#2d3436] mt-1">Daily combo</p>
                <p className="text-[10px] font-medium text-center text-gray-400 mt-2">{dailyComboTimeLeft}</p>
                {dailyComboTimeLeft === "00:00" && (
                  <button onClick={collectDailyCombo} className="text-white mt-2 bg-blue-500 rounded px-2 py-1">Collect</button>
                )}
              </div>
            </div>

            <div className="px-4 mt-4 flex justify-center">
              <div className="px-4 py-2 flex items-center space-x-2">
                <h1 className="text-2xl font-bold mb-6">Invite friends!</h1>
                <p className="text-lg mb-6">You and your friend will receive bonuses.</p>
                <button
                  className="mt-6 bg-[#0984e3] text-white py-2 px-4 rounded-full"
                  onClick={onInvite}
                >
                  Invite a friend (500,000)
                </button>
              </div>
            </div>

            <div className="fixed bottom-0 left-1/2 transform -translate-x-1/2 w-[calc(100%-2rem)] max-w-xl bg-[#6c5ce7] flex justify-around items-center z-50 rounded-3xl text-xs">
              <div className="text-center text-[#50e3c2] w-1/5 bg-[#6c5ce7] m-1 p-2 rounded-2xl" onClick={() => setCurrentPage('home')}>
                <img src={binanceLogo} alt="Exchange" className="w-8 h-8 mx-auto" />
                <p className="mt-1">Exchange</p>
              </div>
              <div className="text-center text-[#50e3c2] w-1/5">
                <Mine className="w-8 h-8 mx-auto" />
                <p className="mt-1">Mine</p>
              </div>
              <div className="text-center text-[#50e3c2] w-1/5" onClick={() => setCurrentPage('friends')}>
                <FriendsIcon className="w-8 h-8 mx-auto" />
                <p className="mt-1">Friends</p>
              </div>
              <div className="text-center text-[#50e3c2] w-1/5" onClick={() => setCurrentPage('earn')}>
                <Coins className="w-8 h-8 mx-auto" />
                <p className="mt-1">Earn</p>
              </div>
              <div className="text-center text-[#50e3c2] w-1/5">
                <img src={hamsterCoin} alt="Airdrop" className="w-8 h-8 mx-auto" />
                <p className="mt-1">Airdrop</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Friends;