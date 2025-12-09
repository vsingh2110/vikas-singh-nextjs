export default function Journey() {
  const education = [
    {
      title: 'M.A. In Psychology - Pt. Jawahar Lal Nehru Government College, Faridabad (MDU, Rohtak)',
      period: '2020 - 2022 (1st Division)',
      description: 'With Focus on Social Psychology, Cyber Psychology and Human Machine Interaction',
    },
    {
      title: 'M.S. In Computer Science - Pt. Jawahar Lal Nehru Government College, Faridabad (MDU, Rohtak)',
      period: 'Aug 2023 - Jul 2024 (Dropout after 1st year)',
      description: 'Pursued advanced studies in Computer Science with focus on Machine Learning and Data Structures',
    },
    {
      title: 'B.Tech In Electrical Engineering - J.C. Bose YMCA University of Science & Technology (Main Campus), Faridabad',
      period: '2016 - 2020 (1st Division)',
      description: 'Active in Literary, Debating and Quizzing activities in Inter-College, Inter-University and State Level Competitions',
    },
    {
      title: 'Secondary & Senior Secondary School - Faridabad Model School',
      period: '2004 - 2016',
      description: '<strong>All India 0.1% Topper</strong> (CBSE Class 10th, 2013) with perfect 10.0 CGPA. <strong>Faridabad District Topper in English</strong> (CBSE Class 12th, 2015) with 97% marks.',
    },
  ]

  const experience = [
    {
      title: 'Front End Developer & Digital Marketing - Phantom Healthcare',
      period: 'March 2021 - Present',
      description: 'Handling websites development, online and digital marketing activities with social media and website promotion with paid sponsored as well as organic work',
    },
    {
      title: 'Wordpress Developer & Digital Marketing - Zara International Machines',
      period: 'January 2021 - March 2021',
      description: 'Worked as Wordpress Developer, designed website and managed online B2B & B2C accounts',
    },
    {
      title: 'Various freelance works of Multiple clients',
      period: 'March 2017 - December 2020',
      description: 'Most of the projects were wordpress websites and digital marketing of the same',
    },
  ]

  return (
    <section id="resumes" className="py-24 bg-white">
      <div className="max-w-[1300px] mx-auto px-20">
        <h2 className="text-center text-[40px] font-medium font-ubuntu mb-16 relative pb-5">
          My Journey
          <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-44 h-0.5 bg-[#111]"></span>
          <span className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 text-xl text-[#dc143c] bg-white px-2">
            what I did
          </span>
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Education Column */}
          <div>
            <div className="relative">
              {/* Timeline Line */}
              <div className="absolute left-0 top-0 bottom-0 w-0.5 bg-[#dc143c]"></div>

              {/* Header */}
              <div className="mb-8 relative pl-12">
                <div className="absolute left-[-9px] top-1 w-5 h-5 rounded-full bg-[#dc143c]"></div>
                <h3 className="text-2xl font-ubuntu font-medium">Education</h3>
              </div>

              {/* Timeline Items */}
              {education.map((item, index) => (
                <div key={index} className="mb-8 relative pl-12">
                  <div className="absolute left-[-9px] top-1 w-5 h-5 rounded-full bg-[#dc143c]"></div>
                  <div className="bg-gray-50 p-6 rounded-md hover:shadow-lg transition-shadow duration-300">
                    <h4 className="text-xl font-medium mb-2">{item.title}</h4>
                    <span className="text-sm text-gray-600 block mb-3">{item.period}</span>
                    <p 
                      className="text-gray-700"
                      dangerouslySetInnerHTML={{ __html: item.description }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Experience Column */}
          <div>
            <div className="relative">
              {/* Timeline Line */}
              <div className="absolute left-0 top-0 bottom-0 w-0.5 bg-[#dc143c]"></div>

              {/* Header */}
              <div className="mb-8 relative pl-12">
                <div className="absolute left-[-9px] top-1 w-5 h-5 rounded-full bg-[#dc143c]"></div>
                <h3 className="text-2xl font-ubuntu font-medium">Experience</h3>
              </div>

              {/* Timeline Items */}
              {experience.map((item, index) => (
                <div key={index} className="mb-8 relative pl-12">
                  <div className="absolute left-[-9px] top-1 w-5 h-5 rounded-full bg-[#dc143c]"></div>
                  <div className="bg-gray-50 p-6 rounded-md hover:shadow-lg transition-shadow duration-300">
                    <h4 className="text-xl font-medium mb-2">{item.title}</h4>
                    <span className="text-sm text-gray-600 block mb-3">{item.period}</span>
                    <p className="text-gray-700">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
