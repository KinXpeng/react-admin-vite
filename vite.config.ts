import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { join } from 'path'

// https://vitejs.dev/config/
export default defineConfig({
	base: './', // 配置打包静态文件输出路径
	plugins: [react()],
	css: {
		preprocessorOptions: {
			less: {
				javascriptEnabled: true
			}
		}
	},
	resolve: {
		alias: {
			'@': join(__dirname, 'src')
		}
	},
	server: {
		open: false,
		port: 3003, // 本地端口号
		proxy: {
			// 请求代理地址(仅开发环境有效)
			'/api': {
				target: 'http://localhost:8080',
				changeOrigin: true,
				secure: true, // 如果是https接口，需要配置这个参数
				// ws: true, //websocket支持
				rewrite: (path) => path.replace(/^\/api/, '')
			}
		}
	},
	build: {
		outDir: 'docs' // 打包后文件包名称
	}
})
