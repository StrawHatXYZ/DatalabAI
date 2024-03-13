import React, { Suspense } from 'react'; // Added React import
import Detail from './detail'; // Changed 'detail' to 'Detail' assuming it's a component

function SearchBarFallback() {
  return <>placeholder</>;
}
 
export default function Page() {
  return (
    <>
        <Suspense fallback={<SearchBarFallback />}>
          <Detail /> {/* Changed 'detail' to 'Detail' assuming it's a component */}
        </Suspense>
    </>
  );
}
