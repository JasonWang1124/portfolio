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
  { name: 'C++ / C', meta: 'NATIVE // FFI', desc: '原生層開發。VAD Plugin 底層引擎與 FFI 橋接。', level: 45 },
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
    text: '自主開發 VAD Flutter Plugin，透過 C++/FFI 橋接至 Dart，實現 Android/iOS 雙平台即時語音活動偵測。整合 Azure Speech Services 進行 STT 語音辨識，搭配 TTS 語音合成，打造端到端 AI 語音對話系統。',
    highlights: ['Azure Speech Services', 'TTS', 'C++/FFI'],
  },
  {
    label: 'RAG Pipeline',
    heading: '檢索增強生成架構',
    text: '設計並實作完整 RAG 流程：文件擷取 → 向量化 → 檢索 → 生成。應用於領域知識智慧問答系統，使用 LangChain + FastAPI 建構服務端，串接多種 LLM 與工具鏈。',
    highlights: ['LangChain', 'FastAPI'],
  },
  {
    label: 'LLM Integration',
    heading: '大型語言模型服務化',
    text: '以 Go 開發 LLM 服務後端，提供統一 API 介面供多個前端產品調用。整合開源模型至 RAG Pipeline，搭配向量資料庫進行語義檢索與知識管理。',
    highlights: ['Go', 'RAG Pipeline'],
  },
  {
    label: 'Image Generation',
    heading: 'AI 圖像生成服務',
    text: '建構圖像生成 API 服務，完成大規模測試分析與效能調優，從 Prompt Engineering 到推論效能的全流程掌握。',
    highlights: ['Prompt Engineering'],
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
      { name: 'Pinecone', desc: '雲端向量檢索' },
      { name: 'Milvus', desc: '自建向量儲存' },
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
    chips: ['Terraform', 'Docker', 'Kubernetes', 'FluxCD', 'Cloudflare Workers', 'Cloudflare KV / R2', 'OpenTelemetry', 'NATS'],
  },
] as const;

