import { 
  Wallet, 
  TrendingUp, 
  FolderKanban, 
  ShieldCheck,
  FileText,
  PlayCircle,
  CheckCircle2
} from 'lucide-react';

// --- Common Data ---

export const YEARLY_COMPLETION_DATA = [
  { name: '1月', value: 30 },
  { name: '2月', value: 35 },
  { name: '3月', value: 45 },
  { name: '4月', value: 40 },
  { name: '5月', value: 55 },
  { name: '6月', value: 50 },
  { name: '7月', value: 65 },
  { name: '8月', value: 75 },
  { name: '9月', value: 70 },
  { name: '10月', value: 85 },
  { name: '11月', value: 90 },
  { name: '12月', value: 98.32 },
];

export const STAGE_CONVERSION_DATA = [
  { stage: '立项', value: 90 },
  { stage: '采购', value: 88 },
  { stage: '实施', value: 82 },
  { stage: '上线', value: 80 },
  { stage: '验收', value: 76 },
];

export const PROGRESS_ANALYSIS_DATA = [
  { name: '10%', value: 10 },
  { name: '20%', value: 20 },
  { name: '30%', value: 35 },
  { name: '40%', value: 45 },
  { name: '50%', value: 55 },
  { name: '60%', value: 65 },
  { name: '70%', value: 75 },
  { name: '80%', value: 85 },
  { name: '90%', value: 92 },
  { name: '100%', value: 100 },
];

// --- Digital Project Data ---

export const DIGITAL_KPI_DATA = [
  { id: 1, title: '预算总额', value: '9949', unit: '万元', icon: Wallet, color: 'text-blue-500', bg: 'bg-blue-50' },
  { id: 2, title: '预算执行率', value: '66', unit: '%', icon: TrendingUp, color: 'text-red-500', bg: 'bg-red-50' },
  { id: 3, title: '项目总数', value: '66', unit: '个', icon: FolderKanban, color: 'text-orange-500', bg: 'bg-orange-50' },
  { id: 4, title: '累计完成', value: '33', unit: '个', icon: ShieldCheck, color: 'text-green-500', bg: 'bg-green-50' },
];

export const DIGITAL_SECONDARY_KPI = [
  { label: '验收通过率', value: '12' },
  { label: '统建项目', value: '21' },
  { label: '分建项目', value: '12' },
];

export const DIGITAL_PROJECT_TYPES = [
  { name: '企业自主立项项目', count: 700, percentage: 85 },
  { name: '政府立项项目', count: 500, percentage: 65 },
  { name: '合作开发项目', count: 400, percentage: 50 },
  { name: '委托开发项目', count: 350, percentage: 40 },
  { name: '产学研合作项目', count: 200, percentage: 25 },
];

export const DIGITAL_INVESTMENT_DIST = [
  { name: '金额≤500万元', value: 36, color: '#3B82F6' },
  { name: '金额>500万元', value: 30, color: '#10B981' },
];

export const DIGITAL_MONTHLY_INVESTMENT = [
  { month: '1月', amount: 1000 },
  { month: '2月', amount: 2000 },
  { month: '3月', amount: 3000 },
  { month: '4月', amount: 4000 },
  { month: '5月', amount: 5000 },
  { month: '6月', amount: 6000 },
  { month: '7月', amount: 7000 },
  { month: '8月', amount: 8000 },
  { month: '9月', amount: 9000 },
  { month: '10月', amount: 10000 },
  { month: '11月', amount: 11000 },
  { month: '12月', amount: 12000 },
];

export const DIGITAL_RISK_WARNINGS = [
  { id: 1, name: '行业数据采购', tag: '进度延误10天', color: '#3B82F6', bg: '#EFF6FF' },
  { id: 2, name: '项目数字化管理系统建设', tag: '验收驳回', color: '#EF4444', bg: '#FEF2F2' },
  { id: 3, name: '集团信创云建设', tag: '预算超2%', color: '#F59E0B', bg: '#FFFBEB' },
  { id: 4, name: '集团信创替代实施', tag: '进度延误10天', color: '#3B82F6', bg: '#EFF6FF' },
  { id: 5, name: '新一代安全防护体系建设一期', tag: '验收驳回', color: '#EF4444', bg: '#FEF2F2' },
];

