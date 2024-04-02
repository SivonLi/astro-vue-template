// uno.config.ts
import { defineConfig, presetIcons, presetUno } from 'unocss'

export default defineConfig({
  // ...UnoCSS options
  theme: {
    colors: {
      primary: '#23262d',
      accent: {
        '': 'rgb(var(--accent))',
        'light': 'rgb(var(--accent-light))',
        'dark': 'rgb(var(--accent-dark))',
      },
    },
  },
  rules: [
    ['card-gradient-bg', { 'background-image': 'linear-gradient(45deg,rgb(var(--accent)),rgb(var(--accent-light)) 30%,white 60%)', 'background-position': '0' }],
    ['vue-gradient-bg', { 'background-image': 'linear-gradient(90deg,#42d392 25%,#647eff)', 'background-position': '0' }],
    ['card-shadow', { 'box-shadow': 'inset 0 0 0 1px rgba(255, 255, 255, 0.1)' }],
    ['instructions-border', { border: '1px solid rgba(var(--accent-light), 25%)' }],
    ['instructions-gradient-bg', { 'background-image': 'linear-gradient(rgba(var(--accent-dark), 66%), rgba(var(--accent-dark), 33%))' }],
    ['code-bg', { background: 'rgba(var(--accent-light), 12%)' }],
  ],
  shortcuts: {
    'card': 'list-none flex p-1 bg-primary bg-none bg-[length:400%] bg-[100%] rounded-lg card-shadow transition-background-position duration-600 focus-within:card-gradient-bg hover:card-gradient-bg',
    'card-a': 'w-full decoration-none lh-snug p-5 rounded-lg text-white bg-primary opacity-80',
    'code': 'text-4 font-bold code-bg text-accent-light rounded-lg px-2 py-1',
  },
})
