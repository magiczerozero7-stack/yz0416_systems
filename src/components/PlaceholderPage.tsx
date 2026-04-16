import React from 'react';
import { FolderKanban } from 'lucide-react';

interface PlaceholderPageProps {
  title: string;
  onBack: () => void;
}

const PlaceholderPage: React.FC<PlaceholderPageProps> = ({ title, onBack }) => {
  return (
    <div className="flex-1 flex flex-col items-center justify-center p-10 text-center">
      <div className="w-20 h-20 bg-gray-100 rounded-full flex items-center justify-center text-gray-300 mb-4">
        <FolderKanban size={40} />
      </div>
      <h3 className="text-xl font-bold text-gray-400">{title}</h3>
      <p className="text-gray-400 mt-2">页面正在建设中，敬请期待...</p>
      <button 
        onClick={onBack}
        className="mt-6 px-6 py-2 bg-blue-600 text-white rounded-full font-bold shadow-lg shadow-blue-100"
      >
        返回首页
      </button>
    </div>
  );
};

export default PlaceholderPage;
