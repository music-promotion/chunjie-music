import { siteConfig } from '@/site.config'
import Link from 'next/link'

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0F172A] via-[#1E3A8A] to-[#0F172A]">
      {/* Decorative golden accents */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#CA8A04]/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#CA8A04]/10 rounded-full blur-3xl"></div>
      </div>

      {/* Floating Navigation */}
      <nav className="fixed top-6 left-6 right-6 z-50 bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl px-8 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <svg className="w-10 h-10 text-[#CA8A04]" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 3v10.55c-.59-.34-1.27-.55-2-.55-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4V7h4V3h-6z"/>
            </svg>
            <div>
              <h1 className="text-2xl font-bold text-white font-['Noto_Serif_TC']">{siteConfig.name}</h1>
              <p className="text-xs text-white/60 font-['Noto_Sans_TC']">{siteConfig.description}</p>
            </div>
          </div>
          <Link
            href="/articles"
            className="px-6 py-2 bg-[#CA8A04] text-[#0F172A] rounded-full font-semibold hover:bg-[#CA8A04]/90 transition-all cursor-pointer font-['Noto_Sans_TC']"
          >
            浏览文章
          </Link>
        </div>
      </nav>

      {/* Hero - Exaggerated Typography */}
      <main className="relative pt-32 pb-20">
        <div className="container mx-auto px-6">
          {/* Massive Hero Text */}
          <div className="text-center mb-32">
            <h2 className="text-[clamp(3rem,10vw,8rem)] font-black text-white leading-[0.9] tracking-tight mb-8 font-['Noto_Serif_TC']">
              让音乐<br/>
              <span className="text-[#CA8A04]">点燃</span><br/>
              春节氛围
            </h2>
            <p className="text-2xl text-white/80 max-w-2xl mx-auto mb-12 font-['Noto_Sans_TC']">
              精选传统与现代春节音乐<br/>为你的新年增添喜庆与温暖
            </p>
            
            <a 
              href={siteConfig.targetProduct.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-[#CA8A04] text-[#0F172A] px-12 py-5 rounded-full text-xl font-bold hover:bg-[#CA8A04]/90 transition-all transform hover:scale-105 shadow-2xl cursor-pointer font-['Noto_Sans_TC']"
            >
              AI 生成专属春节歌曲
            </a>
          </div>

          {/* Vertical Category Flow - NOT Grid */}
          <div className="max-w-4xl mx-auto space-y-8 mb-32">
            <h3 className="text-5xl font-bold text-white mb-16 text-center font-['Noto_Serif_TC']">音乐分类</h3>
            
            {siteConfig.theme.categories.map((category, index) => {
              const isEven = index % 2 === 0
              return (
                <Link
                  key={category}
                  href="/articles"
                  className="group block cursor-pointer"
                >
                  <div className={`flex items-center gap-8 ${isEven ? 'flex-row' : 'flex-row-reverse'} bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-8 hover:bg-white/10 hover:border-[#CA8A04]/50 transition-all`}>
                    {/* SVG Icon */}
                    <div className="flex-shrink-0 w-24 h-24 bg-[#CA8A04]/20 rounded-2xl flex items-center justify-center group-hover:bg-[#CA8A04]/30 transition-all">
                      <svg className="w-12 h-12 text-[#CA8A04]" fill="currentColor" viewBox="0 0 24 24">
                        {index === 0 && <path d="M12 3v10.55c-.59-.34-1.27-.55-2-.55-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4V7h4V3h-6z"/>}
                        {index === 1 && <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 14.5v-9l6 4.5-6 4.5z"/>}
                        {index === 2 && <path d="M12 3v9.28c-.47-.17-.97-.28-1.5-.28C8.01 12 6 14.01 6 16.5S8.01 21 10.5 21c2.31 0 4.2-1.75 4.45-4H15V6h4V3h-7z"/>}
                        {index === 3 && <path d="M20 2H8c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-2 5h-3v5.5c0 1.38-1.12 2.5-2.5 2.5S10 13.88 10 12.5s1.12-2.5 2.5-2.5c.57 0 1.08.19 1.5.51V5h4v2zM4 6H2v14c0 1.1.9 2 2 2h14v-2H4V6z"/>}
                        {index === 4 && <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 14.5c-2.49 0-4.5-2.01-4.5-4.5S9.51 7.5 12 7.5s4.5 2.01 4.5 4.5-2.01 4.5-4.5 4.5zm0-5.5c-.55 0-1 .45-1 1s.45 1 1 1 1-.45 1-1-.45-1-1-1z"/>}
                        {index === 5 && <path d="M12 3v10.55c-.59-.34-1.27-.55-2-.55-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4V7h4V3h-6zm-2 16c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2z"/>}
                      </svg>
                    </div>
                    
                    {/* Content */}
                    <div className="flex-1">
                      <h4 className="text-3xl font-bold text-white mb-2 group-hover:text-[#CA8A04] transition-colors font-['Noto_Serif_TC']">
                        {category}
                      </h4>
                      <p className="text-white/60 font-['Noto_Sans_TC']">探索精选曲目</p>
                    </div>
                    
                    {/* Arrow */}
                    <svg className="w-8 h-8 text-white/40 group-hover:text-[#CA8A04] group-hover:translate-x-2 transition-all" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </Link>
              )
            })}
          </div>

          {/* Product Promotion - Diagonal Split Layout */}
          <div className="relative max-w-6xl mx-auto mb-32 overflow-hidden rounded-3xl">
            <div className="absolute inset-0 bg-gradient-to-br from-[#CA8A04] to-[#F59E0B] transform -skew-y-3"></div>
            <div className="relative z-10 py-20 px-12 transform skew-y-3">
              <div className="transform -skew-y-3 text-center">
                <svg className="w-20 h-20 text-[#0F172A] mx-auto mb-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20 6h-2.18c.11-.31.18-.65.18-1 0-1.66-1.34-3-3-3-1.05 0-1.96.54-2.5 1.35l-.5.67-.5-.68C10.96 2.54 10.05 2 9 2 7.34 2 6 3.34 6 5c0 .35.07.69.18 1H4c-1.11 0-1.99.89-1.99 2L2 19c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V8c0-1.11-.89-2-2-2zm-5-2c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zM9 4c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zm11 15H4v-2h16v2zm0-5H4V8h5.08L7 10.83 8.62 12 11 8.76l1-1.36 1 1.36L15.38 12 17 10.83 14.92 8H20v6z"/>
                </svg>
                <h3 className="text-5xl font-black text-[#0F172A] mb-6 font-['Noto_Serif_TC']">
                  想要独一无二的春节歌曲？
                </h3>
                <p className="text-xl text-[#0F172A]/80 mb-8 max-w-2xl mx-auto font-['Noto_Sans_TC']">
                  {siteConfig.targetProduct.description}
                </p>
                <a 
                  href={siteConfig.targetProduct.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-[#0F172A] text-white px-12 py-5 rounded-full text-xl font-bold hover:bg-[#0F172A]/90 transition-all transform hover:scale-105 shadow-2xl cursor-pointer font-['Noto_Sans_TC']"
                >
                  立即免费体验
                </a>
              </div>
            </div>
          </div>

          {/* Related Sites - Horizontal Scroll */}
          <div className="max-w-6xl mx-auto">
            <h3 className="text-4xl font-bold text-white mb-12 text-center font-['Noto_Serif_TC']">更多音乐资源</h3>
            <div className="flex gap-6 overflow-x-auto pb-6 snap-x snap-mandatory scrollbar-hide">
              {siteConfig.relatedSites.map((site) => (
                <a
                  key={site.url}
                  href={site.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-shrink-0 w-80 snap-center bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:bg-white/10 hover:border-[#CA8A04]/50 transition-all cursor-pointer"
                >
                  <h4 className="text-2xl font-bold text-white mb-3 font-['Noto_Serif_TC']">{site.name}</h4>
                  <p className="text-white/60 mb-4 font-['Noto_Sans_TC']">探索更多精彩内容</p>
                  <div className="flex items-center text-[#CA8A04] font-semibold font-['Noto_Sans_TC']">
                    访问
                    <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="relative border-t border-white/10 py-12 bg-[#0F172A]/80 backdrop-blur-sm">
        <div className="container mx-auto px-6 text-center">
          <p className="text-white/80 mb-2 font-['Noto_Sans_TC']">{siteConfig.name} © 2025</p>
          <p className="text-sm text-white/60 font-['Noto_Sans_TC']">让每个春节都充满音乐与欢乐</p>
        </div>
      </footer>
    </div>
  )
}
