import React from 'react';
import { motion } from 'motion/react';
import { 
  Wallet, 
  TrendingUp, 
  FolderKanban, 
  ShieldCheck, 
} from 'lucide-react';
import { 
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, 
  PieChart, Pie, Cell, ReferenceLine, Legend
} from 'recharts';

import { 
  TECH_KPI_DATA as KPI_DATA,
  TECH_SECONDARY_KPI as SECONDARY_KPI,
  TECH_PROJECT_TYPES as PROJECT_TYPES,
  TECH_INVESTMENT_DIST as INVESTMENT_DIST,
  TECH_MONTHLY_INVESTMENT as MONTHLY_INVESTMENT,
  TECH_QUARTERLY_DATA as QUARTERLY_DATA,
  TECH_GROUP_DISTRIBUTION as GROUP_DISTRIBUTION
} from '../data';

const Card = ({ title, children, className = "" }: { title: string, children: React.ReactNode, className?: string }) => (
  <section className={`bg-white rounded-2xl shadow-sm p-4 flex flex-col ${className}`}>
    <div className="flex items-center mb-4">
      <div className="w-1 h-4 bg-blue-600 rounded-full mr-2" />
      <h3 className="text-gray-800 font-bold text-base">{title}</h3>
    </div>
    <div className="flex-1">
      {children}
    </div>
  </section>
);

