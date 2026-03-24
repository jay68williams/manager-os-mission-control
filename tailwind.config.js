/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-sans)', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        mono: ['var(--font-mono)', 'ui-monospace', 'monospace'],
      },
      colors: {
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))',
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))',
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))',
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))',
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))',
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))',
        },
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))',
        },
        // Surface levels
        'surface-0': 'hsl(var(--surface-0))',
        'surface-1': 'hsl(var(--surface-1))',
        'surface-2': 'hsl(var(--surface-2))',
        'surface-3': 'hsl(var(--surface-3))',
        // Void accent colors
        'void-cyan': 'hsl(var(--void-cyan))',
        'void-mint': 'hsl(var(--void-mint))',
        'void-amber': 'hsl(var(--void-amber))',
        'void-violet': 'hsl(var(--void-violet))',
        'void-crimson': 'hsl(var(--void-crimson))',
        // Semantic status colors
        success: {
          DEFAULT: 'hsl(var(--success))',
          foreground: 'hsl(var(--success-foreground))',
        },
        warning: {
          DEFAULT: 'hsl(var(--warning))',
          foreground: 'hsl(var(--warning-foreground))',
        },
        info: {
          DEFAULT: 'hsl(var(--info))',
          foreground: 'hsl(var(--info-foreground))',
        },
        // ── Manager OS Brand Palette ──
        'brand-red': '#E8353C',
        'bg-base': '#111110',
        'mos-surface-1': '#1C1C1B',
        'mos-surface-2': '#252524',
        'mos-surface-3': '#2E2E2C',
        'border-subtle': '#333331',
        'border-mid': '#444441',
        'text-primary': '#F0EFEC',
        'text-secondary': '#888884',
        'text-tertiary': '#555552',
        'header-bg': '#0D0D0C',
        'log-bg': '#0A0A09',
        // Manager OS Status colours
        'status-healthy': '#1E7B3A',
        'status-warning': '#D4830A',
        'status-critical': '#E8353C',
        'status-inactive': '#3A3A38',
        // Manager OS Tag/pill
        'tag-bg': '#252524',
        'tag-text': '#888884',
        // Manager OS pill status tinted backgrounds
        'pill-active-bg': '#0D1A0F',
        'pill-active-text': '#1E7B3A',
        'pill-warning-bg': '#1A1200',
        'pill-warning-text': '#D4830A',
        'pill-critical-bg': '#1A0808',
        'pill-critical-text': '#E8353C',
      },
      borderRadius: {
        '2xl': '16px',
        xl: '12px',
        lg: '8px',
        md: '6px',
        sm: '4px',
        xs: '2px',
      },
      fontSize: {
        '2xs': ['0.625rem', { lineHeight: '0.875rem' }],
        // Manager OS typography scale
        'mos-hero': ['2.5rem', { lineHeight: '1', fontWeight: '800' }],
        'mos-metric': ['1.25rem', { lineHeight: '1.2', fontWeight: '700' }],
        'mos-title': ['1.375rem', { lineHeight: '1.3', fontWeight: '800' }],
        'mos-section': ['1rem', { lineHeight: '1.4', fontWeight: '700' }],
        'mos-card': ['0.875rem', { lineHeight: '1.4', fontWeight: '600' }],
        'mos-body': ['0.8125rem', { lineHeight: '1.5', fontWeight: '400' }],
        'mos-pill': ['0.625rem', { lineHeight: '1', fontWeight: '600', letterSpacing: '0.08em' }],
        'mos-hint': ['0.6875rem', { lineHeight: '1.4', fontWeight: '400' }],
        'mos-mono': ['0.75rem', { lineHeight: '1.5', fontWeight: '400' }],
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
        '112': '28rem',
        '128': '32rem',
      },
      animation: {
        'fade-in': 'fadeIn 0.15s ease-out',
        'slide-in-right': 'slideInRight 0.2s ease-out',
        'slide-in-left': 'slideInLeft 0.2s ease-out',
        'pulse-dot': 'pulse-dot 2s ease-in-out infinite',
        'glow-pulse': 'glowPulse 3s ease-in-out infinite',
        'float': 'float 6s ease-in-out infinite',
        'converge-top': 'convergeTop 0.9s cubic-bezier(0.16, 1, 0.3, 1) forwards',
        'converge-left': 'convergeLeft 0.9s cubic-bezier(0.16, 1, 0.3, 1) forwards',
        'converge-right': 'convergeRight 0.9s cubic-bezier(0.16, 1, 0.3, 1) forwards',
        'converge-bottom': 'convergeBottom 0.9s cubic-bezier(0.16, 1, 0.3, 1) forwards',
        'converge-burst': 'convergeBurst 0.5s ease-out 0.9s forwards',
        'pair-fade-out': 'pairFadeOut 0.5s ease-in 1.8s forwards',
        'mc-fade-in': 'mcFadeIn 0.7s cubic-bezier(0.16, 1, 0.3, 1) 2.0s forwards',
        'grid-flow': 'gridFlow 20s linear infinite',
        'edge-glow': 'edgeGlow 2s ease-in-out infinite',
      },
      keyframes: {
        glowPulse: {
          '0%, 100%': { opacity: '1', filter: 'brightness(1)' },
          '50%': { opacity: '0.7', filter: 'brightness(1.3)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-6px)' },
        },
        gridFlow: {
          '0%': { backgroundPosition: '0 0' },
          '100%': { backgroundPosition: '40px 40px' },
        },
        edgeGlow: {
          '0%, 100%': { opacity: '0.4' },
          '50%': { opacity: '1' },
        },
        convergeTop: {
          '0%': { transform: 'translate(-50%, -40px)', opacity: '0' },
          '100%': { transform: 'translate(-50%, 0)', opacity: '1' },
        },
        convergeLeft: {
          '0%': { transform: 'translate(-40px, -50%)', opacity: '0' },
          '100%': { transform: 'translate(0, -50%)', opacity: '1' },
        },
        convergeRight: {
          '0%': { transform: 'translate(40px, -50%)', opacity: '0' },
          '100%': { transform: 'translate(0, -50%)', opacity: '1' },
        },
        convergeBottom: {
          '0%': { transform: 'translate(-50%, 40px)', opacity: '0' },
          '100%': { transform: 'translate(-50%, 0)', opacity: '1' },
        },
        convergeBurst: {
          '0%': { transform: 'scale(0)', opacity: '0' },
          '60%': { transform: 'scale(1.2)', opacity: '1' },
          '100%': { transform: 'scale(1)', opacity: '0.6' },
        },
        pairFadeOut: {
          '0%': { transform: 'scale(1)', opacity: '1' },
          '100%': { transform: 'scale(0.8)', opacity: '0' },
        },
        mcFadeIn: {
          '0%': { transform: 'scale(0.5)', opacity: '0' },
          '60%': { transform: 'scale(1.08)', opacity: '1' },
          '100%': { transform: 'scale(1)', opacity: '1' },
        },
      },
    },
  },
  plugins: [],
}