// TODO: 當 OpenAlice PR merge 至 upstream 後，移除「PR 進行中」字樣並加上 PR 連結
export const projects = [
  {
    slug: 'fugle-mcp-http',
    name: 'Fugle MarketData MCP (HTTP)',
    role: '主要開發者 — 個人開源專案',
    desc: 'Python FastMCP 伺服器，將富果 MarketData API 以 HTTP streamable transport 暴露為 MCP 工具',
    stack: ['Python', 'FastMCP', 'MCP', 'HTTP'],
    detail: '從零開發的 Python 開源專案，將官方 TypeScript stdio 版本重寫為 Python HTTP streamable transport 版本。以長駐服務取代 per-session process spawn，降低延遲並支援多客戶端共享。獨立加入 volume spike detection 工具，支援多股票並行掃描與單日去重，設計為可被 AI agent 或排程器定時輪詢使用。',
    challenges: ['HTTP streamable transport 的長駐連線生命週期管理', '多股票輪詢的單日去重策略設計', 'Fugle API 方案限制的優雅降級處理'],
  },
  {
    slug: 'open-alice',
    name: 'Open Alice',
    role: '開源貢獻者 — StrategyCouncil 與回測引擎（PR 進行中）',
    desc: '為 AI 交易 Agent 平台 Open Alice 貢獻多 Agent 審議與分鐘級回測引擎',
    stack: ['TypeScript', 'Node.js', 'Claude Agent SDK', 'Multi-Agent'],
    detail: 'Open Alice 是檔案驅動的 AI 交易 Agent 開源專案，以 Claude Agent SDK 為核心，整合多 broker、Trading-as-Git 工作流與 Guard 安全管線。本人於 fork 分支持續貢獻功能，目前 PR 待提交至 upstream（TraderAlice/OpenAlice）。',
    contributions: [
      'StrategyCouncil 多 Agent 審議機制（含 dashboard 與 demo harness）',
      'cursor-based replay 的分鐘級回測引擎',
      'Fugle MarketData MCP bridge',
      'K-line 互動圖表工具',
    ],
    challenges: ['多 Agent 審議的決策合流與衝突解決', '分鐘級回測的 cursor-based replay 時序一致性', '融入大型既有 codebase 的架構適配'],
  },
  {
    slug: 'agent-pomodoro',
    name: 'Agent Pomodoro',
    role: '主要開發者 — 個人開源專案',
    desc: 'Glassmorphism 番茄鐘 Chrome Extension，內建本地 FastAPI 與 MCP 伺服器，讓 AI agent 能主動推送任務並接收倒數結束事件',
    stack: ['Chrome MV3', 'FastAPI', 'MCP', 'Python', 'Docker'],
    detail: '一個讓 AI agent（Claude Code / Cursor）能直接串接的桌面番茄鐘小組件。Chrome Extension 端以 Manifest V3 + chrome.alarms 實作 popup UI 與背景倒數，後端是跑在 localhost:8787 的 FastAPI 服務，原生支援 MCP Streamable HTTP transport（掛在 /mcp），agent 可透過 tool call 直接 POST 任務、查詢狀態、收 webhook 回呼。倒數結束自動觸發 hook（如 Mattermost DM）並回寫任務進度。State 存在 ~/.agent-pomodoro/state.json，零雲端依賴；UI 走 Glassmorphism Peach Dawn 風格，補上市面 Pomodoro 工具缺少的 agent 整合面向。',
    challenges: ['Chrome MV3 service worker 生命週期下的精準倒數狀態同步', 'MCP Streamable HTTP transport 的長駐 session 與 tool 設計', 'Extension 與本地後端的雙向狀態一致性（agent 推送 vs 手動操作）'],
  },
  {
    slug: 'ai-voice-platform',
    name: 'AI Voice Platform',
    role: '參與開發 — 負責 STT 語音辨識模組',
    desc: 'AI 語音即時通訊平台，單一伺服器支援 50 人併發，語音辨識準確率 95%+',
    stack: ['Go', 'React', 'Flutter', 'Azure STT'],
    detail: '全端 AI 語音通訊平台，從語音活動偵測（VAD）到語音辨識（STT）、語音合成（TTS）實現完整鏈路。單一伺服器可處理 50 人同時連線，10 秒音訊的處理延遲控制在 450ms 以內（不含網路傳輸），語音辨識準確率達 95% 以上。本人負責 STT 模組的整合開發，包含 Azure Speech Services 串接與音訊串流處理。',
    challenges: ['10 秒音訊 450ms 內完成辨識（不含網路延遲）', '50 人併發連線的伺服器資源調度', 'Azure STT 串流模式的錯誤重試與斷線恢復'],
  },
  {
    slug: 'secure-meeting',
    name: 'Secure Meeting',
    role: '參與開發 — 負責 LLM Prompt 優化',
    desc: '完全離線的落地 AI 會議系統，無需聯網即可運行 AI 輔助功能',
    stack: ['Go', 'Gin', 'WebSocket', 'LLM'],
    detail: '企業級落地安全會議系統，核心特色為完全無聯網環境下仍能高效整合 AI 功能。以 Go + Gin 為核心，透過 WebSocket 實現低延遲雙向通訊，搭配本地部署的 LLM 模型提供會議摘要與智慧輔助。本人負責 LLM Prompt Engineering 優化，提升落地模型在會議場景的生成品質與回應精確度。',
    challenges: ['離線環境下 LLM 推論的效能與品質平衡', 'Prompt 策略調校以適配落地模型的能力邊界', '會議語境下的多輪對話 Prompt 設計'],
  },
  {
    slug: 'smart-kiosk',
    name: 'Smart Kiosk',
    role: '主要開發者 — 跨平台與語音系統',
    desc: '智慧互動看板，落地展會、百貨、餐廳及日本觀光景點',
    stack: ['Go', 'React', 'Flutter', 'Maps API'],
    detail: '智慧互動看板系統，整合即時交通、氣象與地圖資訊。實際落地於展覽會場、百貨公司、行動設備、餐廳，以及日本海外觀光景點。後端以 Go 開發 API Gateway，整合 TDX 交通資料與中央氣象署 API，前端使用 React + Google Maps 呈現地理資訊。本人為主要開發者，負責跨平台架構設計與語音互動系統整合。',
    challenges: ['多場域部署的環境適配（展會、百貨、海外景點）', '多來源即時資料的聚合與快取策略', '跨平台（Web + 行動裝置）的統一互動體驗'],
  },
  {
    slug: 'rag-qa-engine',
    name: 'RAG Q&A Engine',
    role: '核心開發者 — 系統建置與架構研討',
    desc: '工業安全智慧問答，萬級文件索引、落地模型 3 秒內回應',
    stack: ['Python', 'FastAPI', 'LangChain', 'RAG'],
    detail: '基於 RAG（Retrieval-Augmented Generation）架構的領域知識智慧問答系統。支援萬級文件索引，搭配落地部署模型可在 3 秒內完成 AI 回應。完整 Pipeline 涵蓋文件擷取、文字切片、向量嵌入、向量檢索到 LLM 生成回答。本人負責系統建置、架構設計與技術研討，使用 LangChain 編排多步驟工具鏈。',
    challenges: ['萬級文件的高效索引與增量更新策略', '落地模型下 3 秒回應的效能調校', '長文件切片策略與向量檢索 recall/precision 平衡'],
  },
  {
    slug: 'vad-flutter-plugin',
    name: 'VAD Flutter Plugin',
    role: '核心開發者 — 優化處理與音訊前處理',
    desc: '自適應語音活動偵測 Plugin，含音訊前處理與 WebView 套件優化',
    stack: ['Dart', 'C++', 'FFI'],
    detail: '跨平台語音活動偵測（VAD）Flutter Plugin，實現自適應 VAD 閾值調整，根據環境噪音動態優化偵測靈敏度。包含完整的音訊前處理管線（降噪、增益控制）與 WebView 套件整合優化。透過 Dart FFI 橋接 C++ 原生推論引擎，在 Android 與 iOS 上實現即時語音偵測。本人為核心開發者，負責 VAD 演算法優化、音訊前處理與套件效能調校。',
    challenges: ['自適應 VAD 閾值在不同環境噪音下的穩定性', '音訊前處理管線的即時性能（<10ms 延遲）', 'WebView 環境下音訊擷取的相容性處理'],
  },
  {
    slug: 'network-monitor',
    name: 'Network Monitor',
    role: '協作開發 — DevOps / MIS 架構與維運',
    desc: '網路品質即時監控系統，整合 Grafana 視覺化與告警機制',
    stack: ['Rust', 'React', 'Grafana'],
    detail: '企業網路品質即時監控系統。後端以 Rust 開發高頻網路探測引擎，整合 Grafana 建構視覺化儀表板與告警機制。前端使用 React 提供互動式操作介面，支援即時圖表與歷史趨勢分析。本人基於機房維運經驗，與另一位同仁共同負責 DevOps 與 MIS 架構規劃、部署維運及監控策略制定。',
    challenges: ['Grafana 告警規則與閾值的精準調校', '高頻時序資料的儲存策略與查詢優化', 'DevOps 流程標準化與新人交接文件建立'],
  },
] as const;
