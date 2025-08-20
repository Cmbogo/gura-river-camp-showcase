import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock,
  Calendar,
  DollarSign
} from "lucide-react";

const Contact = () => {
  const contactInfo = [
    {
      icon: <MapPin className="h-6 w-6 text-primary" />,
      title: "Location",
      details: ["Aberdares Forest Reserve", "2h 45min from Nairobi", "Gituiga area"]
    },
    {
      icon: <Phone className="h-6 w-6 text-primary" />,
      title: "Camp Manager",
      details: ["Washingtone: +254 788 335 068", "WhatsApp preferred", "Responds within 1-2 hours"]
    },
    {
      icon: <DollarSign className="h-6 w-6 text-primary" />,
      title: "Payment",
      details: ["Mpesa Paybill: 220333", "Account: 20696", "Credit card accepted"]
    },
    {
      icon: <Clock className="h-6 w-6 text-primary" />,
      title: "Important Notes",
      details: ["Limited mobile signal at camp", "Load directions before arrival", "Bring charging devices & lamps"]
    }
  ];

  const bookingInfo = [
    {
      icon: <Calendar className="h-6 w-6 text-nature-green" />,
      title: "Overnight Rates",
      description: "3,000 KES per adult per night • 1,500 KES per child (>3 years) • Dogs free"
    },
    {
      icon: <DollarSign className="h-6 w-6 text-nature-green" />,
      title: "Day Visit Rates",
      description: "1,000 KES per adult • 500 KES per child (≥4 years) • No cash - digital payments only"
    }
  ];

  return (
    <section id="contact" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge variant="secondary" className="mb-4 px-4 py-2 text-sm font-inter">
            Contact & Booking
          </Badge>
          <h2 className="font-playfair font-bold text-4xl md:text-5xl text-foreground mb-6">
            Plan Your Adventure
          </h2>
          <p className="font-inter text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Ready to experience the magic of Gura River Camp? Get in touch with our friendly team 
            to plan your perfect outdoor adventure. We're here to help make your trip unforgettable.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-12">
          {/* Contact Information */}
          <div className="lg:col-span-1 space-y-6">
            <h3 className="font-playfair font-bold text-2xl text-foreground mb-6">
              Get in Touch
            </h3>
            
            {contactInfo.map((info, index) => (
              <Card key={index} className="border-border shadow-soft">
                <CardContent className="p-4">
                  <div className="flex items-start space-x-3">
                    {info.icon}
                    <div>
                      <h4 className="font-inter font-semibold text-foreground mb-2">
                        {info.title}
                      </h4>
                      {info.details.map((detail, i) => (
                        <p key={i} className="font-inter text-sm text-muted-foreground">
                          {detail}
                        </p>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}

            {/* Booking Information */}
            <div className="space-y-4 mt-8">
              <h4 className="font-playfair font-bold text-xl text-foreground">
                Booking Information
              </h4>
              {bookingInfo.map((info, index) => (
                <div key={index} className="flex items-start space-x-3">
                  {info.icon}
                  <div>
                    <h5 className="font-inter font-semibold text-foreground">
                      {info.title}
                    </h5>
                    <p className="font-inter text-sm text-muted-foreground">
                      {info.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <Card className="border-border shadow-soft">
              <CardHeader>
                <CardTitle className="font-playfair text-2xl text-foreground">
                  Send us a Message
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="font-inter text-sm font-medium text-foreground mb-2 block">
                      First Name
                    </label>
                    <Input placeholder="John" className="font-inter" />
                  </div>
                  <div>
                    <label className="font-inter text-sm font-medium text-foreground mb-2 block">
                      Last Name
                    </label>
                    <Input placeholder="Doe" className="font-inter" />
                  </div>
                </div>
                
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="font-inter text-sm font-medium text-foreground mb-2 block">
                      Email
                    </label>
                    <Input type="email" placeholder="john@example.com" className="font-inter" />
                  </div>
                  <div>
                    <label className="font-inter text-sm font-medium text-foreground mb-2 block">
                      Phone
                    </label>
                    <Input placeholder="+1 (555) 123-4567" className="font-inter" />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="font-inter text-sm font-medium text-foreground mb-2 block">
                      Preferred Dates
                    </label>
                    <Input type="date" className="font-inter" />
                  </div>
                  <div>
                    <label className="font-inter text-sm font-medium text-foreground mb-2 block">
                      Group Size
                    </label>
                    <Input placeholder="4 people" className="font-inter" />
                  </div>
                </div>

                <div>
                  <label className="font-inter text-sm font-medium text-foreground mb-2 block">
                    Message
                  </label>
                  <Textarea 
                    placeholder="Tell us about your adventure plans, special requirements, or any questions you have..."
                    className="font-inter min-h-[120px]"
                  />
                </div>

                <Button size="lg" className="w-full bg-gradient-hero font-inter font-semibold">
                  Send Message & Request Booking
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center bg-gradient-hero rounded-lg p-8 text-white">
          <h3 className="font-playfair font-bold text-3xl mb-4">
            Ready for Your Adventure?
          </h3>
          <p className="font-inter text-lg mb-6 text-white/90">
            Don't wait - our peak season fills up quickly! Contact us today to secure your spot 
            at Gura River Camp and create memories that will last a lifetime.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-primary font-inter font-semibold"
            >
              Call: +254 788 335 068
            </Button>
            <Button 
              size="lg"
              className="bg-white text-primary hover:bg-white/90 font-inter font-semibold"
            >
              WhatsApp Booking
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;