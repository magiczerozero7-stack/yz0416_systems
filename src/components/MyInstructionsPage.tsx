import React from 'react';
import { ChevronLeft } from 'lucide-react';
import { motion } from 'motion/react';
import { MY_INSTRUCTIONS_DATA } from '../data';

interface MyInstructionsPageProps {
  onBack: () => void;
  onSelect: (id: number) => void;
}

const MyInstructionsPage: React.FC<MyInstructionsPageProps> = ({ onBack, onSelect }) => {
  return (
    <div className="flex flex-col min-h-full bg-[#F5F7FA]">
      {/* Header - Sticky for better UX while scrolling */}
      <div className="bg-[#2B7FFF] h-14 flex items-center px-4 shrink-0 sticky top-0 z-30 shadow-sm">
        <button 
          onClick={onBack}
          className="p-1 -ml-1 text-white hover:bg-white/10 rounded-full transition-colors"
        >
          <ChevronLeft size={28} />
        </button>
        <h1 className="flex-1 text-center text-white text-lg font-medium mr-8">我的批示</h1>
      </div>

      {/* Content - Removed overflow-y-auto to use global scroll */}
      <div className="p-4 space-y-4">
        {MY_INSTRUCTIONS_DATA.map((item, index) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            onClick={() => onSelect(item.id)}
            className="bg-white rounded-xl p-5 shadow-sm border border-gray-50 cursor-pointer active:bg-gray-50 transition-colors"
          >
            {/* Title with Blue Bar */}
            <div className="flex items-center mb-3">
              <div className="w-1 h-5 bg-[#2B7FFF] rounded-full mr-3" />
              <h2 className="text-base font-bold text-gray-900">{item.title}</h2>
            </div>

            {/* Details */}
            <div className="space-y-2.5 text-sm">
              <div className="flex">
                <span className="text-gray-400 w-[72px] shrink-0">建设单位：</span>
                <span className="text-gray-700 font-medium">{item.unit}</span>
              </div>
              <div className="flex">
                <span className="text-gray-400 w-[72px] shrink-0">批示内容：</span>
                <span className="text-gray-700 leading-relaxed flex-1">{item.content}</span>
              </div>
              <div className="flex">
                <span className="text-gray-400 w-[72px] shrink-0">批示日期：</span>
                <span className="text-gray-700">{item.date}</span>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default MyInstructionsPage;
