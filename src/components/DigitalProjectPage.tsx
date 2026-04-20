import React, { useState } from 'react';
import { motion } from 'motion/react';
import { 
  TrendingUp,
  FileText,
  PlayCircle,
  CheckCircle2,
  AlertCircle
} from 'lucide-react';
import { 
  AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer,
  BarChart, Bar
} from 'recharts';

import { 
  YEARLY_COMPLETION_DATA,
  STAGE_CONVERSION_DATA,
  DIGITAL_RISK_DATA as RISK_DATA,
  PROGRESS_ANALYSIS_DATA,
  DIGITAL_DEPT_BUDGET_DATA as DEPT_BUDGET_DATA
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

const DigitalProjectPage: React.FC = () => {
  const [budgetTab, setBudgetTab] = useState('集团本部');

  return (
    <div className="space-y-4 md:space-y-6 pb-0">
      {/* Top Section: Completion & Stages */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
        {/* Left: Completion Rate */}
        <div className="bg-[#EEF4FF] rounded-2xl p-4 md:p-5 relative overflow-hidden min-h-[120px] md:min-h-[160px] flex flex-col justify-between">
          <div className="relative z-10">
            <h4 className="text-gray-700 text-sm md:text-base font-bold mb-1">年度项目完成率</h4>
            <div className="flex items-baseline">
              <span className="text-3xl md:text-4xl font-black text-blue-600 tracking-tight">98.32</span>
              <span className="text-blue-600 text-base md:text-lg font-bold ml-1">%</span>
            </div>
          </div>
          
          {/* Background Chart Graphic */}
          <div className="absolute bottom-0 left-0 right-0 h-16 opacity-40">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={YEARLY_COMPLETION_DATA}>
                <Area type="monotone" dataKey="value" stroke="#3B82F6" strokeWidth={2} fill="#3B82F6" fillOpacity={0.1} />
              </AreaChart>
            </ResponsiveContainer>
          </div>

          <div className="absolute top-4 right-4 w-24 h-24 md:w-32 md:h-32 opacity-80 md:hidden">
             <div className="relative w-full h-full">
                <motion.div 
                  initial={{ y: 10, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  className="absolute bottom-0 right-0 flex items-end space-x-1.5"
                >
                  {[40, 60, 30, 80, 50, 90].map((h, i) => (
                    <div 
                      key={i} 
                      className="w-2 md:w-2.5 bg-gradient-to-t from-blue-600 to-blue-400 rounded-t-sm" 
                      style={{ height: `${h}%`, opacity: 0.3 + (i * 0.1) }} 
                    />
                  ))}
                </motion.div>
                <TrendingUp className="absolute top-0 right-0 text-blue-400 opacity-50" size={32} />
              </div>
          </div>
        </div>

        {/* Right: Project Stages Grid */}
        <div className="grid grid-cols-2 gap-4">
          {[
            { label: '立项阶段', value: 10, icon: FileText, color: 'from-green-400 to-green-500' },
            { label: '采购阶段', value: 10, icon: PlayCircle, color: 'from-orange-400 to-orange-500' },
            { label: '实施阶段', value: 66, icon: PlayCircle, color: 'from-blue-500 to-indigo-600' },
            { label: '上线阶段', value: 33, icon: CheckCircle2, color: 'from-teal-400 to-cyan-500' },
          ].map((stage, idx) => (
            <div key={idx} className="bg-white rounded-2xl p-4 shadow-sm flex items-center justify-between">
              <div>
                <p className="text-gray-500 text-sm">{stage.label}</p>
                <div className="flex items-baseline mt-1">
                  <span className="text-xl font-black text-gray-800">{stage.value}</span>
                  <span className="text-gray-400 text-xs ml-1">个</span>
                </div>
              </div>
              <div className={`w-10 h-10 bg-gradient-to-br ${stage.color} rounded-xl flex items-center justify-center shadow-lg`}>
                <stage.icon className="text-white" size={20} />
              </div>
            </div>
          ))}
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
                <XAxis dataKey="stage" axisLine={{ stroke: '#E5E7EB' }} tickLine={true} tick={{ fontSize: 14, fill: '#111827' }} />
                <YAxis hide domain={[0, 100]} />
                <Tooltip formatter={(value: number) => [value, '转化率']} contentStyle={{ borderRadius: '12px', border: 'none', boxShadow: '0 4px 12px rgba(0,0,0,0.1)' }} />
                <Area type="monotone" dataKey="value" stroke="#3B82F6" strokeWidth={2} fill="url(#colorConversion)" dot={{ r: 4, fill: '#fff', stroke: '#3B82F6', strokeWidth: 2 }} label={{ position: 'top', fill: '#111827', fontSize: 14, offset: 10 }} />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </Card>

        <Card title="项目进度分析">
          <div className="h-44 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={PROGRESS_ANALYSIS_DATA} margin={{ top: 20, right: 10, left: -20, bottom: 20 }}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f0f0f0" />
                <XAxis dataKey="name" axisLine={{ stroke: '#E5E7EB' }} tickLine={false} tick={{ fontSize: 12, fill: '#374151' }} angle={-45} textAnchor="end" interval={0} />
                <YAxis axisLine={false} tickLine={false} tick={{ fontSize: 14, fill: '#9CA3AF' }} domain={[0, 100]} ticks={[0, 20, 40, 60, 80, 100]} />
                <Tooltip formatter={(value: number) => [value, '项目进度']} cursor={{ fill: '#f3f4f6' }} contentStyle={{ borderRadius: '12px', border: 'none', boxShadow: '0 4px 12px rgba(0,0,0,0.1)' }} />
                <Bar dataKey="value" fill="#3B82F6" radius={[6, 6, 0, 0]} barSize={12} stroke="none" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </Card>
      </div>

      {/* Bottom Section: Risk & Budget */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
        <Card title="风险规避">
          <div className="space-y-1.5">
            {RISK_DATA.map((risk, idx) => (
              <div key={idx} className="bg-gray-50 rounded-xl py-1.5 px-3 border border-gray-100">
                <div className="flex items-center justify-between mb-0.5">
                  <div className={`px-3 py-1 rounded-md ${risk.color} text-white text-xs font-bold`}>
                    {risk.level}
                  </div>
                  <div className="text-gray-700 text-sm font-bold">{risk.count}个</div>
                </div>
                <p className="text-gray-400 text-sm leading-relaxed">{risk.desc}</p>
              </div>
            ))}
          </div>
        </Card>

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
            {DEPT_BUDGET_DATA.map((item, idx) => {
              const maxVal = 25;
              return (
                <div key={idx} className="flex items-center space-x-4 pb-2.5 border-b border-dashed border-gray-100 last:border-0">
                  <div className="w-24 text-right">
                    <span className="text-gray-500 text-sm font-medium">{item.name}</span>
                  </div>
                  <div className="flex-1 space-y-1">
                    <div className="relative h-2 bg-gray-50 rounded-full overflow-hidden">
                      <motion.div 
                        initial={{ width: 0 }} 
                        animate={{ width: `${(item.budget / maxVal) * 100}%` }}
                        className="absolute top-0 left-0 h-full bg-[#4A86F7] rounded-full" 
                      />
                    </div>
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
    </div>
  );
};

export default DigitalProjectPage;