export const DIGITAL_QUARTERLY_DATA = {
  '第一季度': { oItems: 3, progress: [30, 20, 30, 20] },
  '第二季度': { oItems: 3, progress: [30, 20, 30, 20] },
  '第三季度': { oItems: 3, progress: [30, 20, 30, 20] },
  '第四季度': { oItems: 3, progress: [30, 20, 30, 20] },
};

export const DIGITAL_GROUP_DISTRIBUTION = [
  { dept: '办公室', count: 10 },
  { dept: '党委组织部', count: 10 },
  { dept: '党群工作部', count: 10 },
  { dept: '纪委、检察专员办公室机关', count: 10 },
  { dept: '战略运营部', count: 10 },
  { dept: '产业促进部', count: 10 },
  { dept: '投资发展部', count: 6 },
];

export const DIGITAL_RISK_DATA = [
  { level: 'I 级风险', count: 1, color: 'bg-blue-600', desc: '超预算≥15%、资金违规支付、涉密数据泄露。' },
  { level: 'II 级风险', count: 1, color: 'bg-blue-500', desc: '超预算 5%-15%、进度延误 10-30 天、采购流程瑕疵。' },
  { level: 'III 级风险', count: 2, color: 'bg-blue-400', desc: '预算偏差 < 5%、小范围需求变更。' },
];

export const DIGITAL_DEPT_BUDGET_DATA = [
  { name: '产业促进部', budget: 10, actual: 7 },
  { name: '战略运营部', budget: 10, actual: 12 },
  { name: '纪委', budget: 8, actual: 22 },
  { name: '党群工作部', budget: 12, actual: 12 },
  { name: '党委组织部', budget: 15, actual: 10 },
  { name: '办公室', budget: 12, actual: 10 },
];

// --- Tech Project Data ---

export const TECH_KPI_DATA = [
  { id: 1, title: '投资总额', value: '265', unit: '万元', icon: Wallet, color: 'text-blue-500', bg: 'bg-blue-50' },
  { id: 2, title: '项目执行率', value: '66', unit: '%', icon: TrendingUp, color: 'text-red-500', bg: 'bg-red-50' },
  { id: 3, title: '项目总数', value: '66', unit: '个', icon: FolderKanban, color: 'text-orange-500', bg: 'bg-orange-50' },
  { id: 4, title: '累计完成', value: '33', unit: '个', icon: ShieldCheck, color: 'text-green-500', bg: 'bg-green-50' },
];

export const TECH_SECONDARY_KPI = [
  { label: '验收通过率', value: '12' },
  { label: '在建项目', value: '21' },
  { label: '分派项目', value: '12' },
];

export const TECH_PROJECT_TYPES = [
  { name: '企业自主立项项目', count: 700, percentage: 85 },
  { name: '政府立项项目', count: 500, percentage: 65 },
  { name: '合作开发项目', count: 400, percentage: 50 },
  { name: '委托开发项目', count: 350, percentage: 40 },
  { name: '产学研合作项目', count: 200, percentage: 25 },
];

export const TECH_INVESTMENT_DIST = [
  { name: '金额≤500万元', value: 36, color: '#3B82F6' },
  { name: '金额>500万元', value: 30, color: '#10B981' },
];

export const TECH_MONTHLY_INVESTMENT = [
  { month: '1月', amount: 1050 },
  { month: '2月', amount: 2100 },
  { month: '3月', amount: 3200 },
  { month: '4月', amount: 4300 },
  { month: '5月', amount: 5400 },
  { month: '6月', amount: 6500 },
  { month: '7月', amount: 7600 },
  { month: '8月', amount: 8700 },
  { month: '9月', amount: 9800 },
  { month: '10月', amount: 10900 },
  { month: '11月', amount: 12000 },
  { month: '12月', amount: 13100 },
];

export const TECH_QUARTERLY_DATA = {
  '第一季度': { oItems: 3, progress: [30, 20, 30, 20] },
  '第二季度': { oItems: 5, progress: [20, 40, 10, 30] },
  '第三季度': { oItems: 2, progress: [40, 10, 20, 30] },
  '第四季度': { oItems: 4, progress: [25, 25, 25, 25] },
};

