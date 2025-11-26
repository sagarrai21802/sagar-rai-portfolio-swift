import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft, Github, ExternalLink } from 'lucide-react';

const OpenSourceDetail = () => {
  const { contributionId } = useParams<{ contributionId: string }>();
  const navigate = useNavigate();

  const contributions = [
    {
      id: "alamofire",
      title: "Alamofire: AFError.url Property Enhancement",
      description: "Enhanced the AFError.url property to correctly extract failingURL from URLError instances in sessionTaskFailed cases. Added comprehensive test coverage and resolved issue #3965 for reliable error handling and logging.",
      longDescription: "This contribution enhances error handling in networking by ensuring that error objects correctly expose failing URLs, enabling better debugging and logging. The theoretical foundation lies in proper error abstraction, where error types should provide all relevant context without requiring manual extraction. This improvement maintains API compatibility while fixing a critical gap in error information accessibility, demonstrating the importance of comprehensive error modeling in software design.",
      tech: ["Swift", "Alamofire", "Error Handling", "Unit Testing"],
      video: "/Alomofire.mov",
      achievements: "Fixed URL extraction bug, Added comprehensive test coverage",
      features: [
        "Enhanced AFError.url property",
        "Proper URLError handling",
        "Comprehensive test coverage",
        "Backward compatibility maintained",
        "Improved error logging capabilities"
      ],
      github: "https://github.com/Alamofire/Alamofire/pull/3965",
      issueLink: "https://github.com/Alamofire/Alamofire/issues/3965"
    },
    {
      id: "kingfisher",
      title: "Kingfisher: Failure Image Configuration Fix",
      description: "Fixed the .onFailureImage modifier configuration application issue where image transformations were incorrectly applied to failure images. Ensured clean separation between success and failure image rendering while maintaining backward compatibility.",
      longDescription: "This contribution addresses a design flaw in image loading components where failure states inherit unintended styling from success state configurations. The theoretical insight is that error handling UI should be independent of primary content styling to prevent unexpected visual artifacts. By separating failure image rendering from configuration inheritance, this fix improves the predictability and maintainability of declarative UI frameworks, emphasizing the principle of clear state boundaries in component design.",
      tech: ["Swift", "SwiftUI", "Kingfisher", "Image Processing"],
      video: "/Kingfisher.mov",
      achievements: "Fixed configuration bug, Maintained backward compatibility",
      features: [
        "Fixed .onFailureImage configuration application",
        "Clean separation of success/failure rendering",
        "Backward compatibility maintained",
        "Improved SwiftUI developer experience",
        "Enhanced failure state handling"
      ],
      github: "https://github.com/onevcat/Kingfisher/pull/2321",
      issueLink: "https://github.com/onevcat/Kingfisher/issues/2321"
    }
  ];

  const contribution = contributions.find(c => c.id === contributionId);

  if (!contribution) {
    return (
      <div className="min-h-screen pt-20 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-foreground mb-4">Contribution Not Found</h1>
          <p className="text-muted-foreground mb-8">The contribution you're looking for doesn't exist.</p>
          <button
            onClick={() => navigate('/open-source')}
            className="px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors"
          >
            Back to Open Source
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-20 bg-background">
      <div className="max-w-4xl mx-auto px-4 py-12">
        {/* Back Button */}
        <button
          onClick={() => navigate('/open-source')}
          className="mb-8 flex items-center space-x-2 text-muted-foreground hover:text-foreground transition-colors"
        >
          <ArrowLeft className="w-5 h-5" />
          <span>Back to Open Source</span>
        </button>

        {/* Contribution Header */}
        <div className="mb-12">
          <h1 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-6">
            {contribution.title}
          </h1>
          <p className="text-xl text-muted-foreground leading-relaxed">
            {contribution.description}
          </p>
        </div>

        {/* Media Section */}
        <div className="mb-12">
          <div className="rounded-3xl overflow-hidden bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-900 h-96">
            <video
              src={contribution.video}
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-full object-cover"
              controls
            />
          </div>
        </div>

        {/* Contribution Details */}
        <div className="grid md:grid-cols-3 gap-12">
          {/* Main Content */}
          <div className="md:col-span-2 space-y-8">
            {/* Description */}
            <div>
              <h2 className="text-2xl font-display font-bold text-foreground mb-4">
                Contribution Overview
              </h2>
              <div className="prose prose-lg dark:prose-invert max-w-none">
                {contribution.longDescription.split('\n\n').map((paragraph, index) => (
                  <p key={index} className="text-muted-foreground leading-relaxed mb-4">
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>

            {/* Features */}
            {contribution.features && (
              <div>
                <h2 className="text-2xl font-display font-bold text-foreground mb-4">
                  Key Features
                </h2>
                <ul className="space-y-2">
                  {contribution.features.map((feature, index) => (
                    <li key={index} className="flex items-start space-x-2">
                      <span className="text-primary mt-1">•</span>
                      <span className="text-muted-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Technologies */}
            <div>
              <h3 className="text-xl font-display font-bold text-foreground mb-4">
                Technologies
              </h3>
              <div className="flex flex-wrap gap-2">
                {contribution.tech.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium border border-primary/20"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Achievements */}
            {contribution.achievements && (
              <div>
                <h3 className="text-xl font-display font-bold text-foreground mb-4">
                  Achievements
                </h3>
                <div className="p-4 bg-primary/10 rounded-xl border border-primary/20">
                  <p className="text-primary font-medium">
                    🎯 {contribution.achievements}
                  </p>
                </div>
              </div>
            )}

            {/* Links */}
            <div>
              <h3 className="text-xl font-display font-bold text-foreground mb-4">
                Links
              </h3>
              <div className="space-y-3">
                {contribution.github && (
                  <a
                    href={contribution.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 px-4 py-3 bg-card border border-border rounded-lg hover:bg-accent transition-colors"
                  >
                    <Github className="w-5 h-5" />
                    <span className="font-medium">View Pull Request</span>
                    <ExternalLink className="w-4 h-4 ml-auto" />
                  </a>
                )}
                {contribution.issueLink && (
                  <a
                    href={contribution.issueLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 px-4 py-3 bg-card border border-border rounded-lg hover:bg-accent transition-colors"
                  >
                    <ExternalLink className="w-5 h-5" />
                    <span className="font-medium">Related Issue</span>
                    <ExternalLink className="w-4 h-4 ml-auto" />
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OpenSourceDetail;