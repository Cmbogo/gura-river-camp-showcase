import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Leaf, Users, Award, MapPin } from "lucide-react";

const About = () => {
  const features = [
    {
      icon: <Leaf className="h-8 w-8 text-nature-green" />,
      title: "Eco-Friendly",
      description: "Sustainable camping practices that preserve the natural beauty of the Gura River ecosystem."
    },
    {
      icon: <Users className="h-8 w-8 text-primary" />,
      title: "Expert Guides",
      description: "Professional guides with decades of river and wilderness experience to ensure your safety and enjoyment."
    },
    {
      icon: <Award className="h-8 w-8 text-yellow-500" />,
      title: "Premium Experience",
      description: "High-quality facilities and equipment providing comfort without compromising the authentic outdoor experience."
    },
    {
      icon: <MapPin className="h-8 w-8 text-destructive" />,
      title: "Prime Location",
      description: "Strategically positioned along the most scenic and activity-rich stretch of the Gura River."
    }
  ];

  return (
    <section id="about" className="py-20 bg-gradient-nature">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge variant="secondary" className="mb-4 px-4 py-2 text-sm font-inter">
            About Gura River Camp
          </Badge>
          <h2 className="font-playfair font-bold text-4xl md:text-5xl text-foreground mb-6">
            Where Adventure Meets Tranquility
          </h2>
          <p className="font-inter text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Nestled along the pristine banks of the Gura River, our camp offers an unparalleled outdoor experience 
            that combines thrilling adventure with peaceful moments in nature. Since 2015, we've been creating 
            unforgettable memories for families, adventure seekers, and nature lovers from around the world.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h3 className="font-playfair font-bold text-3xl text-foreground mb-6">
              Your Gateway to River Adventures
            </h3>
            <p className="font-inter text-muted-foreground mb-6 leading-relaxed">
              Our carefully designed camp provides the perfect balance between wilderness immersion and modern comfort. 
              Whether you're seeking adrenaline-pumping water sports or peaceful moments by the campfire, 
              Gura River Camp delivers experiences that reconnect you with nature and create lasting bonds with fellow adventurers.
            </p>
            <p className="font-inter text-muted-foreground leading-relaxed">
              With over 50 acres of pristine riverfront property, state-of-the-art facilities, and a commitment 
              to environmental stewardship, we offer an authentic outdoor experience without sacrificing safety or comfort.
            </p>
          </div>
          <div className="relative">
            <img 
              src="https://images.unsplash.com/photo-1504851149312-7a075b496cc7?q=80&w=2069&auto=format&fit=crop"
              alt="River camping scene"
              className="rounded-lg shadow-soft w-full h-80 object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent rounded-lg"></div>
          </div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <Card key={index} className="border-border shadow-soft hover:shadow-glow transition-all duration-300">
              <CardContent className="p-6 text-center">
                <div className="flex justify-center mb-4">
                  {feature.icon}
                </div>
                <h4 className="font-inter font-semibold text-lg text-foreground mb-3">
                  {feature.title}
                </h4>
                <p className="font-inter text-sm text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;