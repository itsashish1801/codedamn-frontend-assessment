import playgrounds from '@/data/playgrounds';
import type { NextApiRequest, NextApiResponse } from 'next';

import { Playground } from '@/interfaces/sections';

type Data = Playground[];

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Playground[]>
) {
  res.status(200).json(playgrounds);
}
