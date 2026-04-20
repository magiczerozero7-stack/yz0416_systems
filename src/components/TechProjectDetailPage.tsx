import React from 'react';
import { ChevronLeft, FileText } from 'lucide-react';

interface TechProjectDetailPageProps {
  project: any;
  onBack: () => void;
  onPreview: (file: any) => void;
}

const TechProjectDetailPage: React.FC<TechProjectDetailPageProps> = ({ project, onBack, onPreview }) => {
  if (!project) return null;

  // Mock timeline data matching reference
  const timelineItems = [
    { date: '2026年 01 月 31 日', title: '需求调研', progress: '当前进度：介绍业务流程，包括项目全生命周期管理及科研项目的管...' },
    { date: '2026年 03 月 30 日', title: '开发设计', progress: '当前进度：介绍业务流程，包括项目全生命周期管理及科研项目的管...' },
    { date: '2026年 04 月 30 日', title: '开发设计', progress: '当前进度：介绍业务流程，包括项目全生命周期管理及科研项目的管...' },
  ];

  return (
    <div className="flex-1 flex flex-col bg-[#F5F7FA] min-h-screen">
      {/* Header */}
      <div className="bg-[#2B7FFF] h-14 flex items-center px-4 sticky top-0 z-50 shadow-sm">
        <button onClick={onBack} className="text-white p-1 -ml-1 hover:bg-white/10 rounded-full transition-colors">
          <ChevronLeft size={28} />
        </button>
        <h1 className="flex-1 text-center text-white font-medium text-lg mr-8">项目详情</h1>
      </div>

      <div className="flex-1 overflow-y-auto p-3 space-y-3 pb-8">
        {/* Project Info Card */}
        <div className="bg-white rounded-xl p-5 space-y-4 shadow-sm">
          <div className="flex">
            <div className="w-1 bg-[#2B7FFF] rounded-full mr-3 shrink-0" />
            <h2 className="text-[15px] font-bold text-gray-900 leading-tight">
              {project.title}
            </h2>
          </div>

          <div className="space-y-1 pt-1">
            <div className="flex items-start text-[14px]">
              <span className="text-gray-400 w-20 shrink-0">项目类型：</span>
              <span className="text-gray-800">{project.company}</span>
            </div>
            <div className="flex items-start text-[14px]">
              <span className="text-gray-400 w-20 shrink-0">项目金额：</span>
              <span className="text-gray-800">企业自主立项项目</span>
            </div>
            <div className="flex items-start text-[14px]">
              <span className="text-gray-400 w-20 shrink-0">项目金额：</span>
              <span className="text-gray-800">{project.amount}</span>
            </div>
            <div className="flex items-start text-[14px]">
              <span className="text-gray-400 w-20 shrink-0">计划开始：</span>
              <span className="text-gray-800">2026-01-01</span>
            </div>
            <div className="flex items-start text-[14px]">
              <span className="text-gray-400 w-20 shrink-0">计划结束：</span>
              <span className="text-gray-800">2026-12-31</span>
            </div>
            <div className="flex items-start text-[14px]">
              <span className="text-gray-400 w-20 shrink-0">建设内容：</span>
              <span className="text-gray-800 leading-relaxed">
                {project.content}
              </span>
            </div>
          </div>
        </div>

        {/* Project Implementation Timeline Card */}
        <div className="bg-white rounded-xl p-5 space-y-6 shadow-sm">
          <div className="flex items-center">
            <div className="w-1 bg-[#2B7FFF] rounded-full mr-3 h-5 shrink-0" />
            <h3 className="text-[15px] font-bold text-gray-900">项目交付实施</h3>
          </div>

          <div className="relative space-y-6">
            {/* Vertical Line */}
            <div className="absolute left-[24px] top-4 bottom-4 w-[1px] bg-gray-200" />

            {timelineItems.map((item, idx) => (
              <div key={idx} className="relative pl-12">
                {/* Timeline Dot */}
                <div className="absolute left-[18.5px] top-1.5 w-3 h-3 rounded-full border-2 border-[#5487FF] bg-white z-10 shadow-[0_0_4px_rgba(84,135,255,0.4)]" />
                
                <div className="bg-white border border-gray-100 rounded-lg p-4 space-y-2 shadow-[0_2px_8px_rgba(0,0,0,0.02)]">
                  <div className="text-[14px] font-bold text-gray-800">
                    {item.date} <span className="ml-1 font-medium">{item.title}</span>
                  </div>
                  <div className="text-[13px] text-gray-400 leading-relaxed font-normal">
                    {item.progress}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Project Acceptance Card */}
        <div className="bg-white rounded-xl p-5 space-y-4 shadow-sm">
          <div className="flex items-center">
            <div className="w-1 bg-[#2B7FFF] rounded-full mr-3 h-5 shrink-0" />
            <h3 className="text-[15px] font-bold text-gray-900">项目验收</h3>
          </div>

          <div className="space-y-1.5 pt-1">
            <div className="flex items-center text-[14px]">
              <span className="text-gray-400 w-28 shrink-0 whitespace-nowrap">验收日期：</span>
              <span className="text-gray-800">2026-07-01</span>
            </div>
            <div className="flex items-center text-[14px]">
              <span className="text-gray-400 w-28 shrink-0 whitespace-nowrap">验收结论：</span>
              <span className="text-[#3ACC7A] font-medium">验收通过</span>
            </div>
            <div className="flex items-center text-[14px]">
              <span className="text-gray-400 w-28 shrink-0 whitespace-nowrap">验收评审报告：</span>
              <div 
                onClick={() => onPreview({ name: '项目验收评审报告.pdf', type: 'pdf', url: '' })}
                className="bg-white border border-gray-100 rounded p-1 shadow-sm cursor-pointer active:scale-95 transition-transform"
              >
                <FileText size={18} className="text-gray-400" />
              </div>
            </div>
            <div className="flex items-center text-[14px]">
              <span className="text-gray-400 w-28 shrink-0 whitespace-nowrap">现场验收照片：</span>
              <div 
                onClick={() => onPreview({ name: '现场验收照片.jpg', type: 'image', url: 'https://picsum.photos/seed/inspect/1200/800' })}
                className="bg-white border border-gray-100 rounded p-1 shadow-sm cursor-pointer active:scale-95 transition-transform"
              >
                <div className="w-[18px] h-[18px] bg-gray-100 rounded-sm flex items-center justify-center overflow-hidden">
                  <img src="https://picsum.photos/seed/inspect/20/20" alt="" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TechProjectDetailPage;
