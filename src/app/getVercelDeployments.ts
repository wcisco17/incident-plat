import { VercelDeploymentType } from '@/lib/types';

type GetVercelErrorsDeploymentList = {
  projectId: string
}

export const getVercelErrorsDeploymentList = async ({ projectId }: GetVercelErrorsDeploymentList) => {
  if (!projectId) return [];

  try {
    const result = await fetch(
      `https://api.vercel.com/v2/deployments?projectId=${projectId}`, {
        headers: {
          'Authorization': `Bearer ${process.env.VERCEL_AUTH_TOKEN}`,
        },
        method: 'get',
      });

    const data: VercelDeploymentType = await result.json();

    if (!data) return [];

    return data.deployments.filter((deployment) => deployment.readyState === 'ERROR');
  } catch (error) {
    return [];
  }
};