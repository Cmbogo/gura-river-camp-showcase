import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";

const Gallery = () => {
  const galleryImages = [
    {
      src: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?q=80&w=2070&auto=format&fit=crop",
      alt: "Scenic river view",
      category: "Scenery"
    },
    {
      src: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?q=80&w=2070&auto=format&fit=crop",
      alt: "White water rafting adventure",
      category: "Adventures"
    },
    {
      src: "https://images.unsplash.com/photo-1487730116645-74489c95b41b?q=80&w=2070&auto=format&fit=crop",
      alt: "Camping under the stars",
      category: "Camping"
    },
    {
      src: "https://images.unsplash.com/photo-1445112098124-3e76dd67983c?q=80&w=2069&auto=format&fit=crop",
      alt: "Peaceful fishing spot",
      category: "Activities"
    },
    {
      src: "https://images.unsplash.com/photo-1471115853179-bb1d604434e0?q=80&w=2059&auto=format&fit=crop",
      alt: "Evening campfire",
      category: "Experiences"
    },
    {
      src: "https://images.unsplash.com/photo-1551632811-561732d1e306?q=80&w=2070&auto=format&fit=crop",
      alt: "Forest hiking trail",
      category: "Adventures"
    },
    {
      src: "https://images.unsplash.com/photo-1504851149312-7a075b496cc7?q=80&w=2069&auto=format&fit=crop",
      alt: "River camping setup",
      category: "Camping"
    },
    {
      src: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?q=80&w=2071&auto=format&fit=crop",
      alt: "Mountain wilderness",
      category: "Scenery"
    }
  ];

  return (
    <section id="gallery" className="py-20 bg-gradient-nature">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge variant="secondary" className="mb-4 px-4 py-2 text-sm font-inter">
            Photo Gallery
          </Badge>
          <h2 className="font-playfair font-bold text-4xl md:text-5xl text-foreground mb-6">
            Moments Worth Capturing
          </h2>
          <p className="font-inter text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Experience the beauty and excitement of Gura River Camp through the eyes of our guests. 
            Every moment is a photo opportunity in this pristine natural paradise.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {galleryImages.map((image, index) => (
            <Card 
              key={index} 
              className={`relative overflow-hidden border-border shadow-soft hover:shadow-glow transition-all duration-300 group cursor-pointer
                ${index === 0 ? 'md:col-span-2 md:row-span-2' : ''}
                ${index === 3 ? 'lg:col-span-2' : ''}
              `}
            >
              <div className="relative overflow-hidden">
                <img 
                  src={image.src}
                  alt={image.alt}
                  className={`w-full object-cover group-hover:scale-105 transition-transform duration-300
                    ${index === 0 ? 'h-80 md:h-96' : 'h-60'}
                    ${index === 3 ? 'h-60' : ''}
                  `}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute bottom-4 left-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <Badge variant="secondary" className="text-xs font-inter">
                    {image.category}
                  </Badge>
                  <p className="text-white font-inter font-medium mt-1 text-sm">
                    {image.alt}
                  </p>
                </div>
              </div>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="font-inter text-muted-foreground mb-4">
            Want to see more? Follow us on social media for daily updates!
          </p>
          <div className="flex justify-center space-x-4">
            <Badge variant="outline" className="px-4 py-2 cursor-pointer hover:bg-primary hover:text-primary-foreground transition-colors">
              Instagram
            </Badge>
            <Badge variant="outline" className="px-4 py-2 cursor-pointer hover:bg-primary hover:text-primary-foreground transition-colors">
              Facebook
            </Badge>
            <Badge variant="outline" className="px-4 py-2 cursor-pointer hover:bg-primary hover:text-primary-foreground transition-colors">
              YouTube
            </Badge>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Gallery;