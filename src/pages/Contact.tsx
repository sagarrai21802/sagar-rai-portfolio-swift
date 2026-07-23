import Contact from '@/components/Contact';
import SEO from '@/components/SEO';

const ContactPage = () => {
  return (
    <div className="min-h-screen">
      <SEO
        title="Get in Touch | Sagar Rai"
        description="Get in touch with Sagar Rai for project collaborations, software engineering roles, iOS development queries, or general opportunities."
        url="https://sagarrai.tech/contact"
      />
      <Contact />
    </div>
  );
};

export default ContactPage;