import { VercelDeploymentBaseType, VercelDeploymentType } from '@/lib/types';

type GetVercelErrorsDeploymentList = {
  app: string
}

function filterDeploymentLogs(logs: VercelDeploymentType): VercelDeploymentBaseType[] {
  return logs.deployments.filter(event => event.readyState === 'ERROR');
}

export async function getVercelErrorsDeploymentList({ app }: GetVercelErrorsDeploymentList) {
  if (!app) return [];

  try {
    const result = await fetch(
      `https://api.vercel.com/v2/deployments?app=${app}`, {
        headers: {
          'Authorization': `Bearer ${process.env.VERCEL_AUTH_TOKEN}`,
        },
        method: 'get',
      });

    const data: VercelDeploymentType = await result.json();

    if (!data) return [];

    return filterDeploymentLogs(data);
  } catch (error) {
    return [];
  }
}