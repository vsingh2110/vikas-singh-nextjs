export default function Skills() {
  const skills = [
    { name: 'HTML', percentage: 92 },
    { name: 'CSS', percentage: 90 },
    { name: 'JavaScript', percentage: 90 },
    { name: 'React Js/Next Js', percentage: 82 },
    { name: 'Digital Marketing', percentage: 95 },
    { name: 'CMS Development', percentage: 92 },
  ]

  return (
    <section id="skills" className="py-16 md:py-20 lg:py-24 bg-gray-100">
      <div className="max-w-7xl lg:max-w-[1280px] xl:max-w-[1480px] 2xl:max-w-[1680px] mx-auto px-4 sm:px-6 lg:px-12 xl:px-16 2xl:px-20">
        <h2 className="text-center text-4xl md:text-5xl font-medium font-heading mb-12 md:mb-16 relative pb-5">
          My Technical Skills
          <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-44 lg:w-56 xl:w-64 2xl:w-72 h-0.5 bg-gray-800"></span>
          <span className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 text-xl text-brand-crimson bg-gray-100 px-2">
            what i know
          </span>
        </h2>

        <div className="flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-16 xl:gap-20 2xl:gap-24">
          {/* Left Column - Text */}
          <div className="lg:w-1/2">
            <h3 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl font-medium mb-4 lg:mb-6">
              My Technical Skills & Experiences
            </h3>
            <p className="text-gray-700 text-base md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl leading-relaxed mb-6">
              I have work experience and skills in the following profiles:<br/><br/>
              <strong>Digital Marketing:</strong> Digital Marketing Executive, On-Page and Off-page SEO, AI-SEO (AISEO), Generative Engine Optimization (GEO), Answer Engine Optimization (AEO), SMO, SEM, SMM, Content Writer, Blogger, Google Ads, Meta Ads (Facebook & Instagram), LinkedIn Ads, Google Analytics, Google Search Console<br/><br/>
              <strong>Web Development:</strong> WordPress designing & Development, Drupal Development, Shopify Development, Content Developer, CMS Development (PayLoad, WordPress, Shopify, Drupal, Magento)
            </p>
            <a
              href="#about"
              className="inline-block bg-brand-crimson hover:bg-brand-crimson-dark text-white text-lg lg:text-xl xl:text-2xl 2xl:text-3xl font-medium px-8 lg:px-10 xl:px-12 2xl:px-14 py-3 lg:py-4 xl:py-5 rounded-md transition-colors duration-300"
            >
              Read more
            </a>
          </div>

          {/* Right Column - Skills Bars */}
          <div className="lg:w-1/2 w-full space-y-6 lg:space-y-8 xl:space-y-10">
            {skills.map((skill, index) => (
              <div key={index}>
                <div className="flex justify-between mb-2">
                  <span className="text-lg lg:text-xl xl:text-2xl 2xl:text-3xl font-medium">{skill.name}</span>
                  <span className="text-lg lg:text-xl xl:text-2xl 2xl:text-3xl font-medium">{skill.percentage}%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-3 lg:h-4 xl:h-5 2xl:h-6">
                  <div
                    className="bg-brand-crimson h-3 lg:h-4 xl:h-5 2xl:h-6 rounded-full transition-all duration-1000 ease-out"
                    style={{ width: `${skill.percentage}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
