import type { VercelDeploymentLogType } from '@/lib/types';
import { redis } from '@/lib/redisClient';

const VERCEL_AUTH_PROJECT_ID = process.env.VERCEL_AUTH_PROJECT_ID;
const VERCEL_AUTH_TOKEN = process.env.VERCEL_AUTH_TOKEN;

type GetVercelByDeploymentsLog = {
  uid: string
  opt: {
    cache: 'enabled' | 'disabled'
  }
}

async function fetchDeploymentLogs(uid: string): Promise<VercelDeploymentLogType> {
  const response = await fetch(`https://api.vercel.com/v2/deployments/${uid}/events?builds=1&delimiter=1&limit=20&projectId=${VERCEL_AUTH_PROJECT_ID}`, {
    headers: {
      'Authorization': `Bearer ${VERCEL_AUTH_TOKEN}`,
    }, method: 'GET',
  });
  if (!response.ok) {
    throw new Error(`Error fetching deployment logs: ${response.statusText}`);
  }
  return response.json();
}


function filterErrorLogs(logs: VercelDeploymentLogType): VercelDeploymentLogType {
  return logs.filter(event => event.type === 'stderr');
}

export async function getVercelErrorsDeploymentList({ uid, opt: { cache = 'enabled' }, }: GetVercelByDeploymentsLog): Promise<VercelDeploymentLogType> {
  if (!uid) return [];

  try {
    let errorLogs: VercelDeploymentLogType = [];

    // Cache handling
    if (cache === 'enabled') {
      const cachedLogs = await redis.get(uid) as VercelDeploymentLogType;
      if (cachedLogs) {
        console.debug('Cache hit yes');
        errorLogs = (cachedLogs);
      }
    }

    // Fetch new logs if not using cache or nothing in cache
    if (!errorLogs.length) {
      const deploymentLogs = await fetchDeploymentLogs(uid);
      errorLogs = filterErrorLogs(deploymentLogs);

      // Cache the new logs if caching is enabled
      if (cache === 'enabled') {
        await redis.set(uid, errorLogs);
      }
    }

    return errorLogs;
  } catch (error) {
    console.error(`An error occurred while getting Vercel deployment logs: ${error}`);
    return [];
  }
}
