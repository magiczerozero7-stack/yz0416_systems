import React from 'react';
import { ChevronLeft, FileText } from 'lucide-react';

interface DigitalProjectDetailPageProps {
  project: any;
  onBack: () => void;
  onPreview: (file: any) => void;
  onInstruct: (project: any) => void;
  onProcurementDetail: () => void;
}

const DigitalProjectDetailPage: React.FC<DigitalProjectDetailPageProps> = ({ 
  project, 
  onBack, 
  onPreview, 
  onInstruct,
  onProcurementDetail
}) => {
  if (!project) return null;

  // Mock timeline data matching reference for Digital Projects
  const timelineItems = [
    { 
      date: '2026年 01 月 31 日', 
      title: '需求调研', 
      progress: '当前进度：介绍业务流程，包括项目全生命周期管理及科研项目的管...',
      percent: '15%',
      investment: '10万元',
      risk: '无'
    },
    { 
      date: '2026年 01 月 31 日', 
      title: '需求调研', 
      progress: '当前进度：介绍业务流程，包括项目全生命周期管理及科研项目的管...',
      percent: '15%',
      investment: '10万元',
      risk: '无'
    },
    { 
      date: '2026年 01 月 31 日', 
      title: '需求调研', 
      progress: '当前进度：介绍业务流程，包括项目全生命周期管理及科研项目的管...',
      percent: '15%',
      investment: '10万元',
      risk: '无'
    },
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

      <div className="flex-1 overflow-y-auto p-3 space-y-3 pb-24">
        {/* Project Info Card */}
        <div className="bg-white rounded-xl p-5 space-y-2 shadow-sm">
          <div className="flex mb-3">
            <div className="w-1 bg-[#2B7FFF] rounded-full mr-3 shrink-0" />
            <h2 className="text-[15px] font-bold text-gray-900 leading-tight">
              {project.title}
            </h2>
          </div>

          <div className="space-y-1 pt-1">
            <div className="flex items-start text-[14px]">
              <span className="text-gray-400 w-20 shrink-0 whitespace-nowrap">建设单位：</span>
              <span className="text-gray-800">科技与数字化部</span>
            </div>
            <div className="flex items-start text-[14px]">
              <span className="text-gray-400 w-20 shrink-0 whitespace-nowrap">项目类型：</span>
              <span className="text-gray-800">软硬件新建项目</span>
            </div>
            <div className="flex items-start text-[14px]">
              <span className="text-gray-400 w-20 shrink-0 whitespace-nowrap">项目属性：</span>
              <span className="text-gray-800">软件及系统</span>
            </div>
            <div className="flex items-start text-[14px]">
              <span className="text-gray-400 w-20 shrink-0 whitespace-nowrap">建设内容：</span>
              <span className="text-gray-800 leading-relaxed">
                {project.content}
              </span>
            </div>
          </div>
        </div>

        {/* Procurement Info Card */}
        <div className="bg-white rounded-xl p-5 space-y-4 shadow-sm">
          <div className="flex items-center">
            <div className="w-1 bg-[#2B7FFF] rounded-full mr-3 h-5 shrink-0" />
            <h3 className="text-[15px] font-bold text-gray-900 whitespace-nowrap">采购信息</h3>
          </div>

          <div className="space-y-1.5 pt-1">
            <div className="flex items-start text-[14px]">
              <span className="text-gray-400 w-24 shrink-0 whitespace-nowrap">供应商：</span>
              <span className="text-gray-800">上海元方科技股份有限公司</span>
            </div>
            <div className="flex items-center text-[14px]">
              <span className="text-gray-400 w-24 shrink-0 whitespace-nowrap">合同金额：</span>
              <span className="text-gray-800">98.65万元</span>
            </div>
            <div className="flex items-center text-[14px]">
              <span className="text-gray-400 w-24 shrink-0 whitespace-nowrap">计划开始时间：</span>
              <span className="text-gray-800">2026-01-01</span>
            </div>
            <div className="flex items-center text-[14px]">
              <span className="text-gray-400 w-24 shrink-0 whitespace-nowrap">计划结束时间：</span>
              <span className="text-gray-800">2026-05-31</span>
            </div>
            <div className="flex items-center text-[14px]">
              <span className="text-gray-400 w-24 shrink-0 whitespace-nowrap">合同查看：</span>
              <button onClick={() => onPreview({ name: '采购合同.pdf', type: 'pdf', url: '' })}>
                <FileText size={18} className="text-gray-400" />
              </button>
            </div>
            <div className="flex justify-end pt-1">
              <button 
                onClick={onProcurementDetail}
                className="text-[13px] text-gray-500 border border-gray-200 px-4 py-1.5 rounded-lg active:bg-gray-50"
              >
                查看详情
              </button>
            </div>
          </div>
        </div>

        {/* Project Implementation Timeline Card */}
        <div className="bg-white rounded-xl p-5 space-y-6 shadow-sm">
          <div className="flex items-center">
            <div className="w-1 bg-[#2B7FFF] rounded-full mr-3 h-5 shrink-0" />
            <h3 className="text-[15px] font-bold text-gray-900 whitespace-nowrap">项目交付实施</h3>
          </div>

          <div className="relative space-y-6">
            <div className="absolute left-[24px] top-4 bottom-4 w-[1px] bg-gray-200" />

            {timelineItems.map((item, idx) => (
              <div key={idx} className="relative pl-12">
                <div className="absolute left-[18.5px] top-1.5 w-3 h-3 rounded-full border-2 border-[#5487FF] bg-white z-10 shadow-[0_0_4px_rgba(84,135,255,0.4)]" />
                
                <div className="bg-white border border-gray-100 rounded-lg p-4 space-y-2 shadow-[0_2px_8px_rgba(0,0,0,0.02)]">
                  <div className="text-[14px] font-bold text-gray-800">
                    {item.date} <span className="ml-1 font-medium">{item.title}</span>
                  </div>
                  <div className="text-[13px] text-gray-400 leading-relaxed font-normal">
                    {item.progress}
                  </div>
                  <div className="pt-1 space-y-1">
                    <div className="text-[13px] flex">
                      <span className="text-gray-400 w-20 shrink-0 whitespace-nowrap">当前进度：</span>
                      <span className="text-gray-800">{item.percent}</span>
                    </div>
                    <div className="text-[13px] flex">
                      <span className="text-gray-400 w-20 shrink-0 whitespace-nowrap">累计投资：</span>
                      <span className="text-gray-800">{item.investment}</span>
                    </div>
                    <div className="text-[13px] flex">
                      <span className="text-gray-400 w-20 shrink-0 whitespace-nowrap">风险情况：</span>
                      <span className="text-gray-800">{item.risk}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Trial Operation Card */}
        <div className="bg-white rounded-xl p-5 space-y-4 shadow-sm">
          <div className="flex items-center">
            <div className="w-1 bg-[#2B7FFF] rounded-full mr-3 h-5 shrink-0" />
            <h3 className="text-[15px] font-bold text-gray-900 whitespace-nowrap">项目试运行</h3>
          </div>

          <div className="space-y-1.5 pt-1">
            <div className="flex items-center text-[14px]">
              <span className="text-gray-400 w-24 shrink-0 whitespace-nowrap">计划开始：</span>
              <span className="text-gray-800">2026-01-01</span>
            </div>
            <div className="flex items-center text-[14px]">
              <span className="text-gray-400 w-24 shrink-0 whitespace-nowrap">计划结束：</span>
              <span className="text-gray-800">2026-05-31</span>
            </div>
            <div className="flex items-center text-[14px]">
              <span className="text-gray-400 w-24 shrink-0 whitespace-nowrap">运行报告：</span>
              <button onClick={() => onPreview({ name: '试运行报告.pdf', type: 'pdf', url: '' })}>
                <FileText size={18} className="text-gray-400" />
              </button>
            </div>
          </div>
        </div>

        {/* Project Acceptance Card */}
        <div className="bg-white rounded-xl p-5 space-y-4 shadow-sm">
          <div className="flex items-center">
            <div className="w-1 bg-[#2B7FFF] rounded-full mr-3 h-5 shrink-0" />
            <h3 className="text-[15px] font-bold text-gray-900 whitespace-nowrap">项目验收</h3>
          </div>

          <div className="space-y-1.5 pt-1">
            <div className="flex items-center text-[14px]">
              <span className="text-gray-400 w-28 shrink-0 whitespace-nowrap">验收日期：</span>
              <span className="text-gray-800">2026-01-01</span>
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
          </div>
        </div>
      </div>

      {/* Footer Buttons */}
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-100 p-2 px-4 flex space-x-3 z-50">
        <button className="flex-1 py-2 bg-[#D1D5DB] text-white rounded-full font-bold text-[15px] shadow-sm">关注</button>
        <button 
          onClick={() => onInstruct(project)}
          className="flex-[1.5] py-2 bg-[#2B7FFF] text-white rounded-full font-bold text-[15px] shadow-md shadow-blue-100"
        >
          发送批示
        </button>
      </div>
    </div>
  );
};

export default DigitalProjectDetailPage;
