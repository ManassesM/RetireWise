import { NextResponse } from 'next/server'
import clientPromise from '@/lib/mongodb'

export async function GET() {
	try {
		const client = await clientPromise
		const db = client.db()
    await db.command({ ping: 1 })

		return NextResponse.json({ ok: true})
	} catch {
		return NextResponse.json(
			{ error: 'Database failed to connect' },
			{ status: 500 },
		)
	}
}
