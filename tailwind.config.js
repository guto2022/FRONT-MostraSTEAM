/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        // Neutros de interface — background, surface, bordas e texto.
        ink: {
          50: '#f6f7f9',
          100: '#eceef2',
          200: '#d5d9e0',
          300: '#b0b7c3',
          400: '#848da0',
          500: '#646d82',
          600: '#4d5568',
          700: '#3f4555',
          800: '#2c3140',
          900: '#1b1e28',
          950: '#101219',
        },
        // Azul institucional do SESI (#164192) — cor estrutural, usada em
        // navegação, ações primárias e identidade. Não em toda a interface.
        sesiBlue: {
          50: '#eef1f8',
          100: '#dde3f1',
          200: '#b7c3e2',
          300: '#8ea0d0',
          400: '#5b76b5',
          500: '#2c5aa8',
          600: '#1d4a95',
          700: '#164192',
          800: '#123572',
          900: '#0e2a59',
          950: '#091d3d',
        },
        // Verde institucional do SESI (#65B12E) — acento secundário,
        // usado em favoritos, confirmações e ações de sucesso.
        sesiGreen: {
          50: '#f1f9ec',
          100: '#dff1d1',
          200: '#c0e3a7',
          300: '#9bd177',
          400: '#7ec14e',
          500: '#65b12e',
          600: '#4f8f22',
          700: '#3f701c',
          800: '#345a1b',
          900: '#2c4a19',
        },
        // Cores STEAM — usadas SOMENTE em detalhes pequenos (tag de
        // categoria, ponto indicador, filtro). Nunca como fundo de tela
        // ou card inteiro.
        steam: {
          science: '#2EA436',
          math: '#2EA436',
          tech: '#F1B813',
          arts: '#46B8B9',
          engineering: '#CD3729',
          teal: '#0C748D',
        },
      },
      fontFamily: {
        sans: ['"Sora"', '"Inter"', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        // Reservada só para elementos que realmente flutuam (bottom
        // sheet, botão de mapa, controles de zoom) — não decoração de card.
        float: '0 4px 16px -4px rgba(16, 18, 25, 0.28)',
      },
      keyframes: {
        'fade-up': {
          '0%': { opacity: 0, transform: 'translateY(6px)' },
          '100%': { opacity: 1, transform: 'translateY(0)' },
        },
      },
      animation: {
        'fade-up': 'fade-up 0.25s ease-out both',
      },
    },
  },
  plugins: [],
}
