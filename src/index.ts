import { config as dotenvConfig } from 'dotenv'
dotenvConfig()

import { S3Client } from '@aws-sdk/client-s3'
import { createPresignedPost as awsCreatePresignedPost, PresignedPost } from '@aws-sdk/s3-presigned-post'

const s3Client = new S3Client({
  endpoint: 'https://s3.us-west-002.backblazeb2.com',
  region: 'us-west-002',
})

const createPresignedPost = async (key: string): Promise<PresignedPost> => {
  return awsCreatePresignedPost(s3Client, {
    Bucket: process.env.B2_BUCKET_NAME as string,
    Key: key,
    Expires: 900, // 900 seconds / 60 = 15 minutes, default 3600 (1 hour)
  })
}

const main = async () => {
  console.log(await createPresignedPost(`test-${new Date().getTime()}.png`))
}

main()
