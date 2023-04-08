import technologies from '@/data/technologies';
import type { NextApiRequest, NextApiResponse } from 'next';

import { Technology } from '@/interfaces/sections';

type Data = Technology[];

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Technology[]>
) {
  res.status(200).json(technologies);
}
