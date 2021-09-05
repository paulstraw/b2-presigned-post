# b2-presigned-post

```bash
cp .env.sample .env # update with appropriate values
npm i
npm start
```

Outputs something like:

```js
{
  url: 'https://s3.us-west-002.backblazeb2.com/somecoolbucket',
  fields: {
    bucket: 'somecoolbucket',
    'X-Amz-Algorithm': 'AWS4-HMAC-SHA256',
    'X-Amz-Credential': '1234567890abcdef/20210905/us-west-002/s3/aws4_request',
    'X-Amz-Date': '20210905T194520Z',
    key: 'test-1630871120553.png',
    Policy: 'base64string',
    'X-Amz-Signature': '1234567890abcdef1234567890abcdef1234567890abcdef'
  }
}
```

Then I attempt to POST with the given information. I've tried a few other key names based on various examples around the web, but none of them seem to change the result I get. Note that the double `//` before the bucket name isn't in the actual request; I think this might be a bug with the Paw online viewer. https://paw.pt/gichwK4s?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJwYXdwdF9pZCI6MjE1ODYwMzA2MDcwMjYsInNjb3BlcyI6WyJyZWFkIl0sIm5vbmNlIjoiY2QwNmEzZjYtZDI1ZC00NTI2LWE2MDYtOTMyZTY3NWRkZmNjIn0.hJ7bBk7O_p7qmR2EXgGc6INSZ1pA7Z69Mr9kaDkZ5YQ
