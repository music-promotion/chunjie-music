import { siteConfig } from '@/site.config'
import Link from 'next/link'

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-red-600 via-red-500 to-yellow-500">
      {/* 装饰性元素 - 金色光晕 */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-64 h-64 bg-yellow-300/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-yellow-400/20 rounded-full blur-3xl"></div>
      </div>

      {/* Header */}
      <header className="relative border-b border-red-400/30 bg-red-700/80 backdrop-blur-sm">
        <div className="container mx-auto px-4 py-6">
          <div className="flex items-center gap-3">
            <span className="text-4xl">🧧</span>
            <div>
              <h1 className="text-3xl font-bold text-yellow-300 drop-shadow-lg">{siteConfig.name}</h1>
              <p className="text-sm text-red-100 mt-1">{siteConfig.description}</p>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <main className="relative container mx-auto px-4 py-16">
        <div className="max-w-5xl mx-auto">
          {/* 主标题区 */}
          <div className="text-center mb-16">
            <div className="inline-block mb-6">
              <span className="text-6xl">🎵</span>
              <span className="text-6xl mx-2">🏮</span>
              <span className="text-6xl">🎊</span>
            </div>
            <h2 className="text-5xl md:text-6xl font-bold text-white mb-6 drop-shadow-2xl">
              让音乐点燃春节氛围
            </h2>
            <p className="text-xl md:text-2xl text-red-50 mb-10 drop-shadow-lg">
              精选传统与现代春节音乐，为你的新年增添喜庆与温暖
            </p>
            
            {/* CTA 按钮 */}
            <a 
              href={siteConfig.targetProduct.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-yellow-400 text-red-900 px-10 py-4 rounded-full text-lg font-bold hover:bg-yellow-300 transition-all transform hover:scale-105 shadow-2xl"
            >
              🎼 AI 生成专属春节歌曲
            </a>
          </div>

          {/* 分类卡片 */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {siteConfig.theme.categories.map((category, index) => {
              const emojis = ['🎺', '🎸', '🎤', '🎹', '🥁', '🎻']
              return (
                <Link
                  key={category}
                  href="/articles"
                  className="group bg-white/95 backdrop-blur-sm p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all transform hover:-translate-y-2 border-4 border-yellow-400"
                >
                  <div className="text-5xl mb-4 group-hover:scale-110 transition-transform">
                    {emojis[index]}
                  </div>
                  <h3 className="text-xl font-bold text-red-700 mb-2">{category}</h3>
                  <p className="text-sm text-gray-600">探索精选曲目 →</p>
                </Link>
              )
            })}
          </div>

          {/* 文章入口 */}
          <div className="text-center mb-16">
            <Link
              href="/articles"
              className="inline-block bg-white/95 backdrop-blur-sm px-10 py-4 rounded-full text-lg font-bold text-red-600 border-4 border-yellow-400 hover:bg-yellow-50 transition-all transform hover:scale-105 shadow-xl"
            >
              📚 浏览全部春节音乐文章
            </Link>
          </div>

          {/* 产品推广区 - 更突出 */}
          <div className="relative bg-gradient-to-r from-yellow-400 via-yellow-300 to-yellow-400 rounded-3xl p-10 shadow-2xl mb-16 border-4 border-red-600 overflow-hidden">
            {/* 装饰性背景 */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-0 left-0 text-9xl">🎊</div>
              <div className="absolute bottom-0 right-0 text-9xl">🧧</div>
            </div>
            
            <div className="relative z-10">
              <div className="text-center mb-6">
                <span className="text-6xl">🎁</span>
              </div>
              <h3 className="text-3xl md:text-4xl font-bold text-red-700 mb-4 text-center">
                想要独一无二的春节歌曲？
              </h3>
              <p className="text-lg text-red-800 mb-6 text-center max-w-2xl mx-auto">
                {siteConfig.targetProduct.description}
              </p>
              <div className="text-center">
                <a 
                  href={siteConfig.targetProduct.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-red-600 text-white px-10 py-4 rounded-full text-lg font-bold hover:bg-red-700 transition-all transform hover:scale-105 shadow-xl"
                >
                  立即免费体验 →
                </a>
              </div>
            </div>
          </div>

          {/* 相关推荐 */}
          <div className="bg-white/95 backdrop-blur-sm rounded-2xl p-8 shadow-xl border-4 border-yellow-400">
            <h3 className="text-2xl font-bold text-red-700 mb-6 text-center">🔗 更多音乐资源</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {siteConfig.relatedSites.map((site) => (
                <a
                  key={site.url}
                  href={site.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block p-6 bg-red-50 rounded-xl hover:bg-red-100 transition-all transform hover:scale-105 border-2 border-red-200"
                >
                  <span className="text-base font-bold text-red-700">{site.name}</span>
                  <span className="text-sm text-red-500 block mt-2">访问 →</span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="relative border-t border-red-400/30 mt-20 py-10 bg-red-800/80 backdrop-blur-sm">
        <div className="container mx-auto px-4 text-center">
          <p className="text-red-100 mb-2">{siteConfig.name} © 2025</p>
          <p className="text-sm text-red-200">让每个春节都充满音乐与欢乐 🎊</p>
        </div>
      </footer>
    </div>
  )
}
