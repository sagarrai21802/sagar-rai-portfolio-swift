import Projects from '@/components/Projects';
import SEO from '@/components/SEO';

const ProjectsPage = () => {
  return (
    <div className="min-h-screen pt-20">
      <SEO
        title="Projects | Sagar Rai"
        description="Explore the portfolio projects, iOS applications, open-source work, and full-stack solutions built by Sagar Rai."
        url="https://sagarrai.tech/projects"
      />
      <Projects />
    </div>
  );
};

export default ProjectsPage;