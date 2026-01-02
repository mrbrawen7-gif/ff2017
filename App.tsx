
import React from 'react';
import { 
  Download, 
  Key, 
  UserPlus, 
  ExternalLink, 
  AlertCircle, 
  PlayCircle, 
  MessageSquare, 
  Terminal,
  ShieldCheck,
  Gamepad2,
  Lock,
  Activity,
  Youtube
} from 'lucide-react';

// The specific base64 image provided in the prompt for Step 1 overlay
const STEP_1_BG = "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgHBgkIBwgKCgkLDRYPDQwMDRsUFRAWIB0iIiAdHx8kKDQsJCYxJx8fLT0tMTU3Ojo6Iys/RD84QzQ5OjcBCgoKDQwNGg8PGjclHyU3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3N//AABEIAFwAXAMBIgACEQEDEQH/xAAcAAADAAMBAQEAAAAAAAAAAAAEBQYCAwcBAAj/xAA3EAACAQMCAwcCBAYCAwEAAAABAgMABBEFIRIxQQYTIlFhcYFCkRQjMqEHU7HB0fBDUmKU4hX/xAAZAQADAQEBAAAAAAAAAAAAAAACAwQBBQD/xAAlEQACAwACAgEDBQAAAAAAAAABAgAEREIhMUEEE1FhFCkbkaH/2gAMW0ofDelta/02WygdpYpJSY0yTgEk4HkAWanWuypp2hppVi/gLlriX+Y2AMD02";

// Reusable Components
const AdSpace: React.FC<{ type: 'header' | 'middle' | 'footer'; className?: string }> = ({ type, className }) => (
  <div className={`my-8 flex flex-col items-center ${className}`}>
    <span className="text-[9px] font-mono uppercase tracking-[0.2em] text-gray-500 mb-2 font-bold select-none opacity-60">System_Ad_Broadcast // {type.toUpperCase()}_UNIT</span>
    <div className={`w-full border-2 border-dashed border-gray-800 rounded-2xl flex items-center justify-center bg-gray-900/30 backdrop-blur-sm min-h-[100px] max-w-[728px]`}>
      <div className="text-gray-700 font-mono text-[10px] italic text-center px-4 flex flex-col items-center gap-2 opacity-40">
        <Lock size={16} />
        <span className="tracking-widest">ADSTERRA_PLACEHOLDER_{type.toUpperCase()}</span>
      </div>
    </div>
  </div>
);

const ActionCard: React.FC<{
  step: number;
  title: string;
  description: string;
  buttonLabel: string;
  buttonColor: string;
  link: string;
  icon: React.ReactNode;
  bgImage?: string;
  isMandatory?: boolean;
  isOptional?: boolean;
}> = ({ step, title, description, buttonLabel, buttonColor, link, icon, bgImage, isMandatory = false, isOptional = false }) => (
  <div className="bg-[#161b22] border border-[#30363d] rounded-2xl p-6 transition-all duration-500 hover:border-[#58a6ff] hover:shadow-[0_0_40px_rgba(88,166,255,0.08)] flex flex-col h-full relative overflow-hidden group">
    {/* Immersive Background Image Overlay for Step 1 */}
    {bgImage && (
      <div 
        className="absolute inset-0 z-0 pointer-events-none opacity-[0.1] bg-center bg-cover mix-blend-screen group-hover:opacity-[0.15] transition-opacity duration-700"
        style={{ backgroundImage: `url(${bgImage})` }}
      />
    )}
    
    {isMandatory && (
      <div className="absolute top-0 right-0 bg-red-600 text-white text-[9px] font-black px-4 py-1.5 rounded-bl-xl uppercase tracking-widest shadow-lg z-20 border-l border-b border-white/10 font-mono">
        Mandatory
      </div>
    )}

    {isOptional && (
      <div className="absolute top-0 right-0 bg-gray-700 text-gray-300 text-[9px] font-black px-4 py-1.5 rounded-bl-xl uppercase tracking-widest z-20 border-l border-b border-white/5 font-mono">
        Optional
      </div>
    )}

    <div className="relative z-10 flex flex-col h-full">
      <div className="flex items-start justify-between mb-5">
        <div className={`w-12 h-12 rounded-xl flex items-center justify-center bg-[#0d1117]/80 border border-[#30363d] group-hover:border-[#58a6ff]/40 transition-all duration-300 shadow-xl group-hover:scale-110`}>
          {icon}
        </div>
        <div className="flex flex-col items-end">
          <span className="font-mono text-[10px] text-[#58a6ff] font-bold tracking-widest bg-[#58a6ff]/5 px-2 py-0.5 rounded border border-[#58a6ff]/20">PHASE_0{step}</span>
        </div>
      </div>
      
      <h3 className="text-xl font-black mb-3 text-[#f0f6fc] uppercase tracking-tight">{title}</h3>
      <p className="text-gray-400 text-sm mb-8 flex-grow leading-relaxed font-medium opacity-80">{description}</p>
      
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className={`flex items-center justify-center gap-3 py-4 px-6 rounded-xl font-black transition-all duration-300 uppercase tracking-tighter text-sm ${buttonColor} text-white hover:brightness-125 active:scale-[0.96] shadow-xl group-hover:translate-y-[-2px] border border-white/5`}
      >
        {buttonLabel}
        <ExternalLink size={16} />
      </a>
    </div>
  </div>
);

