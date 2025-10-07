import { Brain, Code, Zap, Target } from 'lucide-react';

const About = () => {
  const skills = [
    {
      icon: Brain,
      title: 'AI & Automation',
      description: 'Specialized in creating intelligent workflows that automate repetitive tasks and enhance business efficiency.'
    },
    {
      icon: Code,
      title: 'Web Development',
      description: 'Strong foundation in modern web technologies with a focus on responsive, user-friendly applications.'
    },
    {
      icon: Zap,
      title: 'Prompt Engineering',
      description: 'Expert in crafting effective prompts and implementing AI solutions for various business needs.'
    },
    {
      icon: Target,
      title: 'Business Innovation',
      description: 'Bridging the gap between technology and real-world business requirements through practical solutions.'
    }
  ];

  return (
    <section id="about" className="section-padding section-gradient-bg">
      <div className="container-custom">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="font-poppins font-bold text-4xl md:text-5xl mb-6">
              About <span className="text-gradient">Me</span>
            </h2>
            <div className="w-24 h-1 bg-accent mx-auto mb-8" />
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Content */}
            <div className="space-y-6">
              <p className="text-lg text-muted-foreground leading-relaxed">
                I'm an aspiring <strong className="text-foreground">AI Automation & Prompt Engineering specialist</strong> with a 
                foundation in web development and a growing interest in business innovation.
              </p>
              
              <p className="text-lg text-muted-foreground leading-relaxed">
                Currently, I manage online product catalogs and explore ways to use AI to automate 
                repetitive tasks, making businesses more efficient. My goal is to bridge technology 
                and real-world business needs by creating smart, reliable workflows.
              </p>

              <p className="text-lg text-muted-foreground leading-relaxed">
                I believe in the power of <strong className="text-accent">intelligent automation</strong> to 
                transform how businesses operate, and I'm passionate about crafting solutions that are 
                both innovative and practical.
              </p>

              {/* Key Stats */}
              <div className="grid grid-cols-2 gap-6 pt-8">
                <div className="text-center">
                  <div className="text-3xl font-bold text-accent mb-2">3+</div>
                  <div className="text-sm text-muted-foreground">AI Projects</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-accent mb-2">100%</div>
                  <div className="text-sm text-muted-foreground">Client Satisfaction</div>
                </div>
              </div>
            </div>

            {/* Skills Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {skills.map((skill, index) => (
                <div 
                  key={skill.title}
                  className="bg-card p-6 rounded-xl shadow-soft hover:shadow-medium transition-smooth group border border-border/50"
                >
                  <div className="flex items-center space-x-4 mb-4">
                    <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center group-hover:bg-accent/20 transition-smooth">
                      <skill.icon size={24} className="text-accent" />
                    </div>
                    <h3 className="font-poppins font-semibold text-lg">{skill.title}</h3>
                  </div>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {skill.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;