import { notFound } from 'next/navigation';

import Link from 'next/link';

import { getVercelErrorsDeploymentList } from './getVercelErrorsDeploymentList';
import type { DeploymentPageProps } from '../../../next.types';

import { AIAnalysis } from '@/features/AIAnalysis';
import { Button } from '@/components/ui/button';

export default async function DeploymentLogsInfoPage(props: DeploymentPageProps<'uid'>) {
  const { params } = props;

  const deployment = await getVercelErrorsDeploymentList({ uid: params.uid, opt: { cache: 'enabled' } });

  if (!params.uid || !deployment.length) return notFound();

  return (
    <div className='max-w-2xl my-6 w-full mx-auto flex flex-col px-4'>
      <div className='h-16 flex w-full justify-between items-center py-4 border-b border-neutral-800'>
        <h1>Logs Analysis</h1>
        <Link href={`${props.searchParams.url}`}>
          <Button>View Deployment on Vercel</Button>
        </Link>
      </div>

      <AIAnalysis deployment={deployment} />

    </div>
  );
}