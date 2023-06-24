module.exports = {
	configureWebpack: {
		resolve: {
			alias: {
				'assets': '@/assets',
				'common': '@/common',
				'components': '@/components',
				'api': '@/api',
				'views': '@/views',
				'plugins': '@/plugins'
			}
		}
	},
	devServer: {
		open: true,           // 是否自动打开项目
		port: 8088,           // 端口号
		https: false,         // 把访问变成https
		hotOnly: false,       // 热更新
		disableHostCheck: true,   // 解决内网穿透 Invalid Host header问题

	}
}