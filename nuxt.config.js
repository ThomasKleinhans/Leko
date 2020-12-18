export default {

	target: 'static',

	head: {
		title: 'Leko',
		meta: [
			{ charset: 'utf-8' },
			{ name: 'viewport', content: 'width=device-width, initial-scale=1, maximum-scale=1' },
			{ hid: 'description', name: 'description', content: 'Leko is a tech-company committed to reinvent the construction process for next generation buildings.' },
			{ name: 'google-site-verification', content:'k9wYnXNU0VkB0B6dJOguiBud5uH9Nj-ZzmdgAaEJCEI' }
		],
		link: [
			{ rel: 'apple-touch-icon', sizes: '57x57', href: '/favicon/apple-icon-57x57.png' },
			{ rel: 'apple-touch-icon', sizes: '60x60', href: '/favicon/apple-icon-60x60.png' },
			{ rel: 'apple-touch-icon', sizes: '72x72', href: '/favicon/apple-icon-72x72.png' },
			{ rel: 'apple-touch-icon', sizes: '76x76', href: '/favicon/apple-icon-76x76.png' },
			{ rel: 'apple-touch-icon', sizes: '114x114', href: '/favicon/apple-icon-114x114.png' },
			{ rel: 'apple-touch-icon', sizes: '120x120', href: '/favicon/apple-icon-120x120.png' },
			{ rel: 'apple-touch-icon', sizes: '144x144', href: '/favicon/apple-icon-144x144.png' },
			{ rel: 'apple-touch-icon', sizes: '152x152', href: '/favicon/apple-icon-152x152.png' },
			{ rel: 'apple-touch-icon', sizes: '180x180', href: '/favicon/apple-icon-180x180.png' },
			{ rel: 'icon', type: 'image/png', sizes: '192x192', href: '/favicon/android-icon-192x192.png' },
			{ rel: 'icon', type: 'image/png', sizes: '32x32', href: '/favicon/favicon-32x32.png' },
			{ rel: 'icon', type: 'image/png', sizes: '96x96', href: '/favicon/favicon-96x96.png' },
			{ rel: 'icon', type: 'image/png', sizes: '16x16', href: '/favicon/favicon-16x16.png' }
		]
	},

	css: ['@/assets/scss/main.scss'],

	plugins: [
		'~/plugins/global-components.js',
		'~/plugins/filters.js',
		{ src: '~/plugins/fullpage', ssr: false },
		{ src: '~/plugins/vue-carousel', ssr: false },
		{ src: '~/plugins/vue-google-map.js', ssr: false },
		{ src: '~/plugins/mailchimp-subscribe.js', ssr: false }
	],

	modules: ['@nuxtjs/google-gtag'],

	'google-gtag': {
		id: process.env.GOOGLE_TAG_ID
	},

	generate: {
		fallback: true,
		dir: 'production-ready'
	},

	server: {
		host: '0.0.0.0', // default: localhost
	},

	env: {
		GOOGLE_MAP_API_KEY:process.env.GOOGLE_MAP_API_KEY,
		CONTENTFUL_SPACE:process.env.CONTENTFUL_SPACE,
		CONTENTFUL_ACCESS_TOKEN:process.env.CONTENTFUL_ACCESS_TOKEN,
		SKEELED_CAREERS_URL: process.env.SKEELED_CAREERS_URL,
		SKEELED_API_KEY: process.env.SKEELED_API_KEY,
		LANGUAGE: process.env.LANGUAGE
	},
}
