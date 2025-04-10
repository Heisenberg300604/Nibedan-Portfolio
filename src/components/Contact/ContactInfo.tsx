import { Mail, MapPin, Phone, Github, Linkedin, Calendar } from 'lucide-react';

const ContactInfo = () => {
  return (
    <div className="space-y-8">
      <div className="space-y-6">
        <h3 className="text-xl font-semibold text-foreground">Contact Information</h3>
        
        <div className="space-y-4">
          <div className="flex items-start">
            <Mail className="h-5 w-5 text-primary mr-3 mt-0.5" />
            <div>
              <h4 className="text-sm font-medium text-foreground">Email</h4>
              <a 
                href="mailto:nibedanpati@gmail.com" 
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                nibedanpati@gmail.com
              </a>
            </div>
          </div>
          
          <div className="flex items-start">
            <MapPin className="h-5 w-5 text-primary mr-3 mt-0.5" />
            <div>
              <h4 className="text-sm font-medium text-foreground">Location</h4>
              <p className="text-muted-foreground">
                Ghaziabad, Uttar Pradesh 201005
              </p>
            </div>
          </div>
          
          <div className="flex items-start">
            <Calendar className="h-5 w-5 text-primary mr-3 mt-0.5" />
            <div>
              <h4 className="text-sm font-medium text-foreground">Working Hours</h4>
              <p className="text-muted-foreground">
                Monday - Friday, 10:00 AM - 6:00 PM
              </p>
            </div>
          </div>
        </div>
      </div>
      
      <div className="space-y-6">
        <h3 className="text-xl font-semibold text-foreground">Connect with me</h3>
        
        <div className="space-y-4">
          <div className="flex items-center">
            <Github className="h-5 w-5 text-primary mr-3" />
            <a 
              href="https://github.com/Heisenberg300604/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              github.com/Heisenberg300604
            </a>
          </div>
          
          <div className="flex items-center">
            <Linkedin className="h-5 w-5 text-primary mr-3" />
            <a 
              href="https://www.linkedin.com/in/nibedan-pati-2139b3277" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              linkedin.com/in/nibedanpati
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactInfo;
