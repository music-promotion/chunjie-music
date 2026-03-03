export const siteConfig = {
  name: "春节音乐大全",
  domain: "chunjie-music.top",
  description: "专注春节音乐推荐与分享，提供传统春节歌曲、现代贺年音乐、拜年背景音乐等丰富资源，让你的春节更有年味",
  keywords: ["春节音乐", "春节歌曲", "过年音乐", "拜年歌曲", "新年歌曲", "贺年音乐", "春节背景音乐"],
  
  // 目标产品
  targetProduct: {
    name: "AndMusic.chat",
    url: "https://andmusic.chat",
    description: "AI 音乐生成工具，一键创作专属春节歌曲，让你的新年祝福更独特"
  },
  
  // 站点主题 - 春节专属配色
  theme: {
    primaryColor: "#dc2626", // 中国红
    secondaryColor: "#fbbf24", // 金色
    accentColor: "#ef4444", // 亮红
    categories: ["传统春节歌曲", "现代贺年音乐", "拜年背景音乐", "儿童春节歌曲", "地方特色音乐", "春节舞曲"]
  },
  
  // 百度推送
  baidu: {
    siteUrl: "https://chunjie-music.top",
    token: "" // 待填充
  },
  
  // 关联站点（用于外链推荐）
  relatedSites: [
    { name: "节日歌曲大全", url: "https://jieri-gequs.top" },
    { name: "AI音乐生成工具", url: "https://andmusic.chat" },
    { name: "生日歌曲定制", url: "https://birthday-song-ai.top" }
  ]
}
