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
  const [appName, setAppName] = useState<string>('');

  return (
    <Card className='w-[350px]'>
      <CardHeader>
        <CardTitle>Add your App name</CardTitle>
        <CardDescription>In your vercel dashboard look for you app name.</CardDescription>
      </CardHeader>
      <CardContent>
        <form>
          <div className='grid w-full items-center gap-4'>
            <div className='flex flex-col space-y-1.5'>
              <Label htmlFor='name'>App Name</Label>
              <Input
                id='name'
                value={appName}
                onChange={(e) => setAppName(e.target.value as string)}
                placeholder='Enter App name'
              />
            </div>
          </div>
        </form>
      </CardContent>
      <CardFooter className='flex justify-between'>
        <Button disabled={appName.length <= 0} onClick={() => router.push(createDeploymentRoute({ app: appName }))}>Connect</Button>
      </CardFooter>
    </Card>
  );
}
