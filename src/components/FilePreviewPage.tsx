import React from 'react';
import { ChevronLeft, Download, Share } from 'lucide-react';

interface FilePreviewPageProps {
  file: {
    name: string;
    type: 'image' | 'pdf';
    url: string;
  };
  onBack: () => void;
}

const FilePreviewPage: React.FC<FilePreviewPageProps> = ({ file, onBack }) => {
  return (
    <div className="flex-1 flex flex-col bg-[#1A1A1A] min-h-screen">
      {/* Header */}
      <div className="bg-black/50 backdrop-blur-md h-14 flex items-center px-4 sticky top-0 z-50">
        <button onClick={onBack} className="text-white p-1 -ml-1 hover:bg-white/10 rounded-full transition-colors">
          <ChevronLeft size={28} />
        </button>
        <h1 className="flex-1 text-center text-white font-medium text-lg truncate px-4">
          {file.name}
        </h1>
        <div className="flex items-center space-x-3">
          <button className="text-white p-1.5 hover:bg-white/10 rounded-full transition-colors">
            <Download size={20} />
          </button>
          <button className="text-white p-1.5 hover:bg-white/10 rounded-full transition-colors">
            <Share size={20} />
          </button>
        </div>
      </div>

      {/* Preview Area */}
      <div className="flex-1 flex items-center justify-center p-4 overflow-auto">
        {file.type === 'image' ? (
          <img 
            src={file.url} 
            alt={file.name} 
            className="max-w-full max-h-screen object-contain shadow-2xl"
            referrerPolicy="no-referrer"
          />
        ) : (
          <div className="w-full max-w-3xl aspect-[1/1.414] bg-white rounded-lg shadow-2xl flex flex-col overflow-hidden">
            <div className="flex-1 overflow-y-auto p-10 space-y-6 text-gray-800 font-serif">
              <h2 className="text-2xl font-bold text-center border-b pb-4 mb-8">验收评审报告</h2>
              <p className="indent-8 leading-relaxed">
                本报告旨在对“科技研发与数字化项目管理”项目的最终交付成果进行全面评审。经评审委员会现场查验与功能测试，该项目已圆满完成合同规定的各项建设指标。
              </p>
              <p className="indent-8 leading-relaxed">
                一、技术达成情况：系统核心功能模块运行稳定，压力测试表现优异，符合国家网络安全等级保护三级标准。
              </p>
              <p className="indent-8 leading-relaxed">
                二、业务适配性：经服贸公司、科创公司等多部门联合试运行，系统能够有效提升跨部门协作效率约35%。
              </p>
              <div className="pt-10 space-y-2">
                <p className="text-right">评审组组长：张建国</p>
                <p className="text-right">日期：2026年07月01日</p>
              </div>
              
              <div className="mt-20 flex justify-center opacity-20 rotate-12 pointer-events-none select-none">
                <div className="border-[6px] border-red-600 rounded-full p-6 text-red-600 text-5xl font-black uppercase tracking-tighter">
                  验收通过
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Footer Info (Optional) */}
      <div className="p-4 bg-black/30 backdrop-blur-sm text-center">
        <span className="text-white/60 text-xs">
          {file.type === 'image' ? '图片预览' : 'PDF 文档预览'} · 1.2 MB
        </span>
      </div>
    </div>
  );
};

export default FilePreviewPage;
