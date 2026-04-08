export const profile = {
  name: 'Jason Wang',
  chineseName: '王俊凱',
  title: 'Full-Stack Engineer & AI Builder',
  subtitle: '建構從底層到智慧層的完整技術棧',
  email: 'jason75395100@gmail.com',
  github: 'https://github.com/JasonWang1124',
  badges: ['3~4 年經驗', '電機 × 軟體跨域', '英文 中等'],
  heroDesc:
    '電機工程出身，橫跨硬體思維與軟體架構的跨域工程師。我用 Go 打造百萬級高併發後端，用 Flutter 一套程式碼省下 50% 開發成本，用 Python + LangChain 建構 RAG 智慧問答系統。從 Kubernetes 多雲部署到 Azure STT 語音辨識——我不只是使用技術，我用技術解決真實問題。',
} as const;

export const experience = [
  {
    company: '愛吠的狗娛樂股份有限公司',
    industry: '數位內容產業・30~100 人',
    role: '後端工程師 → 專案技術經理',
    period: '2024/6 ~ 在職中',
    current: true,
    phase: '整合期 — 技術決策與團隊交付',
    desc: '主導專案全生命週期：需求評估、成本估算、架構設計到團隊開發與交付。以 Golang 開發後端服務，整合 PostgreSQL、Redis、Cloudflare KV/R2 等多層資料架構。專案最多同時帶領 6 人團隊。',
    achievements: [
      '導入 Flutter 跨平台技術，降低移動端開發成本超過 50%',
      '規劃 AWS / GCP / Azure / Cloudflare 多雲架構，強化系統彈性與災難復原',
      '實現百萬級快取請求，運用 PostgreSQL 交易機制確保資料一致性',
    ],
    tags: ['Go', 'Flutter', 'PostgreSQL', 'Redis', 'AWS', '多雲架構', '團隊管理 6 人'],
  },
  {
    company: '曠世國際有限公司',
    industry: '網際網路相關業・1~30 人',
    role: '軟體專案主管（網頁開發組 組長）',
    period: '2020/8 ~ 2024/5',
    current: false,
    phase: '紮根期 — 從零建立全端能力',
    desc: '管理軟體開發專案流程，負責 SA/SD 系統分析與設計、RESTful API 設計、資料庫規劃。基於 Laravel 架構進行企業級 Web 開發，以 Node.js + Socket.IO 實踐高併發即時推播。帶領 4 人團隊，撰寫需求提案書並參與客戶技術決策會議。',
    achievements: [
      '獨立建構 Testing Framework，實踐 TDD 開發流程',
      '跨框架整合：Django + Livego（直播推播）、Laravel + Socket.IO（即時通訊）',
      '導入 Docker 容器化，實現 Windows/Linux 跨平台部署',
    ],
    tags: ['Laravel', 'Node.js', 'Socket.IO', 'PHP', 'GCP', 'Docker', '團隊管理 4 人'],
  },
] as const;

export const education = {
  school: '國立高雄應用科技大學',
  degree: '電機工程系・學士',
  period: '2017 — 2021',
  certs: ['丙級工業配線技術士', 'iPAS 電動車機電整合 初級', 'iPAS 電動車機電整合 中級'],
} as const;

export const languages = [
  { name: 'Go', meta: 'PRIMARY // BACKEND', desc: '主力後端語言。所有微服務、API 閘道與即時通訊系統的基石。', level: 95 },
  { name: 'TypeScript', meta: 'FRONTEND // FULLSTACK', desc: '前端與全端開發。React 生態系的主要開發語言。', level: 85 },
  { name: 'Python', meta: 'AI / ML // PIPELINE', desc: 'AI 應用開發。FastAPI 服務、LangChain Pipeline、模型整合。', level: 80 },
  { name: 'PHP', meta: 'BACKEND // LARAVEL', desc: '企業級 Web 系統開發。Laravel 架構、TDD 測試驅動。', level: 75 },
  { name: 'Dart', meta: 'MOBILE // FLUTTER', desc: '跨平台 App 與 Plugin 開發。含原生 FFI 橋接。', level: 65 },
  { name: 'SQL', meta: 'DATA // QUERY', desc: '資料庫設計與查詢優化。PostgreSQL、MySQL。', level: 60 },
  { name: 'Rust', meta: 'SYSTEMS // PERFORMANCE', desc: '高效能系統開發。即時監控與資料處理。', level: 50 },
  { name: 'C++ / C', meta: 'NATIVE // FFI', desc: '原生層開發。VAD Plugin 的 TEN Framework 底層整合。', level: 45 },
  { name: 'HCL', meta: 'INFRA // TERRAFORM', desc: '基礎設施即程式碼。完整 AWS 環境定義與管理。', level: 55 },
] as const;

