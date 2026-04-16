import React, { useState } from 'react';
import { User, Lock, Eye, EyeOff, Search } from 'lucide-react';
import { motion } from 'motion/react';

interface LoginPageProps {
  onLogin: () => void;
}

const LoginPage: React.FC<LoginPageProps> = ({ onLogin }) => {
  const [showPassword, setShowPassword] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);

  return (
    <div className="fixed inset-0 w-full h-full bg-gradient-to-b from-[#2B7FFF] to-[#1A5FCC] flex flex-col items-center justify-center p-2 md:p-4 overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] right-[-10%] w-96 h-96 bg-white/10 rounded-full blur-3xl" />
        <div className="absolute bottom-[-10%] left-[-10%] w-[500px] h-[500px] bg-blue-400/20 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 w-full max-w-md md:max-w-5xl flex flex-col md:flex-row items-center justify-center md:gap-4 lg:gap-12 max-h-full px-4">
        {/* Left Side: Header & Illustration */}
        <div className="flex flex-col items-center md:items-start w-full md:w-1/2 shrink min-h-0">
          {/* Header Section */}
          <div className="text-center md:text-left mb-1 md:mb-6 shrink-0">
            <div className="flex items-center justify-center md:justify-start space-x-3 mb-1">
              <div className="h-[1px] w-5 bg-white/50" />
              <h1 className="text-white text-base md:text-2xl lg:text-4xl font-black tracking-widest drop-shadow-lg">
                科技研发与数字化
              </h1>
              <div className="hidden md:block h-[1px] w-10 bg-white/50" />
            </div>
            <h2 className="text-white text-base md:text-2xl lg:text-4xl font-black tracking-widest drop-shadow-lg">
              项目管理
            </h2>
          </div>

          {/* 3D Illustration Placeholder - Highly Shrinkable */}
          <div className="relative w-full flex-1 max-h-[120px] md:max-h-[280px] min-h-[40px] mb-4 md:mb-0 flex items-center justify-center md:justify-start shrink overflow-hidden">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              className="w-full h-full relative flex items-center justify-center md:justify-start"
            >
              <div className="relative w-28 h-16 md:w-72 md:h-48 lg:w-96 lg:h-64">
                <div className="absolute top-0 left-2 w-20 h-14 md:w-64 md:h-40 lg:w-80 lg:h-52 bg-white/20 backdrop-blur-sm rounded-xl transform -rotate-12 border border-white/30 shadow-xl" />
                <div className="absolute top-3 left-5 w-20 h-14 md:w-64 md:h-40 lg:w-80 lg:h-52 bg-white/40 backdrop-blur-md rounded-xl transform -rotate-6 border border-white/40 shadow-2xl z-10" />
                <div className="absolute top-6 left-8 w-20 h-14 md:w-64 md:h-40 lg:w-80 lg:h-52 bg-white rounded-xl border border-white/50 shadow-2xl z-20 flex flex-col p-2 md:p-4">
                  <div className="w-full h-1 bg-blue-100 rounded-full mb-1" />
                  <div className="w-3/4 h-1 bg-blue-50 rounded-full mb-2" />
                  <div className="flex-1 bg-blue-50/50 rounded-lg" />
                </div>
                <div className="absolute bottom-1 right-1 w-5 h-5 md:w-16 md:h-16 bg-blue-600 rounded-full flex items-center justify-center text-white shadow-lg z-30 transform rotate-12 border-2 md:border-4 border-white">
                  <Search size={10} className="md:w-8 md:h-8" />
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Right Side: Login Card */}
        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          className="w-full md:w-[360px] lg:w-[440px] bg-white rounded-[20px] md:rounded-[40px] p-5 md:p-8 lg:p-12 shadow-2xl shrink-0"
        >
          <h3 className="text-sm md:text-xl lg:text-3xl font-bold text-gray-800 mb-3 md:mb-6 lg:mb-10">登录</h3>
          
          <div className="space-y-3 md:space-y-5 lg:space-y-8">
            {/* Username Input */}
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-gray-400">
                <User size={18} />
              </div>
              <input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder="请输入用户名"
                className="w-full bg-[#F5F7FA] border-none rounded-lg md:rounded-2xl py-3 md:py-3 pl-11 pr-4 text-gray-700 placeholder-gray-400 focus:ring-2 focus:ring-blue-500 transition-all outline-none font-medium text-xs md:text-base"
              />
            </div>

            {/* Password Input */}
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-gray-400">
                <Lock size={18} />
              </div>
              <input
                type={showPassword ? "text" : "password"}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="请输入密码"
                className="w-full bg-[#F5F7FA] border-none rounded-lg md:rounded-2xl py-3 md:py-3 pl-11 pr-11 text-gray-700 placeholder-gray-400 focus:ring-2 focus:ring-blue-500 transition-all outline-none font-medium text-xs md:text-base"
              />
              <button 
                onClick={() => setShowPassword(!showPassword)}
                className="absolute inset-y-0 right-0 pr-4 flex items-center text-gray-400 hover:text-gray-600 transition-colors"
              >
                {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
              </button>
            </div>

            {/* Login Button */}
            <button 
              onClick={onLogin}
              className="w-full bg-gradient-to-r from-[#4D94FF] to-[#3385FF] text-white font-bold py-3 md:py-3.5 rounded-full shadow-lg shadow-blue-200 hover:scale-[1.01] active:scale-[0.99] transition-all text-sm md:text-lg mt-1"
            >
              登 录
            </button>

            {/* Remember Me */}
            <div className="flex items-center pt-1">
              <button 
                onClick={() => setRememberMe(!rememberMe)}
                className="flex items-center space-x-2 group"
              >
                <div className={`w-4 h-4 md:w-5 md:h-5 rounded-full border-2 flex items-center justify-center transition-all ${rememberMe ? 'bg-blue-500 border-blue-500' : 'border-gray-300 group-hover:border-blue-400'}`}>
                  {rememberMe && <div className="w-1.5 h-1.5 md:w-2 md:h-2 bg-white rounded-full" />}
                </div>
                <span className="text-[10px] md:text-sm text-gray-500 font-medium">下次自动登录</span>
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default LoginPage;
