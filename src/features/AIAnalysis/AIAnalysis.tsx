'use client';

import { FormEvent, useEffect } from 'react';

import { VercelDeploymentLogType } from '@/lib/types';
import { Button } from '@/components/ui/button';

import { useChat } from 'ai/react';

type AIAnalysisProps = {
  deployment: VercelDeploymentLogType
}

export function AIAnalysis({ deployment }: AIAnalysisProps) {
  const { messages, handleSubmit, setInput, input } = useChat();

  const handleSaveSubmit = (e: FormEvent<HTMLFormElement>) => {
    return handleSubmit(e);
  };

  useEffect(() => {
    setInput(
      `Given the following deployments log read the code, tell me what went wrong, respond with your
    detailed analysis and potential solution ${JSON.stringify(deployment)}`,
    );
  }, [setInput, deployment]);

  return (
    <>
      <div className='mt-4'>
        <form className='flex space-x-4' onSubmit={handleSaveSubmit}>
          <Button
            type='submit'
          >
            Initiate Analysis
          </Button>
        </form>
      </div>

      <div className='mt-4'>
        <h2>Model based on LLAMA-2</h2>
      </div>

      {
        messages.map((message) => {
          if (message.role === 'assistant') {
            return <div key={message.id} className='mt-4'>{message.content}</div>;
          }
        })
      }
    </>
  );
}