import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import path from 'path';

export default defineConfig({
  plugins: [react()],
  base: '/', // для nastya30.fun и GitHub Pages
  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx', '.json'],
    alias: {
      'vaul@1.1.2': 'vaul',
      'sonner@2.0.3': 'sonner',
      'recharts@2.15.2': 'recharts',
      'react-resizable-panels@2.1.7': 'react-resizable-panels',
      'react-hook-form@7.55.0': 'react-hook-form',
      'react-day-picker@8.10.1': 'react-day-picker',
      'next-themes@0.4.6': 'next-themes',
      'lucide-react@0.487.0': 'lucide-react',
      'input-otp@1.4.2': 'input-otp',

      '@': path.resolve(__dirname, './src'),

      'figma:asset/ec96cdcd319575a63351b597ddb2a535dbe74cb4.png': path.resolve(
        __dirname,
        './src/assets/ec96cdcd319575a63351b597ddb2a535dbe74cb4.png'
      ),
      'figma:asset/de738a9e3385c207c8f5138ec21ee1d0065a353c.png': path.resolve(
        __dirname,
        './src/assets/de738a9e3385c207c8f5138ec21ee1d0065a353c.png'
      ),
      'figma:asset/ddf69ccc7a3b30c684a8dc75afb0897bc69fdaf7.png': path.resolve(
        __dirname,
        './src/assets/ddf69ccc7a3b30c684a8dc75afb0897bc69fdaf7.png'
      ),
      'figma:asset/bb0c7e9ba42141fdf167fbc8d3add26eaae77ee2.png': path.resolve(
        __dirname,
        './src/assets/bb0c7e9ba42141fdf167fbc8d3add26eaae77ee2.png'
      ),
      'figma:asset/7df4073ec1b0c67603696e8b13b14c03c47d24a0.png': path.resolve(
        __dirname,
        './src/assets/7df4073ec1b0c67603696e8b13b14c03c47d24a0.png'
      ),
      'figma:asset/72fab85e62bafa40ed7e2d48ec250d843f6669f7.png': path.resolve(
        __dirname,
        './src/assets/72fab85e62bafa40ed7e2d48ec250d843f6669f7.png'
      ),
      'figma:asset/5c873a7b309bc784d864cd4c686a694d8de2e668.png': path.resolve(
        __dirname,
        './src/assets/5c873a7b309bc784d864cd4c686a694d8de2e668.png'
      ),
      'figma:asset/5141c0e1630e7cec5355c287bc28de25d6be03ae.png': path.resolve(
        __dirname,
        './src/assets/5141c0e1630e7cec5355c287bc28de25d6be03ae.png'
      ),
      'figma:asset/50339a4b3c1e074be0b46f4324c304819ae25bf3.png': path.resolve(
        __dirname,
        './src/assets/50339a4b3c1e074be0b46f4324c304819ae25bf3.png'
      ),
      'figma:asset/48bf35776b0317988ddb20e7e7b9379340f955e9.png': path.resolve(
        __dirname,
        './src/assets/48bf35776b0317988ddb20e7e7b9379340f955e9.png'
      ),
      'figma:asset/3fb12cb48ec837b464afd3b1ae759b7e29067f1d.png': path.resolve(
        __dirname,
        './src/assets/3fb12cb48ec837b464afd3b1ae759b7e29067f1d.png'
      ),
      'figma:asset/3eeb2d155f5523151b3a77a4dff01a5875d98b20.png': path.resolve(
        __dirname,
        './src/assets/3eeb2d155f5523151b3a77a4dff01a5875d98b20.png'
      ),
      'figma:asset/343906eb3453d194256184641af5fa1190f12b15.png': path.resolve(
        __dirname,
        './src/assets/343906eb3453d194256184641af5fa1190f12b15.png'
      ),
      'figma:asset/33ed45e1bd330e48a012ef9a1c20086221b169f2.png': path.resolve(
        __dirname,
        './src/assets/33ed45e1bd330e48a012ef9a1c20086221b169f2.png'
      ),
      'figma:asset/2c5382ba4816d4efc1b01052b50d43de7ee2cb8b.png': path.resolve(
        __dirname,
        './src/assets/2c5382ba4816d4efc1b01052b50d43de7ee2cb8b.png'
      ),

      'embla-carousel-react@8.6.0': 'embla-carousel-react',
      'cmdk@1.1.1': 'cmdk',
      'class-variance-authority@0.7.1': 'class-variance-authority',
      '@radix-ui/react-tooltip@1.1.8': '@radix-ui/react-tooltip',
      '@radix-ui/react-toggle@1.1.2': '@radix-ui/react-toggle',
      '@radix-ui/react-toggle-group@1.1.2': '@radix-ui/react-toggle-group',
      '@radix-ui/react-tabs@1.1.3': '@radix-ui/react-tabs',
      '@radix-ui/react-switch@1.1.3': '@radix-ui/react-switch',
      '@radix-ui/react-slot@1.1.2': '@radix-ui/react-slot',
      '@radix-ui/react-slider@1.2.3': '@radix-ui/react-slider',
      '@radix-ui/react-separator@1.1.2': '@radix-ui/react-separator',
      '@radix-ui/react-select@2.1.6': '@radix-ui/react-select',
      '@radix-ui/react-scroll-area@1.2.3': '@radix-ui/react-scroll-area',
      '@radix-ui/react-radio-group@1.2.3': '@radix-ui/react-radio-group',
      '@radix-ui/react-progress@1.1.2': '@radix-ui/react-progress',
      '@radix-ui/react-popover@1.1.6': '@radix-ui/react-popover',
      '@radix-ui/react-navigation-menu@1.2.5': '@radix-ui/react-navigation-menu',
      '@radix-ui/react-menubar@1.1.6': '@radix-ui/react-menubar',
      '@radix-ui/react-label@2.1.2': '@radix-ui/react-label',
      '@radix-ui/react-hover-card@1.1.6': '@radix-ui/react-hover-card',
      '@radix-ui/react-dropdown-menu@2.1.6': '@radix-ui/react-dropdown-menu',
      '@radix-ui/react-dialog@1.1.6': '@radix-ui/react-dialog',
      '@radix-ui/react-context-menu@2.2.6': '@radix-ui/react-context-menu',
      '@radix-ui/react-collapsible@1.1.3': '@radix-ui/react-collapsible',
      '@radix-ui/react-checkbox@1.1.4': '@radix-ui/react-checkbox',
      '@radix-ui/react-aspect-ratio@1.1.2': '@radix-ui/react-aspect-ratio',
      '@radix-ui/react-alert-dialog@1.1.6': '@radix-ui/react-alert-dialog',
      '@radix-ui/react-accordion@1.2.3': '@radix-ui/react-accordion',
    },
  },
  build: {
    target: 'esnext',
    outDir: 'docs',
    emptyOutDir: true,
  },
  server: {
    port: 3000,
    open: true,
  },
});
