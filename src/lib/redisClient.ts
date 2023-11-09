import { Redis } from '@upstash/redis';

const UPSTASH_URL = process.env.UPSTASH_URL as string
const UPSTASH_TOKEN = process.env.UPSTASH_TOKEN as string

export const redis = new Redis({
  url: UPSTASH_URL,
  token: UPSTASH_TOKEN,
  cache: 'default'
})