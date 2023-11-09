'use client';

import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { createDeploymentRoute } from '@/lib/routes';

export function ConnectProject() {
  const router = useRouter();
  const [projectId, setProjectId] = useState<string>('');

  return (
    <Card className='w-[350px]'>
      <CardHeader>
        <CardTitle>Add your project ID</CardTitle>
        <CardDescription>In your vercel dashboard add your projectId.</CardDescription>
      </CardHeader>
      <CardContent>
        <form>
          <div className='grid w-full items-center gap-4'>
            <div className='flex flex-col space-y-1.5'>
              <Label htmlFor='name'>Project Id</Label>
              <Input
                id='name'
                value={projectId}
                onChange={(e) => setProjectId(e.target.value as string)}
                placeholder='Should be in a (cuid) format'
              />
            </div>
          </div>
        </form>
      </CardContent>
      <CardFooter className='flex justify-between'>
        <Button disabled={projectId.length <= 0} onClick={() => router.push(createDeploymentRoute({ projectId }))}>Connect</Button>
      </CardFooter>
    </Card>
  );
}
