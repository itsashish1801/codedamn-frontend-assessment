import type { NextApiRequest, NextApiResponse } from 'next';
import { Navbar } from '@/interfaces/sections';

import navbarDetails from '@/data/navbarDetails';

type Data = Navbar;

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Navbar>
) {
  res.status(200).json(navbarDetails);
}
