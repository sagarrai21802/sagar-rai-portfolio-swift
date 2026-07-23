import Education from '@/components/Education';
import SEO from '@/components/SEO';

const EducationPage = () => {
  return (
    <div className="min-h-screen pt-20">
      <SEO
        title="Education & Academic Background | Sagar Rai"
        description="Learn more about the academic background, qualifications, courses, and certifications of Sagar Rai."
        url="https://sagarrai.tech/education"
      />
      <Education />
    </div>
  );
};

export default EducationPage;