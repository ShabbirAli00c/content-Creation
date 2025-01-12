import { useLocation } from 'react-router-dom';
import { Skeleton } from "@/components/ui/skeleton";
import { useState } from 'react';

const CmsPage = () => {
  const location = useLocation();
  const { feature } = location.state || {};
  const [imageLoaded, setImageLoaded] = useState(false);

  console.log("CMS Page rendered with feature:", feature);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="space-y-8">
        <h1 className="text-4xl font-bold">{feature?.title}</h1>
        <div className="relative h-[400px] rounded-lg overflow-hidden">
          {!imageLoaded && (
            <Skeleton className="absolute inset-0 bg-gray-200" />
          )}
          <img 
            src={feature?.src}
            alt={feature?.alt}
            className={`object-cover w-full h-full transition-opacity duration-300 ${
              imageLoaded ? 'opacity-100' : 'opacity-0'
            }`}
            onLoad={() => setImageLoaded(true)}
          />
        </div>
        <p className="text-xl text-gray-600">{feature?.description}</p>
      </div>
    </div>
  );
};

export default CmsPage;