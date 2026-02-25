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
          <a href="#services" className="bg-blue-600 px-8 py-4 rounded-lg font-bold text-lg flex items-center gap-2 hover:bg-blue-500 transition btn-glow">
            See the Goods <ArrowRight size={20}/>
          </a>
        </div>
      </header>

      {/* ABOUT SECTION */}
      <section id="about" className="py-24 px-6 max-w-5xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl font-black mb-6 italic text-blue-500">The "About Me" Part.</h2>
            <p className="text-lg text-slate-300 leading-relaxed mb-4">
              I didn't start SiteIQ to win design awards that only other nerds care about. I started it because I saw local "mom and pop" shops getting quoted $10k for websites that look like they were made in a microwave.
            </p>
            <p className="text-lg text-slate-300 leading-relaxed">
              You’re busy running a business; you don't need "synergy" or "brand storytelling." You need a site that loads fast, works on a phone, and actually makes the phone ring. That’s what I do. No fluff, no bells you didn't ask for, just results.
            </p>
          </div>
          <div className="bg-slate-800 p-8 rounded-2xl border-l-4 border-blue-600 shadow-2xl">
            <h4 className="text-xl font-bold mb-4 text-white">The SiteIQ Promise:</h4>
            <ul className="space-y-4 text-slate-400">
              <li className="flex items-start gap-2">
                <span className="text-blue-500 font-bold">✓</span> No corporate buzzwords.
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-500 font-bold">✓</span> No "subscription" traps.
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-500 font-bold">✓</span> A site you actually own.
              </li>
            </ul>
          </div>
        </div>
      </section>

{/* SERVICES SECTION */}
      <section id="services" className="py-20 px-6 bg-slate-900">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-black mb-12 text-center">What I actually do</h2>
          
          {/* THE GRID */}
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

          {/* CTA BOX (Placed outside the grid div) */}
          <div className="text-center mt-16 bg-slate-800 p-8 rounded-3xl max-w-3xl mx-auto border border-blue-500/30">
            <h3 className="text-2xl font-bold mb-4">Sick of the "Big Agency" runaround?</h3>
            <p className="text-slate-400 mb-6">I'm just one person who's really good at this. No account managers, no hold music.</p>
            <a href="#contact" className="btn-panache inline-block bg-blue-600 px-8 py-3 rounded-lg font-bold btn-glow">
              Let's Skip the Small Talk
            </a>
          </div>

        </div>
      </section>
  
  
      {/* CONTACT SECTION */}
      <section id="contact" className="py-24 px-6 bg-blue-600">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-black mb-4 text-white uppercase tracking-tighter">Ready to level up?</h2>
          <p className="text-blue-100 mb-12 text-xl font-medium">Drop a line before your competitor does. I actually respond.</p>
          
          <form action="https://api.web3forms.com/submit" method="POST" className="grid md:grid-cols-2 gap-4 text-left">
            {/* Replace YOUR_ACCESS_KEY_HERE with the key from web3forms.com */}
            <input type="hidden" name="access_key" value="8742279b-1a61-4a44-a4fe-f85a568e1d24" />
            <input type="hidden" name="subject" value="New Lead from SiteIQ" />
            <input type="checkbox" name="botcheck" className="hidden" />

            <div className="space-y-2">
              <label className="text-white font-bold ml-1">Your Name</label>
              <input type="text" name="name" required placeholder="John Doe" className="w-full p-4 rounded-xl bg-white text-slate-900 focus:ring-4 focus:ring-blue-300 outline-none transition" />
            </div>

            <div className="space-y-2">
              <label className="text-white font-bold ml-1">Your Email Address</label>
              <input type="email" name="email" required placeholder="john@example.com" className="w-full p-4 rounded-xl bg-white text-slate-900 focus:ring-4 focus:ring-blue-300 outline-none transition" />
            </div>

            <div className="md:col-span-2 space-y-2">
              <label className="text-white font-bold ml-1">The Mission</label>
              <textarea name="message" required placeholder="Tell me what you need built..." className="w-full p-4 rounded-xl bg-white text-slate-900 h-40 focus:ring-4 focus:ring-blue-300 outline-none transition"></textarea>
            </div>

            <button type="submit" className="md:col-span-2 w-full bg-slate-900 text-white py-5 rounded-xl font-black uppercase tracking-widest hover:bg-slate-800 transition-all btn-glow text-lg">
              Send the Signal
            </button>
          </form>
        </div>
      </section>
  
      {/* FOOTER */}
      <footer className="py-12 border-t border-slate-800 text-center">
        <p className="text-slate-500">Codes by me; typos by my cat.</p>
        <p className="text-slate-500">100% Hairball free.</p>
        <p className="text-slate-500">© 2026 SiteIQ. All Rights Reserved.</p>
      </footer>
    </div>
  );
}
