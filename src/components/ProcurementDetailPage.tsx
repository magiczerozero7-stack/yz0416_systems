import React from 'react';
import { ChevronLeft, FileText } from 'lucide-react';

interface ProcurementDetailPageProps {
  project: any;
  onBack: () => void;
  onPreview: (file: any) => void;
}

const ProcurementDetailPage: React.FC<ProcurementDetailPageProps> = ({ project, onBack, onPreview }) => {
  if (!project) return null;

  return (
    <div className="flex-1 flex flex-col bg-[#F5F7FA] min-h-screen">
      {/* Header */}
      <div className="bg-[#2B7FFF] h-14 flex items-center px-4 sticky top-0 z-50 shadow-sm">
        <button onClick={onBack} className="text-white p-1 -ml-1 hover:bg-white/10 rounded-full transition-colors">
          <ChevronLeft size={28} />
        </button>
        <h1 className="flex-1 text-center text-white font-medium text-lg mr-8">项目详情</h1>
      </div>

      <div className="flex-1 overflow-y-auto p-3 pb-8">
        {/* Detail Card */}
        <div className="bg-white rounded-xl p-6 shadow-sm space-y-5">
          {/* Title with Blue Bar */}
          <div className="flex items-start">
            <div className="w-1 bg-[#2B7FFF] rounded-full mr-3 mt-1 h-5 shrink-0" />
            <h2 className="text-[16px] font-bold text-gray-900 leading-snug">
              {project.title}
            </h2>
          </div>

          {/* Metadata List */}
          <div className="space-y-2.5">
            {/* Construction Unit */}
            <div className="flex items-start">
              <span className="text-gray-400 text-[14px] w-20 shrink-0 whitespace-nowrap">建设单位：</span>
              <span className="text-gray-800 text-[14px]">科技与数字化部</span>
            </div>

            {/* Procurement Plan */}
            <div className="flex items-center">
              <span className="text-gray-400 text-[14px] w-20 shrink-0 whitespace-nowrap">采购方案：</span>
              <button 
                onClick={() => onPreview({ name: '采购方案.pdf', type: 'pdf', url: '' })}
                className="text-[#2B7FFF]"
              >
                <FileText size={24} strokeWidth={1.2} className="text-gray-400" />
              </button>
            </div>

            {/* Special Meeting Minutes */}
            <div className="flex items-start">
              <span className="text-gray-400 text-[14px] w-24 shrink-0 whitespace-nowrap pt-0.5">专题会议纪要：</span>
              <span className="text-gray-800 text-[14px] leading-snug">
                研讨项目采购需求细节，确认采购标的技术参数，梳理采购流程节点，明确双方采购对接责任人及资料提报时限。
              </span>
            </div>

            {/* GM Meeting Minutes */}
            <div className="flex items-start">
              <span className="text-gray-400 text-[14px] w-36 shrink-0 whitespace-nowrap pt-0.5">总经理办公会议纪要：</span>
              <span className="text-gray-800 text-[14px] leading-snug">
                听取项目采购工作进展，审议采购方案合规性，指示严控采购成本，要求加快推进采购招标落地，保障项目建设节奏。
              </span>
            </div>

            {/* Chairman Meeting Minutes */}
            <div className="flex items-start">
              <span className="text-gray-400 text-[14px] w-36 shrink-0 whitespace-nowrap pt-0.5">董事长办公会议纪要：</span>
              <span className="text-gray-800 text-[14px] leading-snug">
                听取项目采购整体规划汇报，明确采购工作核心原则，要求严把采购质量与合规关，确保采购工作匹配项目整体建设进度。
              </span>
            </div>

            {/* Related Materials */}
            <div className="flex items-center">
              <span className="text-gray-400 text-[14px] w-20 shrink-0 whitespace-nowrap">相关材料：</span>
              <button 
                onClick={() => onPreview({ name: '相关材料.zip', type: 'pdf', url: '' })}
                className="text-[#2B7FFF]"
              >
                <FileText size={24} strokeWidth={1.2} className="text-gray-400" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProcurementDetailPage;
