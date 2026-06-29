import { describe, expect, it } from 'bun:test'
import { Aegora, t } from '../src/aegora'

describe('Aegora public entrypoint', () => {
	it('exports Aegora as the primary app class', () => {
		const app = new Aegora()

		expect(app).toBeInstanceOf(Aegora)
	})

	it('re-exports the type system helper', () => {
		expect(t.String()).toBeDefined()
	})
})
