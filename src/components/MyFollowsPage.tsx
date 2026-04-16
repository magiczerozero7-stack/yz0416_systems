import React, { useState } from 'react';
import { ChevronLeft } from 'lucide-react';
import { motion } from 'motion/react';
import { MY_FOLLOWS_DATA } from '../data';

interface MyFollowsPageProps {
  onBack: () => void;
  onSelect: (id: number) => void;
}

const MyFollowsPage: React.FC<MyFollowsPageProps> = ({ onBack, onSelect }) => {
  const [follows, setFollows] = useState(MY_FOLLOWS_DATA);

  const toggleFollow = (e: React.MouseEvent, id: number) => {
    e.stopPropagation(); // Prevent card click
    setFollows(prev => prev.map(item => 
      item.id === id ? { ...item, isFollowed: !item.isFollowed } : item
    ));
  };

  return (
    <div className="flex flex-col min-h-full bg-[#F5F7FA]">
      {/* Header */}
      <div className="bg-[#2B7FFF] h-14 flex items-center px-4 shrink-0 sticky top-0 z-30 shadow-sm">
        <button 
          onClick={onBack}
          className="p-1 -ml-1 text-white hover:bg-white/10 rounded-full transition-colors"
        >
          <ChevronLeft size={28} />
        </button>
        <h1 className="flex-1 text-center text-white text-lg font-medium mr-8">我的关注</h1>
      </div>

      {/* Content */}
      <div className="p-4 space-y-4">
        {follows.map((item) => (
          <motion.div
            key={item.id}
            layout
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ 
              duration: 0.2,
              layout: { duration: 0.2 }
            }}
            onClick={() => onSelect(item.id)}
            className="bg-white rounded-xl p-5 shadow-sm border border-gray-50 relative cursor-pointer active:bg-gray-50 transition-colors"
          >
            {/* Title with Blue Bar */}
            <div className="flex items-center mb-3">
              <div className="w-1 h-5 bg-[#2B7FFF] rounded-full mr-3" />
              <h2 className="text-base font-bold text-gray-900 leading-tight pr-20">{item.title}</h2>
            </div>

            {/* Details */}
            <div className="space-y-2.5 text-sm">
              <div className="flex">
                <span className="text-gray-400 w-[80px] shrink-0">建设单位：</span>
                <span className="text-gray-700 font-medium">{item.unit}</span>
              </div>
              <div className="flex">
                <span className="text-gray-400 w-[80px] shrink-0">项目金额：</span>
                <span className="text-gray-700 font-medium">{item.amount}</span>
              </div>
            </div>

            {/* Follow Button */}
            <div className="absolute bottom-5 right-5">
              <button
                onClick={(e) => toggleFollow(e, item.id)}
                className={`px-4 py-1.5 rounded-lg text-sm font-medium transition-colors duration-200 ${
                  item.isFollowed 
                    ? 'bg-[#F09440] text-white shadow-sm' 
                    : 'bg-white text-gray-400 border border-gray-200'
                }`}
              >
                {item.isFollowed ? '已关注' : '关注'}
              </button>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default MyFollowsPage;