export const TECH_GROUP_DISTRIBUTION = [
  { dept: '办公室', count: 10 },
  { dept: '党委组织部', count: 11 },
  { dept: '人力资源部', count: 8 },
  { dept: '财务管理部', count: 15 },
  { dept: '科技创新部', count: 12 },
  { dept: '战略规划部', count: 9 },
];

export const MY_INSTRUCTIONS_DATA = [
  {
    id: 1,
    title: '行业数据采购',
    unit: '科技与数字化部',
    content: '请严格把控采购合规与质量，按计划推进，保障项目建设进度。',
    date: '2026-02-02',
    replies: {
      unitReply: '收到批示，即刻优化采购流程、严控采购成本，确保与项目节点无缝衔接，按期推进。',
      otherReply: '办公室：遵照批示要求，已梳理采购流程优化点，严格成本管控，保障采购与项目进度同步推进。'
    }
  },
  {
    id: 2,
    title: '科技研发与数字化项目管理系统建设项目',
    unit: '科技与数字化部',
    content: '优化采购流程，严控成本，确保采购工作与项目节点无缝衔接。',
    date: '2026-03-06',
    replies: {
      unitReply: '收到批示，即刻优化采购流程、严控采购成本，确保与项目节点无缝衔接，按期推进。',
      otherReply: '办公室：遵照批示要求，已梳理采购流程优化点，严格成本管控，保障采购与项目进度同步推进。'
    }
  },
  {
    id: 3,
    title: '集团信创云建设',
    unit: '科技与数字化部',
    content: '加快采购招标落地，强化各部门协同，全力保障项目建设需求。',
    date: '2026-02-10',
    replies: {
      unitReply: '收到批示，即刻优化采购流程、严控采购成本，确保与项目节点无缝衔接，按期推进。',
      otherReply: '办公室：遵照批示要求，已梳理采购流程优化点，严格成本管控，保障采购与项目进度同步推进。'
    }
  },
  {
    id: 4,
    title: '园区智慧运营服务平台',
    unit: '产业促进部',
    content: '严把采购各环节审核关，规范流程，确保项目采购工作高质量推进。',
    date: '2026-03-15',
    replies: {
      unitReply: '收到批示，即刻优化采购流程、严控采购成本，确保与项目节点无缝衔接，按期推进。',
      otherReply: '办公室：遵照批示要求，已梳理采购流程优化点，严格成本管控，保障采购与项目进度同步推进。'
    }
  }
];

export const PROJECT_LIBRARY_DATA = [
  {
    id: 1,
    status: '立项',
    statusColor: 'bg-[#4A86F7]',
    company: '服贸公司',
    title: '服务贸易产业互联网平台——中国通关网（一期）',
    amount: '1200万元',
    content: '将中国报关协会和东方亚港公司前期建设的中国通关网网站、全球海关商品归类服务平台、跨境贸易知识服务平台进行整合优化，面向跨境贸易企业提供国际经贸规则与贸易便利化咨询服务、跨境供应链一站式整合服务，广泛触达客户额同时，深入结合平台公司供应链服务和园区运营板块，打造跨境贸易一站式服务。',
    isFollowed: true,
    type: '科技研发项目'
  },
  {
    id: 2,
    status: '实施',
    statusColor: 'bg-[#F59E0B]',
    company: '城市更新（星箭公司）',
    title: '可重复使用运载火箭共性技术开发与型号研制（一期）',
    amount: '2800万元',
    content: '发布商业火箭领域 3 项标准规范；开展上升/返回全剖面一体化气动布局及热防护技术、大吨位液体运载火箭子结构模态综合分析技术研究；建设共性试验平台，形成 5 项共性试验能力。',
    isFollowed: false,
    type: '科技研发项目'
  },
  {
    id: 3,
    status: '实施',
    statusColor: 'bg-[#F59E0B]',
    company: '城市更新（星箭公司）',
    title: '可重复使用运载火箭技术开发与型号研制',
    amount: '50万元',
    content: '形成增压输送 系统检测制造、寿命试验、寿命评估及末级复用相关团体标准 4 项',
    isFollowed: false,
    type: '科技研发项目'
  },
  {
    id: 4,
    status: '验收',
    statusColor: 'bg-[#4ADE80]',
    company: '生物医药（科技公司）',
    title: '基于流式细胞术的小鼠心脏细胞鉴别及GFP表达分析',
    amount: '30万元',
    content: '建立一种鉴别小鼠心脏细胞不同亚型和GFP表达分析的流式检测方案',
    isFollowed: false,
    type: '科技研发项目'
  },
  {
    id: 5,
    status: '验收',
    statusColor: 'bg-[#4ADE80]',
    company: '生物医药（科技公司）',
    title: '基于实时细胞分析技术的免疫效应细胞杀伤活性检测',
    amount: '50万元',
    content: '建立RTCA法实时分析免疫细胞杀伤功能',
    isFollowed: false,
    type: '科技研发项目'
  }
];

