const Projects = () => {
  const projects = [
    {
      title: "E-Commerce Platform",
      description: "Full-stack e-commerce solution with payment integration and real-time inventory management.",
      tags: ["React", "Node.js", "Stripe", "MongoDB"],
      gradient: "from-primary to-primary/50"
    },
    {
      title: "AI Dashboard",
      description: "Analytics dashboard with AI-powered insights and data visualization.",
      tags: ["Next.js", "Python", "TensorFlow", "D3.js"],
      gradient: "from-secondary to-secondary/50"
    },
    {
      title: "Social Media App",
      description: "Real-time social platform with messaging, posts, and user interactions.",
      tags: ["React Native", "Firebase", "WebSockets"],
      gradient: "from-primary to-secondary"
    },
    {
      title: "Task Management Tool",
      description: "Collaborative project management platform with team features and integrations.",
      tags: ["Vue.js", "Express", "PostgreSQL", "Redis"],
      gradient: "from-secondary to-primary"
    }
  ];

  return (
    <section id="projects" className="min-h-screen flex items-center section-padding">
      <div className="max-w-7xl mx-auto w-full">
        <div className="text-center mb-16 animate-fade-up">
          <h2 className="text-5xl md:text-6xl font-bold mb-4">
            Featured <span className="text-gradient">Projects</span>
          </h2>
          <p className="text-xl text-muted-foreground">Some of my recent work</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group relative bg-card border border-border rounded-2xl p-8 hover-glow transition-all animate-scale-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-10 rounded-2xl transition-opacity`} />
              
              <div className="relative space-y-4">
                <h3 className="text-2xl font-bold group-hover:text-gradient transition-all">
                  {project.title}
                </h3>
                
                <p className="text-muted-foreground">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span 
                      key={tag}
                      className="px-3 py-1 bg-muted rounded-full text-xs font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex gap-4 pt-4">
                  <button className="text-primary hover:text-primary/80 font-semibold transition-colors">
                    View Project →
                  </button>
                  <button className="text-muted-foreground hover:text-foreground font-semibold transition-colors">
                    GitHub →
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
