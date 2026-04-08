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
  {
    slug: 'ai-voice-platform',
    name: 'AI Voice Platform',
    desc: 'AI 語音即時通訊平台，整合 Azure STT / TTS / VAD 全鏈路語音處理',
    stack: ['Go', 'React', 'Flutter'],
    detail: '全端 AI 語音通訊平台，從語音活動偵測（VAD）到語音辨識（STT）、語音合成（TTS）實現完整鏈路。後端以 Go + Gin 架構處理即時 WebSocket 連線，前端同時支援 React Web 與 Flutter 跨平台 App。整合 Azure Speech Services 進行雲端語音處理，搭配自研 VAD Plugin 降低延遲。',
    challenges: ['即時音訊串流的低延遲傳輸', '跨平台（Web + iOS + Android）音訊 codec 統一', 'VAD 與 STT 的串接時序控制'],
  },
  {
    slug: 'secure-meeting',
    name: 'Secure Meeting',
    desc: '端對端加密安全會議系統，支援即時音視訊與 WebSocket 通訊',
    stack: ['Go', 'Gin', 'WebSocket'],
    detail: '企業級安全會議系統，支援多人即時音視訊通話與文字聊天。以 Go + Gin 為核心，透過 WebSocket 實現低延遲雙向通訊。整合使用者協議管理模組，支援 PostgreSQL 資料持久化與版本控管部署。',
    challenges: ['多人同時連線的 WebSocket 連線管理', '音視訊串流的伺服器端轉發架構設計', '版本控管與自動化部署流程'],
  },
  {
    slug: 'smart-kiosk',
    name: 'Smart Kiosk',
    desc: '交通資訊智慧看板，整合即時到站、天氣與 Google Maps 地圖資訊',
    stack: ['Go', 'React', 'Maps API'],
    detail: '公共交通智慧看板系統，即時顯示公車到站時間、氣象資訊與互動式地圖。後端以 Go 開發 API Gateway，整合 TDX 交通資料與中央氣象署 API。前端使用 React + Leaflet/Google Maps 呈現地理資訊，支援 OpenTelemetry 可觀測性監控。',
    challenges: ['多來源即時資料的聚合與快取策略', '看板端離線容錯機制', 'Kubernetes 部署與自動擴展'],
  },
  {
    slug: 'rag-qa-engine',
    name: 'RAG Q&A Engine',
    desc: '工業安全智慧問答系統，完整 RAG Pipeline 從文件擷取到生成',
    stack: ['Python', 'FastAPI', 'LangChain', 'RAG'],
    detail: '基於 RAG（Retrieval-Augmented Generation）架構的智慧問答系統，應用於工業安全領域。從 PDF/文件擷取、文字切片、向量嵌入（bge-m3）、Milvus/Pinecone 向量檢索到 LLM 生成回答的完整 Pipeline。使用 LangChain 編排多步驟工具鏈，FastAPI 提供 REST API 服務。',
    challenges: ['長文件的最佳切片策略與 overlap 調校', '向量檢索的 recall 與 precision 平衡', '多語言文件的 embedding 品質'],
  },
  {
    slug: 'vad-flutter-plugin',
    name: 'VAD Flutter Plugin',
    desc: '高效能語音活動偵測 Plugin，C++/FFI 原生橋接雙平台',
    stack: ['Dart', 'C++', 'FFI'],
    detail: '基於 TEN Framework 的跨平台語音活動偵測（VAD）Flutter Plugin。透過 Dart FFI 橋接 C++ 原生推論引擎，在 Android 與 iOS 上實現即時語音偵測。已發佈為可複用的 Flutter Package，支援串流式音訊輸入與事件回調。',
    challenges: ['C++ 記憶體管理與 Dart GC 的互操作', 'Android NDK 與 iOS Framework 的雙平台建構', '即時音訊處理的效能優化（<10ms 延遲）'],
  },
  {
    slug: 'network-monitor',
    name: 'Network Monitor',
    desc: '網路品質即時監控儀表板，高效能後端搭配互動式前端',
    stack: ['Rust', 'React'],
    detail: '企業網路品質即時監控系統。後端以 Rust 開發，利用其零成本抽象特性處理高頻網路探測數據。前端使用 React 建構互動式儀表板，支援即時圖表更新與歷史趨勢分析。',
    challenges: ['Rust async runtime 的網路 I/O 效能調校', '高頻時序資料的儲存與查詢優化', '前端大量即時數據點的渲染效能'],
  },
] as const;
