import Skills from '@/components/Skills';
import SEO from '@/components/SEO';

const SkillsPage = () => {
  return (
    <div className="min-h-screen pt-20">
      <SEO
        title="Technical Skills & Expertise | Sagar Rai"
        description="Explore the technical expertise, languages, tools, frameworks, and developer skills of Sagar Rai including Swift, SwiftUI, iOS, React, and Node.js."
        url="https://sagarrai.tech/skills"
      />
      <Skills />
    </div>
  );
};

export default SkillsPage;