import projects from '@/data/projects';
import type { NextApiRequest, NextApiResponse } from 'next';

import { Project } from '@/interfaces/sections';

type Data = Project[];

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Project[]>
) {
  res.status(200).json(projects);
}
