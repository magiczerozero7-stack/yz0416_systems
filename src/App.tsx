/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useRef, useEffect } from 'react';
import { 
  LayoutDashboard, 
  ClipboardCheck, 
  User, 
  Home, 
  FolderKanban,
  Activity,
  Package
} from 'lucide-react';
import ProfilePage from './components/ProfilePage';
import LoginPage from './components/LoginPage';
import HomePage from './components/HomePage';
import ProjectMonitorPage from './components/ProjectMonitorPage';
import PlaceholderPage from './components/PlaceholderPage';
import ProjectLibraryPage from './components/ProjectLibraryPage';
import ProjectInstructionPage from './components/ProjectInstructionPage';
import TechProjectDetailPage from './components/TechProjectDetailPage';
import DigitalProjectDetailPage from './components/DigitalProjectDetailPage';
import ProcurementDetailPage from './components/ProcurementDetailPage';
import FilePreviewPage from './components/FilePreviewPage';
import ChangePasswordPage from './components/ChangePasswordPage';
import MyInstructionsPage from './components/MyInstructionsPage';
import MyInstructionsDetailPage from './components/MyInstructionsDetailPage';
import MyFollowsPage from './components/MyFollowsPage';
import MyFollowsDetailPage from './components/MyFollowsDetailPage';

// --- Components ---

const NavItem = ({ icon: Icon, label, active = false, onClick, variant = 'sidebar' }: any) => (
  <button 
    onClick={onClick}
    className={`flex flex-col items-center justify-center transition-all relative ${
      variant === 'sidebar' ? 'py-4 space-y-1.5 w-full' : 'py-1 flex-1'
    } ${
      active ? 'text-blue-600' : 'text-gray-400 hover:text-gray-500'
    } ${variant === 'sidebar' && !active ? 'hover:bg-gray-50' : ''}`}
  >
    {variant === 'sidebar' && active && (
      <div className="absolute left-0 top-2 bottom-2 w-1 bg-blue-600 rounded-r-full" />
    )}
    <Icon size={variant === 'sidebar' ? (active ? 24 : 22) : 26} strokeWidth={active ? 2.5 : 1.5} />
    <span className={`text-[11px] mt-1 ${active ? 'font-bold' : 'font-medium'}`}>{label}</span>
  </button>
);