export const DIGITAL_PROJECT_LIBRARY_DATA = [
  {
    id: 101,
    status: '立项',
    statusColor: 'bg-[#4A86F7]',
    company: '科技与数字化部',
    title: '行业数据采购',
    amount: '300万元',
    content: '企业数据、科技数据、产业数据采购，数据接口服务采购',
    isFollowed: false,
    type: '数字化项目'
  },
  {
    id: 102,
    status: '采购',
    statusColor: 'bg-[#A855F7]',
    company: '科技与数字化部',
    title: '科技研发与数字化项目管理系统建设项目',
    amount: '100万元',
    content: '实现科技和数字化建设项目全生命周期过程管理和合规管控，为数字化“管、建、运、督”组织提供管理支撑，保障建设项目合规、可控，为建设项目质量控制和价值成效目标达成提供有效管理支撑。',
    isFollowed: false,
    type: '数字化项目'
  },
  {
    id: 103,
    status: '实施',
    statusColor: 'bg-[#F59E0B]',
    company: '科技与数字化部',
    title: '集团全栈信创云服务能力建设',
    amount: '100万元',
    content: '建设集团全栈信创云服务能力。建设部署并运营覆盖IaaS/PaaS的集团信创云，在保障业务连续性的同时，满足国家安全合规要求，为集团战略安全保驾护航。',
    isFollowed: false,
    type: '数字化项目'
  },
  {
    id: 104,
    status: '上线',
    statusColor: 'bg-[#22D3EE]',
    company: '科技与数字化部',
    title: '集团信创替代实施',
    amount: '100万元',
    content: '信创笔记本采购数量按100台预估、选中高端机型按7000元单价，终端台式电脑采购数量按20台预估，选中高端配置按5500元单价，信创办公软件及授权费用预算10万/年',
    isFollowed: false,
    type: '数字化项目'
  },
  {
    id: 105,
    status: '验收',
    statusColor: 'bg-[#4ADE80]',
    company: '科技与数字化部',
    title: '新一代安全防护体系建设一期',
    amount: '400万元',
    content: '根据集团网络安全顶层设计方案进行实施',
    isFollowed: false,
    type: '数字化项目'
  }
];

export const MY_FOLLOWS_DATA = [
  {
    id: 1,
    title: '园区智慧运营服务平台',
    unit: '产业促进部',
    amount: '1186万元',
    isFollowed: true
  },
  {
    id: 2,
    title: '科技研发与数字化项目管理系统建设项目',
    unit: '科技与数字化部',
    amount: '98万元',
    isFollowed: false
  },
  {
    id: 3,
    title: '财务NC65系统服务项目',
    unit: '财务部',
    amount: '35万元',
    isFollowed: true
  },
  {
    id: 4,
    title: '咖啡机机器手臂采购',
    unit: '党群工作部',
    amount: '20万元',
    isFollowed: true
  }
];

export const TECH_DEPT_BUDGET_DATA = [
  { name: '产业促进部', budget: 10, actual: 7 },
  { name: '战略运营部', budget: 10, actual: 12 },
  { name: '纪委', budget: 8, actual: 22 },
  { name: '党群工作部', budget: 12, actual: 12 },
  { name: '党委组织部', budget: 15, actual: 10 },
];
