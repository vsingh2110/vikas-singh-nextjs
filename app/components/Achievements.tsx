export default function Achievements() {
  const achievements = [
    {
      title: "All India 0.1% Topper",
      subtitle: "CBSE Class 10th Board Examination",
      year: "2013",
      description: "Achieved perfect <strong>10.0/10.0 CGPA</strong>, ranking among <strong>top 0.1% students across India</strong> in CBSE matriculation examination.",
      icon: "fa-trophy",
      color: "from-yellow-400 to-amber-500"
    },
    {
      title: "Faridabad District Topper - English (Core)",
      subtitle: "CBSE Class 12th Board Examination",
      year: "2015",
      description: "Secured <strong>district's highest marks in English (Core) with 97%</strong> and ranked among <strong>All India 0.1%ile toppers</strong> in the subject.",
      icon: "fa-medal",
      color: "from-blue-400 to-indigo-500"
    },
    {
      title: "3× Debate Competition Winner",
      subtitle: "Inter-School, Inter-College, Inter-University, State & National Level",
      year: "2006-2019",
      description: "Won <strong>three major university debates</strong> including Rostrum, Witswill, and NTPC Vigilance Awareness, <strong>representing YMCA University</strong>. Participated in <strong>20+ events</strong> throughout academic career.",
      icon: "fa-microphone",
      color: "from-purple-400 to-pink-500"
    },
    {
      title: "10+ Quiz Competition Winner",
      subtitle: "Inter-School, Inter-College, Inter-University, State & National Level",
      year: "2006-2019",
      description: "<strong>All India Topper in GK round</strong> by Unified Council (2006). <strong>Winner of Cultural Quiz</strong> at Youth Festival 2017 and <strong>10+ quiz competitions</strong> at inter-school, inter-college, inter-university, state and national levels. <strong>Participated in 100+ competitions</strong> throughout academic career.",
      icon: "fa-lightbulb",
      color: "from-green-400 to-teal-500"
    },
    {
      title: "Founder - NEWS YMCA (Non-Profit)",
      subtitle: "University Student News Portal",
      year: "2017-2020",
      description: "Founded and single-handedly developed a <strong>free student news website</strong> serving <strong>YMCA University and 15+ affiliated colleges</strong>. <strong>3 years of non-profit service</strong> helping students without any monetary gains, donations, or commercial intent.",
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
      title: "100% Attendance Award - 2 Years Continuous",
      subtitle: "Academic Excellence & Discipline",
      year: "Apr 2011 - Mar 2013",
      description: "Received <strong>100% attendance awards for 730+ consecutive days</strong> (April 2011 to March 2013) without a single absence, demonstrating <strong>exceptional dedication and discipline</strong> throughout two complete academic years.",
      icon: "fa-award",
      color: "from-orange-400 to-red-500"
    },
    {
      title: "2× Founder's Medal Award",
      subtitle: "Best Student All-Round Performance",
      year: "2013 & 2015",
      description: "Awarded <strong>Founder's Medal twice</strong> (2013 and 2015) for <strong>best all-round performance</strong> in academics, extracurricular activities, and leadership during school years.",
      icon: "fa-star",
      color: "from-purple-400 to-indigo-500"
    },
    {
      title: "Merit Honour for All-Round Performance",
      subtitle: "Faridabad Model School",
      year: "Dec 2016",
      description: "Received <strong>Merit Honour</strong> for overall excellence in academics, extra-curricular activities, and qualifying <strong>IIT-JEE Mains 2016</strong>.",
      icon: "fa-certificate",
      color: "from-teal-400 to-cyan-500"
    },
    {
      title: "Published Environmental Writer",
      subtitle: "Rajasthan Newspapers",
      year: "2025",
      description: "Articles on <strong>Save Aravali campaign</strong> published in <strong>local newspapers across multiple cities in Rajasthan</strong>, advocating for <strong>environmental protection and raising public awareness</strong>.",
      icon: "fa-pen-nib",
      color: "from-emerald-400 to-green-500"
    }
  ];

  return (
    <section id="achievements" className="bg-gray-100 dark:bg-gray-800 py-20">
      <div className="max-w-[1300px] xl:max-w-[1500px] 2xl:max-w-[1700px] mx-auto px-6 md:px-10 xl:px-12 2xl:px-16">
        <h2 className="text-center text-4xl md:text-5xl font-medium font-ubuntu mb-12 md:mb-16 relative pb-5 dark:text-white">
          Major Achievements
          <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-64 md:w-96 h-0.5 bg-gray-800 dark:bg-gray-300"></span>
          <span className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 text-sm sm:text-base md:text-xl text-[#dc143c] bg-gray-100 dark:bg-gray-800 px-2 whitespace-nowrap">
            Milestones & Recognition
          </span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 xl:gap-10 2xl:gap-12">
          {achievements.map((achievement, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-700 rounded-xl shadow-md hover:shadow-2xl transition-all duration-300 overflow-hidden group"
            >
              <div className={`bg-gradient-to-r ${achievement.color} p-4 xl:p-5 2xl:p-6 text-white`}>
                <div className="flex items-center justify-between">
                  <div className="text-4xl xl:text-5xl 2xl:text-6xl">
                    <i className={`fas ${achievement.icon}`}></i>
                  </div>
                  <span className="text-sm xl:text-base 2xl:text-lg font-semibold bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full">
                    {achievement.year}
                  </span>
                </div>
              </div>
              
              <div className="p-6 xl:p-7 2xl:p-8">
                <h3 className="font-ubuntu text-xl xl:text-2xl 2xl:text-3xl font-bold text-gray-800 dark:text-white mb-2 group-hover:text-[#dc143c] transition-colors">
                  {achievement.title}
                </h3>
                <p className="text-[#dc143c] font-medium text-sm xl:text-base 2xl:text-lg mb-3">
                  {achievement.subtitle}
                </p>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-sm xl:text-base 2xl:text-lg" dangerouslySetInnerHTML={{ __html: achievement.description }} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
