import React from 'react';
import { ChevronLeft } from 'lucide-react';
import { motion } from 'motion/react';
import { MY_FOLLOWS_DATA } from '../data';

interface MyFollowsDetailPageProps {
  followId: number;
  onBack: () => void;
}

const MyFollowsDetailPage: React.FC<MyFollowsDetailPageProps> = ({ followId, onBack }) => {
  const data = MY_FOLLOWS_DATA.find(item => item.id === followId);

  if (!data) return null;

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
        <h1 className="flex-1 text-center text-white text-lg font-medium mr-8">我的关注-详情页</h1>
      </div>

      {/* Content */}
      <div className="p-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white rounded-xl p-5 shadow-sm border border-gray-50"
        >
          {/* Title with Blue Bar */}
          <div className="flex items-center mb-4">
            <div className="w-1 h-5 bg-[#2B7FFF] rounded-full mr-3" />
            <h2 className="text-base font-bold text-gray-900 leading-tight">{data.title}</h2>
          </div>

          {/* Details */}
          <div className="space-y-3.5 text-sm">
            <div className="flex">
              <span className="text-gray-400 w-[80px] shrink-0">建设单位：</span>
              <span className="text-gray-700 font-medium">{data.unit}</span>
            </div>
            <div className="flex">
              <span className="text-gray-400 w-[80px] shrink-0">项目金额：</span>
              <span className="text-gray-700 font-medium">{data.amount}</span>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default MyFollowsDetailPage;
