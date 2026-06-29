const server = Bun.spawn({
	cmd: ['bunx', 'wrangler', 'dev', '--port', '8787', '--local']
})

Bun.sleepSync(750)

setInterval(async () => {
	const response = await fetch('http://localhost:8787').catch(() => {})
	if (!response) return

	const value = await response.text()

	if (value === 'Aegora on Cloudflare Worker!' && response.status) {
		console.log('Cloudflare Worker works')
		server.kill('SIGKILL')
		process.exit(0)
	}
}, 500)

setTimeout(() => {
	console.log('Cloudflare Worker failed')
	server.kill('SIGKILL')
	process.exit(1)
}, 8000)
