import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  Waves, 
  Fish, 
  Mountain, 
  Tent, 
  Camera, 
  Flame,
  Clock,
  Users
} from "lucide-react";

const Activities = () => {
  const activities = [
    {
      icon: <Waves className="h-8 w-8 text-sky-blue" />,
      title: "White Water Rafting",
      description: "Navigate thrilling rapids with our expert guides on the Gura River's most exciting stretches.",
      duration: "3-4 hours",
      groupSize: "4-8 people",
      difficulty: "Intermediate",
      image: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?q=80&w=2070&auto=format&fit=crop"
    },
    {
      icon: <Fish className="h-8 w-8 text-primary" />,
      title: "Guided Fishing",
      description: "Cast your line in pristine pools teeming with trout and other native fish species.",
      duration: "2-6 hours",
      groupSize: "1-4 people",
      difficulty: "All levels",
      image: "https://images.unsplash.com/photo-1445112098124-3e76dd67983c?q=80&w=2069&auto=format&fit=crop"
    },
    {
      icon: <Mountain className="h-8 w-8 text-nature-green" />,
      title: "Nature Hiking",
      description: "Explore scenic trails through old-growth forests and discover hidden waterfalls.",
      duration: "2-5 hours",
      groupSize: "2-12 people",
      difficulty: "Easy to Hard",
      image: "https://images.unsplash.com/photo-1551632811-561732d1e306?q=80&w=2070&auto=format&fit=crop"
    },
    {
      icon: <Tent className="h-8 w-8 text-earth-brown" />,
      title: "Premium Camping",
      description: "Comfortable tents with quality amenities in beautiful riverside locations.",
      duration: "Overnight",
      groupSize: "2-6 people",
      difficulty: "Easy",
      image: "https://images.unsplash.com/photo-1487730116645-74489c95b41b?q=80&w=2070&auto=format&fit=crop"
    },
    {
      icon: <Camera className="h-8 w-8 text-accent-foreground" />,
      title: "Photography Tours",
      description: "Capture stunning landscapes and wildlife with guidance from professional photographers.",
      duration: "3-4 hours",
      groupSize: "4-8 people",
      difficulty: "All levels",
      image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?q=80&w=2070&auto=format&fit=crop"
    },
    {
      icon: <Flame className="h-8 w-8 text-destructive" />,
      title: "Campfire Experiences",
      description: "Evening gatherings with storytelling, s'mores, and stargazing by the river.",
      duration: "2-3 hours",
      groupSize: "8-20 people",
      difficulty: "Easy",
      image: "https://images.unsplash.com/photo-1471115853179-bb1d604434e0?q=80&w=2059&auto=format&fit=crop"
    }
  ];

  return (
    <section id="activities" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge variant="secondary" className="mb-4 px-4 py-2 text-sm font-inter">
            Activities & Adventures
          </Badge>
          <h2 className="font-playfair font-bold text-4xl md:text-5xl text-foreground mb-6">
            Endless Adventures Await
          </h2>
          <p className="font-inter text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            From heart-pounding rapids to peaceful fishing spots, discover a world of outdoor activities 
            designed to create unforgettable memories for adventurers of all skill levels.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {activities.map((activity, index) => (
            <Card key={index} className="border-border shadow-soft hover:shadow-glow transition-all duration-300 overflow-hidden group">
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={activity.image}
                  alt={activity.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                <div className="absolute top-4 left-4 bg-white/90 p-2 rounded-lg">
                  {activity.icon}
                </div>
              </div>
              
              <CardHeader className="pb-3">
                <CardTitle className="font-playfair text-xl text-foreground">
                  {activity.title}
                </CardTitle>
              </CardHeader>
              
              <CardContent className="pt-0">
                <p className="font-inter text-muted-foreground mb-4 leading-relaxed">
                  {activity.description}
                </p>
                
                <div className="space-y-2 mb-6">
                  <div className="flex items-center text-sm text-muted-foreground">
                    <Clock className="h-4 w-4 mr-2 text-primary" />
                    <span className="font-inter">{activity.duration}</span>
                  </div>
                  <div className="flex items-center text-sm text-muted-foreground">
                    <Users className="h-4 w-4 mr-2 text-primary" />
                    <span className="font-inter">{activity.groupSize}</span>
                  </div>
                  <div className="flex items-center text-sm">
                    <Badge variant="secondary" className="text-xs">
                      {activity.difficulty}
                    </Badge>
                  </div>
                </div>
                
                <Button className="w-full bg-gradient-hero hover:opacity-90 font-inter">
                  Learn More
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Activities;