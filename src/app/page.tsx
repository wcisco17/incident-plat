import { ConnectProject } from '@/features/ConnectProject';

export default async function Home() {
  return (
    <div className='flex items-center justify-center min-h-screen'>
      <div className='max-w-sm mx-auto p-6'>
        <div>
          <h2 className='text-center mb-4'>Start automating your deployments</h2>
        </div>
        <ConnectProject />
      </div>
    </div>
  );
}
