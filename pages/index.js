import Navbar from '@/components/Navbar'
import { MousePointerClick, Smartphone, Search, Instagram, Facebook, ArrowRight } from 'lucide-react';

export default function Home() {
  return (
    <div>
      <Navbar />

      {/* HERO SECTION */}
      <header className="py-24 px-6 text-center bg-gradient-to-b from-slate-900 to-slate-800">
        <h1 className="text-6xl font-extrabold mb-6 tracking-tight">
          Websites that don't <span className="text-blue-500 underline">suck.</span>
        </h1>
        <p className="text-xl text-slate-400 max-w-2xl mx-auto mb-10">
          We build sharp, high-performance sites for local heroes. No corporate fluff, no "premium" air-breathing fees. Just pure SiteIQ.
        </p>
        <div className="flex justify-center gap-4">
          <a href="#services" className="bg-blue-600 px-8 py-4 rounded-lg font-bold text-lg flex items-center gap-2 hover:bg-blue-500 transition">
            See the Goods <ArrowRight size={20}/>
          </a>
        </div>
      </header>

      {/* ABOUT SECTION */}
      <section id="about" className="py-20 px-6 max-w-4xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-8">The "About Me" Part</h2>
        <p className="text-lg text-slate-300 leading-relaxed">
          Look, you're busy running a real business. You don't have time to learn what a "favicon" is. 
          SiteIQ was born because local businesses deserve better than a 2004-era template that breaks on mobile. 
          I build it, you own it, and your customers actually enjoy looking at it. 
        </p>
      </section>

      {/* SERVICES SECTION */}
      <section id="services" className="py-20 px-6 bg-slate-900">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-black mb-12 text-center">What I actually do</h2>
          <div className="grid md:grid-cols-3 gap-8">
            
            {/* Service 1 */}
            <div className="p-8 border border-slate-800 rounded-2xl hover:border-blue-500 transition group">
              <Smartphone className="text-blue-500 mb-4 group-hover:scale-110 transition-transform" size={40} />
              <h3 className="text-2xl font-bold mb-2">Mobile-First (Duh)</h3>
              <p className="text-slate-400">
                If your site doesn't work on a phone in 2026, you don't have a website—you have a digital paperweight. I make sure yours looks sexy on every screen.
              </p>
            </div>

            {/* Service 2 */}
            <div className="p-8 border border-slate-800 rounded-2xl hover:border-blue-500 transition group">
              <Search className="text-blue-500 mb-4 group-hover:scale-110 transition-transform" size={40} />
              <h3 className="text-2xl font-bold mb-2">SEO That Works</h3>
              <p className="text-slate-400">
                I don't sprinkle "magic keyword dust." I build fast, clean code that Google actually likes, so you stop being invisible to people with money.
              </p>
            </div>

            {/* Service 3 */}
            <div className="p-8 border border-slate-800 rounded-2xl hover:border-blue-500 transition group">
              <Zap className="text-blue-500 mb-4 group-hover:scale-110 transition-transform" size={40} />
              <h3 className="text-2xl font-bold mb-2">Zero Fluff</h3>
              <p className="text-slate-400">
                No 40-page "brand strategy" PDFs. Just a high-converting site that tells people who you are and why they should give you their credit card info.
              </p>
            </div>

          </div>
        </div>
      </section>
  
      {/* CONTACT SECTION */}
      <section id="contact" className="py-20 px-6 bg-blue-600 text-center">
        <h2 className="text-4xl font-black mb-4 text-white">Ready to level up?</h2>
        <p className="text-blue-100 mb-8 text-xl">Drop a line before your competitor does.</p>
        <form className="max-w-md mx-auto space-y-4">
          <input type="text" placeholder="Your Name" className="w-full p-4 rounded bg-white text-slate-900" />
          <input type="email" placeholder="Email Address" className="w-full p-4 rounded bg-white text-slate-900" />
          <textarea placeholder="Tell me what you need..." className="w-full p-4 rounded bg-white text-slate-900 h-32"></textarea>
          <button className="w-full bg-slate-900 text-white py-4 rounded-lg font-black uppercase tracking-widest hover:bg-slate-800 transition">
            Send It
          </button>
        </form>
      </section>

      {/* FOOTER */}
      <footer className="py-12 border-t border-slate-800 text-center">
        <div className="flex justify-center gap-6 mb-4">
          <a href="https://instagram.com" className="text-slate-400 hover:text-white"><Instagram /></a>
          <a href="https://facebook.com" className="text-slate-400 hover:text-white"><Facebook /></a>
        </div>
        <p className="text-slate-500">© 2026 SiteIQ. Built with Node.js and caffeine.</p>
      </footer>
    </div>
  );
}
