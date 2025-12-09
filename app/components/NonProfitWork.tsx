export default function NonProfitWork() {
  const projects = [
    {
      name: "CogniSocial Research",
      tagline: "Digital Influence & Social Psychology Research",
      period: "2024 - Present",
      role: "Founder & Editor (Non-Profit)",
      description: "Independent non-profit research organization investigating how algorithmic systems, interface design, and information architectures shape attention, belief formation, and social consensus. Committed to social awakening and betterment of society through research on algorithmic amplification, digital propaganda, narrative engineering, misinformation spread, and platform governance ethics. All research is freely available for public benefit.",
      website: "https://github.com/vsingh2110/mindscape-research",
      icon: "fa-brain",
      color: "bg-gradient-to-br from-purple-500 to-indigo-600"
    },
    {
      name: "NEWS YMCA",
      tagline: "University News & Student Help Portal",
      period: "2017 - 2020 (3 Years)",
      role: "Founder & Editor-in-Chief (Non-Profit)",
      description: "Single-handedly created and managed a WordPress-based news and help portal for YMCA University students. Served 15+ affiliated colleges with university news, student resources, and information completely free of charge. 3 years of dedicated non-profit service helping thousands of students without any monetary gains, charity donations, or commercial intent. Platform became immensely popular among students during its active years.",
      website: "https://web.archive.org/web/20190413140812/http://www.newsymca.com/",
      icon: "fa-newspaper",
      color: "bg-gradient-to-br from-blue-500 to-cyan-600"
    }
  ];

  return (
    <section id="nonprofit" className="bg-white py-20">
      <div className="max-w-[1300px] mx-auto px-6 md:px-10">
        <h2 className="text-center text-4xl md:text-5xl font-medium font-ubuntu mb-12 md:mb-16 relative pb-5">
          Non-Profit Work
          <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-72 md:w-96 h-0.5 bg-gray-800"></span>
          <span className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 text-sm sm:text-base md:text-xl text-[#dc143c] bg-white px-2 whitespace-nowrap">
            Research & Community Projects
          </span>
        </h2>

        <div className="space-y-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 border border-gray-100"
            >
              <div className="md:flex">
                <div className={`md:w-2/5 ${project.color} p-8 text-white flex flex-col justify-center items-center`}>
                  <div className="text-7xl mb-4">
                    <i className={`fas ${project.icon}`}></i>
                  </div>
                  <h3 className="font-ubuntu text-2xl font-bold text-center mb-2">
                    {project.name}
                  </h3>
                  <p className="text-center text-sm opacity-90 mb-3">
                    {project.tagline}
                  </p>
                  <p className="text-center font-medium">
                    <i className="far fa-calendar mr-2"></i>
                    {project.period}
                  </p>
                </div>
                
                <div className="md:w-3/5 p-8">
                  <div className="flex items-center gap-2 mb-4">
                    <span className="bg-[#dc143c] text-white px-3 py-1 rounded-full text-sm font-medium">
                      {project.role}
                    </span>
                  </div>
                  
                  <p className="text-gray-700 leading-relaxed mb-6">
                    {project.description}
                  </p>

                  {project.website && (
                    <a
                      href={project.website.startsWith('http') ? project.website : `https://${project.website}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-[#dc143c] hover:text-[#a00e2e] font-medium transition-colors"
                    >
                      <i className="fas fa-external-link-alt"></i>
                      Visit Project {project.name === "NEWS YMCA" && "(Archived Link)"}
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
