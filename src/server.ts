import express, { Request, Response } from 'express'
const app = express()

const port: number = 3100

app.get('/', (req: Request, res: Response) => {
    res.send('Hello Everyone, TypeScript NodeJs and ExpressJS')
})

app.listen(port, () => {
    console.log('Server listening on http://localhost:${port}')
})
