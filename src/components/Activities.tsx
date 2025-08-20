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
      icon: <Mountain className="h-8 w-8 text-nature-green" />,
      title: "Forest Hiking",
      description: "Explore many trails in the area with or without a guide. Dogs welcome on all trails.",
      duration: "1-8 hours",
      groupSize: "Any size",
      difficulty: "Easy to Moderate",
      image: "https://images.unsplash.com/photo-1551632811-561732d1e306?q=80&w=2070&auto=format&fit=crop"
    },
    {
      icon: <Waves className="h-8 w-8 text-sky-blue" />,
      title: "River Swimming",
      description: "Take a refreshing dip in the crystal-clear waters of the Gura River right at your campsite.",
      duration: "Flexible",
      groupSize: "Any size",
      difficulty: "Easy",
      image: "/lovable-uploads/b9f47fb3-8b0a-45ea-9cb9-fdb759df6d3b.png"
    },
    {
      icon: <Fish className="h-8 w-8 text-primary" />,
      title: "Trout Fishing",
      description: "Fish for trout in the national park area (4km hike with ranger required). Bring your own gear.",
      duration: "Full day",
      groupSize: "Small groups",
      difficulty: "Moderate",
      image: "https://images.unsplash.com/photo-1445112098124-3e76dd67983c?q=80&w=2069&auto=format&fit=crop"
    },
    {
      icon: <Tent className="h-8 w-8 text-earth-brown" />,
      title: "Camping",
      description: "Simple facilities with compost toilets, hot showers, and kitchen banda. Bring your own gear.",
      duration: "Overnight",
      groupSize: "Families welcome",
      difficulty: "Easy",
      image: "/lovable-uploads/0cfdbe90-ee34-4928-86b1-44c68a2e7a2d.png"
    },
    {
      icon: <Flame className="h-8 w-8 text-destructive" />,
      title: "BBQ & Relaxation",
      description: "Enjoy barbecuing by the river or simply relax with a good book in peaceful forest setting.",
      duration: "Flexible",
      groupSize: "Any size",
      difficulty: "Easy",
      image: "/lovable-uploads/03c1249b-9884-4d31-816e-28002dda1955.png"
    },
    {
      icon: <Mountain className="h-8 w-8 text-nature-green" />,
      title: "National Park Hiking",
      description: "Hike into Aberdares National Park with a ranger guide for wildlife viewing and extended trails.",
      duration: "4-8 hours",
      groupSize: "With ranger",
      difficulty: "Moderate to Advanced",
      image: "/lovable-uploads/cc80ab63-09ca-487a-9ef9-f3319b5b5a9d.png"
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
            From peaceful river swimming to challenging national park hikes, enjoy authentic outdoor activities 
            in the pristine Aberdares forest reserve setting with no wild animals to worry about.
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