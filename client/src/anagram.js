import React from 'react';
import Anagram from 'react-anagram-animation';

export default function MyComponent() {
    return (
        <div className='anagram'>
         <Anagram
        words={["bad credit", "debit card"]}
        fontToObserve={{ family: "Open Sans" }}
      />


      <Anagram
        fontToObserve={{ family: "Open Sans" }}
        animationOptions={{
          waitToStart: 5000,
          randomStartMin: 0,
          randomStartMax: 0,
          randomReverseMin: 6000,
          randomReverseMax: 6000,
          loopAnimation: 20000
        }}
      />
</div>
    );
}