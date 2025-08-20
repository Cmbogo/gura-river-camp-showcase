import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Leaf, Users, Award, MapPin } from "lucide-react";

const About = () => {
  const features = [
    {
      icon: <Leaf className="h-8 w-8 text-nature-green" />,
      title: "Forest Reserve Setting",
      description: "Located in Kenya Forest Service managed land, outside the national park fence - safe and accessible."
    },
    {
      icon: <Users className="h-8 w-8 text-primary" />,
      title: "Family Friendly",
      description: "Perfect for families with children and dogs welcome. Simple facilities designed for authentic camping."
    },
    {
      icon: <Award className="h-8 w-8 text-yellow-500" />,
      title: "Authentic Experience",
      description: "No power on site for a true off-grid experience. Compost toilets, hot showers, and kitchen banda available."
    },
    {
      icon: <MapPin className="h-8 w-8 text-destructive" />,
      title: "Easy Access",
      description: "2h 45min from Nairobi, mostly tarmac road. No 4WD required to reach the campground."
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
            The Gura River Camp is a family campground on the largest river of the Aberdares, located in the 
            forest reserve managed by Kenya Forest Service, just outside the Aberdares National Park fence. 
            Experience authentic camping with spaces for tents and rooftop tents in a pristine natural setting.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h3 className="font-playfair font-bold text-3xl text-foreground mb-6">
              Your Gateway to River Adventures
            </h3>
            <p className="font-inter text-muted-foreground mb-6 leading-relaxed">
              Our camp features simple but essential facilities including compost toilets, hot showers, and a kitchen banda 
              with sink and picnic tables. Located right on the riverbanks with beautiful views of native forest, 
              it's the perfect base for your Aberdares adventure.
            </p>
            <p className="font-inter text-muted-foreground leading-relaxed">
              Note: We currently don't have power on site, so bring charging devices and lamps. WiFi is available 
              at reception for essential communication. The location is safe with no wild animals to worry about.
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