
import { Mail, Linkedin, Github, MapPin } from 'lucide-react';

const Contact = () => {
  return (
    <section className="py-24 px-4 bg-background">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-display font-bold mb-12 animate-fade-in tracking-tight text-foreground">
          Let's Connect
        </h2>

        <div className="grid md:grid-cols-3 gap-8 lg:gap-12 mb-16">
          <a
            href="mailto:sagarrai9893@gmail.com"
            className="flex flex-col items-center p-8 md:p-10 bg-card backdrop-blur-sm border border-border rounded-3xl hover:shadow-md hover:border-primary/40 transition-all duration-200 hover:-translate-y-1 group"
            title="Send me an email"
          >
            <Mail className="w-10 h-10 text-primary mb-6 transition-transform duration-200 group-hover:scale-105" />
            <h3 className="text-xl font-display font-semibold mb-3 text-foreground">Email</h3>
            <p className="text-muted-foreground text-sm font-body">sagarrai9893@gmail.com</p>
          </a>

          <a
            href="https://linkedin.com/in/sagar-rai-ios"
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center p-8 md:p-10 bg-card backdrop-blur-sm border border-border rounded-3xl hover:shadow-md hover:border-primary/40 transition-all duration-200 hover:-translate-y-1 group"
            title="Connect on LinkedIn"
          >
            <Linkedin className="w-10 h-10 text-primary mb-6 transition-transform duration-200 group-hover:scale-105" />
            <h3 className="text-xl font-display font-semibold mb-3 text-foreground">LinkedIn</h3>
            <p className="text-muted-foreground text-sm font-body">sagar-rai-ios</p>
          </a>

          <a
            href="https://github.com/sagarrai21802"
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center p-8 md:p-10 bg-card backdrop-blur-sm border border-border rounded-3xl hover:shadow-md hover:border-primary/40 transition-all duration-200 hover:-translate-y-1 group"
            title="View my GitHub profile"
          >
            <Github className="w-10 h-10 text-primary mb-6 transition-transform duration-200 group-hover:scale-105" />
            <h3 className="text-xl font-display font-semibold mb-3 text-foreground">GitHub</h3>
            <p className="text-muted-foreground text-sm font-body">sagarrai21802</p>
          </a>
        </div>


        <div className="pt-8 border-t border-border animate-fade-in-up animation-delay-700">
          <p className="text-muted-foreground font-body">
            © 2024 Sagar Rai. Built with passion for clean code and beautiful design.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
