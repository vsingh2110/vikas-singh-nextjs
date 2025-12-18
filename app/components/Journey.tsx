export default function Journey() {
  const education = [
    {
      title: 'M.A. In Psychology<br/><span class="text-base font-normal text-gray-600 dark:text-gray-400">Pt. Jawahar Lal Nehru Government College, Faridabad (MDU, Rohtak)</span>',
      period: '2020 - 2022 (1st Division)',
      description: 'With Focus on Social Psychology, Cyber Psychology and Human Machine Interaction',
    },
    {
      title: 'M.S. In Computer Science<br/><span class="text-base font-normal text-gray-600 dark:text-gray-400">Pt. Jawahar Lal Nehru Government College, Faridabad (MDU, Rohtak)</span>',
      period: 'Aug 2023 - Jul 2024 (Dropout after 1st year)',
      description: 'Pursued advanced studies in Computer Science with focus on Machine Learning and Data Structures',
    },
    {
      title: 'B.Tech In Electrical Engineering<br/><span class="text-base font-normal text-gray-600 dark:text-gray-400">J.C. Bose YMCA University of Science & Technology (Main Campus), Faridabad</span>',
      period: '2016 - 2020 (1st Division)',
      description: 'Active in Literary, Debating and Quizzing activities in Inter-College, Inter-University and State Level Competitions. <strong>Won multiple debate and quiz competitions</strong> representing the university.',
    },
    {
      title: 'Secondary & Senior Secondary School<br/><span class="text-base font-normal text-gray-600 dark:text-gray-400">Faridabad Model School</span>',
      period: '2015',
      description: '<strong>All India 0.1% Topper</strong> (CBSE Class 10th, 2013) with perfect <strong>10.0/10.0 CGPA</strong>. <strong>Faridabad District Topper in English</strong> (CBSE Class 12th, 2015) with 97% marks. <strong>Won multiple quiz competitions</strong> at inter-school and school level throughout academic years.',
    },
  ]

  const experience = [
    {
      title: 'Front End Developer & Digital Marketing<br/><span class="text-base font-normal text-gray-600 dark:text-gray-400">Phantom Healthcare</span>',
      period: 'March 2021 - Present',
      description: 'Handling websites development, online and digital marketing activities with social media and website promotion with paid sponsored as well as organic work',
    },
    {
      title: 'WordPress & Shopify Developer<br/><span class="text-base font-normal text-gray-600 dark:text-gray-400">Freelance Projects (Zara International & The Earth Store)</span>',
      period: 'November 2020 - March 2021',
      description: 'WordPress development for B2B/B2C platforms, Shopify e-commerce management, SEO (On-page, Off-page, Technical), SMO, content writing, Google Analytics, market research & customer service',
    },
    {
      title: 'Digital Marketing & Business Development<br/><span class="text-base font-normal text-gray-600 dark:text-gray-400">RuralShores Skills Academy</span>',
      period: 'July 2020 - October 2020',
      description: 'Course development for online learning platform, content development, marketing strategy, social media marketing, and management of Pan India training centres',
    },
    {
      title: 'WordPress Designer & Digital Marketing<br/><span class="text-base font-normal text-gray-600 dark:text-gray-400">Digitalforce Online (Internship)</span>',
      period: 'June 2019 - December 2019',
      description: 'Client projects: Website content development, On-page/Off-page SEO, social media management, online reputation management for multiple brands',
    },
    {
      title: 'Various Freelance Projects<br/><span class="text-base font-normal text-gray-600 dark:text-gray-400">Multiple Clients</span>',
      period: 'March 2017 - December 2020',
      description: 'WordPress websites and digital marketing projects for multiple clients across various industries',
    },
  ]

  return (
    <section id="resumes" className="py-16 md:py-20 lg:py-24 bg-white dark:bg-gray-800">
      <div className="max-w-[1300px] lg:max-w-[1400px] xl:max-w-[1600px] 2xl:max-w-[1800px] mx-auto px-4 sm:px-6 md:px-10 lg:px-20 xl:px-24 2xl:px-28">
        <h2 className="text-center text-3xl sm:text-4xl md:text-5xl font-medium font-ubuntu mb-12 md:mb-16 relative pb-5 dark:text-white">
          My Journey
          <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-32 sm:w-44 lg:w-56 xl:w-64 2xl:w-72 h-0.5 bg-[#111] dark:bg-gray-300"></span>
          <span className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 text-base sm:text-lg md:text-xl text-[#dc143c] px-2 bg-white dark:bg-gray-800">
            what I did
          </span>
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 xl:gap-16 2xl:gap-20">
          {/* Education Column */}
          <div>
            <div className="relative">
              {/* Timeline Line */}
              <div className="absolute left-0 top-0 bottom-0 w-0.5 lg:w-1 bg-[#dc143c]"></div>

              {/* Header */}
              <div className="mb-6 sm:mb-8 relative pl-8 sm:pl-12 xl:pl-16">
                <div className="absolute left-[-9px] lg:left-[-13px] top-1 w-5 h-5 lg:w-7 lg:h-7 xl:w-8 xl:h-8 rounded-full bg-[#dc143c]"></div>
                <h3 className="text-xl sm:text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl font-ubuntu font-medium dark:text-white">Education</h3>
              </div>

              {/* Timeline Items */}
              {education.map((item, index) => (
                <div key={index} className="mb-6 sm:mb-8 xl:mb-10 relative pl-8 sm:pl-12 xl:pl-16">
                  <div className="absolute left-[-9px] lg:left-[-13px] top-1 w-5 h-5 lg:w-6 lg:h-6 xl:w-7 xl:h-7 rounded-full bg-[#dc143c]"></div>
                  <div className="bg-white p-4 sm:p-5 md:p-6 lg:p-6 xl:p-8 2xl:p-10 rounded-md shadow-md hover:shadow-lg transition-all duration-300 border border-gray-100 group">
                    <h4 
                      className="text-base sm:text-lg md:text-xl lg:text-[16px] xl:text-[19px] 2xl:text-[22px] font-medium mb-2 group-hover:text-[#dc143c] transition-colors duration-300"
                      dangerouslySetInnerHTML={{ __html: item.title }}
                    />
                    <span className="text-xs sm:text-sm lg:text-[13px] xl:text-[15px] 2xl:text-[17px] text-gray-600 block mb-2 sm:mb-3">{item.period}</span>
                    <p 
                      className="text-sm sm:text-base lg:text-[14px] xl:text-[16px] 2xl:text-[18px] text-gray-700"
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
              <div className="absolute left-0 top-0 bottom-0 w-0.5 lg:w-1 bg-[#dc143c]"></div>

              {/* Header */}
              <div className="mb-6 sm:mb-8 relative pl-8 sm:pl-12 xl:pl-16">
                <div className="absolute left-[-9px] lg:left-[-13px] top-1 w-5 h-5 lg:w-7 lg:h-7 xl:w-8 xl:h-8 rounded-full bg-[#dc143c]"></div>
                <h3 className="text-xl sm:text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl font-ubuntu font-medium dark:text-white">Experience</h3>
              </div>

              {/* Timeline Items */}
              {experience.map((item, index) => (
                <div key={index} className="mb-6 sm:mb-8 xl:mb-10 relative pl-8 sm:pl-12 xl:pl-16">
                  <div className="absolute left-[-9px] lg:left-[-13px] top-1 w-5 h-5 lg:w-6 lg:h-6 xl:w-7 xl:h-7 rounded-full bg-[#dc143c]"></div>
                  <div className="bg-white dark:bg-gray-700 p-4 sm:p-5 md:p-6 lg:p-6 xl:p-8 2xl:p-10 rounded-md shadow-md hover:shadow-lg transition-all duration-300 border border-gray-100 dark:border-gray-600 group">
                    <h4 
                      className="text-base sm:text-lg md:text-xl lg:text-[16px] xl:text-[19px] 2xl:text-[22px] font-medium mb-2 dark:text-white group-hover:text-[#dc143c] transition-colors duration-300"
                      dangerouslySetInnerHTML={{ __html: item.title }}
                    />
                    <span className="text-xs sm:text-sm lg:text-[13px] xl:text-[15px] 2xl:text-[17px] text-gray-600 dark:text-gray-400 block mb-2 sm:mb-3">{item.period}</span>
                    <p 
                      className="text-sm sm:text-base lg:text-[14px] xl:text-[16px] 2xl:text-[18px] text-gray-700 dark:text-gray-300"
                      dangerouslySetInnerHTML={{ __html: item.description }}
                    />
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
