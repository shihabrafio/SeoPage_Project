import React from 'react';
import { Card } from './card';

export const Complete = () => {
  return (
    <div>
        <div className='flex'>
            <h1 className='title'>Complete</h1>
            <p className='number'>0</p>
        </div>
        <div className='scroll'>
        <div>
            {[...Array(12)].map((_, index) => (
            <Card key={index} />
            ))}
        </div>
        </div>
    </div>
  );
};
