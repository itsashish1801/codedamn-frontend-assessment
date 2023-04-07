import User from '@/interfaces/user';
import type { NextApiRequest, NextApiResponse } from 'next';

import user from '@/data/user';

type Data = User;

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<User>
) {
  res.status(200).json(user);
}