const App: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col font-sans selection:bg-[#58a6ff]/50 bg-[#0d1117] text-[#c9d1d9] overflow-x-hidden">
      {/* Top Signal Bar */}
      <div className="h-1 w-full bg-gradient-to-r from-[#238636] via-[#5865F2] to-[#58a6ff]" />

      {/* Sticky Header */}
      <header className="sticky top-0 z-[100] w-full bg-[#0d1117]/90 backdrop-blur-xl border-b border-[#30363d] py-4 shadow-2xl transition-all">
        <div className="container mx-auto px-4 flex items-center justify-between max-w-6xl">
          <div className="flex items-center gap-4 group cursor-pointer">
            <div className="p-2 bg-[#58a6ff]/10 rounded-xl border border-[#58a6ff]/20 group-hover:bg-[#58a6ff]/20 transition-all">
              <Terminal className="text-[#58a6ff]" size={22} />
            </div>
            <div className="flex flex-col">
              <h1 className="text-base md:text-xl font-black text-[#f0f6fc] tracking-tighter uppercase leading-none">
                FF Old Gen Support
              </h1>
              <span className="text-[9px] font-mono text-gray-500 uppercase tracking-[0.4em] mt-1 font-bold">DEPLOYMENT_V1.7_STABLE</span>
            </div>
          </div>
          
          <div className="flex items-center gap-3 px-4 py-1.5 rounded-full bg-green-500/5 border border-green-500/20 text-green-500 text-[10px] font-black uppercase tracking-[0.2em] animate-pulse-subtle">
            <Activity size={14} className="animate-spin-slow" />
            <span className="hidden sm:inline">Central Signal: Ready</span>
            <span className="sm:hidden">Ready</span>
          </div>
        </div>
      </header>

      {/* Main Content Area */}
      <main className="container mx-auto px-4 pt-12 pb-24 flex-grow max-w-6xl">
        
        {/* Ad Container 1: Header */}
        <AdSpace type="header" className="mx-auto mb-16" />

        {/* Persistent Warning Alert */}
        <section className="max-w-4xl mx-auto mb-16 px-2">
          <div className="bg-[#f851490d] border-2 border-[#f85149] rounded-2xl p-6 md:p-8 flex items-start gap-6 shadow-[0_0_50px_rgba(248,81,73,0.1)] group">
            <div className="mt-1 shrink-0 bg-[#f85149]/20 p-3 rounded-xl group-hover:scale-110 transition-transform">
              <AlertCircle className="text-[#f85149]" size={32} />
            </div>
            <div>
              <h2 className="text-[#f85149] font-black text-xs uppercase tracking-[0.3em] mb-2 font-mono italic">Security_Fail_Safe</h2>
              <p className="text-[#f0f6fc] leading-relaxed font-bold text-lg md:text-xl">
                If the activation key fails, <span className="text-white underline decoration-[#f85149] decoration-4 underline-offset-8">always generate a NEW one</span> from <span className="text-[#ea580c]">Step 4</span>. Multiple cryptographic attempts may be required for older devices.
              </p>
            </div>
          </div>
        </section>

        {/* Installation Path Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-black text-[#f0f6fc] tracking-tighter uppercase mb-4 flex items-center justify-center gap-4">
            <Gamepad2 className="text-[#58a6ff] hidden sm:block" size={40} />
            Technical Onboarding
          </h2>
          <div className="h-1 w-24 bg-[#58a6ff]/40 mx-auto rounded-full" />
        </div>

        {/* Step Sequence Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-10">
          <ActionCard
            step={1}
            title="Download Files"
            description="Acquire the original 2017 APK/OBB archives. This package contains the unpatched source files for direct server link."
            buttonLabel="Download Now"
            buttonColor="bg-[#238636]"
            link="https://www.samkstiyt.com/2025/12/freefire-2017-online.html?m=1"
            icon={<Download className="text-[#2ea043]" size={28} />}
            bgImage={STEP_1_BG}
            isMandatory={true}
          />
          <ActionCard
            step={2}
            title="Join Community"
            description="Mandatory Discord synchronization. You must be authenticated within the server to receive live pings and updates."
            buttonLabel="Join Discord"
            buttonColor="bg-[#5865F2]"
            link="https://discord.gg/freefirebeta"
            icon={<MessageSquare className="text-white" size={28} />}
            isMandatory={true}
          />
          <ActionCard
            step={3}
            title="Watch Tutorial"
            description="Learn how to generate the activation key and navigate the registration matrix effectively."
            buttonLabel="YouTube Guide"
            buttonColor="bg-[#ef4444]"
            link="https://youtu.be/4undrRDb8sw?si=8TOIZKSQPOnStPna"
            icon={<Youtube className="text-white" size={28} />}
            isOptional={true}
          />
        </div>

        {/* Ad Container 2: Middle */}
        <AdSpace type="middle" className="mx-auto mb-10" />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <ActionCard
            step={4}
            title="Generate Key"
            description="Initiate the session-bound key generator. This code is unique to your hardware signature for security bypass."
            buttonLabel="Generate Key"
            buttonColor="bg-[#ea580c]"
            link="https://freefireantigokeys.squareweb.app/"
            icon={<Key className="text-orange-200" size={28} />}
            isMandatory={true}
          />
          <ActionCard
            step={5}
            title="Registration"
            description="Finalize your account setup. Use the specific key obtained from Step 4 for identity verification."
            buttonLabel="Register & Activate"
            buttonColor="bg-[#58a6ff]"
            link="https://register.luna-corp.online/register"
            icon={<UserPlus className="text-[#0d1117]" size={28} />}
            isMandatory={true}
          />
        </div>

        {/* Ad Container 3: Footer Zone */}
        <AdSpace type="footer" className="mx-auto" />

      </main>

      {/* Corporate Footer */}
      <footer className="bg-[#010409] border-t border-[#30363d] py-20 relative overflow-hidden">
        <div className="absolute bottom-[-50px] left-[-50px] opacity-[0.03] pointer-events-none rotate-12">
           <Terminal size={300} className="text-[#58a6ff]" />
        </div>
        
        <div className="container mx-auto px-4 max-w-6xl relative z-10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-12 mb-16">
            <div className="flex flex-col items-center md:items-start text-center md:text-left">
              <div className="flex items-center gap-3 mb-4">
                <ShieldCheck className="text-[#238636]" size={32} />
                <span className="font-black text-3xl text-[#f0f6fc] tracking-tighter uppercase">Luna-Corp</span>
              </div>
              <p className="text-gray-500 text-[10px] font-mono uppercase tracking-[0.4em] font-bold opacity-60">System_Stability // Technical_Support_Unit</p>
            </div>
            
            <nav className="flex flex-wrap justify-center gap-8 md:gap-12 text-[11px] font-black uppercase tracking-[0.2em] text-gray-500">
              <a href="#" className="hover:text-[#58a6ff] transition-all hover:tracking-[0.3em]">Privacy_Protocol</a>
              <a href="#" className="hover:text-[#58a6ff] transition-all hover:tracking-[0.3em]">User_Licensing</a>
              <a href="#" className="hover:text-[#58a6ff] transition-all hover:tracking-[0.3em]">Handshake_Docs</a>
            </nav>
          </div>

          <div className="max-w-4xl mx-auto text-center border-t border-[#30363d]/50 pt-12">
            <p className="text-gray-600 text-[10px] font-mono mb-8 tracking-[0.15em] font-bold">
              &copy; {new Date().getFullYear()} LUNA-CORP FF OLD GEN SUPPORT. ALL DEPLOYMENT SIGNATURES RESERVED.
            </p>
            <div className="p-6 bg-gray-900/30 rounded-2xl border border-white/5 backdrop-blur-sm">
              <p className="text-gray-700 text-[9px] leading-relaxed uppercase tracking-tighter font-black opacity-50 text-center max-w-2xl mx-auto">
                NOTICE: This terminal facilitates technical access to legacy assets from 2017. We are an independent entity unaffiliated with Garena. All branding, trademarks, and intellectual property are owned by their respective corporate entities.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
