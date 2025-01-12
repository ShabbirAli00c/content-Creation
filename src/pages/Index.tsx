import { useState } from "react";
import { Skeleton } from "@/components/ui/skeleton";
import { useToast } from "@/components/ui/use-toast";
import { useNavigate } from "react-router-dom";

const Index = () => {
  const [loadedImages, setLoadedImages] = useState<Record<string, boolean>>({});
  const { toast } = useToast();
  const navigate = useNavigate();

  console.log("Index page rendered", loadedImages);

  const handleImageLoad = (imageId: string) => {
    setLoadedImages(prev => ({ ...prev, [imageId]: true }));
    console.log(`Image loaded: ${imageId}`);
  };

  const handleImageClick = (feature: any) => {
    toast({
      title: "Feature Selected",
      description: `Navigating to: ${feature.title}`,
      duration: 3000,
    });
    navigate(`/cms/${feature.id}`, { state: { feature } });
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Hero Section */}
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold mb-4">Welcome to Your App</h1>
        <p className="text-xl text-gray-600 mb-8">Start building something amazing!</p>
        <div className="relative h-[400px] rounded-lg overflow-hidden mb-12">
          {!loadedImages['hero'] && (
            <Skeleton className="absolute inset-0 bg-gray-200" />
          )}
          <img 
            src="https://images.unsplash.com/photo-1519389950473-47ba0277781c"
            alt="People collaborating"
            className={`object-cover w-full h-full transition-opacity duration-300 ${
              loadedImages['hero'] ? 'opacity-100' : 'opacity-0'
            }`}
            onLoad={() => handleImageLoad('hero')}
          />
        </div>
      </div>

      {/* Features Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
        {[
          {
            id: 'feature1',
            src: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d",
            alt: "Person using MacBook",
            title: "Powerful Features",
            description: "Build amazing applications with our powerful tools and features."
          },
          {
            id: 'feature2',
            src: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b",
            alt: "Laptop computer",
            title: "Modern Technology",
            description: "Stay ahead with cutting-edge technology and best practices."
          },
          {
            id: 'feature3',
            src: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7",
            alt: "Code on screen",
            title: "Clean Code",
            description: "Write maintainable and scalable code with our structured approach."
          }
        ].map((feature) => (
          <div key={feature.id} className="space-y-4">
            <div 
              className="relative h-[250px] rounded-lg overflow-hidden cursor-pointer transform transition-transform hover:scale-105"
              onClick={() => handleImageClick(feature)}
            >
              {!loadedImages[feature.id] && (
                <Skeleton className="absolute inset-0 bg-gray-200" />
              )}
              <img 
                src={feature.src}
                alt={feature.alt}
                className={`object-cover w-full h-full transition-opacity duration-300 ${
                  loadedImages[feature.id] ? 'opacity-100' : 'opacity-0'
                }`}
                onLoad={() => handleImageLoad(feature.id)}
              />
            </div>
            <h3 className="text-xl font-semibold">{feature.title}</h3>
            <p className="text-gray-600">{feature.description}</p>
          </div>
        ))}
      </div>

      {/* CTA Section */}
      <div className="text-center">
        <div className="relative h-[300px] rounded-lg overflow-hidden mb-8">
          {!loadedImages['cta'] && (
            <Skeleton className="absolute inset-0 bg-gray-200" />
          )}
          <img 
            src="https://images.unsplash.com/photo-1649972904349-6e44c42644a7"
            alt="Woman using laptop"
            className={`object-cover w-full h-full transition-opacity duration-300 ${
              loadedImages['cta'] ? 'opacity-100' : 'opacity-0'
            }`}
            onLoad={() => handleImageLoad('cta')}
          />
          <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
            <div className="text-white">
              <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
              <p className="text-xl mb-6">Join us today and transform your ideas into reality.</p>
              <button className="bg-white text-gray-900 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                Get Started
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;