import React, { useState } from 'react';
import { motion } from 'motion/react';
import { 
  ChevronLeft, 
  Eye, 
  EyeOff, 
  Info,
  ShieldCheck,
  LockKeyhole
} from 'lucide-react';

interface ChangePasswordPageProps {
  onBack?: () => void;
  onConfirm?: (passwords: any) => void;
}

const ChangePasswordPage: React.FC<ChangePasswordPageProps> = ({ onBack, onConfirm }) => {
  const [showOld, setShowOld] = useState(false);
  const [showNew, setShowNew] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);

  const [oldPassword, setOldPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (onConfirm) {
      onConfirm({ oldPassword, newPassword, confirmPassword });
    }
  };

  return (
    <div className="flex flex-col h-full bg-[#F5F7FA] overflow-hidden">
      {/* Header - Mobile Style */}
      <div className="bg-[#2B7FFF] h-14 flex items-center px-4 shrink-0 z-30">
        <button 
          onClick={onBack}
          className="text-white p-1 hover:bg-white/10 rounded-full transition-colors"
        >
          <ChevronLeft size={24} />
        </button>
        <h1 className="flex-1 text-center text-white text-lg font-medium mr-8">修改密码</h1>
      </div>

      <div className="flex-1 overflow-hidden">
        {/* Main Content Container */}
        <div className="max-w-6xl mx-auto w-full h-full flex flex-col md:flex-row md:items-start md:justify-center md:pt-20 md:px-8 overflow-y-auto md:overflow-hidden">
          
          {/* Expanded State: Left Column (Info/Illustration) */}
          <div className="hidden md:flex flex-col justify-center w-1/2 pr-16 space-y-8">
            <div className="w-20 h-20 bg-blue-50 rounded-3xl flex items-center justify-center text-[#2B7FFF] shadow-inner">
              <ShieldCheck size={48} />
            </div>
            <div className="space-y-4">
              <h2 className="text-4xl font-black text-gray-900 tracking-tight">安全中心</h2>
              <p className="text-gray-500 text-xl leading-relaxed max-w-md">
                为了保障您的账号安全，请定期修改登录密码。建议使用字母、数字和符号的组合。
              </p>
            </div>
          </div>

          {/* Form Container */}
          <div className="w-full md:w-[480px] bg-white md:rounded-3xl md:shadow-xl md:border md:border-gray-100 flex flex-col overflow-hidden">
            <form onSubmit={handleSubmit} className="flex flex-col">
              {/* Input Fields Group */}
              <div className="bg-white">
                {/* Old Password */}
                <div className="flex items-center px-4 py-4 border-b border-gray-100">
                  <label className="w-24 text-gray-900 text-base font-medium shrink-0">原密码</label>
                  <div className="flex-1 flex items-center relative">
                    <input 
                      type={showOld ? "text" : "password"}
                      placeholder="请输入原密码"
                      value={oldPassword}
                      onChange={(e) => setOldPassword(e.target.value)}
                      className="w-full outline-none text-gray-800 placeholder-gray-300 text-base"
                    />
                    <button 
                      type="button"
                      onClick={() => setShowOld(!showOld)}
                      className="text-gray-400 p-1"
                    >
                      {showOld ? <EyeOff size={20} /> : <Eye size={20} />}
                    </button>
                  </div>
                </div>

                {/* New Password */}
                <div className="flex items-center px-4 py-4 border-b border-gray-100">
                  <label className="w-24 text-gray-900 text-base font-medium shrink-0">新密码</label>
                  <div className="flex-1 flex items-center relative">
                    <input 
                      type={showNew ? "text" : "password"}
                      placeholder="请输入新密码"
                      value={newPassword}
                      onChange={(e) => setNewPassword(e.target.value)}
                      className="w-full outline-none text-gray-800 placeholder-gray-300 text-base"
                    />
                    <button 
                      type="button"
                      onClick={() => setShowNew(!showNew)}
                      className="text-gray-400 p-1"
                    >
                      {showNew ? <EyeOff size={20} /> : <Eye size={20} />}
                    </button>
                  </div>
                </div>

                {/* Confirm Password */}
                <div className="flex items-center px-4 py-4 border-b border-gray-100">
                  <label className="w-24 text-gray-900 text-base font-medium shrink-0">确认密码</label>
                  <div className="flex-1 flex items-center relative">
                    <input 
                      type={showConfirm ? "text" : "password"}
                      placeholder="请再次输入密码"
                      value={confirmPassword}
                      onChange={(e) => setConfirmPassword(e.target.value)}
                      className="w-full outline-none text-gray-800 placeholder-gray-300 text-base"
                    />
                    <button 
                      type="button"
                      onClick={() => setShowConfirm(!showConfirm)}
                      className="text-gray-400 p-1"
                    >
                      {showConfirm ? <EyeOff size={20} /> : <Eye size={20} />}
                    </button>
                  </div>
                </div>
              </div>

              {/* Tips Section */}
              <div className="p-4 flex items-start space-x-2">
                <Info size={18} className="text-[#2B7FFF] shrink-0 mt-0.5" />
                <p className="text-[#2B7FFF] text-sm leading-relaxed">
                  密码由 6-16个字符组成，区分大小写（不能是9位以下的纯数字，不能包含空格）
                </p>
              </div>

              {/* Submit Button */}
              <div className="px-4 pb-8 md:pb-6">
                <motion.button 
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  className="w-full bg-[#4A86F7] text-white font-medium py-3.5 rounded-lg active:opacity-90 transition-opacity text-lg shadow-lg shadow-blue-200"
                >
                  确 定
                </motion.button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChangePasswordPage;