export default function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [activeTab, setActiveTab] = useState('首页');
  const [prevTab, setPrevTab] = useState('首页');
  const [projectType, setProjectType] = useState('科技研发项目');
  const [quarter, setQuarter] = useState('第一季度');
  const [groupTab, setGroupTab] = useState('集团总部');
  const [selectedYear, setSelectedYear] = useState('2026');
  const [selectedInstructionId, setSelectedInstructionId] = useState<number | null>(null);
  const [selectedFollowId, setSelectedFollowId] = useState<number | null>(null);
  const [selectedProjectDetail, setSelectedProjectDetail] = useState<any>(null);
  const [selectedDigitalProjectDetail, setSelectedDigitalProjectDetail] = useState<any>(null);
  const [previewFile, setPreviewFile] = useState<any>(null);
  const [instructionProject, setInstructionProject] = useState<any>(null);
  const [isYearDropdownOpen, setIsYearDropdownOpen] = useState(false);
  const [dropdownPos, setDropdownPos] = useState({ top: 0, left: 0 });
  const yearButtonRef = useRef<HTMLButtonElement>(null);

  const mainRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (isYearDropdownOpen) {
        setIsYearDropdownOpen(false);
      }
    };

    const mainElement = mainRef.current;
    if (mainElement) {
      mainElement.addEventListener('scroll', handleScroll);
    }
    return () => {
      if (mainElement) {
        mainElement.removeEventListener('scroll', handleScroll);
      }
    };
  }, [isYearDropdownOpen]);

  useEffect(() => {
    if (isYearDropdownOpen && yearButtonRef.current) {
      const rect = yearButtonRef.current.getBoundingClientRect();
      setDropdownPos({ 
        top: rect.bottom + 8, 
        left: rect.left 
      });
    }
  }, [isYearDropdownOpen]);

  if (!isLoggedIn) {
    return <LoginPage onLogin={() => setIsLoggedIn(true)} />;
  }

  const navigateTo = (tab: string) => {
    setPrevTab(activeTab);
    setActiveTab(tab);
  };

  const renderContent = () => {
    switch (activeTab) {
      case '首页':
        return (
          <HomePage 
            projectType={projectType}
            setProjectType={setProjectType}
            quarter={quarter}
            setQuarter={setQuarter}
            groupTab={groupTab}
            setGroupTab={setGroupTab}
            selectedYear={selectedYear}
            setSelectedYear={setSelectedYear}
            isYearDropdownOpen={isYearDropdownOpen}
            setIsYearDropdownOpen={setIsYearDropdownOpen}
            dropdownPos={dropdownPos}
            yearButtonRef={yearButtonRef}
            setIsLoggedIn={setIsLoggedIn}
          />
        );
      case '项目监控':
        return (
          <ProjectMonitorPage 
            setIsLoggedIn={setIsLoggedIn}
            selectedYear={selectedYear}
            setSelectedYear={setSelectedYear}
            projectType={projectType}
            setProjectType={setProjectType}
          />
        );
      case '项目库':
        return (
          <ProjectLibraryPage 
            onBack={() => setActiveTab('首页')} 
            onInstruct={(project) => {
              setInstructionProject(project);
              navigateTo('项目批示');
            }}
            onProjectDetail={(project) => {
              setSelectedProjectDetail(project);
              navigateTo('项目详情');
            }}
            onDigitalProjectDetail={(project) => {
              setSelectedDigitalProjectDetail(project);
              navigateTo('数字化项目详情');
            }}
          />
        );
      case '项目详情':
        return (
          <TechProjectDetailPage 
            project={selectedProjectDetail}
            onBack={() => setActiveTab('项目库')}
            onPreview={(file) => {
              setPreviewFile(file);
              navigateTo('文件预览');
            }}
          />
        );
      case '数字化项目详情':
        return (
          <DigitalProjectDetailPage 
            project={selectedDigitalProjectDetail}
            onBack={() => setActiveTab('项目库')}
            onPreview={(file) => {
              setPreviewFile(file);
              navigateTo('文件预览');
            }}
            onInstruct={(project) => {
              setInstructionProject(project);
              navigateTo('项目批示');
            }}
            onProcurementDetail={() => navigateTo('项目采购详情')}
          />
        );
      case '项目采购详情':
        return (
          <ProcurementDetailPage 
            project={selectedDigitalProjectDetail}
            onBack={() => setActiveTab('数字化项目详情')}
            onPreview={(file) => {
              setPreviewFile(file);
              navigateTo('文件预览');
            }}
          />
        );
      case '文件预览':
        return (
          <FilePreviewPage 
            file={previewFile}
            onBack={() => setActiveTab(prevTab)}
          />
        );
      case '项目批示':
        return (
          <ProjectInstructionPage 
            project={instructionProject}
            onBack={() => setActiveTab(prevTab)}
            onCancel={() => setActiveTab(prevTab)}
            onSend={() => {
              // Handle send logic if needed
              setActiveTab('项目库');
            }}
          />
        );
      case '修改密码':
        return (
          <ChangePasswordPage 
            onBack={() => setActiveTab('我的')}
            onConfirm={(data) => {
              console.log('Password changed:', data);
              setActiveTab('我的');
            }}
          />
        );
      case '我的':
        return (
          <ProfilePage 
            onLogout={() => setIsLoggedIn(false)} 
            onBack={() => setActiveTab('首页')} 
            onChangePassword={() => setActiveTab('修改密码')}
            onMyInstructions={() => setActiveTab('我的批示')}
            onMyFollows={() => setActiveTab('我的关注')}
          />
        );
      case '我的批示':
        return (
          <MyInstructionsPage 
            onBack={() => setActiveTab('我的')} 
            onSelect={(id) => {
              setSelectedInstructionId(id);
              setActiveTab('我的批示详情');
            }}
          />
        );
      case '我的关注':
        return (
          <MyFollowsPage 
            onBack={() => setActiveTab('我的')} 
            onSelect={(id) => {
              setSelectedFollowId(id);
              setActiveTab('我的关注详情');
            }}
          />
        );
      case '我的关注详情':
        return (
          <MyFollowsDetailPage 
            followId={selectedFollowId || 1}
            onBack={() => setActiveTab('我的关注')}
          />
        );
      case '我的批示详情':
        return (
          <MyInstructionsDetailPage 
            instructionId={selectedInstructionId || 1}
            onBack={() => setActiveTab('我的批示')}
          />
        );
      default:
        return (
          <PlaceholderPage 
            title={activeTab}
            onBack={() => setActiveTab('首页')}
          />
        );
    }
  };

  return (
    <div className="h-screen flex flex-col md:flex-row font-sans text-gray-900 overflow-hidden">
      
      {/* --- Sidebar (Desktop/Unfolded) --- */}
      <aside className="hidden md:flex flex-col w-24 bg-white border-r border-gray-100 h-screen sticky top-0 z-50">
        <div className="p-4 flex flex-col items-center space-y-2">
          <div className="w-10 h-10 bg-blue-600 rounded-xl flex items-center justify-center text-white shadow-lg shadow-blue-200">
            <LayoutDashboard size={24} />
          </div>
          <span className="text-[10px] font-black leading-tight text-blue-900 text-center">
            智研项目管理
          </span>
        </div>
        
        <nav className="mt-6 flex-1">
          <NavItem icon={Home} label="首页" active={activeTab === '首页'} onClick={() => navigateTo('首页')} />
          <NavItem icon={Activity} label="项目监控" active={activeTab === '项目监控'} onClick={() => navigateTo('项目监控')} />
          <NavItem icon={Package} label="项目库" active={activeTab === '项目库'} onClick={() => navigateTo('项目库')} />
          <NavItem icon={User} label="我的" active={activeTab === '我的'} onClick={() => navigateTo('我的')} />
        </nav>

        <div className="p-4 border-t border-gray-50 flex flex-col items-center">
          <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 font-bold text-sm shadow-inner">M</div>
          <p className="text-[10px] font-black mt-2 text-gray-800">管理员</p>
        </div>
      </aside>

      {/* --- Main Content --- */}
      <main ref={mainRef} className={`flex-1 min-w-0 relative overflow-y-auto overflow-x-hidden bg-[#F9FAFB] ${(activeTab === '项目批示' || activeTab === '项目详情' || activeTab === '数字化项目详情' || activeTab === '项目采购详情' || activeTab === '文件预览') ? '' : 'pb-24 md:pb-0'}`}>
        {renderContent()}
      </main>

      {/* --- Bottom Tab Bar (Mobile/Folded) --- */}
      {!(activeTab === '项目批示' || activeTab === '项目详情' || activeTab === '数字化项目详情' || activeTab === '项目采购详情' || activeTab === '文件预览') && (
        <nav className="md:hidden fixed bottom-0 left-0 right-0 bg-white border-t border-gray-100 flex items-center justify-around px-2 pb-3 pt-2 z-50 shadow-[0_-4px_20px_rgba(0,0,0,0.03)] h-[72px]">
          <NavItem icon={Home} label="首页" active={activeTab === '首页'} onClick={() => navigateTo('首页')} variant="bottom" />
          <NavItem icon={Activity} label="项目监控" active={activeTab === '项目监控'} onClick={() => navigateTo('项目监控')} variant="bottom" />
          <NavItem icon={Package} label="项目库" active={activeTab === '项目库'} onClick={() => navigateTo('项目库')} variant="bottom" />
          <NavItem icon={User} label="我的" active={activeTab === '我的'} onClick={() => navigateTo('我的')} variant="bottom" />
        </nav>
      )}

    </div>
  );
}
