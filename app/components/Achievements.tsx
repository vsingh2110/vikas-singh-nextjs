export default function Achievements() {
  const achievements = [
    {
      title: "All India 0.1% Topper",
      subtitle: "CBSE Class 10th Board Examination",
      year: "2013",
      description: "Achieved <strong>perfect 10.0 CGPA</strong>, ranking among <strong>top 0.1% students across India</strong> in CBSE matriculation examination.",
      icon: "fa-trophy",
      color: "from-yellow-400 to-amber-500"
    },
    {
      title: "District Topper - English (Core)",
      subtitle: "CBSE Class 12th Board Examination",
      year: "2015",
      description: "Secured <strong>district's highest marks in English (Core)</strong> and ranked among <strong>All India 0.1%ile toppers</strong> in the subject.",
      icon: "fa-medal",
      color: "from-blue-400 to-indigo-500"
    },
    {
      title: "3× Debate Competition Winner",
      subtitle: "YMCA University Competitions",
      year: "2016-2019",
      description: "<strong>Won three major university-level debate competitions</strong> including Rostrum, Witswill, and NTPC Vigilance Awareness debate. Participated in <strong>20+ inter-college/university events</strong>.",
      icon: "fa-microphone",
      color: "from-purple-400 to-pink-500"
    },
    {
      title: "10+ Quiz Competition Winner",
      subtitle: "University & National Level",
      year: "2006-2019",
      description: "<strong>Winner of Cultural Quiz</strong> at Youth Festival 2017 and <strong>All India Topper in GK round</strong> at national level competition by Unified Council. Participated in <strong>100+ quiz competitions</strong> throughout academic life from school to university level.",
      icon: "fa-lightbulb",
      color: "from-green-400 to-teal-500"
    },
    {
      title: "Founder - NEWS YMCA",
      subtitle: "University Student News Portal",
      year: "2017",
      description: "<strong>Founded and single-handedly developed</strong> a student news website serving <strong>YMCA University and 15+ affiliated colleges</strong>, becoming a <strong>hit platform among students</strong>.",
      icon: "fa-newspaper",
      color: "from-cyan-400 to-blue-500"
    },
    {
      title: "IIT-JEE Mains Qualifier",
      subtitle: "Engineering Entrance Examination",
      year: "2016",
      description: "Ranked 90,000 out of 1.5 million aspirants <strong>(Top 6%)</strong> in one of India's toughest engineering entrance examinations.",
      icon: "fa-graduation-cap",
      color: "from-red-400 to-rose-500"
    },
    {
      title: "100% Attendance Award (2 Years)",
      subtitle: "Academic Excellence",
      year: "April 2011 - March 2013",
      description: "Achieved <strong>730+ consecutive days of 100% attendance</strong> from April 2011 to March 2013. Received <strong>100% attendance awards</strong> for two consecutive years and <strong>'Best Student Award'</strong> three times during school years, demonstrating exceptional dedication and discipline.",
      icon: "fa-award",
      color: "from-orange-400 to-red-500"
    },
    {
      title: "Published Environmental Writer",
      subtitle: "Rajasthan Newspapers Patrika.com",
      year: "2025",
      description: "Articles on <strong>Save Aravali campaign</strong> published in <strong>local newspapers across multiple cities in Rajasthan</strong>, advocating for <strong>environmental protection</strong>.",
      icon: "fa-pen-nib",
      color: "from-emerald-400 to-green-500"
    }
  ];

  return (
    <section id="achievements" className="bg-gray-100 py-20">
      <div className="max-w-[1300px] mx-auto px-6 md:px-10">
        <h2 className="text-center font-ubuntu text-4xl md:text-5xl font-semibold mb-3">
          Major Achievements
        </h2>
        <p className="text-center text-[#dc143c] text-lg mb-12">
          Milestones & Recognition
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {achievements.map((achievement, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-md hover:shadow-2xl transition-all duration-300 overflow-hidden group"
            >
              <div className={`bg-gradient-to-r ${achievement.color} p-4 text-white`}>
                <div className="flex items-center justify-between">
                  <div className="text-4xl">
                    <i className={`fas ${achievement.icon}`}></i>
                  </div>
                  <span className="text-sm font-semibold bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full">
                    {achievement.year}
                  </span>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="font-ubuntu text-xl font-bold text-gray-800 mb-2 group-hover:text-[#dc143c] transition-colors">
                  {achievement.title}
                </h3>
                <p className="text-[#dc143c] font-medium text-sm mb-3">
                  {achievement.subtitle}
                </p>
                <p className="text-gray-600 leading-relaxed text-sm" dangerouslySetInnerHTML={{ __html: achievement.description }} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
