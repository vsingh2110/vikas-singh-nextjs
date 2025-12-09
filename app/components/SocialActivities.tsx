export default function SocialActivities() {
  const activities = [
    {
      organization: "Ananya - The Unparallel",
      role: "Member, Literature and Debating Society of Univeristy",
      period: "2016 - 2020",
      institution: "YMCA University of Science & Technology",
      description: "Active member of university's premier literary and debating society. Won 3 debate competitions, 2 quiz competitions, and participated in 20+ inter-college/university events.",
      icon: "fa-book-open"
    },
    {
      organization: "Save Aravali Trust",
      role: "Digital Volunteer & Activist",
      period: "2017 - Present",
      institution: "Environmental Activism",
      description: "Fighting to protect Aravali hills from mining destruction. Published articles in Rajasthan newspapers. Leading signature campaigns and legal challenges against government's redefinition of Aravali boundaries.",
      icon: "fa-tree"
    },
    {
      organization: "People For Animals (PFA)",
      role: "Volunteer",
      period: "2017 - Present",
      institution: "Founded by Menaka Gandhi",
      description: "Volunteering for animal welfare and rights. Supporting PFA's mission to protect and care for animals across India.",
      icon: "fa-paw"
    },
    {
      organization: "Safe and Secure Faridabad (SSF)",
      role: "Activist",
      period: "2017 - Present",
      institution: "Civil Rights and Social Action",
      description: "Working towards making Faridabad safer and more secure for all residents. Advocating for civic issues and community welfare.",
      icon: "fa-shield-halved"
    },
    {
      organization: "Student Leader - Political Organization(Hidden)",
      role: "Working President-Univeristy & Faridabad District Media Coordinator",
      period: "2017 - Early 2020",
      institution: "University Student Organization of *Hidden* ",
      description: "Served as <strong>Working President</strong> for university students and <strong>District(Faridabad) Media Coordinator</strong> for a major national political-social organization's student leadership *Name Hidden*.",
      icon: "fa-users"
    }
  ];

  return (
    <section id="social-activities" className="bg-gray-100 py-20">
      <div className="max-w-[1300px] mx-auto px-6 md:px-10">
        <h2 className="text-center text-4xl md:text-5xl font-medium font-ubuntu mb-12 md:mb-16 relative pb-5">
          Social Activities
          <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-44 h-0.5 bg-gray-800"></span>
          <span className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 text-xl text-[#dc143c] bg-gray-100 px-2">
            Community Engagement & Activism
          </span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {activities.map((activity, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-md p-6 hover:shadow-xl transition-all duration-300 border-l-4 border-[#dc143c]"
            >
              {/* Desktop layout: icon on left */}
              <div className="hidden md:flex items-start gap-4">
                <div className="text-[#dc143c] text-3xl flex-shrink-0 mt-1">
                  <i className={`fas ${activity.icon}`}></i>
                </div>
                <div className="flex-1">
                  <h3 className="font-ubuntu text-xl font-semibold text-gray-800 mb-1">
                    {activity.organization}
                  </h3>
                  <p className="text-[#dc143c] font-medium mb-1">{activity.role}</p>
                  <p className="text-gray-600 text-sm mb-2">
                    <i className="far fa-calendar mr-2"></i>
                    {activity.period} • {activity.institution}
                  </p>
                  <p className="text-gray-700 leading-relaxed" dangerouslySetInnerHTML={{ __html: activity.description }} />
                </div>
              </div>
              
              {/* Mobile layout: icon between heading and subheading */}
              <div className="block md:hidden">
                <h3 className="font-ubuntu text-xl font-semibold text-gray-800 mb-3">
                  {activity.organization}
                </h3>
                <div className="text-[#dc143c] text-4xl mb-3 text-center">
                  <i className={`fas ${activity.icon}`}></i>
                </div>
                <p className="text-[#dc143c] font-medium mb-1">{activity.role}</p>
                <p className="text-gray-600 text-sm mb-2">
                  <i className="far fa-calendar mr-2"></i>
                  {activity.period} • {activity.institution}
                </p>
                <p className="text-gray-700 leading-relaxed" dangerouslySetInnerHTML={{ __html: activity.description }} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
