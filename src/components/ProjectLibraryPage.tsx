import React, { useState } from 'react';
import { motion } from 'motion/react';
import { 
  Search, 
  ChevronDown, 
  ChevronLeft,
  Star
} from 'lucide-react';

interface Project {
  id: number;
  title: string;
  status: string;
  statusColor: string;
  department: string;
  amount: string;
  content: string;
}

const PROJECTS: Project[] = [
  {
    id: 1,
    title: '科技研发与数字化项目管理系统建设项目',
    status: '立项',
    statusColor: 'bg-blue-500',
    department: '科技与数字化部',
    amount: '100万元',
    content: '科技与数字化项目全生命周期管理建设科技与数字化项目全生命周期管理建设'
  },
  {
    id: 2,
    title: '科技研发与数字化项目管理系统建设项目',
    status: '采购',
    statusColor: 'bg-purple-500',
    department: '科技与数字化部',
    amount: '100万元',
    content: '科技与数字化项目全生命周期管理建设科技与数字化项目全生命周期管理建设'
  },
  {
    id: 3,
    title: '科技研发与数字化项目管理系统建设项目',
    status: '实施',
    statusColor: 'bg-orange-500',
    department: '科技与数字化部',
    amount: '100万元',
    content: '科技与数字化项目全生命周期管理建设科技与数字化项目全生命周期管理建设'
  },
  {
    id: 4,
    title: '科技研发与数字化项目管理系统建设项目',
    status: '上线',
    statusColor: 'bg-cyan-500',
    department: '科技与数字化部',
    amount: '100万元',
    content: '科技与数字化项目全生命周期管理建设科技与数字化项目全生命周期管理建设'
  },
  {
    id: 5,
    title: '科技研发与数字化项目管理系统建设项目',
    status: '验收',
    statusColor: 'bg-green-500',
    department: '科技与数字化部',
    amount: '100万元',
    content: '科技与数字化项目全生命周期管理建设科技与数字化项目全生命周期管理建设'
  }
];

const ProjectLibraryPage: React.FC<{ onBack: () => void }> = ({ onBack }) => {
  const [activeTab, setActiveTab] = useState('科技研发项目');
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <div className="flex-1 flex flex-col bg-gray-50 min-h-screen pb-20">
      {/* Header */}
      <div className="bg-blue-600 px-4 py-3 flex items-center sticky top-0 z-50">
        <button onClick={onBack} className="text-white p-1">
          <ChevronLeft size={24} />
        </button>
        <h1 className="flex-1 text-center text-white font-bold text-lg mr-6">项目库</h1>
      </div>

      {/* Tabs */}
      <div className="bg-white flex border-b border-gray-100 sticky top-[52px] z-40">
        {['数字化项目', '科技研发项目'].map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`flex-1 py-3 text-sm font-bold transition-all relative ${
              activeTab === tab ? 'text-blue-600' : 'text-gray-500'
            }`}
          >
            {tab}
            {activeTab === tab && (
              <motion.div 
                layoutId="library-tab-underline" 
                className="absolute bottom-0 left-1/4 right-1/4 h-0.5 bg-blue-600" 
              />
            )}
          </button>
        ))}
      </div>

      {/* Search & Filters */}
      <div className="p-4 space-y-3">
        <div className="flex space-x-2">
          <div className="flex-1 relative">
            <input
              type="text"
              placeholder="请输入"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-white border border-gray-200 rounded-lg py-2 pl-4 pr-10 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/20"
            />
          </div>
          <button className="bg-blue-600 text-white px-6 py-2 rounded-lg text-sm font-bold shadow-sm active:scale-95 transition-transform">
            搜索
          </button>
        </div>

        <div className="grid grid-cols-2 gap-3">
          <div className="bg-white border border-gray-100 rounded-lg px-3 py-2 flex items-center justify-between text-gray-600 text-xs font-medium">
            <span>选择年份</span>
            <ChevronDown size={14} />
          </div>
          <div className="bg-white border border-gray-100 rounded-lg px-3 py-2 flex items-center justify-between text-gray-600 text-xs font-medium">
            <span>选择部门</span>
            <ChevronDown size={14} />
          </div>
          <div className="bg-white border border-gray-100 rounded-lg px-3 py-2 flex items-center justify-between text-gray-600 text-xs font-medium">
            <span>项目类型</span>
            <ChevronDown size={14} />
          </div>
          <div className="bg-white border border-gray-100 rounded-lg px-3 py-2 flex items-center justify-between text-gray-600 text-xs font-medium">
            <span>合同金额</span>
            <ChevronDown size={14} />
          </div>
        </div>
      </div>

      {/* Project List */}
      <div className="px-4 space-y-4">
        {PROJECTS.map((project) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white rounded-xl shadow-sm border border-gray-50 overflow-hidden"
          >
            <div className="p-4">
              <div className="flex justify-between items-start mb-3">
                <span className={`${project.statusColor} text-white text-[10px] font-bold px-2 py-0.5 rounded-br-lg rounded-tl-sm -ml-4 -mt-4`}>
                  {project.status}
                </span>
                <span className="text-gray-400 text-[10px] font-medium">{project.department}</span>
              </div>
              
              <h3 className="text-sm font-bold text-gray-800 mb-3 leading-snug">
                {project.title}
              </h3>
              
              <div className="space-y-1.5 mb-4">
                <div className="flex text-xs">
                  <span className="text-gray-400 w-16">合同金额:</span>
                  <span className="text-gray-600 font-medium">{project.amount}</span>
                </div>
                <div className="flex text-xs">
                  <span className="text-gray-400 w-16 shrink-0">建设内容:</span>
                  <span className="text-gray-500 line-clamp-2 leading-relaxed">
                    {project.content}
                  </span>
                </div>
              </div>

              <div className="flex justify-end space-x-3 pt-3 border-t border-gray-50">
                <button className="px-5 py-1.5 border border-gray-200 rounded-lg text-xs font-bold text-gray-500 hover:bg-gray-50 transition-colors">
                  关注
                </button>
                <button className="px-5 py-1.5 bg-blue-600 text-white rounded-lg text-xs font-bold shadow-sm active:scale-95 transition-transform">
                  批示
                </button>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default ProjectLibraryPage;
