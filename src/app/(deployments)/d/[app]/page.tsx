import type { DeploymentPageProps } from './next.types';

import { getVercelErrorsDeploymentList } from './getVercelDeployments';
import { DeploymentErrorList } from '@/features/DeploymentErrorList';

import { notFound } from 'next/navigation';

export default async function DeploymentsPage(props: DeploymentPageProps<'app'>) {
  const { params } = props

  const app = await getVercelErrorsDeploymentList({ app: params.app });

  if (!params.app || !app.length) return notFound()

  const name = app[0].name

  return (
    <div className='max-w-2xl my-6 w-full mx-auto flex flex-col px-4'>
      <div className='h-16 flex w-full justify-between items-center py-4 border-b border-neutral-800'>
        <h1>Deployment Error List for: {name}</h1>
      </div>
      <DeploymentErrorList app={params.app} data={app} />
    </div>
  );
}