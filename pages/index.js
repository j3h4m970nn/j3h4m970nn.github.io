import Navbar from '@/components/Navbar'
import { Smartphone, Search, ArrowRight, Lightbulb } from 'lucide-react';

export default function Home() {
  return (
    <div className="bg-slate-900 text-white min-h-screen font-sans">
      <Navbar />

      {/* HERO SECTION */}
      <header className="py-24 px-6 text-center bg-gradient-to-b from-slate-900 to-slate-800">
        <h1 className="text-6xl font-extrabold mb-6 tracking-tight">
          Websites that don't <span className="text-blue-400 underline">suck.</span>
        </h1>
        <p className="text-xl text-slate-400 max-w-2xl mx-auto mb-10">
          We build intelligent, high-performance sites for local heroes. No corporate fluff, no "premium" air-breathing fees. Just pure SiteIQ.
        </p>
        <div className="flex justify-center gap-4">
          <a href="#services" className="bg-blue-500 px-8 py-4 rounded-lg font-bold text-lg flex items-center gap-2 hover:bg-blue-400 transition btn-glow">
            See the Goods <ArrowRight size={20}/>
          </a>
        </div>
      </header>

      {/* OUR MISSION SECTION - Updated with the "Second Mortgage" line */}
      <section className="py-24 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-slate-800 p-8 md:p-12 rounded-2xl border-t-4 border-blue-500 shadow-2xl transition-all hover:shadow-blue-500/10">
            <h4 className="text-3xl md:text-4xl font-black mb-6 text-white tracking-tighter uppercase">
              Our Mission:
            </h4>
            <p className="text-xl text-slate-300 leading-relaxed mb-10 font-medium max-w-3xl mx-auto">
              Our mission is to eliminate "microwaved" websites. We provide the elite technical integrity and speed required to dominate digital markets at a price which won't force you to take out a second mortgage on your home.
            </p>
            <ul className="inline-block text-left space-y-4 text-white font-bold text-lg">
              <li className="flex items-start gap-2">
                <span className="text-blue-400 font-black">✓</span> No corporate buzzwords.
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-400 font-black">✓</span> No "subscription" traps.
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-400 font-black">✓</span> A site you love (and actually own.)
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* SERVICES SECTION */}
      <section id="services" className="py-20 px-6 bg-slate-900">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl font-black mb-12 uppercase tracking-tighter">What We Actually Do</h2>
          
          <div className="grid md:grid-cols-3 gap-8 text-left">
            <div className="p-8 border border-slate-800 rounded-2xl hover:border-blue-400 transition group bg-slate-800/50">
              <Smartphone className="text-blue-400 mb-4 group-hover:scale-110 transition-all duration-300 group-hover:drop-shadow-[0_0_8px_rgba(96,165,250,0.8)]" size={40} />
              <h3 className="text-2xl font-bold mb-2 transition-all duration-300 group-hover:text-white group-hover:drop-shadow-[0_0_10px_rgba(255,255,255,0.8)]">Mobile-First</h3>
              <p className="text-slate-400 text-lg leading-relaxed">
                If your site doesn't work on a phone in 2026, you don't have a website—you have a digital paperweight. We make sure your site looks sexy on every screen.
              </p>
            </div>

            <div className="p-8 border border-slate-800 rounded-2xl hover:border-blue-400 transition group bg-slate-800/50">
              <Search className="text-blue-400 mb-4 group-hover:scale-110 transition-all duration-300 group-hover:drop-shadow-[0_0_8px_rgba(96,165,250,0.8)]" size={40} />
              <h3 className="text-2xl font-bold mb-2 transition-all duration-300 group-hover:text-white group-hover:drop-shadow-[0_0_10px_rgba(255,255,255,0.8)]">Search Engine Optimization</h3>
              <p className="text-slate-400 text-lg leading-relaxed">
                We skip the gimmicks and focus on technical integrity. We build lean, high-performance code that search engines prioritize. SiteIQ ensures your digital presence matches your professional caliber.
              </p>
            </div>

            <div className="p-8 border border-slate-800 rounded-2xl hover:border-blue-400 transition group bg-slate-800/50">
              <Lightbulb className="text-blue-400 mb-4 group-hover:scale-110 transition-all duration-300 group-hover:drop-shadow-[0_0_8px_rgba(96,165,250,0.8)]" size={40} />
              <h3 className="text-2xl font-bold mb-2 transition-all duration-300 group-hover:text-white group-hover:drop-shadow-[0_0_10px_rgba(255,255,255,0.8)]">Zero Fluff</h3>
              <p className="text-slate-400 text-lg leading-relaxed">
                No 40-page "brand strategy" PDFs. Just a high-converting site that tells people who you are and why they should choose you over the competition.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ABOUT SECTION - Flipped to sit above the CTA */}
      <section id="about" className="py-24 px-6 bg-slate-800/30">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl font-black mb-8 text-blue-400 uppercase tracking-tighter">The "About Me" Part.</h2>
          <div className="space-y-6">
            <p className="text-lg text-slate-300 leading-relaxed font-medium">
              I didn't start SiteIQ to win design awards that only other nerds care about. I started it because I saw local "mom and pop" shops getting quoted $10k for websites that look like they were made in a microwave.
            </p>
            <p className="text-lg text-slate-300 leading-relaxed font-medium">
              Your time is valuable. You’re busy running a business; you don't need "synergy" or "brand storytelling." You need a site that loads fast, works on a phone, and commands attention the second it hits the screen. That’s what we do. No fluff, just results.
            </p>
          </div>
        </div>
      </section>

      {/* LEVEL UP CTA SECTION */}
      <section className="py-24 px-6 bg-slate-900 border-t border-slate-800">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-5xl md:text-7xl font-black mb-10 uppercase tracking-tighter text-white leading-tight">
            Ready to level up <br />
            <span className="text-blue-400">your website?</span>
          </h2>
          <div className="flex justify-center mb-16">
            <a href="#contact" className="group inline-flex items-center gap-4 bg-blue-500 px-14 py-7 rounded-2xl font-black text-2xl uppercase tracking-widest hover:bg-blue-400 transition-all hover:scale-105 shadow-[0_0_30px_rgba(59,130,246,0.3)]">
              Get a Quote Now
              <ArrowRight className="group-hover:translate-x-3 transition-transform" size={28} />
            </a>
          </div>
        </div>
      </section>

      {/* CONTACT SECTION - Header removed, clean & bold footer vibes */}
      <section id="contact" className="py-24 px-6 bg-blue-500">
        <div className="max-w-4xl mx-auto">
          <p className="text-center text-blue-100 mb-12 text-xl font-bold uppercase tracking-[0.3em]">
            Direct to James. Please include up-to-date contact information and an idea of what you want to builid. I respond to all messages within 24 hours. Thank you!
          </p>
          
          <form action="https://api.web3forms.com/submit" method="POST" className="grid md:grid-cols-2 gap-4 text-left">
            <input type="hidden" name="access_key" value="8742279b-1a61-4a44-a4fe-f85a568e1d24" />
            <div className="space-y-2">
              <label className="text-white font-bold ml-1">Your Name</label>
              <input type="text" name="name" required placeholder="Chuck Norris" className="w-full p-4 rounded-xl bg-white text-slate-900 outline-none transition focus:ring-4 focus:ring-blue-300" />
            </div>
            <div className="space-y-2">
              <label className="text-white font-bold ml-1">Your Email Address</label>
              <input type="email" name="email" required placeholder="chuck@chucknorris.com" className="w-full p-4 rounded-xl bg-white text-slate-900 outline-none transition focus:ring-4 focus:ring-blue-300" />
            </div>
            <div className="md:col-span-2 space-y-2">
              <label className="text-white font-bold ml-1">The Mission</label>
              <textarea name="message" required placeholder="Tell me what you need built..." className="w-full p-4 rounded-xl bg-white text-slate-900 h-40 outline-none transition focus:ring-4 focus:ring-blue-300"></textarea>
            </div>
            <button type="submit" className="md:col-span-2 w-full bg-slate-900 text-white py-5 rounded-xl font-black uppercase tracking-widest hover:bg-slate-800 transition-all text-lg shadow-2xl">
             SEND
            </button>
          </form>
        </div>
      </section>

      {/* FOOTER - Bold text & Giant Mascot */}
      <footer className="py-12 border-t border-slate-800 bg-slate-900 text-center">
        <div className="max-w-3xl mx-auto flex flex-col md:flex-row items-center justify-center gap-12">
          <div className="text-slate-500 text-lg md:text-right space-y-2 font-bold uppercase tracking-tight">
            <p className="italic">Codes by me; typos by my cat.</p>
            <p>100% Hairball free.</p>
            <p>© 2026 SiteIQ. All Rights Reserved.</p>
          </div>
          <img 
            src="/footer.png" 
            alt="SiteIQ Mascot" 
            className="h-80 w-auto object-contain" 
          />
        </div>
      </footer>
    </div>
  );
}
