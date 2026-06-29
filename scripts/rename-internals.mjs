import { readdir, readFile, writeFile } from 'node:fs/promises'
import { join } from 'node:path'

const root = new URL('..', import.meta.url).pathname

const includeDirs = ['src', 'test', 'example', 'docs/migration']
const includeFiles = ['README.md']

const extensions = new Set([
	'.ts',
	'.tsx',
	'.js',
	'.jsx',
	'.mjs',
	'.cjs',
	'.json',
	'.md'
])

const replacements = [
	['ElysiaCustomStatusResponse', 'AegoraCustomStatusResponse'],
	['ElysiaStatus', 'AegoraStatus'],
	['ElysiaErrors', 'AegoraErrors'],
	['ElysiaTypeCustomErrorCallback', 'AegoraTypeCustomErrorCallback'],
	['ElysiaTypeCustomError', 'AegoraTypeCustomError'],
	['ElysiaTypeCheck', 'AegoraTypeCheck'],
	['MergeElysiaInstances', 'MergeAegoraInstances'],
	['ComposeElysiaResponse', 'ComposeAegoraResponse'],
	['ExcludeElysiaResponse', 'ExcludeAegoraResponse'],
	['ElysiaHandlerToResponseSchemas', 'AegoraHandlerToResponseSchemas'],
	['ElysiaHandlerToResponseSchemaAmbiguous', 'AegoraHandlerToResponseSchemaAmbiguous'],
	['ElysiaHandlerToResponseSchema', 'AegoraHandlerToResponseSchema'],
	['ElysiaAdapter', 'AegoraAdapter'],
	['ElysiaConfig', 'AegoraConfig'],
	['AnyElysia', 'AnyAegora'],
	['ElysiaFile', 'AegoraFile'],
	['ELYSIA_TRACE', 'AEGORA_TRACE'],
	['ELYSIA_FORM_DATA', 'AEGORA_FORM_DATA'],
	['ELYSIA_REQUEST_ID', 'AEGORA_REQUEST_ID'],
	['ELYSIA_AOT', 'AEGORA_AOT'],
	['Elysia', 'Aegora'],
	["'elysia'", "'aegora'"],
	['"elysia"', '"aegora"'],
	['from elysia', 'from aegora'],
	['using elysia', 'using aegora'],
	['Elysia.fetch', 'Aegora.fetch']
]

async function* walk(dir) {
	for (const entry of await readdir(dir, { withFileTypes: true })) {
		const path = join(dir, entry.name)

		if (entry.isDirectory()) {
			if (entry.name === 'node_modules' || entry.name === 'dist') continue
			yield* walk(path)
			continue
		}

		if (!entry.isFile()) continue

		const extension = entry.name.includes('.')
			? `.${entry.name.split('.').pop()}`
			: ''

		if (extensions.has(extension)) yield path
	}
}

const files = []

for (const dir of includeDirs) {
	for await (const path of walk(join(root, dir))) files.push(path)
}

for (const file of includeFiles) files.push(join(root, file))

let changed = 0

for (const file of files) {
	let content = await readFile(file, 'utf8')
	const before = content

	for (const [from, to] of replacements) content = content.split(from).join(to)

	if (content !== before) {
		await writeFile(file, content)
		changed++
		console.log(`updated ${file.replace(root, '')}`)
	}
}

console.log(`Aegora internal rename complete. Changed ${changed} file(s).`)
