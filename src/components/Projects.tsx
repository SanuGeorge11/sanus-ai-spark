import { ExternalLink, Github } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import project1 from '@/assets/project1.jpg';
import project2 from '@/assets/project2.jpg';
import project3 from '@/assets/project3.jpg';

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: 'AI-Powered Product Upload Automation',
      description: 'Streamlined product uploads and descriptions using AI, reducing manual effort for an online boutique by 80%. Implemented intelligent categorization and SEO-optimized content generation.',
      image: project1,
      tags: ['AI Automation', 'Product Management', 'Workflow Optimization'],
      features: [
        'Automated product categorization',
        'AI-generated descriptions',
        'Bulk upload processing',
        'SEO optimization'
      ]
    },
    {
      id: 2,
      title: 'HighendHub Luxury Marketplace',
      description: 'Developed a responsive luxury marketplace concept using HTML, CSS, and Bootstrap, inspired by JamesEdition. Features elegant design patterns and premium user experience.',
      image: project2,
      tags: ['Web Development', 'Responsive Design', 'UI/UX'],
      features: [
        'Responsive luxury design',
        'Advanced filtering system',
        'Premium product showcase',
        'Mobile-first approach'
      ]
    },
    {
      id: 3,
      title: 'Interactive Kids Content Platform',
      description: 'Created engaging cartoon content for children (ages 3–6) using AI-assisted storytelling and animation tools. Platform generates personalized stories and characters.',
      image: project3,
      tags: ['AI Content', 'Storytelling', 'Animation'],
      features: [
        'AI-generated stories',
        'Character customization',
        'Interactive elements',
        'Age-appropriate content'
      ]
    }
  ];

  return (
    <section id="projects" className="section-padding section-projects-bg">
      <div className="container-custom">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 scroll-reveal">
            <h2 className="font-poppins font-bold text-4xl md:text-5xl mb-6">
              Featured <span className="text-gradient">Projects</span>
            </h2>
            <div className="w-24 h-1 bg-accent mx-auto mb-8" />
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Discover my latest work showcasing AI automation, web development, and innovative solutions 
              that bridge technology with real-world business needs.
            </p>
          </div>

          {/* Projects Grid */}
          <div className="space-y-12">
            {projects.map((project, index) => (
              <Card key={project.id} className={`group overflow-hidden border-4 border-purple/30 bg-white/95 shadow-xl hover:shadow-purple hover:scale-105 hover:-rotate-1 transition-all duration-500 scroll-reveal scroll-reveal-delay-${index + 1} rounded-3xl`}>
                <div className={`grid lg:grid-cols-2 gap-0 ${index % 2 === 1 ? 'lg:grid-cols-2' : ''}`}>
                  {/* Project Image */}
                  <div className={`relative overflow-hidden ${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                    <img 
                      src={project.image} 
                      alt={project.title}
                      className="w-full h-64 lg:h-full object-cover group-hover:scale-105 transition-smooth duration-500"
                    />
                  </div>

                  {/* Project Content */}
                  <CardContent className={`p-8 lg:p-12 flex flex-col justify-center ${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                    <CardHeader className="p-0 mb-6">
                      <h3 className="font-poppins font-bold text-2xl lg:text-3xl mb-4 group-hover:text-accent transition-smooth">
                        {project.title}
                      </h3>
                      <p className="text-muted-foreground leading-relaxed text-lg">
                        {project.description}
                      </p>
                    </CardHeader>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.tags.map((tag) => (
                        <span 
                          key={tag}
                          className="bg-muted text-muted-foreground px-3 py-1 rounded-full text-sm font-medium border border-border/50"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* Features */}
                    <div className="mb-8">
                      <h4 className="font-semibold mb-3 text-foreground">Key Features:</h4>
                      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                        {project.features.map((feature) => (
                          <li key={feature} className="flex items-center text-sm text-muted-foreground">
                            <div className="w-1.5 h-1.5 bg-accent rounded-full mr-3 flex-shrink-0" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex flex-col sm:flex-row gap-3">
                      <Button className="btn-gold group flex-1 sm:flex-initial">
                        View Details
                        <ExternalLink size={16} className="ml-2 group-hover:translate-x-1 transition-smooth" />
                      </Button>
                      <Button variant="outline" className="btn-outline flex-1 sm:flex-initial">
                        <Github size={16} className="mr-2" />
                        Code
                      </Button>
                    </div>
                  </CardContent>
                </div>
              </Card>
            ))}
          </div>

          {/* Call to Action */}
          <div className="text-center mt-16">
            <p className="text-xl text-muted-foreground mb-8">
              Interested in working together on your next AI project?
            </p>
            <Button 
              onClick={() => {
                const element = document.getElementById('contact');
                element?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="btn-gold"
              size="lg"
            >
              Let's Collaborate
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;