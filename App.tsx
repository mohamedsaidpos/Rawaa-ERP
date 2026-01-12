
import React, { useState, useEffect } from 'react';
import { 
  FileText, 
  Package, 
  Users, 
  Download, 
  MessageCircle, 
  Mail, 
  CheckCircle, 
  Menu, 
  X,
  Store,
  ShieldCheck,
  Zap,
  Star,
  Trophy,
  ArrowLeft,
  TrendingUp,
  Heart
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

// --- Ultra Modern & Chic Logo Component ---
const Logo = ({ className = "w-10 h-10" }: { className?: string }) => (
  <div className={`relative flex items-center justify-center ${className} group`}>
    <div className="absolute inset-0 bg-ruwaa-primary rounded-2xl rotate-6 group-hover:rotate-12 transition-transform duration-500 opacity-20"></div>
    <div className="relative z-10 bg-gradient-to-tr from-ruwaa-primary via-blue-600 to-indigo-700 w-full h-full rounded-2xl flex items-center justify-center text-white shadow-xl overflow-hidden">
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="w-6 h-6">
        <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
      <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
    </div>
  </div>
);

const FeatureCard = ({ icon: Icon, title, desc }: { icon: any, title: string, desc: string }) => (
  <motion.div 
    whileHover={{ y: -10 }}
    className="p-8 bg-white rounded-[2.5rem] border border-slate-100 shadow-sm hover:shadow-2xl transition-all duration-500 flex flex-col items-center text-center group"
  >
    <div className="w-20 h-20 bg-slate-50 rounded-3xl flex items-center justify-center text-ruwaa-primary mb-6 group-hover:bg-ruwaa-primary group-hover:text-white transition-all duration-500">
      <Icon size={36} strokeWidth={1.5} />
    </div>
    <h3 className="text-xl font-black mb-3 text-slate-900">{title}</h3>
    <p className="text-slate-500 leading-relaxed font-medium">{desc}</p>
  </motion.div>
);

const PricingCard = ({ 
  title, 
  price, 
  features, 
  isPopular = false, 
  icon: Icon
}: { 
  title: string, 
  price: string, 
  features: string[], 
  isPopular?: boolean,
  icon: any
}) => (
  <motion.div 
    whileHover={{ y: -5 }}
    className={`relative p-10 rounded-[3rem] flex flex-col transition-all duration-500 ${isPopular ? 'bg-slate-900 text-white shadow-[0_30px_60px_-15px_rgba(0,0,0,0.3)] scale-105 z-10 border-t-4 border-ruwaa-secondary' : 'bg-white text-slate-900 border border-slate-100 shadow-xl'}`}
  >
    {isPopular && (
      <div className="absolute -top-4 right-10 px-6 py-1.5 bg-ruwaa-secondary text-white text-[10px] font-black rounded-full uppercase tracking-widest shadow-lg">
        الأكثر انتشاراً
      </div>
    )}
    <div className={`w-16 h-16 rounded-[1.5rem] flex items-center justify-center mb-8 ${isPopular ? 'bg-ruwaa-secondary text-white' : 'bg-ruwaa-accent text-ruwaa-primary'}`}>
      <Icon size={32} />
    </div>
    <h3 className="text-2xl font-black mb-2">{title}</h3>
    <div className="flex items-baseline gap-1 mb-10">
      <span className="text-5xl font-black tracking-tight">{price}</span>
      <span className={`text-sm ${isPopular ? 'text-slate-400' : 'text-slate-500'}`}>ر.س / شهرياً</span>
    </div>
    <ul className="space-y-5 mb-12 flex-1">
      {features.map((f, i) => (
        <li key={i} className="flex items-center gap-3 text-sm font-bold opacity-90">
          <div className={`w-5 h-5 rounded-full flex items-center justify-center ${isPopular ? 'bg-ruwaa-secondary/20 text-ruwaa-secondary' : 'bg-ruwaa-primary/10 text-ruwaa-primary'}`}>
            <CheckCircle size={14} />
          </div>
          {f}
        </li>
      ))}
    </ul>
    <button className={`w-full py-5 rounded-2xl font-black transition-all active:scale-95 shadow-lg ${isPopular ? 'bg-ruwaa-secondary text-white hover:bg-orange-600' : 'bg-ruwaa-primary text-white hover:bg-blue-800'}`}>
      ابدأ رحلة النجاح
    </button>
  </motion.div>
);

const App: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen font-sans bg-white selection:bg-ruwaa-primary selection:text-white overflow-x-hidden">
      
      {/* Navigation */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled ? 'glass border-b border-slate-100 py-3 shadow-sm' : 'bg-transparent py-8'}`}>
        <div className="container mx-auto px-6 flex justify-between items-center">
          <div className="flex items-center gap-4 group cursor-pointer">
            <Logo className="w-12 h-12" />
            <div className="flex flex-col leading-none">
              <span className="text-3xl font-black tracking-tighter text-slate-900 group-hover:text-ruwaa-primary transition-colors">رُواء</span>
              <span className="text-[9px] font-black text-ruwaa-secondary tracking-[0.3em] uppercase opacity-80">Cloud Systems</span>
            </div>
          </div>

          <div className="hidden md:flex items-center gap-12 font-bold text-slate-600">
            <a href="#features" className="hover:text-ruwaa-primary transition-colors">المميزات</a>
            <a href="#pricing" className="hover:text-ruwaa-primary transition-colors">الأسعار</a>
            <a href="#contact" className="hover:text-ruwaa-primary transition-colors">تواصل معنا</a>
            <button className="px-8 py-3.5 bg-slate-900 text-white rounded-2xl font-black hover:bg-ruwaa-primary transition-all shadow-xl active:scale-95">
              احصل على نسختك
            </button>
          </div>

          <button className="md:hidden text-slate-900" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X size={32} /> : <Menu size={32} />}
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-40 pb-20 lg:pt-64 lg:pb-40 overflow-hidden">
        <div className="absolute top-0 right-0 -z-10 w-full h-full bg-[radial-gradient(circle_at_80%_20%,_var(--tw-gradient-stops))] from-blue-50/50 via-white to-white"></div>
        
        <div className="container mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center text-right">
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
          >
            <div className="inline-flex items-center gap-2 px-5 py-2.5 bg-slate-50 border border-slate-100 text-slate-800 rounded-2xl text-xs font-black mb-10 shadow-sm">
              <span className="flex h-2 w-2 rounded-full bg-green-500 animate-pulse"></span>
              نظام رُواء 2025: ذكاء اصطناعي في متناول يدك
            </div>
            <h1 className="text-6xl md:text-8xl font-black leading-[1.1] text-slate-900 mb-10">
              رُواء ERP <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-ruwaa-primary via-indigo-600 to-blue-400 italic">الفخامة التقنية</span> <br/>
              لإدارة مبيعاتك
            </h1>
            <p className="text-xl text-slate-500 mb-14 leading-relaxed max-w-xl font-medium">
              انضم إلى آلاف الشركات الناجحة التي تعتمد على رُواء لتنظيم فواتيرها، مخازنها، ومبيعاتها اليومية بكل سلاسة وأناقة.
            </p>
            <div className="flex flex-wrap gap-6">
              <button className="px-12 py-6 bg-ruwaa-primary text-white rounded-[2rem] text-xl font-black shadow-[0_20px_40px_-10px_rgba(30,64,175,0.4)] hover:bg-blue-800 transition-all active:scale-95">
                ابدأ تجربتك المجانية
              </button>
              <button className="px-12 py-6 bg-white text-slate-800 border-2 border-slate-100 rounded-[2rem] text-xl font-black hover:bg-slate-50 transition-all flex items-center gap-3">
                <ArrowLeft size={24} />
                مشاهدة فيديو تعريفي
              </button>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2 }}
            className="relative"
          >
            {/* Visual Representation of Software */}
            <div className="relative z-10 p-4 bg-white rounded-[4rem] shadow-[0_100px_100px_-50px_rgba(0,0,0,0.15)] border border-slate-50">
               <div className="bg-slate-900 aspect-video rounded-[3rem] flex items-center justify-center overflow-hidden relative group">
                  <div className="absolute inset-0 bg-gradient-to-tr from-ruwaa-primary/30 to-transparent"></div>
                  <div className="flex flex-col items-center gap-4 text-white/20">
                    <Store size={100} strokeWidth={1} />
                    <span className="font-black text-xs tracking-[0.5em] uppercase">Ruwaa Dashboard UI</span>
                  </div>
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-black/40 backdrop-blur-sm">
                    <button className="w-20 h-20 bg-white text-ruwaa-primary rounded-full flex items-center justify-center shadow-2xl">
                      <Download size={32} />
                    </button>
                  </div>
               </div>
            </div>
            
            {/* SOCIAL PROOF FLOAT BADGE (New Request) */}
            <motion.div 
              animate={{ y: [0, -15, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -bottom-10 -right-5 md:-right-10 bg-white px-8 py-8 rounded-[3rem] shadow-[0_40px_80px_-20px_rgba(0,0,0,0.2)] border border-slate-50 z-20 flex flex-col items-center text-center"
            >
              <div className="flex -space-x-4 space-x-reverse mb-4">
                {[1,2,3,4].map(i => (
                  <div key={i} className="w-12 h-12 rounded-full border-4 border-white bg-slate-200 overflow-hidden shadow-sm">
                    <img src={`https://i.pravatar.cc/100?img=${i+10}`} alt="user" className="w-full h-full object-cover" />
                  </div>
                ))}
                <div className="w-12 h-12 rounded-full border-4 border-white bg-ruwaa-secondary text-white flex items-center justify-center text-xs font-black shadow-sm">
                  +5k
                </div>
              </div>
              <div className="text-slate-900 font-black text-lg mb-1 tracking-tight">ثقة 5,000+ منشأة</div>
              <div className="flex items-center gap-1 text-ruwaa-secondary">
                {[...Array(5)].map((_, i) => <Star key={i} size={14} fill="currentColor" />)}
                <span className="text-xs font-bold text-slate-400 mr-2">(4.9/5)</span>
              </div>
            </motion.div>

            {/* Trust Elements */}
            <div className="absolute top-10 -left-10 hidden lg:flex flex-col gap-4">
               <motion.div 
                animate={{ x: [0, 10, 0] }}
                transition={{ duration: 4, repeat: Infinity }}
                className="bg-white/80 backdrop-blur-md p-4 rounded-2xl shadow-xl border border-white/50 flex items-center gap-3"
               >
                  <div className="w-10 h-10 bg-green-100 text-green-600 rounded-xl flex items-center justify-center">
                    <TrendingUp size={20} />
                  </div>
                  <div className="text-right">
                    <div className="text-[10px] text-slate-400 font-bold uppercase">نمو المبيعات</div>
                    <div className="text-sm font-black text-slate-900">+124% سنويًا</div>
                  </div>
               </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-32 bg-slate-50 relative overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-24">
            <h2 className="text-5xl font-black text-slate-900 mb-6 tracking-tight">استثمر في مستقبل عملك</h2>
            <p className="text-slate-500 text-xl font-medium">خطط أسعار شفافة ومرنة، بدون تكاليف خفية، مصممة لتدفع بنجاحك للأمام.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 items-stretch">
            <PricingCard 
              title="الأساسية (Basic)" 
              price="199" 
              icon={Zap}
              features={[
                'فرع واحد فقط',
                'مستخدم واحد (مدير)',
                'فواتير ضريبية فورية',
                'إدارة المخزون والباركود',
                'دعم فني عبر التذاكر'
              ]}
            />
            <PricingCard 
              title="المتقدمة (Advanced)" 
              price="399" 
              isPopular={true}
              icon={Star}
              features={[
                'حتى 3 فروع متصلة',
                '5 مستخدمين مع صلاحيات',
                'نظام نقاط بيع (POS) ذكي',
                'تقارير أداء ومبيعات متقدمة',
                'دعم فني عبر الواتساب',
                'تنبيهات انخفاض المخزون'
              ]}
            />
            <PricingCard 
              title="الاحترافية (Pro)" 
              price="799" 
              icon={Trophy}
              features={[
                'فروع ومخازن غير محدودة',
                'مستخدمين غير محدودين',
                'ربط مع المتاجر الإلكترونية',
                'تحليلات التنبؤ بالذكاء الاصطناعي',
                'دعم هاتفي VIP مباشر',
                'مدير حساب تقني مخصص'
              ]}
            />
          </div>
        </div>
      </section>

      {/* Trust & Stats (Extra Social Proof Section) */}
      <section className="py-24 bg-white border-y border-slate-50">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-12 text-center">
            {[
              { val: '5,000+', label: 'منشأة مفعلة' },
              { val: '1M+', label: 'فاتورة مصدرة شهرياً' },
              { val: '99.9%', label: 'استقرار السيرفرات' },
              { val: '24/7', label: 'دعم فني متواصل' }
            ].map((stat, i) => (
              <div key={i}>
                <div className="text-4xl md:text-5xl font-black text-ruwaa-primary mb-2 tracking-tighter">{stat.val}</div>
                <div className="text-slate-400 font-bold uppercase text-xs tracking-widest">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white py-24 border-t border-slate-100">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-12 mb-20 text-center md:text-right">
            <div className="flex flex-col items-center md:items-start gap-4">
              <div className="flex items-center gap-4">
                <Logo className="w-14 h-14" />
                <span className="text-4xl font-black text-slate-900">رُواء</span>
              </div>
              <p className="max-w-sm text-slate-400 font-medium">نحن هنا لنعيد تعريف الطريقة التي تدير بها تجارتك، باستخدام أحدث التقنيات وأكثرها أناقة.</p>
            </div>
            
            <div className="flex gap-16 font-black text-slate-900">
              <div className="flex flex-col gap-4">
                <span className="text-ruwaa-secondary text-[10px] uppercase tracking-widest">الشركة</span>
                <a href="#" className="hover:text-ruwaa-primary transition-colors">عن رُواء</a>
                <a href="#" className="hover:text-ruwaa-primary transition-colors">المدونة</a>
              </div>
              <div className="flex flex-col gap-4">
                <span className="text-ruwaa-secondary text-[10px] uppercase tracking-widest">قانوني</span>
                <a href="#" className="hover:text-ruwaa-primary transition-colors">الخصوصية</a>
                <a href="#" className="hover:text-ruwaa-primary transition-colors">الشروط</a>
              </div>
            </div>

            <div className="flex flex-col gap-6">
               <div className="flex gap-4">
                 {[MessageCircle, Mail, Heart].map((Icon, i) => (
                    <button key={i} className="w-12 h-12 bg-slate-50 rounded-2xl flex items-center justify-center text-slate-400 hover:bg-ruwaa-primary hover:text-white transition-all">
                      <Icon size={20} />
                    </button>
                 ))}
               </div>
               <div className="text-xs font-bold text-slate-300">صُنع بكل حب في المملكة العربية السعودية</div>
            </div>
          </div>
          
          <div className="text-center pt-10 border-t border-slate-50 text-slate-300 text-xs font-bold uppercase tracking-[0.2em]">
            © {new Date().getFullYear()} Ruwaa Intelligent Systems. All Rights Reserved.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
