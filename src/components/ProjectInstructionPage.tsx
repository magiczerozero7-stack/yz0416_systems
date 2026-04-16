import React, { useState } from 'react';
import { ChevronLeft } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

const CC_UNIT_OPTIONS = ['科技数字化部', '产业促进部', '财务部', '党群工作部'];

interface PickerModalProps {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: (value: string) => void;
  options: string[];
  selectedValue: string;
}

const PickerModal: React.FC<PickerModalProps> = ({ isOpen, onClose, onConfirm, options, selectedValue }) => {
  const [tempValue, setTempValue] = useState(selectedValue || options[0]);

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/40 z-[100]"
          />
          <motion.div
            initial={{ y: '100%' }}
            animate={{ y: 0 }}
            exit={{ y: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed bottom-0 left-0 right-0 bg-white rounded-t-2xl z-[101] overflow-hidden pb-safe"
          >
            <div className="flex justify-between items-center px-4 py-3 border-b border-gray-100">
              <button onClick={onClose} className="text-[#2B7FFF] text-[15px]">取消</button>
              <button onClick={() => onConfirm(tempValue)} className="text-[#2B7FFF] text-[15px] font-medium">确定</button>
            </div>
            <div className="py-8 px-4 flex flex-col items-center max-h-[40vh] overflow-y-auto">
              {options.map((option) => (
                <button
                  key={option}
                  onClick={() => setTempValue(option)}
                  className={`w-full py-3 text-center text-[15px] transition-colors ${
                    tempValue === option ? 'text-gray-900 font-medium' : 'text-gray-300'
                  }`}
                >
                  {option}
                </button>
              ))}
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

interface ProjectInstructionPageProps {
  project: any;
  onBack: () => void;
  onCancel: () => void;
  onSend: () => void;
}

const ProjectInstructionPage: React.FC<ProjectInstructionPageProps> = ({ 
  project, 
  onBack, 
  onCancel, 
  onSend 
}) => {
  const [content, setContent] = useState('');
  const [ccUnit, setCcUnit] = useState('');
  const [isPickerOpen, setIsPickerOpen] = useState(false);

  return (
    <div className="flex-1 flex flex-col bg-white min-h-screen">
      {/* Header */}
      <div className="bg-[#2B7FFF] h-14 flex items-center px-4 sticky top-0 z-50 shadow-sm">
        <button onClick={onBack} className="text-white p-1 -ml-1 hover:bg-white/10 rounded-full transition-colors">
          <ChevronLeft size={28} />
        </button>
        <h1 className="flex-1 text-center text-white font-medium text-lg mr-8">批示</h1>
      </div>

      {/* Form Content */}
      <div className="flex-1 overflow-y-auto px-6 py-4 space-y-6">
        {/* Project Name */}
        <div className="space-y-3">
          <div className="flex items-start">
            <span className="text-gray-900 text-[15px] font-medium w-24 shrink-0">项目名称：</span>
            <span className="text-gray-800 text-[15px] leading-relaxed">
              {project?.title || '科技研发与数字化项目管理'}
            </span>
          </div>
          <div className="h-[1px] bg-gray-100 w-full" />
        </div>

        {/* Construction Unit */}
        <div className="space-y-3">
          <div className="flex items-start">
            <span className="text-gray-900 text-[15px] font-medium w-24 shrink-0">建设单位：</span>
            <span className="text-gray-800 text-[15px]">
              {project?.company || '科技与数字化部'}
            </span>
          </div>
          <div className="h-[1px] bg-gray-100 w-full" />
        </div>

        {/* Instruction Content */}
        <div className="space-y-3 relative">
          <div className="flex items-start">
            <span className="text-gray-900 text-[15px] font-medium w-24 shrink-0">批示内容：</span>
            <textarea
              value={content}
              onChange={(e) => setContent(e.target.value)}
              placeholder="请输入"
              className="flex-1 text-[15px] text-gray-800 placeholder:text-gray-300 focus:outline-none min-h-[120px] resize-none pt-0"
            />
          </div>
          <div className="absolute right-0 bottom-4 text-gray-400 text-[15px]">
            {content.length}
          </div>
          <div className="h-[1px] bg-gray-100 w-full" />
        </div>

        {/* CC Unit */}
        <div className="space-y-3">
          <div className="flex items-center">
            <span className="text-gray-900 text-[15px] font-medium w-24 shrink-0">抄送单位：</span>
            <button 
              onClick={() => setIsPickerOpen(true)}
              className={`flex-1 text-left text-[15px] ${ccUnit ? 'text-gray-800' : 'text-gray-300'}`}
            >
              {ccUnit || '请选择'}
            </button>
          </div>
          <div className="h-[1px] bg-gray-100 w-full" />
        </div>
      </div>

      {/* Footer Buttons */}
      <div className="p-4 bg-white border-t border-gray-50 flex space-x-4 pb-8 sticky bottom-0 z-50">
        <button 
          onClick={onCancel}
          className="flex-1 py-3 bg-[#D1D5DB] text-white rounded-full text-[15px] font-medium active:scale-95 transition-transform"
        >
          取消
        </button>
        <button 
          onClick={onSend}
          className="flex-1 py-3 bg-[#2B7FFF] text-white rounded-full text-[15px] font-medium shadow-lg shadow-blue-100 active:scale-95 transition-transform"
        >
          发送批示
        </button>
      </div>

      {/* CC Unit Picker */}
      <PickerModal
        isOpen={isPickerOpen}
        onClose={() => setIsPickerOpen(false)}
        onConfirm={(val) => {
          setCcUnit(val);
          setIsPickerOpen(false);
        }}
        options={CC_UNIT_OPTIONS}
        selectedValue={ccUnit}
      />
    </div>
  );
};

export default ProjectInstructionPage;
