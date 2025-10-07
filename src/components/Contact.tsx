import { Mail, Linkedin, MapPin, Phone, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useState } from 'react';
import { useToast } from '@/hooks/use-toast';

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Message Sent! 🚀",
        description: "Thanks for reaching out! I'll get back to you soon.",
      });
      setIsSubmitting(false);
    }, 2000);
  };

  const contactInfo = [
    {
      icon: Mail,
      title: 'Email',
      value: 'sanugeorge11@gmail.com',
      href: 'mailto:sanugeorge11@gmail.com'
    },
    {
      icon: Linkedin,
      title: 'LinkedIn',
      value: 'Connect with me',
      href: 'https://www.linkedin.com/in/sanu-george-a424291b7'
    },
    {
      icon: MapPin,
      title: 'Location',
      value: 'Available Remotely',
      href: null
    }
  ];

  return (
    <section id="contact" className="section-padding bg-muted/50">
      <div className="container-custom">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="font-poppins font-bold text-4xl md:text-5xl mb-6">
              Get In <span className="text-gradient">Touch</span>
            </h2>
            <div className="w-24 h-1 bg-accent mx-auto mb-8" />
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Ready to transform your business with AI automation? Let's discuss your project 
              and explore how we can create intelligent solutions together.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h3 className="font-poppins font-semibold text-2xl mb-6">
                  Let's Start a Conversation
                </h3>
                <p className="text-muted-foreground text-lg leading-relaxed mb-8">
                  I'm always excited to discuss new opportunities in AI automation, 
                  prompt engineering, and innovative web solutions. Whether you have 
                  a specific project in mind or just want to explore possibilities, 
                  I'd love to hear from you.
                </p>
              </div>

              {/* Contact Cards */}
              <div className="space-y-4">
                {contactInfo.map((info) => (
                  <Card key={info.title} className="border-border/50 shadow-soft hover:shadow-medium transition-smooth group">
                    <CardContent className="p-6">
                      <div className="flex items-center space-x-4">
                        <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center group-hover:bg-accent/20 transition-smooth">
                          <info.icon size={20} className="text-accent" />
                        </div>
                        <div className="flex-1">
                          <h4 className="font-semibold mb-1">{info.title}</h4>
                          {info.href ? (
                            <a 
                              href={info.href}
                              className="text-muted-foreground hover:text-accent transition-smooth"
                              {...(info.href.startsWith('http') && { target: "_blank", rel: "noopener noreferrer" })}
                            >
                              {info.value}
                            </a>
                          ) : (
                            <span className="text-muted-foreground">{info.value}</span>
                          )}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              {/* Quick Actions */}
              <div className="bg-accent/5 rounded-xl p-6 border border-accent/20">
                <h4 className="font-poppins font-semibold text-lg mb-4 flex items-center">
                  <Phone size={20} className="text-accent mr-2" />
                  Quick Connect
                </h4>
                <p className="text-muted-foreground mb-4">
                  Prefer a direct approach? Reach out through these channels:
                </p>
                <div className="flex flex-col sm:flex-row gap-3">
                  <Button 
                    asChild 
                    className="btn-gold flex-1"
                  >
                    <a href="mailto:sanugeorge11@gmail.com">
                      <Mail size={16} className="mr-2" />
                      Send Email
                    </a>
                  </Button>
                  <Button 
                    asChild 
                    variant="outline" 
                    className="btn-outline flex-1"
                  >
                    <a 
                      href="https://www.linkedin.com/in/sanu-george-a424291b7" 
                      target="_blank" 
                      rel="noopener noreferrer"
                    >
                      <Linkedin size={16} className="mr-2" />
                      LinkedIn
                    </a>
                  </Button>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <Card className="border-border/50 shadow-soft">
              <CardHeader>
                <CardTitle className="font-poppins text-2xl">Send a Message</CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium mb-2">Name</label>
                      <Input 
                        placeholder="Your full name"
                        required
                        className="bg-background border-border/50 focus:border-accent"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">Email</label>
                      <Input 
                        type="email"
                        placeholder="your.email@example.com"
                        required
                        className="bg-background border-border/50 focus:border-accent"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium mb-2">Subject</label>
                    <Input 
                      placeholder="Project inquiry, collaboration, etc."
                      required
                      className="bg-background border-border/50 focus:border-accent"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">Message</label>
                    <Textarea 
                      placeholder="Tell me about your project, goals, or how I can help..."
                      rows={6}
                      required
                      className="bg-background border-border/50 focus:border-accent resize-none"
                    />
                  </div>

                  <Button 
                    type="submit" 
                    className="btn-gold w-full group"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <>
                        <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-current mr-2" />
                        Sending...
                      </>
                    ) : (
                      <>
                        Send Message
                        <Send size={16} className="ml-2 group-hover:translate-x-1 transition-smooth" />
                      </>
                    )}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;