export const frameworks = {
  backend: {
    label: 'BACKEND',
    items: [
      { name: 'Gin', primary: true },
      { name: 'FastAPI', primary: true },
      { name: 'Laravel', primary: true },
      { name: 'Node.js', primary: false },
      { name: 'Django', primary: false },
      { name: 'GORM', primary: false },
      { name: 'LangChain', primary: false },
      { name: 'Socket.IO', primary: false },
      { name: 'WebSocket', primary: false },
    ],
  },
  frontend: {
    label: 'FRONTEND',
    items: [
      { name: 'React', primary: true },
      { name: 'Flutter', primary: true },
      { name: 'Next.js', primary: false },
      { name: 'Vite', primary: false },
      { name: 'Vue.js', primary: false },
      { name: 'TailwindCSS', primary: false },
    ],
  },
  architecture: {
    label: 'ARCHITECTURE & METHODOLOGY',
    items: [
      { name: 'SA / SD', primary: true },
      { name: 'Swagger / OpenAPI', primary: false },
      { name: 'RESTful API Design', primary: false },
      { name: 'TDD', primary: false },
      { name: 'Agile', primary: false },
    ],
  },
  testing: {
    label: 'TESTING & PERFORMANCE',
    items: [
      { name: 'Vitest', primary: false },
      { name: 'k6', primary: false },
    ],
  },
} as const;

export const aiItems = [
  {
    label: 'Voice Processing',
    heading: '語音處理全鏈路',
    text: '自主開發 VAD Flutter Plugin，基於 TEN Framework，透過 C++/FFI 橋接至 Dart，實現 Android/iOS 雙平台即時語音活動偵測。整合 Azure Speech Services 進行 STT 語音辨識，搭配 TTS 語音合成，打造端到端 AI 語音對話系統。',
    highlights: ['Azure Speech Services', 'TTS', 'C++/FFI'],
  },
  {
    label: 'RAG Pipeline',
    heading: '檢索增強生成架構',
    text: '設計並實作完整 RAG 流程：文件擷取 → 向量化 → 檢索 → 生成。應用於工業安全智慧問答系統，使用 LangChain + FastAPI 建構 MCP Server，串接多種 LLM 與工具鏈。',
    highlights: ['LangChain', 'FastAPI'],
  },
  {
    label: 'LLM Integration',
    heading: '大型語言模型服務化',
    text: '以 Go 開發 OpenAI 服務後端，提供統一 API 介面供多個前端產品調用。整合 HuggingFace 開源模型至 RAG Pipeline，搭配 Pinecone 與 Milvus 向量資料庫進行語義檢索。',
    highlights: ['HuggingFace', 'Pinecone', 'Milvus'],
  },
  {
    label: 'Image Generation',
    heading: 'AI 圖像生成服務',
    text: '建構 Stable Diffusion API 服務，完成 200 題規模的測試分析與效能調優，從 Prompt Engineering 到推論效能的全流程掌握。',
    highlights: ['Stable Diffusion'],
  },
] as const;

export const dataLayer = {
  relational: {
    title: 'Relational Database',
    items: [
      { name: 'PostgreSQL', desc: '主力，GORM 整合' },
      { name: 'MySQL', desc: '企業級應用' },
      { name: 'MS SQL', desc: '企業級系統' },
      { name: 'SQLite', desc: '輕量嵌入式' },
    ],
  },
  vector: {
    title: 'Vector Database',
    items: [
      { name: 'Pinecone', desc: 'RAG 向量檢索' },
      { name: 'Milvus', desc: 'bge-m3 Embedding' },
    ],
  },
  cache: {
    title: 'Cache & Search',
    items: [
      { name: 'Redis', desc: '快取 + 訊息串流' },
      { name: 'MongoDB', desc: 'NoSQL 文件儲存' },
      { name: 'Elasticsearch', desc: '全文搜尋與日誌' },
    ],
  },
} as const;

export const infrastructure = [
  {
    label: 'AWS',
    sub: 'Primary Cloud',
    chips: ['EKS', 'RDS', 'S3', 'ACM', 'VPC', 'IAM', 'Secrets Manager'],
  },
  {
    label: 'Azure',
    sub: 'AI Services',
    chips: ['Speech Services (STT)'],
  },
  {
    label: 'GCP',
    sub: 'Platform & API',
    chips: ['AI Platform', 'Maps API', 'Compute Engine', 'Cloud Run', 'OAuth 2.0'],
  },
  {
    label: 'Analytics',
    sub: 'SEO & Tracking',
    chips: ['Google Analytics 4', 'SEO'],
  },
  {
    label: 'DevOps',
    sub: 'Toolchain',
    chips: ['Terraform', 'Docker', 'Kubernetes', 'Cloudflare Workers', 'Cloudflare KV / R2', 'OpenTelemetry', 'NATS'],
  },
] as const;

export const projects = [
  { name: 'AI Voice Platform', desc: 'AI 語音即時通訊平台，整合 Azure STT / TTS / VAD 全鏈路語音處理', stack: ['Go', 'React', 'Flutter'] },
  { name: 'Secure Meeting', desc: '端對端加密安全會議系統，支援即時音視訊與 WebSocket 通訊', stack: ['Go', 'Gin', 'WebSocket'] },
  { name: 'Smart Kiosk', desc: '交通資訊智慧看板，整合即時到站、天氣與 Google Maps 地圖資訊', stack: ['Go', 'React', 'Maps API'] },
  { name: 'RAG Q&A Engine', desc: '工業安全智慧問答系統，完整 RAG Pipeline 從文件擷取到生成', stack: ['Python', 'FastAPI', 'LangChain', 'RAG'] },
  { name: 'VAD Flutter Plugin', desc: '高效能語音活動偵測 Plugin，C++/FFI 原生橋接雙平台', stack: ['Dart', 'C++', 'FFI'] },
  { name: 'Network Monitor', desc: '網路品質即時監控儀表板，高效能後端搭配互動式前端', stack: ['Rust', 'React'] },
] as const;
