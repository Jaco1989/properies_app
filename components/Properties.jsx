'use client';
import { useState, useEffect } from 'react';
import Spinner from '@/components/Spinner';


const Properties = () => {
  const [properties, setProperties] = useState([]);
  const [loading, setLoading] = useState(false);

  

  return loading ? (
    <Spinner />
  ) : (
    <section className='px-4 py-6'>
      <div className='container-xl lg:container m-auto px-4 py-6'>
        {properties.length === 0 ? (
          <p>No properties found</p>
        ) : (
          <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
            {properties.map((property) => (
              <></>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};
export default Properties;