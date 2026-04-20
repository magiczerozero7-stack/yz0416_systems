import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  ChevronDown, 
  Search, 
  Bell, 
  LogOut,
  TrendingUp,
  FileText,
  PlayCircle,
  CheckCircle2
} from 'lucide-react';
import { createPortal } from 'react-dom';
import DigitalProjectPage from './DigitalProjectPage';
import { 
  AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer,
  BarChart, Bar
} from 'recharts';

import { 
  YEARLY_COMPLETION_DATA,
  STAGE_CONVERSION_DATA,
  PROGRESS_ANALYSIS_DATA,
  TECH_DEPT_BUDGET_DATA as DEPT_BUDGET_DATA
} from '../data';

const Card = ({ title, children, className = "" }: { title?: string, children: React.ReactNode, className?: string }) => (
  <section className={`bg-white rounded-2xl shadow-sm p-4 flex flex-col ${className}`}>
    {title && (
      <div className="flex items-center mb-4">
        <div className="w-1 h-4 bg-blue-600 rounded-full mr-2" />
        <h3 className="text-gray-800 font-bold text-base">{title}</h3>
      </div>
    )}
    <div className="flex-1">
      {children}
    </div>
  </section>
);

const ProjectMonitorPage: React.FC<{
  setIsLoggedIn: (val: boolean) => void;
  selectedYear: string;
  setSelectedYear: (val: string) => void;
  projectType: string;
  setProjectType: (val: string) => void;
}> = ({ setIsLoggedIn, selectedYear, setSelectedYear, projectType, setProjectType }) => {
  const [isYearDropdownOpen, setIsYearDropdownOpen] = useState(false);
  const [dropdownPos, setDropdownPos] = useState({ top: 0, left: 0 });
  const yearButtonRef = useRef<HTMLButtonElement>(null);
  const [budgetTab, setBudgetTab] = useState('集团本部');

  const years = ['2024', '2025', '2026'];

  useEffect(() => {
    if (isYearDropdownOpen && yearButtonRef.current) {
      const rect = yearButtonRef.current.getBoundingClientRect();
      setDropdownPos({ top: rect.bottom + 8, left: rect.left });
    }
  }, [isYearDropdownOpen]);

  return (
    <div className="relative min-h-full bg-[#F9FAFB] pb-20 md:pb-2">
      {/* --- Background Split --- */}
      <div className="absolute top-0 left-0 right-0 h-[156px] md:h-[170px] bg-blue-600 md:bg-[#2662F3] z-0" />

      {/* --- Sticky Header --- */}
      <header className="sticky top-0 z-50 w-full bg-blue-600 md:bg-[#2662F3] px-4 pt-6 pb-2.5 md:px-8 md:py-3 flex flex-col">
        <div className="relative z-10 flex flex-col w-full max-w-7xl mx-auto">
          <div className="flex items-center justify-between mb-1.5">
            <div className="relative">
              <button 
                ref={yearButtonRef}
                onClick={() => setIsYearDropdownOpen(!isYearDropdownOpen)}
                className="flex items-center bg-white/20 backdrop-blur-md px-3 py-1.5 rounded-xl border border-white/20"
              >
                <span className="text-white text-xs">{selectedYear}年</span>
                <ChevronDown size={14} className="text-white ml-1" />
              </button>
              {isYearDropdownOpen && createPortal(
                <AnimatePresence>
                  <motion.div 
                    initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}
                    style={{ position: 'fixed', top: dropdownPos.top, left: dropdownPos.left, zIndex: 9999 }}
                    className="w-32 bg-white rounded-xl shadow-2xl border border-gray-100 overflow-hidden"
                  >
                    {years.map(y => (
                      <button key={y} onClick={() => { setSelectedYear(y); setIsYearDropdownOpen(false); }}
                        className={`w-full px-4 py-2 text-left text-sm font-bold hover:bg-blue-50 ${selectedYear === y ? 'text-blue-600' : 'text-gray-600'}`}>
                        {y}年
                      </button>
                    ))}
                  </motion.div>
                </AnimatePresence>, document.body
              )}
            </div>
            <div className="flex items-center space-x-5">
              <Search className="text-white cursor-pointer" size={22} />
              <Bell className="text-white cursor-pointer" size={22} />
              <button onClick={() => setIsLoggedIn(false)} className="flex items-center space-x-1 bg-white/10 px-2 py-1 rounded-lg border border-white/20">
                <LogOut className="text-white" size={18} />
                <span className="text-white text-xs font-bold hidden sm:block">退出</span>
              </button>
            </div>
          </div>
          <div className="flex items-center justify-center md:justify-end mt-0.5">
            <div className="flex bg-white/10 backdrop-blur-md p-1 rounded-[30px] border border-white/10 w-full md:w-auto">
              {['科技研发项目', '数字化项目'].map((tab) => (
                <button key={tab} onClick={() => setProjectType(tab)}
                  className={`flex-1 md:flex-none px-6 py-2 text-xs md:text-sm font-bold rounded-[30px] transition-all ${projectType === tab ? 'bg-white text-blue-600' : 'text-white/70'}`}>
                  {tab}
                </button>
              ))}
            </div>
          </div>
        </div>
      </header>

      {/* --- Content --- */}
      <main className="relative z-10 max-w-7xl mx-auto px-4 md:px-8 pt-3 md:pt-6 pb-0">
        {projectType === '科技研发项目' ? (
          <div className="space-y-4 md:space-y-6">
            {/* Top Section: Completion Rate & Stages - REDESIGNED per Ref Image */}
            <div className="space-y-4">
              {/* Yearly Completion Rate Card - Reduced Height and Font Sizes */}
              <div className="bg-[#EEF4FF] rounded-2xl p-4 md:p-5 relative overflow-hidden min-h-[100px] md:min-h-[120px]">
                <div className="relative z-10">
                  <h4 className="text-gray-700 text-sm md:text-base font-bold mb-1">年度项目完成率</h4>
                  <div className="flex items-baseline">
                    <span className="text-2xl md:text-3xl font-black text-blue-600 tracking-tight">98.32</span>
                    <span className="text-blue-600 text-sm md:text-base font-bold ml-1">%</span>
                  </div>
                </div>
                
                {/* Background Chart Graphic */}
                <div className="absolute bottom-0 left-0 right-0 h-12 opacity-40">
                  <ResponsiveContainer width="100%" height="100%">
                    <AreaChart data={YEARLY_COMPLETION_DATA}>
                      <Area type="monotone" dataKey="value" stroke="#3B82F6" strokeWidth={2} fill="#3B82F6" fillOpacity={0.1} />
                    </AreaChart>
                  </ResponsiveContainer>
                </div>

                {/* Right Side 3D-style Graphic Placeholder - Scaled Down */}
                <div className="absolute top-2 right-2 w-16 h-16 md:w-20 md:h-20 pointer-events-none md:hidden">
                  <div className="relative w-full h-full">
                    <motion.div 
                      initial={{ y: 10, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      className="absolute bottom-0 right-0 flex items-end space-x-1"
                    >
                      {[40, 60, 30, 80, 50, 90].map((h, i) => (
                        <div 
                          key={i} 
                          className="w-1.5 bg-gradient-to-t from-blue-600 to-blue-400 rounded-t-sm" 
                          style={{ height: `${h}%`, opacity: 0.3 + (i * 0.1) }} 
                        />
                      ))}
                    </motion.div>
                    <TrendingUp className="absolute top-0 right-0 text-blue-400 opacity-50" size={24} />
                  </div>
                </div>
              </div>

              {/* Project Stages Grid - Redesigned with #F2F4FC and '个' unit */}
              <div className="grid grid-cols-1 md:grid-cols-1 gap-4">
                <div className="grid grid-cols-2 md:grid-cols-2 gap-4">
                  {/* Left: 立项阶段 */}
                  <div className="bg-[#F2F4FC] rounded-2xl p-4 md:p-5 flex flex-col justify-between min-h-[140px] md:min-h-[160px] relative overflow-hidden">
                    <div className="relative z-10">
                      <p className="text-gray-500 text-sm md:text-base font-normal">立项阶段</p>
                      <div className="flex items-baseline mt-1">
                        <span className="text-2xl md:text-3xl font-black text-gray-800">10</span>
                        <span className="text-gray-400 text-xs md:text-sm ml-1 font-medium">个</span>
                      </div>
                    </div>
                    <div className="flex justify-end relative z-10">
                      <div className="w-12 h-12 md:w-14 md:h-14 bg-gradient-to-br from-green-400 to-green-500 rounded-2xl shadow-lg shadow-green-200 flex items-center justify-center rotate-12">
                        <FileText className="text-white" size={24} />
                      </div>
                    </div>
                  </div>

                  {/* Right: Stacked 实施 and 上线 */}
                  <div className="flex flex-col gap-4">
                    {/* 实施阶段 */}
                    <div className="bg-[#F2F4FC] rounded-2xl p-4 flex items-center justify-between relative overflow-hidden min-h-[65px] md:min-h-[75px]">
                      <div>
                        <p className="text-gray-500 text-sm md:text-base font-normal">实施阶段</p>
                        <div className="flex items-baseline mt-0.5">
                          <span className="text-xl md:text-2xl font-black text-gray-800">66</span>
                          <span className="text-gray-400 text-xs md:text-sm ml-1 font-medium">个</span>
                        </div>
                      </div>
                      <div className="w-10 h-10 md:w-12 md:h-12 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-xl shadow-lg shadow-blue-200 flex items-center justify-center relative z-10">
                        <PlayCircle className="text-white" size={20} />
                      </div>
                    </div>
                    {/* 上线阶段 */}
                    <div className="bg-[#F2F4FC] rounded-2xl p-4 flex items-center justify-between relative overflow-hidden min-h-[65px] md:min-h-[75px]">
                      <div>
                        <p className="text-gray-500 text-sm md:text-base font-normal">上线阶段</p>
                        <div className="flex items-baseline mt-0.5">
                          <span className="text-xl md:text-2xl font-black text-gray-800">33</span>
                          <span className="text-gray-400 text-xs md:text-sm ml-1 font-medium">个</span>
                        </div>
                      </div>
                      <div className="w-10 h-10 md:w-12 md:h-12 bg-gradient-to-br from-teal-400 to-cyan-500 rounded-xl shadow-lg shadow-teal-200 flex items-center justify-center relative z-10">
                        <CheckCircle2 className="text-white" size={20} />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Middle Section: Conversion & Progress */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
              <Card title="项目阶段转化率">
                <div className="h-44 w-full">
                  <ResponsiveContainer width="100%" height="100%">
                    <AreaChart data={STAGE_CONVERSION_DATA} margin={{ top: 30, right: 20, left: 20, bottom: 0 }}>
                      <defs>
                        <linearGradient id="colorConversion" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="5%" stopColor="#3B82F6" stopOpacity={0.1}/>
                          <stop offset="95%" stopColor="#3B82F6" stopOpacity={0}/>
                        </linearGradient>
                      </defs>
                      <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f0f0f0" />
                      <XAxis 
                        dataKey="stage" 
                        axisLine={{ stroke: '#E5E7EB' }} 
                        tickLine={true} 
                        tick={{ fontSize: 14, fill: '#111827' }} 
                        padding={{ left: 10, right: 10 }}
                      />
                      <YAxis hide domain={[0, 100]} />
                      <Tooltip 
                        formatter={(value: number) => [value, '转化率']}
                        contentStyle={{ borderRadius: '12px', border: 'none', boxShadow: '0 4px 12px rgba(0,0,0,0.1)' }} 
                      />
                      <Area 
                        type="monotone" 
                        dataKey="value" 
                        stroke="#3B82F6" 
                        strokeWidth={2} 
                        fillOpacity={1} 
                        fill="url(#colorConversion)" 
                        dot={{ r: 5, fill: '#fff', stroke: '#3B82F6', strokeWidth: 2 }} 
                        label={{ position: 'top', fill: '#111827', fontSize: 16, offset: 10 }} 
                      />
                    </AreaChart>
                  </ResponsiveContainer>
                </div>
              </Card>

              <Card title="项目进度分析">
                <div className="h-44 w-full">
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={PROGRESS_ANALYSIS_DATA} margin={{ top: 20, right: 10, left: -20, bottom: 20 }}>
                      <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f0f0f0" />
                      <XAxis 
                        dataKey="name" 
                        axisLine={{ stroke: '#E5E7EB' }} 
                        tickLine={false} 
                        tick={{ fontSize: 12, fill: '#374151', fontWeight: 'medium' }} 
                        angle={-45}
                        textAnchor="end"
                        interval={0}
                      />
                      <YAxis 
                        axisLine={false} 
                        tickLine={false} 
                        tick={{ fontSize: 14, fill: '#9CA3AF' }} 
                        domain={[0, 100]}
                        ticks={[0, 20, 40, 60, 80, 100]}
                      />
                      <Tooltip 
                        formatter={(value: number) => [value, '项目进度']}
                        cursor={{ fill: '#f3f4f6' }} 
                        contentStyle={{ borderRadius: '12px', border: 'none', boxShadow: '0 4px 12px rgba(0,0,0,0.1)' }} 
                      />
                      <Bar dataKey="value" fill="#3B82F6" radius={[10, 10, 0, 0]} barSize={12} stroke="none" />
                    </BarChart>
                  </ResponsiveContainer>
                </div>
              </Card>
            </div>

            {/* Bottom Section: Budget Analysis */}
            <Card title="各部门预算执行分析">
              <div className="flex space-x-4 mb-4">
                <button 
                  onClick={() => setBudgetTab('集团本部')}
                  className={`flex-1 py-2 text-sm font-bold rounded-xl transition-all shadow-sm ${budgetTab === '集团本部' ? 'bg-blue-600 text-white shadow-blue-200' : 'bg-gray-100 text-gray-500'}`}
                >
                  集团本部
                </button>
                <button 
                  onClick={() => setBudgetTab('二级单位')}
                  className={`flex-1 py-2 text-sm font-bold rounded-xl transition-all shadow-sm ${budgetTab === '二级单位' ? 'bg-[#E5B36A] text-white shadow-orange-100' : 'bg-gray-100 text-gray-500'}`}
                >
                  二级单位
                </button>
              </div>
              <div className="space-y-2.5">
                {DEPT_BUDGET_DATA.map((item) => {
                  const maxVal = 25; // Scale based on max possible value in image
                  return (
                    <div key={item.name} className="flex items-center space-x-4 pb-2.5 border-b border-dashed border-gray-100 last:border-0">
                      <div className="w-24 text-right">
                        <span className="text-gray-500 text-sm font-medium">{item.name}</span>
                      </div>
                      <div className="flex-1 space-y-1">
                        {/* Budget Bar (Blue) */}
                        <div className="relative h-2 bg-gray-50 rounded-full overflow-hidden">
                          <motion.div 
                            initial={{ width: 0 }} 
                            animate={{ width: `${(item.budget / maxVal) * 100}%` }}
                            className="absolute top-0 left-0 h-full bg-[#4A86F7] rounded-full" 
                          />
                        </div>
                        {/* Actual Bar (Green) */}
                        <div className="relative h-2 bg-gray-50 rounded-full overflow-hidden">
                          <motion.div 
                            initial={{ width: 0 }} 
                            animate={{ width: `${(item.actual / maxVal) * 100}%` }}
                            className="absolute top-0 left-0 h-full bg-[#4ADE80] rounded-full" 
                          />
                        </div>
                      </div>
                      <div className="w-12 space-y-0.5">
                        <div className="text-gray-900 font-bold text-sm leading-none">{item.budget}</div>
                        <div className="text-gray-400 font-bold text-sm leading-none">{item.actual}</div>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Legend for Budget Analysis */}
              <div className="mt-4 pt-2 border-t border-gray-50 flex justify-center items-center space-x-6">
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-[#4A86F7] rounded-sm" />
                  <span className="text-gray-500 text-xs">预算</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-[#4ADE80] rounded-sm" />
                  <span className="text-gray-500 text-xs">已执行</span>
                </div>
              </div>
            </Card>
          </div>
        ) : (
          <DigitalProjectPage />
        )}
      </main>
    </div>
  );
};

export default ProjectMonitorPage;
