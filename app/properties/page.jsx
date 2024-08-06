import PropertyCard from '@/components/PropertyCard';

import { properties } from '@/properties';

const PropertiesPage = async () => {
  
  const arrangeProperties = properties.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))

  return (
    <>
      <section className="px-4 py-6">
          <div className="container-xl lg:container m-auto px-4 py-6">
            {arrangeProperties.length === 0 
              ? (<p>No Properties Found</p>) 
              : (
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {arrangeProperties.map((property) => (
                  <div>
                    <PropertyCard key={property._id} property={property}/>
                  </div>
              ))}
                </div>
              )}
            
          </div>
      </section> 
    </>
  );
};
export default PropertiesPage;
