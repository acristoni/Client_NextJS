import { NextApiRequest, NextApiResponse } from "next";

export default async function handler (req: NextApiRequest, res: NextApiResponse) {
  if (req.method !=='GET') {
    return res.status(404).json({ message: 'Page not found' })
  }

  const { page } = req.query

  try {
    const api_url = process.env.API_URL

    const response = await fetch(`${api_url}/api/users?since=${page}`,{
        method: req.method,
        headers: {  
            "Content-Type": "application/json",
        },
    });
    const data = await response.json();
    console.log(data)
    res.json(data);
  } catch (error: any) {
    console.log(error)
    res.statusCode = 500
    res.end('Internal Server Error.', error.message)
    return
  }
}