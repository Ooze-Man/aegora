import { Aegora, t } from 'aegora'
import { CloudflareAdapter } from 'aegora/adapter/cloudflare-worker'

const sub = new Aegora().get('/test', () => 'hello')

export default new Aegora({ adapter: CloudflareAdapter })
	.get('/', () => 'Aegora on Cloudflare Worker!')
	.use(sub)
	.compile()
