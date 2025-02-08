import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import svgr from 'vite-plugin-svgr'
import jsconfigPaths from 'vite-jsconfig-paths'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), svgr(), jsconfigPaths()],
  server: {
    proxy: {
      '/v1.1': { // أي طلب يبدأ بـ /v1.1 سيتم توجيهه إلى ZeptoMail
        target: 'https://api.zeptomail.com', // الرابط الأساسي لـ API
        changeOrigin: true, // يغير الأصل ليطابق الهدف
        secure: true, // تعيينه إلى false إذا كنت تستخدم HTTPS مع شهادة غير موثوقة
      },
    },
  },
  resolve: {
    alias: {
      '@': '/src'
    }
  }
})