const TechProjectView: React.FC<{ quarter: string, setQuarter: (q: string) => void, groupTab: string, setGroupTab: (tab: string) => void }> = ({
  quarter,
  setQuarter,
  groupTab,
  setGroupTab
}) => {
  return (
    <div className="px-4 md:px-8 relative z-20 space-y-4 md:space-y-6 max-w-7xl mx-auto w-full">
      {/* 1. KPI Cards Grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-6">
        {KPI_DATA.map((kpi) => (
          <motion.div 
            key={kpi.id}
            whileHover={{ y: -4 }}
            className="bg-white p-2.5 rounded-2xl shadow-sm border border-white flex flex-col justify-between"
          >
            <div className="flex items-center justify-between mb-0.5">
              <span className="text-gray-500 text-sm font-medium">{kpi.title}</span>
              <div className={`${kpi.bg} p-1 rounded-xl`}>
                <kpi.icon className={kpi.color} size={14} />
              </div>
            </div>
            <div className="flex items-baseline space-x-1">
              <span className="text-lg font-black text-gray-900">{kpi.value}</span>
              <span className="text-[10px] text-gray-400 font-bold">{kpi.unit}</span>
            </div>
          </motion.div>
        ))}
      </div>

      {/* 2. Secondary KPIs - REMOVED */}

      {/* 3. Main Charts Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
        <Card title="项目类型分布" className="lg:col-span-1">
          <div className="space-y-3 mt-0">
            {PROJECT_TYPES.map((type, idx) => (
              <div key={type.name} className="space-y-1">
                <div className="flex justify-between text-xs font-bold">
                  <span className="text-gray-700">{idx + 1}: {type.name}</span>
                  <span className="text-blue-600">{type.count}个</span>
                </div>
                <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                  <motion.div 
                    initial={{ width: 0 }}
                    animate={{ width: `${type.percentage}%` }}
                    transition={{ duration: 1, delay: idx * 0.1 }}
                    className="h-full bg-gradient-to-r from-blue-400 to-blue-600 rounded-full"
                  />
                </div>
              </div>
            ))}
          </div>
        </Card>

        <Card title="投资规模分布" className="lg:col-span-1">
          <div className="h-48 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={INVESTMENT_DIST}
                  cx="50%"
                  cy="50%"
                  innerRadius={40}
                  outerRadius={60}
                  paddingAngle={5}
                  dataKey="value"
                >
                  {INVESTMENT_DIST.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip contentStyle={{ borderRadius: '12px', border: 'none', boxShadow: '0 4px 12px rgba(0,0,0,0.1)' }} />
                <Legend verticalAlign="bottom" height={36} iconType="circle" wrapperStyle={{ fontSize: '10px', fontWeight: 'bold' }} />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </Card>

        <Card title="月度投资分析" className="lg:col-span-1">
          <div className="h-48 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={MONTHLY_INVESTMENT}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f0f0f0" />
                <XAxis dataKey="month" axisLine={false} tickLine={false} tick={{ fontSize: 9, fill: '#9CA3AF', fontWeight: 'bold' }} interval={0} />
                <YAxis hide />
                <Tooltip 
                  cursor={{ fill: '#f3f4f6' }} 
                  contentStyle={{ borderRadius: '12px', border: 'none', boxShadow: '0 4px 12px rgba(0,0,0,0.1)', fontSize: '10px' }}
                  formatter={(value: any) => [`${Math.round(value)} 万元`, '投资额']}
                  labelFormatter={(label) => `${label} 投资分析`}
                />
                <Bar dataKey="amount" fill="#3B82F6" radius={[4, 4, 0, 0]} barSize={12} />
                <ReferenceLine y={12000} stroke="#EF4444" strokeDasharray="3 3" label={{ position: 'right', value: '12000', fill: '#EF4444', fontSize: 10 }} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </Card>

        <Card title="季度进度分析" className="lg:col-span-1">
          <div className="flex bg-gray-50 p-1 rounded-xl mb-6">
            {Object.keys(QUARTERLY_DATA).map((q) => (
              <button 
                key={q} 
                onClick={() => setQuarter(q)} 
                className={`flex-1 py-1.5 text-[10px] font-bold rounded-lg transition-all border ${quarter === q ? 'bg-blue-50 text-blue-600 border-blue-100 shadow-sm' : 'bg-white text-gray-500 border-gray-100'}`}
              >
                {q}
              </button>
            ))}
          </div>
          
          <div className="grid grid-cols-2 gap-y-3 gap-x-2 mb-6 px-2">
            <div className="flex items-center space-x-2">
              <div className="w-2.5 h-2.5 rounded-sm bg-rose-400" />
              <span className="text-xs font-bold text-gray-700">立项</span>
              <span className="text-xs font-bold text-gray-500 ml-auto">8个</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-2.5 h-2.5 rounded-sm bg-amber-400" />
              <span className="text-xs font-bold text-gray-700">实施</span>
              <span className="text-xs font-bold text-gray-500 ml-auto">8个</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-2.5 h-2.5 rounded-sm bg-indigo-500" />
              <span className="text-xs font-bold text-gray-700">上线</span>
              <span className="text-xs font-bold text-gray-500 ml-auto">6个</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-2.5 h-2.5 rounded-sm bg-teal-400" />
              <span className="text-xs font-bold text-gray-700">验收</span>
              <span className="text-xs font-bold text-gray-500 ml-auto">10个</span>
            </div>
          </div>

          <div className="h-6 w-full flex rounded-sm overflow-hidden mt-4">
            {QUARTERLY_DATA[quarter as keyof typeof QUARTERLY_DATA].progress.map((p, i) => (
              <div 
                key={i} 
                style={{ width: `${p}%` }} 
                className={`${['bg-rose-400', 'bg-amber-400', 'bg-indigo-500', 'bg-teal-400'][i]} flex items-center justify-center`}
              >
                <span className="text-[10px] font-black text-white">{p}%</span>
              </div>
            ))}
          </div>
        </Card>

        <Card title="集团项目分布统计" className="md:col-span-2 lg:col-span-1">
          <div className="flex gap-3 mb-3">
            <button 
              onClick={() => setGroupTab('集团总部')} 
              className={`flex-1 py-1.5 text-sm font-normal transition-colors rounded-lg shadow-sm ${
                groupTab === '集团总部' 
                  ? 'bg-[#DDA451] text-white shadow-[#DDA451]/20' 
                  : 'bg-[#3B82F6] text-white shadow-blue-200'
              }`}
            >
              集团总部
            </button>
            <button 
              onClick={() => setGroupTab('属下企业')} 
              className={`flex-1 py-1.5 text-sm font-normal transition-colors rounded-lg shadow-md ${
                groupTab === '属下企业' 
                  ? 'bg-[#DDA451] text-white shadow-[#DDA451]/20' 
                  : 'bg-[#3B82F6] text-white shadow-blue-200'
              }`}
            >
              属下企业
            </button>
          </div>
          <div className="overflow-hidden">
            <table className="w-full border-separate border-spacing-y-1">
              <thead>
                <tr className="bg-[#F8F9FB]">
                  <th className="py-2 text-sm font-normal text-[#4B5563] text-center rounded-l-lg">建设单位</th>
                  <th className="py-2 text-sm font-normal text-[#4B5563] text-center rounded-r-lg">项目个数</th>
                </tr>
              </thead>
              <tbody>
                {GROUP_DISTRIBUTION.map((row, idx) => (
                  <tr key={row.dept} className={`${idx % 2 === 1 ? 'bg-[#F8F9FB]/50' : ''}`}>
                    <td className="py-2 text-sm font-normal text-[#4B5563] text-center rounded-l-lg">{row.dept}</td>
                    <td className="py-2 text-sm font-normal text-[#3B82F6] text-center rounded-r-lg">{row.count}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default TechProjectView;
