import React, { useEffect, useRef } from 'react';
import { Github, Twitter, Send, ExternalLink } from 'lucide-react';

const SMALL_DINO = `
─────▄████▀█▄
───▄█████████████████▄
─▄█████.▼.▼.▼.▼.▼.▼▼▼▼
▄███████▄.▲.▲▲▲▲▲▲▲▲
████████████████████▀▀`;

const MAIN_DINO = `
░██████╗░░█████╗░██████╗░███████╗██╗██╗░░░░░██╗░░░░░░█████╗░
██╔════╝░██╔══██╗██╔══██╗╚════██║██║██║░░░░░██║░░░░░██╔══██╗
██║░░██╗░██║░░██║██║░░██║░░███╔═╝██║██║░░░░░██║░░░░░███████║
██║░░╚██╗██║░░██║██║░░██║██╔══╝░░██║██║░░░░░██║░░░░░██╔══██║
╚██████╔╝╚█████╔╝██████╔╝███████╗██║███████╗███████╗██║░░██║
░╚═════╝░░╚════╝░╚═════╝░╚══════╝╚═╝╚══════╝╚══════╝╚═╝░░╚═╝`;

function App() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Create raining effect
    const createRainingText = () => {
      if (!containerRef.current) return;
      
      const rain = document.createElement('pre');
      rain.textContent = SMALL_DINO;
      rain.style.position = 'absolute';
      rain.style.left = `${Math.random() * 100}%`;
      rain.style.top = '-200px';
      rain.style.color = 'rgba(0, 255, 0, 0.2)';
      rain.style.fontSize = '0.4rem';
      rain.style.pointerEvents = 'none';
      rain.style.whiteSpace = 'pre';
      rain.style.zIndex = '0';
      
      containerRef.current.appendChild(rain);

      const animation = rain.animate(
        [
          { transform: 'translateY(0)', opacity: 3.0 },
          { transform: 'translateY(100vh)', opacity: 0 }
        ],
        {
          duration: Math.random() * 2000 + 3000,
          easing: 'linear'
        }
      );

      animation.onfinish = () => rain.remove();
    };

    const interval = setInterval(createRainingText, 300);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    // Scrolling main dinosaur effect
    const mainDino = document.getElementById('mainDino');
    if (!mainDino) return;

    const scrollAnimation = mainDino.animate(
      [
        { transform: 'translateX(100%)' },
        { transform: 'translateX(-100%)' }
      ],
      {
        duration: 20000,
        iterations: Infinity,
        easing: 'linear'
      }
    );

    return () => scrollAnimation.cancel();
  }, []);

  return (
    <div ref={containerRef} className="relative min-h-screen bg-black overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-green-900/10 to-black" />
      
      {/* Main scrolling dinosaur */}
      <pre
        id="mainDino"
        className="absolute top-4 text-lime-500 whitespace-pre font-mono text-xs sm:text-sm opacity-80"
        style={{ textShadow: '0 0 10px rgba(0, 255, 0, 0.5)' }}
      >
        {MAIN_DINO}
      </pre>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen space-y-8 px-4">
        <div className="text-center space-y-6 backdrop-blur-sm bg-black/30 p-8 rounded-xl border border-lime-500/20">
          <img
            src="https://cdn.freewebstore.com/origin/919667/6_1737703049170.png"
            alt="OG Zilla Token"
            className="w-32 h-32 rounded-full mx-auto mb-4 ring-4 ring-lime-500/50 hover:ring-lime-500 transition-all duration-300"
          />
          
          <h1 className="text-2xl font-bold text-lime-500 mb-4 animate-pulse">
            Official OG Zilla Token
          </h1>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-md mx-auto">
            <a
              href="https://pump.fun/coin/6DvZHbzc3vspszoEToPJxh7NnLKeDp2p48KmWPfHpump"
              className="group flex items-center justify-center gap-2 py-3 px-6 bg-lime-500/20 hover:bg-lime-500 text-lime-500 hover:text-black rounded-lg transition-all duration-300 border border-lime-500/50"
            >
              <ExternalLink className="w-5 h-5" />
              <span>Pump.Fun</span>
            </a>
            
            <a
              href="https://x.com/OGZillaTerminal"
              className="group flex items-center justify-center gap-2 py-3 px-6 bg-lime-500/20 hover:bg-lime-500 text-lime-500 hover:text-black rounded-lg transition-all duration-300 border border-lime-500/50"
            >
              <Twitter className="w-5 h-5" />
              <span>X</span>
            </a>
            
            <a
              href="https://t.me/+vDvBtbz2GAAzODVh"
              className="group flex items-center justify-center gap-2 py-3 px-6 bg-lime-500/20 hover:bg-lime-500 text-lime-500 hover:text-black rounded-lg transition-all duration-300 border border-lime-500/50"
            >
              <Send className="w-5 h-5" />
              <span>Telegram</span>
            </a>
            
            <a
              href="https://solscan.io/account/6DvZHbzc3vspszoEToPJxh7NnLKeDp2p48KmWPfHpump"
              className="group flex items-center justify-center gap-2 py-3 px-6 bg-lime-500/20 hover:bg-lime-500 text-lime-500 hover:text-black rounded-lg transition-all duration-300 border border-lime-500/50"
            >
              <Github className="w-5 h-5" />
              <span>Solscan</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;