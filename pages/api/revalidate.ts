import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.query.secret !== 'thisisasecret') {
    return res.status(401).json({ message: 'Invalid token' });
  }

  try {
    await res.revalidate('/profile');
    return res.json({ revalidated: true });
  } catch (error) {
    return res.status(500).send('Error revalidating');
  }
}