import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  ChevronDown, 
  ChevronLeft
} from 'lucide-react';
import { PROJECT_LIBRARY_DATA, DIGITAL_PROJECT_LIBRARY_DATA } from '../data';
import TechProjectList from './TechProjectList';
import DigitalProjectList from './DigitalProjectList';

const YEAR_OPTIONS = ['2026', '2027'];
const DEPT_OPTIONS = ['服贸公司', '城市更新 (星箭公司)', '生物医药 (科技公司)', '科创公司'];
const TYPE_OPTIONS = ['建设项目', '运维项目', '网安项目', '服务项目', '其他'];
const AMOUNT_OPTIONS = ['小于等于100万元', '100万元-500万元 (不含)', '大于等于500万元'];

interface PickerModalProps {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: (value: string) => void;
  options: string[];
  title: string;
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

const ProjectLibraryPage: React.FC<{ onBack: () => void; onInstruct: (project: any) => void }> = ({ onBack, onInstruct }) => {
  const [activeTab, setActiveTab] = useState('科技研发项目');
  const [searchQuery, setSearchQuery] = useState('');
  const [techProjects, setTechProjects] = useState(PROJECT_LIBRARY_DATA);
  const [digitalProjects, setDigitalProjects] = useState(DIGITAL_PROJECT_LIBRARY_DATA);

  const [activePicker, setActivePicker] = useState<string | null>(null);
  const [filters, setFilters] = useState({
    year: '',
    dept: '',
    type: '',
    amount: ''
  });

  const toggleFollowTech = (id: number) => {
    setTechProjects(prev => prev.map(p => 
      p.id === id ? { ...p, isFollowed: !p.isFollowed } : p
    ));
  };

  const toggleFollowDigital = (id: number) => {
    setDigitalProjects(prev => prev.map(p => 
      p.id === id ? { ...p, isFollowed: !p.isFollowed } : p
    ));
  };

  const handleConfirm = (value: string) => {
    if (activePicker) {
      setFilters(prev => ({ ...prev, [activePicker]: value }));
      setActivePicker(null);
    }
  };

  return (
    <div className="flex-1 flex flex-col bg-[#F5F7FA] min-h-screen pb-20">
      {/* Header */}
      <div className="bg-[#2B7FFF] h-14 flex items-center px-4 sticky top-0 z-50 shadow-sm">
        <button onClick={onBack} className="text-white p-1 -ml-1 hover:bg-white/10 rounded-full transition-colors">
          <ChevronLeft size={28} />
        </button>
        <h1 className="flex-1 text-center text-white font-medium text-lg mr-8">项目库</h1>
      </div>

      {/* Tabs */}
      <div className="bg-white flex border-b border-gray-100 sticky top-14 z-40">
        {['科技研发项目', '数字化项目'].map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`flex-1 py-3.5 text-[15px] font-medium transition-all relative ${
              activeTab === tab ? 'text-[#2B7FFF]' : 'text-gray-500'
            }`}
          >
            {tab}
            {activeTab === tab && (
              <motion.div 
                layoutId="library-tab-underline" 
                className="absolute bottom-0 left-1/4 right-1/4 h-0.5 bg-[#2B7FFF] rounded-full" 
              />
            )}
          </button>
        ))}
      </div>

      {/* Search & Filters */}
      <div className="p-4 space-y-3 bg-white">
        <div className="flex space-x-2">
          <div className="flex-1 relative">
            <input
              type="text"
              placeholder="请输入"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-white border border-gray-100 rounded-md py-2 px-4 text-[15px] focus:outline-none placeholder:text-gray-300"
            />
          </div>
          <button className="bg-[#2B7FFF] text-white px-8 py-2 rounded-md text-[15px] font-medium active:scale-95 transition-transform">
            搜索
          </button>
        </div>

        <div className="grid grid-cols-2 gap-3">
          <button 
            onClick={() => setActivePicker('year')}
            className="bg-[#F5F7FA] rounded-md px-4 py-2.5 flex items-center justify-between text-gray-600 text-[15px] active:bg-gray-200 transition-colors"
          >
            <span className={filters.year ? 'text-gray-900' : ''}>{filters.year || '选择年份'}</span>
            <ChevronDown size={20} className="text-gray-400" />
          </button>
          <button 
            onClick={() => setActivePicker('dept')}
            className="bg-[#F5F7FA] rounded-md px-4 py-2.5 flex items-center justify-between text-gray-600 text-[15px] active:bg-gray-200 transition-colors"
          >
            <span className={filters.dept ? 'text-gray-900' : ''}>{filters.dept || '选择部门'}</span>
            <ChevronDown size={20} className="text-gray-400" />
          </button>
          <button 
            onClick={() => setActivePicker('type')}
            className="bg-[#F5F7FA] rounded-md px-4 py-2.5 flex items-center justify-between text-gray-600 text-[15px] active:bg-gray-200 transition-colors"
          >
            <span className={filters.type ? 'text-gray-900' : ''}>{filters.type || '项目类型'}</span>
            <ChevronDown size={20} className="text-gray-400" />
          </button>
          <button 
            onClick={() => setActivePicker('amount')}
            className="bg-[#F5F7FA] rounded-md px-4 py-2.5 flex items-center justify-between text-gray-600 text-[15px] active:bg-gray-200 transition-colors"
          >
            <span className={filters.amount ? 'text-gray-900' : ''}>{filters.amount || '合同金额'}</span>
            <ChevronDown size={20} className="text-gray-400" />
          </button>
        </div>
      </div>

      {/* Project List */}
      <div className="flex-1">
        {activeTab === '科技研发项目' ? (
          <TechProjectList 
            projects={techProjects} 
            onToggleFollow={toggleFollowTech} 
            onInstruct={onInstruct}
          />
        ) : (
          <DigitalProjectList 
            projects={digitalProjects} 
            onToggleFollow={toggleFollowDigital} 
            onInstruct={onInstruct}
          />
        )}
      </div>

      {/* Pickers */}
      <PickerModal
        isOpen={activePicker === 'year'}
        onClose={() => setActivePicker(null)}
        onConfirm={handleConfirm}
        options={YEAR_OPTIONS}
        title="选择年份"
        selectedValue={filters.year}
      />
      <PickerModal
        isOpen={activePicker === 'dept'}
        onClose={() => setActivePicker(null)}
        onConfirm={handleConfirm}
        options={DEPT_OPTIONS}
        title="选择部门"
        selectedValue={filters.dept}
      />
      <PickerModal
        isOpen={activePicker === 'type'}
        onClose={() => setActivePicker(null)}
        onConfirm={handleConfirm}
        options={TYPE_OPTIONS}
        title="项目类型"
        selectedValue={filters.type}
      />
      <PickerModal
        isOpen={activePicker === 'amount'}
        onClose={() => setActivePicker(null)}
        onConfirm={handleConfirm}
        options={AMOUNT_OPTIONS}
        title="合同金额"
        selectedValue={filters.amount}
      />
    </div>
  );
};

export default ProjectLibraryPage;
