import { getAllArticles } from '@/lib/articles'
import { siteConfig } from '@/site.config'
import Link from 'next/link'

export default function ArticlesPage() {
  const articles = getAllArticles()
  
  // 按分类分组
  const categories = Array.from(new Set(articles.map(a => a.category)))
  
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#F8FAFC] to-white">
      {/* Floating Header */}
      <header className="fixed top-6 left-6 right-6 z-50 bg-white/80 backdrop-blur-md border border-gray-200 rounded-2xl shadow-lg">
        <div className="px-8 py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3 cursor-pointer group">
            <svg className="w-8 h-8 text-[#CA8A04] group-hover:scale-110 transition-transform" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 3v10.55c-.59-.34-1.27-.55-2-.55-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4V7h4V3h-6z"/>
            </svg>
            <div>
              <h1 className="text-xl font-bold text-[#0F172A] font-['Noto_Serif_TC']">{siteConfig.name}</h1>
              <p className="text-xs text-gray-600 font-['Noto_Sans_TC']">节日音乐资讯与推荐</p>
            </div>
          </Link>
          <Link
            href="/"
            className="px-6 py-2 bg-[#0F172A] text-white rounded-full font-semibold hover:bg-[#0F172A]/90 transition-all cursor-pointer font-['Noto_Sans_TC']"
          >
            返回首页
          </Link>
        </div>
      </header>

      <main className="pt-32 pb-20">
        <div className="container mx-auto px-6">
          {/* Massive Title */}
          <div className="max-w-5xl mx-auto mb-20">
            <h1 className="text-[clamp(3rem,8vw,6rem)] font-black text-[#0F172A] leading-[0.9] tracking-tight mb-8 font-['Noto_Serif_TC']">
              文章<span className="text-[#CA8A04]">列表</span>
            </h1>
            
            {/* Category Pills - Horizontal Scroll */}
            <div className="flex gap-3 overflow-x-auto pb-4 snap-x snap-mandatory scrollbar-hide">
              {categories.map(category => (
                <a
                  key={category}
                  href={`#${category}`}
                  className="flex-shrink-0 snap-center px-6 py-3 bg-[#CA8A04]/10 text-[#0F172A] rounded-full font-semibold hover:bg-[#CA8A04]/20 transition-all cursor-pointer border-2 border-[#CA8A04]/20 hover:border-[#CA8A04]/40 font-['Noto_Sans_TC']"
                >
                  {category}
                </a>
              ))}
            </div>
          </div>

          {/* Articles by Category - Asymmetric Layout */}
          <div className="max-w-6xl mx-auto space-y-32">
            {categories.map((category, catIndex) => {
              const categoryArticles = articles.filter(a => a.category === category)
              const isEven = catIndex % 2 === 0
              
              return (
                <div key={category} id={category} className="scroll-mt-32">
                  {/* Category Header */}
                  <div className={`flex items-center gap-6 mb-12 ${isEven ? '' : 'flex-row-reverse'}`}>
                    <div className="flex-shrink-0 w-20 h-20 bg-[#CA8A04]/20 rounded-2xl flex items-center justify-center">
                      <svg className="w-10 h-10 text-[#CA8A04]" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 3v10.55c-.59-.34-1.27-.55-2-.55-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4V7h4V3h-6z"/>
                      </svg>
                    </div>
                    <h2 className="text-5xl font-black text-[#0F172A] font-['Noto_Serif_TC']">
                      {category}
                    </h2>
                  </div>

                  {/* Articles - Staggered Layout */}
                  <div className="space-y-6">
                    {categoryArticles.map((article, index) => {
                      const offset = index % 3
                      const marginLeft = isEven ? offset * 80 : (2 - offset) * 80
                      
                      return (
                        <Link
                          key={article.slug}
                          href={`/articles/${article.slug}`}
                          className="block group cursor-pointer"
                          style={{ marginLeft: `${marginLeft}px` }}
                        >
                          <div className="bg-white border-l-4 border-[#CA8A04] rounded-r-2xl shadow-md hover:shadow-xl transition-all p-8 hover:border-l-8">
                            <div className="flex items-start justify-between gap-6">
                              <div className="flex-1">
                                <h3 className="text-3xl font-bold text-[#0F172A] mb-3 group-hover:text-[#CA8A04] transition-colors font-['Noto_Serif_TC']">
                                  {article.title}
                                </h3>
                                <p className="text-gray-600 text-lg mb-4 font-['Noto_Sans_TC']">
                                  {article.description}
                                </p>
                                <div className="flex items-center gap-4 text-sm text-gray-500 font-['Noto_Sans_TC']">
                                  <span className="flex items-center gap-2">
                                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                                      <path d="M19 3h-1V1h-2v2H8V1H6v2H5c-1.11 0-1.99.9-1.99 2L3 19c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V8h14v11z"/>
                                    </svg>
                                    {article.date}
                                  </span>
                                </div>
                              </div>
                              
                              <div className="flex-shrink-0 w-12 h-12 bg-[#CA8A04]/10 rounded-full flex items-center justify-center group-hover:bg-[#CA8A04] transition-all">
                                <svg className="w-6 h-6 text-[#CA8A04] group-hover:text-white group-hover:translate-x-1 transition-all" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                </svg>
                              </div>
                            </div>
                          </div>
                        </Link>
                      )
                    })}
                  </div>
                </div>
              )
            })}
          </div>

          {/* CTA Section */}
          <div className="max-w-4xl mx-auto mt-32 text-center">
            <div className="bg-gradient-to-br from-[#0F172A] to-[#1E3A8A] rounded-3xl p-16 relative overflow-hidden">
              <div className="absolute inset-0 opacity-10">
                <div className="absolute top-0 right-0 w-64 h-64 bg-[#CA8A04] rounded-full blur-3xl"></div>
                <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#CA8A04] rounded-full blur-3xl"></div>
              </div>
              
              <div className="relative z-10">
                <h3 className="text-5xl font-black text-white mb-6 font-['Noto_Serif_TC']">
                  创作你的专属春节歌曲
                </h3>
                <p className="text-xl text-white/80 mb-10 font-['Noto_Sans_TC']">
                  使用 AI 音乐生成工具，一键创作独特的新年祝福
                </p>
                <a 
                  href={siteConfig.targetProduct.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-[#CA8A04] text-[#0F172A] px-12 py-5 rounded-full text-xl font-bold hover:bg-[#CA8A04]/90 transition-all transform hover:scale-105 shadow-2xl cursor-pointer font-['Noto_Sans_TC']"
                >
                  立即免费体验
                </a>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-gray-200 py-12 bg-gray-50">
        <div className="container mx-auto px-6 text-center">
          <p className="text-gray-600 font-['Noto_Sans_TC']">{siteConfig.name} © 2025</p>
        </div>
      </footer>
    </div>
  )
}
