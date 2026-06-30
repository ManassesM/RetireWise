import { MongoClient } from 'mongodb'

const uri = process.env.MONGODB_URI
const options = {}

let client: MongoClient
let clientPromise: Promise<MongoClient>

if (!uri) {
	throw new Error('Invalid/Missing environment variable: "MONGODB_URI"')
}

declare global {
	var _mongoClientPromise: Promise<MongoClient> | undefined
}

if (!uri) {
	throw new Error('Please add your Mongo URI to .env.local')
}

if (process.env.NODE_ENV === 'development') {
	const globalVarMongo = global as typeof globalThis & {
		_mongoClientPromise?: Promise<MongoClient>
	}

	if (!globalVarMongo._mongoClientPromise) {
		client = new MongoClient(uri, options)
		globalVarMongo._mongoClientPromise = client.connect()
	}
	clientPromise = globalVarMongo._mongoClientPromise
} else {
	client = new MongoClient(uri, options)
	clientPromise = client.connect()
}

export default clientPromise
