export default function Services() {
  const services = [
    {
      icon: 'fas fa-code',
      title: 'Front End Development',
      description: 'HTML, CSS, JavaScript, Tailwind, React Js/Next Js, Etc.',
    },
    {
      icon: 'fas fa-chart-line',
      title: 'Digital Marketing & Paid Ads',
      description: 'SEO, SMO, SMM, Website Optimization, Paid Ads on Google/FB/Linkedin',
    },
    {
      icon: 'fas fa-paint-brush',
      title: 'Wordpress and Shopify Design',
      description: 'Designing of websites on wordpress and shopify platforms',
    },
  ]

  return (
    <section id="services" className="py-16 md:py-20 lg:py-24 bg-white">
      <div className="max-w-[1300px] lg:max-w-[1400px] xl:max-w-[1600px] 2xl:max-w-[1800px] mx-auto px-4 sm:px-6 md:px-10 lg:px-20 xl:px-24 2xl:px-28">
        <h2 className="text-center text-3xl sm:text-4xl md:text-5xl font-medium font-ubuntu mb-12 md:mb-16 relative pb-5">
          My services
          <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-40 sm:w-48 md:w-56 lg:w-64 xl:w-72 2xl:w-80 h-0.5 bg-gray-800"></span>
          <span className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 text-base sm:text-lg md:text-xl text-[#dc143c] bg-white px-2">
            what i provide
          </span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 xl:gap-10 2xl:gap-12">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-gray-50 rounded-md p-8 md:p-10 lg:p-10 xl:p-14 2xl:p-16 text-center cursor-pointer transition-all duration-300 hover:bg-[#dc143c] hover:scale-105 group border border-gray-200"
            >
              <div className="mb-4 transition-all duration-300">
                <i className={`${service.icon} text-4xl sm:text-5xl lg:text-[40px] xl:text-6xl 2xl:text-7xl text-[#dc143c] group-hover:text-white transition-colors duration-300`}></i>
              </div>
              <h3 className="text-xl sm:text-2xl lg:text-[19px] xl:text-3xl 2xl:text-4xl font-medium mb-3 sm:mb-4 text-gray-800 group-hover:text-white transition-colors duration-300">{service.title}</h3>
              <p className="text-sm sm:text-base lg:text-[13px] xl:text-lg 2xl:text-xl text-gray-700 group-hover:text-white transition-colors duration-300">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
