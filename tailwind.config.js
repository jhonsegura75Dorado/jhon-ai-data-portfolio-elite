/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'Segoe UI', 'Arial'],
        display: ['"Space Grotesk"', 'Inter', 'ui-sans-serif', 'system-ui'],
        mono: ['"JetBrains Mono"', 'ui-monospace', 'SFMono-Regular', 'monospace'],
      },
      colors: {
        ink: '#060609',
        panel: '#0C0C14',
        electric: '#8B7CFF',
        mint: '#2EE6C8',
        warning: '#F5B54A',
      },
      boxShadow: {
        glow: '0 0 60px rgba(139, 124, 255, 0.18)',
        'glow-cyan': '0 0 60px rgba(46, 230, 200, 0.14)',
        card: '0 1px 0 rgba(255,255,255,0.04) inset, 0 20px 60px -30px rgba(0,0,0,0.8)',
      },
      backgroundImage: {
        grid: 'linear-gradient(rgba(255,255,255,.04) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.04) 1px, transparent 1px)',
        aurora: 'radial-gradient(60% 50% at 20% 0%, rgba(139,124,255,.16) 0%, transparent 60%), radial-gradient(50% 45% at 85% 10%, rgba(46,230,200,.10) 0%, transparent 60%)',
      },
      animation: {
        marquee: 'marquee 38s linear infinite',
        blink: 'blink 1.1s steps(2, start) infinite',
        float: 'float 9s ease-in-out infinite',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        blink: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-14px)' },
        },
      },
    },
  },
  plugins: [],
};
