
const About = () => {
  return (
    <section id="about" className="py-24 px-4 bg-background">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-display font-bold text-center text-foreground mb-16 animate-fade-in tracking-tight">
          About Me
        </h2>
        
        <div className="bg-card border border-border rounded-3xl p-8 md:p-16 shadow-lg hover:shadow-xl transition-all duration-500 animate-slide-in-left backdrop-blur-sm">
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed text-center font-body max-w-4xl mx-auto">
            Hey there! I'm <span className="font-semibold text-primary">Sagar</span>, 
            and I'm absolutely passionate about crafting beautiful iOS apps that people love to use. 
            Currently wrapping up my final year in Computer Science at Bansal College of Engineering, 
            I spend my days (and many nights!) diving deep into Swift and UIKit, turning ideas into elegant, 
            functional mobile experiences. What drives me? The thrill of solving real-world problems with clean, 
            efficient code and creating interfaces that just <em className="text-foreground font-medium">feel right</em>. 
            I'm excited to take my skills to the global stage and contribute to innovative tech teams worldwide.
          </p>
          
          <div className="mt-12 flex justify-center">
            <div className="inline-flex items-center px-6 py-3 bg-elegant-gray dark:bg-elegant-gray rounded-full shadow-sm hover:shadow-md hover:scale-105 transition-all duration-300 border border-border">
              <span className="text-primary text-lg mr-3">🌟</span>
              <span className="text-foreground font-medium">Ready for My Next Adventure</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
