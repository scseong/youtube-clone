import React from 'react';

export default function App() {
  console.log(fetch('popular').then(res => res.json()).then(console.log));
  console.log(fetch('related').then(res => res.json()).then(console.log));
  return <div>Youtube</div>;
}
