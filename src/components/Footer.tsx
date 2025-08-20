import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { 
  MapPin, 
  Phone, 
  Mail, 
  Facebook, 
  Instagram, 
  Youtube,
  Heart
} from "lucide-react";

const Footer = () => {
  const footerLinks = {
    "Quick Links": [
      { name: "Home", href: "#home" },
      { name: "About", href: "#about" },
      { name: "Activities", href: "#activities" },
      { name: "Gallery", href: "#gallery" },
      { name: "Contact", href: "#contact" }
    ],
    "Activities": [
      { name: "White Water Rafting", href: "#activities" },
      { name: "Guided Fishing", href: "#activities" },
      { name: "Nature Hiking", href: "#activities" },
      { name: "Premium Camping", href: "#activities" },
      { name: "Photography Tours", href: "#activities" }
    ],
    "Information": [
      { name: "Booking Policy", href: "#" },
      { name: "Safety Guidelines", href: "#" },
      { name: "What to Bring", href: "#" },
      { name: "Weather Info", href: "#" },
      { name: "Accessibility", href: "#" }
    ]
  };

  const socialLinks = [
    { icon: <Facebook className="h-5 w-5" />, href: "#", name: "Facebook" },
    { icon: <Instagram className="h-5 w-5" />, href: "#", name: "Instagram" },
    { icon: <Youtube className="h-5 w-5" />, href: "#", name: "YouTube" }
  ];

  return (
    <footer className="bg-card border-t border-border">
      <div className="container mx-auto px-4 py-12">
        {/* Main Footer Content */}
        <div className="grid lg:grid-cols-4 gap-8 mb-8">
          {/* Brand Section */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-2 mb-4">
              <img 
                src="/lovable-uploads/21c76598-2d7e-4688-bb94-40ee6b7776e4.png" 
                alt="Gura River Camp" 
                className="h-10 w-10"
              />
              <span className="font-playfair font-bold text-xl text-foreground">
                Gura River Camp
              </span>
            </div>
            <p className="font-inter text-muted-foreground mb-6 leading-relaxed">
              Your gateway to unforgettable river adventures. Experience the perfect blend of 
              thrilling activities and peaceful nature in pristine wilderness settings.
            </p>
            
            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center space-x-3 text-sm">
                <MapPin className="h-4 w-4 text-primary flex-shrink-0" />
                <span className="font-inter text-muted-foreground">Gura River Valley, Mountain Region</span>
              </div>
              <div className="flex items-center space-x-3 text-sm">
                <Phone className="h-4 w-4 text-primary flex-shrink-0" />
                <span className="font-inter text-muted-foreground">+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-3 text-sm">
                <Mail className="h-4 w-4 text-primary flex-shrink-0" />
                <span className="font-inter text-muted-foreground">info@gurarivercamp.com</span>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex space-x-4 mt-6">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className="text-muted-foreground hover:text-primary transition-colors duration-200"
                  aria-label={social.name}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Footer Links */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4 className="font-playfair font-semibold text-foreground mb-4">
                {category}
              </h4>
              <ul className="space-y-2">
                {links.map((link, index) => (
                  <li key={index}>
                    <a
                      href={link.href}
                      className="font-inter text-sm text-muted-foreground hover:text-primary transition-colors duration-200"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <Separator className="my-8" />

        {/* Bottom Footer */}
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-4">
            <p className="font-inter text-sm text-muted-foreground">
              © 2024 Gura River Camp. All rights reserved.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="font-inter text-xs text-muted-foreground hover:text-primary transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="font-inter text-xs text-muted-foreground hover:text-primary transition-colors">
                Terms of Service
              </a>
              <a href="#" className="font-inter text-xs text-muted-foreground hover:text-primary transition-colors">
                Cookie Policy
              </a>
            </div>
          </div>

          <div className="flex items-center space-x-2">
            <span className="font-inter text-sm text-muted-foreground">Made with</span>
            <Heart className="h-4 w-4 text-destructive fill-current" />
            <span className="font-inter text-sm text-muted-foreground">for nature lovers</span>
          </div>
        </div>

        {/* Certifications/Badges */}
        <div className="flex justify-center mt-8 space-x-4">
          <Badge variant="outline" className="text-xs font-inter">
            Eco-Certified
          </Badge>
          <Badge variant="outline" className="text-xs font-inter">
            Safety Approved
          </Badge>
          <Badge variant="outline" className="text-xs font-inter">
            Local Business
          </Badge>
        </div>
      </div>
    </footer>
  );
};

export default Footer;