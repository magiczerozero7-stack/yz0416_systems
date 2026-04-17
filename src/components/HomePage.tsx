import React from 'react';
import { motion } from 'motion/react';
import { 
  ChevronDown,
  Search,
  Bell,
  LogOut
} from 'lucide-react';
import { createPortal } from 'react-dom';
import { AnimatePresence } from 'motion/react';
import TechProjectView from './TechProjectView';
import DigitalProjectView from './DigitalProjectView';

// --- Types ---
interface HomePageProps {
  projectType: string;
  setProjectType: (type: string) => void;
  quarter: string;
  setQuarter: (q: string) => void;
  groupTab: string;
  setGroupTab: (tab: string) => void;
  selectedYear: string;
  setSelectedYear: (year: string) => void;
  isYearDropdownOpen: boolean;
  setIsYearDropdownOpen: (open: boolean) => void;
  dropdownPos: { top: number; left: number };
  yearButtonRef: React.RefObject<HTMLButtonElement>;
  setIsLoggedIn: (loggedIn: boolean) => void;
}

const HomePage: React.FC<HomePageProps> = ({
  projectType,
  setProjectType,
  quarter,
  setQuarter,
  groupTab,
  setGroupTab,
  selectedYear,
  setSelectedYear,
  isYearDropdownOpen,
  setIsYearDropdownOpen,
  dropdownPos,
  yearButtonRef,
  setIsLoggedIn
}) => {
  const years = ['2024', '2025', '2026'];

  return (
    <div className="relative min-h-full overflow-x-hidden">
      {/* --- Sharp Background Split (Blue top, Gray bottom) --- */}
      <div 
        className="absolute top-0 left-0 right-0 h-[156px] md:h-[170px] bg-blue-600 md:bg-[#2662F3] z-0" 
        aria-hidden="true"
      >
        {/* Subtle decorative element */}
        <div className="absolute top-[-20%] right-[-10%] w-72 h-72 bg-white/5 rounded-full blur-3xl" />
      </div>

      {/* --- Sticky Compact Header --- */}
      <header className="sticky top-0 z-40 w-full bg-blue-600 md:bg-[#2662F3] px-4 pt-6 pb-2.5 md:px-8 md:pt-3 md:pb-1.5 flex flex-col border-b border-blue-500/20">
        <div className="relative z-10 flex flex-col w-full max-w-7xl mx-auto">
          <div className="flex items-center justify-between mb-1.5 md:mb-1.5">
            <div className="relative">
              <button 
                ref={yearButtonRef}
                onClick={() => setIsYearDropdownOpen(!isYearDropdownOpen)}
                className="flex items-center bg-white/20 backdrop-blur-md px-3 py-1.5 rounded-xl border border-white/20 hover:bg-white/30 transition-colors"
              >
                <span className="text-white text-xs font-normal">{selectedYear}年</span>
                <ChevronDown size={14} className={`text-white ml-1 transition-transform ${isYearDropdownOpen ? 'rotate-180' : ''}`} />
              </button>
              
              {isYearDropdownOpen && createPortal(
                <AnimatePresence mode="wait">
                  <motion.div 
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    style={{ 
                      position: 'fixed',
                      top: dropdownPos.top,
                      left: dropdownPos.left,
                      zIndex: 9999
                    }}
                    className="w-24 bg-white rounded-xl shadow-2xl border border-gray-100 overflow-hidden"
                  >
                    {years.map(year => (
                      <button
                        key={year}
                        onClick={() => {
                          setSelectedYear(year);
                          setIsYearDropdownOpen(false);
                        }}
                        className={`w-full px-4 py-2 text-left text-sm font-bold hover:bg-blue-50 transition-colors ${
                          selectedYear === year ? 'text-blue-600 bg-blue-50/50' : 'text-gray-600'
                        }`}
                      >
                        {year}年
                      </button>
                    ))}
                  </motion.div>
                </AnimatePresence>,
                document.body
              )}
            </div>
            
            <div className="flex items-center space-x-5">
              <Search className="text-white cursor-pointer hover:opacity-80 transition-opacity" size={22} />
              <Bell className="text-white cursor-pointer hover:opacity-80 transition-opacity" size={22} />
              <button 
                onClick={() => setIsLoggedIn(false)}
                className="flex items-center space-x-1 bg-white/10 backdrop-blur-md px-2 py-1 rounded-lg border border-white/20 hover:bg-white/30 transition-all group"
                title="退出登录"
              >
                <LogOut className="text-white group-hover:translate-x-0.5 transition-transform" size={18} />
                <span className="text-white text-xs font-bold hidden sm:block">退出</span>
              </button>
            </div>
          </div>

          <div className="flex items-center justify-center md:justify-end mt-0.5 md:mt-0">
            {/* Project Type Tabs */}
            <div className="flex bg-white/10 backdrop-blur-md p-1 rounded-[30px] border border-white/10 w-full md:w-auto">
              {['科技研发项目', '数字化项目'].map((tab) => (
                <button
                  key={tab}
                  onClick={() => setProjectType(tab)}
                  className={`flex-1 md:flex-none px-6 py-2 text-xs md:text-sm font-bold rounded-[30px] transition-all whitespace-nowrap ${
                    projectType === tab 
                      ? 'bg-white text-blue-600 md:shadow-none' 
                      : 'text-white/70 hover:text-white'
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>
          </div>
        </div>
      </header>

      {/* --- Content Grid --- */}
      <div className="relative z-10 pt-2 md:pt-3 pb-10">
        {projectType === '科技研发项目' ? (
          <TechProjectView 
            quarter={quarter} 
            setQuarter={setQuarter} 
            groupTab={groupTab} 
            setGroupTab={setGroupTab} 
          />
        ) : (
          <DigitalProjectView 
            quarter={quarter} 
            setQuarter={setQuarter} 
            groupTab={groupTab} 
            setGroupTab={setGroupTab} 
          />
        )}
      </div>

      {/* Footer Padding */}
      <div className="h-4 md:h-8" />
    </div>
  );
};

export default HomePage;
