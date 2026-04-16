import React from 'react';
import { motion } from 'motion/react';

interface Project {
  id: number;
  status: string;
  statusColor: string;
  company: string;
  title: string;
  amount: string;
  content: string;
  isFollowed: boolean;
}

interface DigitalProjectListProps {
  projects: Project[];
  onToggleFollow: (id: number) => void;
  onInstruct: (project: Project) => void;
}

const DigitalProjectList: React.FC<DigitalProjectListProps> = ({ projects, onToggleFollow, onInstruct }) => {
  return (
    <div className="px-4 space-y-3 pt-1">
      {projects.map((project, index) => (
        <motion.div
          key={project.id}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.05 }}
          className="bg-white rounded-xl shadow-sm border border-gray-50 overflow-hidden relative"
        >
          <div className="p-4">
            <div className="flex justify-between items-start mb-2.5 -mt-4 -ml-4">
              <div className={`${project.statusColor} text-white text-[11px] font-bold px-4 py-1.5 rounded-br-2xl shadow-sm`}>
                {project.status}
              </div>
              <div className="text-gray-400 text-[11px] font-normal mt-2.5 mr-4">{project.company}</div>
            </div>
            
            <h3 className="text-base font-bold text-gray-800 mb-1 leading-snug">
              {project.title}
            </h3>
            
            <div className="space-y-1 mb-2.5">
              <div className="flex items-center text-sm">
                <span className="text-gray-400 w-[72px] shrink-0">合同金额：</span>
                <span className="text-gray-800 font-medium">{project.amount}</span>
              </div>
              <div className="text-sm">
                <div className="text-gray-400 mb-0.5">建设内容：</div>
                <div className="text-gray-600 leading-snug text-justify">
                  {project.content}
                </div>
              </div>
            </div>

            <div className="flex justify-end space-x-2.5 pt-2.5 border-t border-gray-50">
              <button 
                onClick={() => onToggleFollow(project.id)}
                className={`px-4 py-1.5 rounded-lg text-[13px] font-medium transition-all border ${
                  project.isFollowed 
                    ? 'bg-[#F09440] text-white border-[#F09440] shadow-sm' 
                    : 'bg-white text-gray-500 border-gray-200'
                }`}
              >
                {project.isFollowed ? '已关注' : '关注'}
              </button>
              <button 
                onClick={() => onInstruct(project)}
                className="px-4 py-1.5 bg-[#2B7FFF] text-white rounded-lg text-[13px] font-medium border border-[#2B7FFF] shadow-md shadow-blue-100 active:scale-95 transition-transform"
              >
                批示
              </button>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default DigitalProjectList;
