import React from 'react';
import { ChevronLeft } from 'lucide-react';
import { motion } from 'motion/react';
import { MY_INSTRUCTIONS_DATA } from '../data';

interface MyInstructionsDetailPageProps {
  instructionId: number;
  onBack: () => void;
}

const MyInstructionsDetailPage: React.FC<MyInstructionsDetailPageProps> = ({ instructionId, onBack }) => {
  const data = MY_INSTRUCTIONS_DATA.find(item => item.id === instructionId);

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
        <h1 className="flex-1 text-center text-white text-lg font-medium mr-8">我的批示-详情页</h1>
      </div>

      {/* Content */}
      <div className="p-4 space-y-4">
        {/* Instruction Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white rounded-xl p-5 shadow-sm border border-gray-50"
        >
          <div className="flex items-center mb-4">
            <div className="w-1 h-5 bg-[#2B7FFF] rounded-full mr-3" />
            <h2 className="text-base font-bold text-gray-900 leading-tight">{data.title}</h2>
          </div>

          <div className="space-y-3.5 text-sm">
            <div className="flex">
              <span className="text-gray-400 w-[80px] shrink-0">建设单位：</span>
              <span className="text-gray-700 font-medium">{data.unit}</span>
            </div>
            <div className="flex">
              <span className="text-gray-400 w-[80px] shrink-0">批示内容：</span>
              <span className="text-gray-700 leading-relaxed flex-1">{data.content}</span>
            </div>
            <div className="flex">
              <span className="text-gray-400 w-[80px] shrink-0">批示时间：</span>
              <span className="text-gray-700">{data.date}</span>
            </div>
          </div>
        </motion.div>

        {/* Reply Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="bg-white rounded-xl p-5 shadow-sm border border-gray-50"
        >
          <div className="flex items-center mb-4">
            <div className="w-1 h-5 bg-[#F59E0B] rounded-full mr-3" />
            <h2 className="text-base font-bold text-gray-900">批示回复</h2>
          </div>

          <div className="space-y-4 text-sm">
            <div className="flex">
              <span className="text-gray-400 w-[105px] shrink-0">建设单位回复：</span>
              <span className="text-gray-700 leading-relaxed flex-1">{data.replies?.unitReply}</span>
            </div>
            <div className="flex">
              <span className="text-gray-400 w-[105px] shrink-0">其他回复：</span>
              <span className="text-gray-700 leading-relaxed flex-1">{data.replies?.otherReply}</span>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default MyInstructionsDetailPage;
