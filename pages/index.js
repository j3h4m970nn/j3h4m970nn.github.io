import Navbar from '@/components/Navbar'
import { Smartphone, Search, ArrowRight, Lightbulb } from 'lucide-react';

export default function Home() {
  return (
    <div className="bg-slate-900 text-white min-h-screen">
      <Navbar />

      {/* HERO SECTION */}
      <header className="py-24 px-6 text-center bg-gradient-to-b from-slate-900 to-slate-800">
        <h1 className="text-6xl font-extrabold mb-6 tracking-tight">
          Websites that don't <span className="text-blue-500 underline">suck.</span>
        </h1>
        <p className="text-xl text-slate-400 max-w-2xl mx-auto mb-10">
          We build intelligent, high-performance sites for local heroes. No corporate fluff, no "premium" air-breathing fees. Just pure SiteIQ.
        </p>
        <div className="flex justify-center gap-4">
          <a href="#services" className="bg-blue-600 px-8 py-4 rounded-lg font-bold text-lg flex items-center gap-2 hover:bg-blue-500 transition btn-glow">
            See the Goods <ArrowRight size={20}/>
          </a>
        </div>
      </header>

      {/* OUR MISSION SECTION */}
      <section className="py-24 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-slate-800 p-8 md:p-12 rounded-2xl border-t-4 border-blue-600 shadow-2xl">
            <h4 className="text-3xl md:text-4xl font-black mb-6 text-white tracking-tighter uppercase">
              Our Mission:
            </h4>
            <p className="text-lg text-slate-300 leading-relaxed mb-8 font-medium mx-auto">
              SiteIQ exists to bridge the gap between local expertise and world-class technology. We provide the technical foundation for your next level of growth, creating seamless digital experiences that turn every visitor into a lasting connection.
            </p>
            <ul className="inline-block text-left space-y-4 text-white font-bold text-lg">
              <li className="flex items-start gap-2">
                <span className="text-blue-500 font-black">✓</span> No corporate buzzwords.
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-500 font-black">✓</span> No "subscription" traps.
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-500 font-black">✓</span> A site you love (and actually own.)
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* SERVICES SECTION */}
      <section id="services" className="py-20 px-6 bg-slate-900">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl font-black mb-12">What We Actually Do</h2>
          
          <div className="grid md:grid-cols-3 gap-8 text-left">
            
            {/* Service 1: Mobile-First */}
            <div className="p-8 border border-slate-800 rounded-2xl hover:border-blue-500 transition group bg-slate-800/50">
              <Smartphone className="text-blue-500 mb-4 group-hover:scale-110 transition-all duration-300 group-hover:drop-shadow-[0_0_8px_rgba(59,130,246,0.8)]" size={40} />
              <h3 className="text-2xl font-bold mb-2 transition-all duration-300 group-hover:text-white group-hover:drop-shadow-[0_0_10px_rgba(255,255,255,0.8)]">
                Mobile-First
              </h3>
              <p className="text-slate-400 text-lg leading-relaxed">
                If your site doesn't work on a phone in 2026, you don't have a website—you have a digital paperweight. We make sure your site looks sexy on every screen.
              </p>
            </div>

            {/* Service 2: SEO - Text effects removed from the end */}
            <div className="p-8 border border-slate-800 rounded-2xl hover:border-blue-500 transition group bg-slate-800/50">
              <Search className="text-blue-500 mb-4 group-hover:scale-110 transition-all duration-300 group-hover:drop-shadow-[0_0_8px_rgba(59,130,246,0.8)]" size={40} />
              <h3 className="text-2xl font-bold mb-2 transition-all duration-300 group-hover:text-white group-hover:drop-shadow-[0_0_10px_rgba(255,255,255,0.8)]">
                Search Engine Optimization
              </h3>
              <p className="text-slate-400 text-lg leading-relaxed">
                We skip the gimmicks and focus on <span className="text-white font-bold">technical integrity</span>. 
                We build lean, high-performance code that search engines prioritize. 
                SiteIQ ensures your digital presence matches your professional caliber.
              </p>
            </div>

            {/* Service 3: Zero Fluff */}
            <div className="p-8 border border-slate-800 rounded-2xl hover:border-blue-500 transition group bg-slate-800/50">
              <Lightbulb className="text-blue-500 mb-4 group-hover:scale-110 transition-all duration-300 group-hover:drop-shadow-[0_0_8px_rgba(59,130,246,0.8)]" size={40} />
              <h3 className="text-2xl font-bold mb-2 transition-all duration-300 group-hover:text-white group-hover:drop-shadow-[0_0_10px_rgba(255,255,255,0.8)]">
                Zero Fluff
              </h3>
              <p className="text-slate-400 text-lg leading-relaxed">
                No 40-page "brand strategy" PDFs. Just a high-converting site that tells people who you are and why they should choose you over the competition.
              </p>
            </div>
          </div>

          <div className="text-center mt-16 bg-slate-800 p-8 rounded-3xl max-w-3xl mx-auto border border-blue-500/30">
            <h3 className="text-2xl font-bold mb-4">Sick of the "Big Agency" runaround?</h3>
            <p className="text-slate-400 mb-6">I'm just one person who's really good at this. No account managers, no hold music, just me and my cat.</p>
            <a href="#contact" className="inline-block bg-blue-600 px-8 py-3 rounded-lg font-bold hover:bg-blue-700 transition btn-glow">
              Let's Skip the Small Talk
            </a>
          </div>
        </div>
      </section>

      {/* ABOUT SECTION - Italics removed from Header */}
      <section id="about" className="py-24 px-6 bg-slate-800/30">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl font-black mb-8 text-blue-500 uppercase tracking-tighter">The "About Me" Part.</h2>
          <div className="space-y-6">
            <p className="text-lg text-slate-300 leading-relaxed">
              I didn't start SiteIQ to win design awards that only other nerds care about. I started it because I saw local "mom and pop" shops getting quoted $10k for websites that look like they were made in a microwave.
            </p>
            <p className="text-lg text-slate-300 leading-relaxed">
              Your time is valuable. You’re busy running a business; you don't need "synergy" or "brand storytelling." You need a site that loads fast, works on a phone, and commands attention the second it hits the screen. That’s what we do. No fluff, just results.
            </p>
          </div>
        </div>
      </section>

      {/* CONTACT SECTION */}
      <section id="contact" className="py-24 px-6 bg-blue-600">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-black mb-4 text-white uppercase tracking-tighter">Ready to level up?</h2>
          <p className="text-blue-100 mb-12 text-xl font-medium">Drop a line before your competitor does. I actually respond.</p>
          
          <form action="https://api.web3forms.com/submit" method="POST" className="grid md:grid-cols-2 gap-4 text-left">
            <input type="hidden" name="access_key" value="8742279b-1a61-4a44-a4fe-f85a568e1d24" />
            <div className="space-y-2">
              <label className="text-white font-bold ml-1">Your Name</label>
              <input type="text" name="name" required placeholder="John Doe" className="w-full p-4 rounded-xl bg-white text-slate-900 outline-none transition focus:ring-4 focus:ring-blue-300" />
            </div>
            <div className="space-y-2">
              <label className="text-white font-bold ml-1">Your Email Address</label>
              <input type="email" name="email" required placeholder="john@example.com" className="w-full p-4 rounded-xl bg-white text-slate-900 outline-none transition focus:ring-4 focus:ring-blue-300" />
            </div>
            <div className="md:col-span-2 space-y-2">
              <label className="text-white font-bold ml-1">The Mission</label>
              <textarea name="message" required placeholder="Tell me what you need built..." className="w-full p-4 rounded-xl bg-white text-slate-900 h-40 outline-none transition focus:ring-4 focus:ring-blue-300"></textarea>
            </div>
            <button type="submit" className="md:col-span-2 w-full bg-slate-900 text-white py-5 rounded-xl font-black uppercase tracking-widest hover:bg-slate-800 transition-all text-lg">
              Send the Signal
            </button>
          </form>
        </div>
      </section>

      {/* FOOTER - Image height matches all 3 lines */}
      <footer className="py-12 border-t border-slate-800 text-center">
        <div className="max-w-xl mx-auto flex items-center justify-center gap-6">
          <div className="text-slate-500 text-sm text-right space-y-1">
            <p className="italic">Codes by me; typos by my cat.</p>
            <p>100% Hairball free.</p>
            <p>© 2026 SiteIQ. All Rights Reserved.</p>
          </div>
          <img 
            src="/footer.png" 
            alt="SiteIQ Mascot" 
            className="w-20 h-20 rounded-2xl object-cover border border-slate-700 shadow-lg" 
          />
        </div>
      </footer>
    </div>
  );
}
