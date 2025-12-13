import { Github } from 'lucide-react';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const OpenSource = () => {
  const navigate = useNavigate();
  const [showVideo, setShowVideo] = useState<{[key: string]: boolean}>({});

  useEffect(() => {
    const timeouts: {[key: string]: NodeJS.Timeout} = {};

    // Set timeout for specific contributions to show video after 1 second
    timeouts['alamofire'] = setTimeout(() => {
      setShowVideo(prev => ({ ...prev, 'alamofire': true }));
    }, 1000);

    timeouts['kingfisher'] = setTimeout(() => {
      setShowVideo(prev => ({ ...prev, 'kingfisher': true }));
    }, 1000);

    return () => {
      Object.values(timeouts).forEach(timeout => clearTimeout(timeout));
    };
  }, []);

  const contributions = [
    {
      id: 'alamofire',
      title: "Alamofire",
      subtitle: "AFError.url Property Enhancement",
      description: "Improved AFError.url accuracy, fixing failing-URL reporting for millions of developers. Enhanced error handling capabilities for reliable debugging and logging in production environments.",
      tech: ["Swift", "Alamofire", "Error Handling", "Unit Testing"],
      image: "/opensource.png",
      video: "/Alomofire.mov",
      showVideo: showVideo['alamofire'] || false,
      achievements: "Fixed URL extraction bug affecting millions of users",
      stars: "40k+",
      impact: "Global Developer Community"
    },
    {
      id: 'kingfisher',
      title: "Kingfisher",
      subtitle: "Failure Image Configuration Fix",
      description: "Restored default attributes, stabilizing image rendering for every active library user. Ensured clean separation between success and failure image rendering while maintaining backward compatibility.",
      tech: ["Swift", "SwiftUI", "Kingfisher", "Image Processing"],
      image: "/opensource2.png",
      video: "/Kingfisher.mov",
      showVideo: showVideo['kingfisher'] || false,
      achievements: "Stabilized rendering for all active users",
      stars: "22k+",
      impact: "iOS Image Loading Library"
    }
  ];

  const handleContributionClick = (contributionId: string) => {
    navigate(`/open-source/${contributionId}`);
  };

  const MediaComponent = ({ contribution }: { contribution: any }) => {
    const [fadeState, setFadeState] = useState<'image' | 'video'>('image');
    const [isTransitioning, setIsTransitioning] = useState(false);

    useEffect(() => {
      if (contribution.showVideo && !isTransitioning) {
        setIsTransitioning(true);
        // Start fade out after a short delay to ensure smooth transition
        setTimeout(() => {
          setFadeState('video');
          setTimeout(() => {
            setIsTransitioning(false);
          }, 600); // Allow fade transition to complete
        }, 100);
      }
    }, [contribution.showVideo, isTransitioning]);

    if (!contribution.image && contribution.video) {
      // Contributions with only video - show only video
      return (
        <video
          src={contribution.video}
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
          style={{ objectFit: 'cover' }}
        />
      );
    }

    if (contribution.video && contribution.image) {
      // Contributions with fade transition from placeholder to video
      return (
        <div className="relative w-full h-full flex items-center justify-center overflow-hidden">
          <div
            className={`absolute inset-0 transition-all duration-700 ease-in-out ${
              fadeState === 'image'
                ? 'opacity-100 scale-100'
                : 'opacity-0 scale-95'
            }`}
          >
            <img
              src={contribution.image}
              alt={contribution.title}
              className="w-full h-full object-contain"
              style={{ objectFit: 'contain' }}
            />
          </div>
          <div
            className={`absolute inset-0 transition-all duration-700 ease-in-out ${
              fadeState === 'video'
                ? 'opacity-100 scale-100'
                : 'opacity-0 scale-95'
            }`}
          >
            <video
              src={contribution.video}
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-full"
              style={{
                objectFit: 'cover',
                width: '100%',
                height: '100%'
              }}
            />
          </div>
        </div>
      );
    }

    // Default image only
    return (
      <div className="w-full h-full flex items-center justify-center overflow-hidden">
        <img
          src={contribution.image}
          alt={contribution.title}
          className="max-w-full max-h-full object-contain hover:scale-105 transition-transform duration-300"
        />
      </div>
    );
  };

  return (
    <section className="py-24 px-4 bg-background">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-display font-bold text-center text-foreground mb-16 fade-in tracking-tight">
          Open Source Contributions
        </h2>

        <div className="grid md:grid-cols-2 gap-8 lg:gap-12 mb-16 max-w-4xl mx-auto">
          {contributions.map((contribution, index) => (
            <div
              key={contribution.id}
              onClick={() => handleContributionClick(contribution.id)}
              className={`bg-card border border-border rounded-3xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-500 hover:scale-[1.02] project-card scale-in backdrop-blur-sm cursor-pointer`}
            >
              <div className="h-80 relative overflow-hidden flex items-center justify-center bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-900">
                <MediaComponent contribution={contribution} />
                <div className="absolute inset-0 bg-black/5 dark:bg-black/10"></div>
              </div>

              <div className="p-6 md:p-8">
                <div className="flex items-start justify-between mb-2">
                  <h3 className="text-xl md:text-2xl font-display font-bold text-foreground">
                    {contribution.title}
                  </h3>
                  <div className="flex items-center gap-1 text-sm text-muted-foreground">
                    <span className="text-yellow-500">⭐</span>
                    {contribution.stars}
                  </div>
                </div>
                
                <p className="text-primary font-semibold mb-3">
                  {contribution.subtitle}
                </p>

                <p className="text-muted-foreground mb-4 leading-relaxed font-body">
                  {contribution.description}
                </p>

                {contribution.achievements && (
                  <div className="mb-6 p-3 bg-primary/10 rounded-xl border border-primary/20">
                    <p className="text-primary text-sm font-medium">
                      🎯 {contribution.achievements}
                    </p>
                  </div>
                )}
                
                <div className="flex items-center justify-between">
                  <div className="flex flex-wrap gap-2">
                    {contribution.tech.slice(0, 3).map((tech, techIndex) => (
                      <span
                        key={tech}
                        className="px-3 py-1.5 bg-elegant-gray dark:bg-elegant-gray text-foreground rounded-full text-xs font-medium border border-border/50"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <span className="text-xs text-muted-foreground">
                    {contribution.impact}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center animate-fade-in-up animation-delay-600">
          <a
            href="https://github.com/sagarrai21802"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-3 px-8 py-4 bg-primary text-primary-foreground rounded-full hover:shadow-lg transition-all duration-300 hover:scale-105 hover:-translate-y-1 animated-button font-medium"
          >
            <Github className="w-5 h-5 transition-transform duration-200 hover:scale-110 hover:rotate-6" />
            <span>View More on GitHub</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default OpenSource;