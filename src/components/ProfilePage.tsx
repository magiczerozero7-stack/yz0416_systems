import React from 'react';
import { motion } from 'motion/react';
import { 
  Building2, 
  Smartphone, 
  Lock, 
  ChevronRight, 
  ChevronLeft, 
  User,
  FileEdit,
  UserPlus
} from 'lucide-react';

interface ProfilePageProps {
  onLogout: () => void;
  onBack?: () => void;
  onChangePassword?: () => void;
  onMyInstructions?: () => void;
}

const ProfilePage: React.FC<ProfilePageProps> = ({ onLogout, onBack, onChangePassword, onMyInstructions }) => {
  return (
    <div className="flex flex-col h-full bg-[#F5F7FA] overflow-hidden">
      {/* Header Section */}
      <div className="relative h-44 bg-gradient-to-br from-[#2B7FFF] to-[#1A5FCC] overflow-hidden shrink-0">
        {/* Abstract Background Pattern - Flowing Tech Waves with Gradient Opacity */}
        <div className="absolute inset-0 pointer-events-none">
          <svg viewBox="0 0 1000 1000" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
            <defs>
              <linearGradient id="waveGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="white" stopOpacity="0" />
                <stop offset="30%" stopColor="white" stopOpacity="0.1" />
                <stop offset="100%" stopColor="white" stopOpacity="0.4" />
              </linearGradient>
            </defs>

            {/* Tech Lines - Grid/Circuit style */}
            <g stroke="white" strokeWidth="0.5" opacity="0.1">
              <line x1="0" y1="300" x2="1000" y2="300" />
              <line x1="0" y1="400" x2="1000" y2="400" />
              <line x1="300" y1="0" x2="300" y2="1000" />
              <line x1="700" y1="0" x2="700" y2="1000" />
            </g>

            {/* Wave Curves - Flowing from Left to Right */}
            <motion.path
              d="M0,400 C200,300 400,500 600,400 C800,300 1000,500 1200,400"
              fill="none"
              stroke="url(#waveGradient)"
              strokeWidth="2"
              animate={{ 
                d: [
                  "M-200,400 C0,300 200,500 400,400 C600,300 800,500 1000,400",
                  "M-200,420 C0,320 200,520 400,420 C600,320 800,520 1000,420",
                  "M-200,400 C0,300 200,500 400,400 C600,300 800,500 1000,400"
                ]
              }}
              transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            />
            
            <motion.path
              d="M0,450 C250,350 500,550 750,450 C1000,350 1250,550 1500,450"
              fill="none"
              stroke="url(#waveGradient)"
              strokeWidth="1.5"
              animate={{ 
                d: [
                  "M-300,450 C-50,350 200,550 450,450 C700,350 950,550 1200,450",
                  "M-300,480 C-50,380 200,580 450,480 C700,380 950,580 1200,480",
                  "M-300,450 C-50,350 200,550 450,450 C700,350 950,550 1200,450"
                ]
              }}
              transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
            />

            <motion.path
              d="M0,500 C300,400 600,600 900,500 C1200,400 1500,600 1800,500"
              fill="none"
              stroke="url(#waveGradient)"
              strokeWidth="1"
              animate={{ 
                d: [
                  "M-400,500 C-100,400 200,600 500,500 C800,400 1100,600 1400,500",
                  "M-400,530 C-100,430 200,630 500,530 C800,430 1100,630 1400,530",
                  "M-400,500 C-100,400 200,600 500,500 C800,400 1100,600 1400,500"
                ]
              }}
              transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
            />

            {/* Tech Nodes at wave intersections */}
            <circle cx="450" cy="450" r="1.5" fill="white" opacity="0.3" />
            <circle cx="800" cy="400" r="1.5" fill="white" opacity="0.4" />
          </svg>
        </div>

        {/* Back Button */}
        <button 
          onClick={onBack}
          className="absolute top-4 left-4 text-white p-2 z-20 hover:bg-white/10 rounded-full transition-colors"
        >
          <ChevronLeft size={28} />
        </button>

        {/* Profile Info */}
        <div className="absolute bottom-12 left-8 flex items-center space-x-4 z-10">
          <div className="w-16 h-16 rounded-full bg-white/20 backdrop-blur-md p-1 shadow-lg">
            <div className="w-full h-full rounded-full bg-[#E0E7FF] flex items-center justify-center overflow-hidden border border-white/50">
               <User size={36} className="text-[#2B7FFF] mt-1" />
            </div>
          </div>
          <div className="flex flex-col">
            <h2 className="text-white text-xl md:text-2xl font-bold tracking-tight">管理员</h2>
            <div className="h-0.5 w-6 bg-white/40 rounded-full mt-1" />
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div className="px-6 -mt-8 relative z-20 space-y-4 max-w-xl mx-auto w-full flex-1 flex flex-col justify-start pb-6">
        {/* Department Card */}
        <div className="bg-white rounded-xl p-4 flex items-center justify-between shadow-sm">
          <div className="flex items-center space-x-3">
            <Building2 size={18} className="text-[#2B7FFF]" />
            <span className="text-gray-600 text-sm">所属部门</span>
          </div>
          <span className="text-gray-900 text-sm">部门 A</span>
        </div>

        {/* Phone Card */}
        <div className="bg-white rounded-xl p-4 flex items-center justify-between shadow-sm">
          <div className="flex items-center space-x-3">
            <Smartphone size={18} className="text-[#2B7FFF]" />
            <span className="text-gray-600 text-sm">手机</span>
          </div>
          <span className="text-gray-900 text-sm">13812345678</span>
        </div>

        {/* Action List */}
        <div className="space-y-3 pt-1">
          <div 
            onClick={onChangePassword}
            className="bg-white rounded-xl p-4 flex items-center justify-between shadow-sm cursor-pointer active:bg-gray-50 transition-colors"
          >
            <div className="flex items-center space-x-3">
              <Lock size={18} className="text-[#2B7FFF]" />
              <span className="text-gray-600 text-sm">修改密码</span>
            </div>
            <ChevronRight size={18} className="text-gray-300" />
          </div>

          <div 
            onClick={onMyInstructions}
            className="bg-white rounded-xl p-4 flex items-center justify-between shadow-sm cursor-pointer active:bg-gray-50 transition-colors"
          >
            <div className="flex items-center space-x-3">
              <FileEdit size={18} className="text-[#2B7FFF]" />
              <span className="text-gray-600 text-sm">我的批示</span>
            </div>
            <ChevronRight size={18} className="text-gray-300" />
          </div>

          <div className="bg-white rounded-xl p-4 flex items-center justify-between shadow-sm cursor-pointer active:bg-gray-50 transition-colors">
            <div className="flex items-center space-x-3">
              <UserPlus size={18} className="text-[#2B7FFF]" />
              <span className="text-gray-600 text-sm">我的关注</span>
            </div>
            <ChevronRight size={18} className="text-gray-300" />
          </div>
        </div>

        {/* Logout Button */}
        <div className="mt-auto md:mt-12 pt-2">
          <button 
            onClick={onLogout}
            className="w-full bg-[#4A86F7] text-white font-medium py-3.5 rounded-lg active:opacity-90 transition-opacity text-base shadow-md"
          >
            退出登录
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
