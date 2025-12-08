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
    <section id="services" className="py-24 bg-[#111] text-white">
      <div className="max-w-[1300px] mx-auto px-20">
        <h2 className="text-center text-[40px] font-medium font-ubuntu mb-16 relative pb-5">
          My services
          <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-44 h-0.5 bg-white"></span>
          <span className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 text-xl text-[#dc143c] bg-[#111] px-2">
            what i provide
          </span>
        </h2>

        <div className="flex flex-wrap justify-between gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="w-[calc(33%-20px)] bg-[#222] rounded-md p-12 text-center cursor-pointer transition-all duration-300 hover:bg-[#dc143c] hover:scale-105"
            >
              <div className="mb-4 transition-all duration-300">
                <i className={`${service.icon} text-5xl text-[#dc143c] group-hover:text-white`}></i>
              </div>
              <h3 className="text-2xl font-medium mb-4 text-white">{service.title}</h3>
              <p className="text-white">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
