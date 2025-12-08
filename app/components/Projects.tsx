'use client'

import Image from 'next/image'

export default function Projects() {
  const projects = [
    {
      image: 'https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?w=500',
      title: 'Ecommerce Shopify',
      description: 'Complete e-commerce solution with payment integration and inventory management',
    },
    {
      image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=500',
      title: 'This is some title',
      description: 'Modern portfolio website with interactive animations and responsive design',
    },
    {
      image: 'https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=500',
      title: 'This is some title',
      description: 'Dynamic blog platform with CMS integration and SEO optimization',
    },
  ]

  return (
    <section id="projects" className="py-24 bg-white">
      <div className="max-w-[1300px] mx-auto px-20">
        <h2 className="text-center text-[40px] font-medium font-ubuntu mb-16 relative pb-5">
          My Projects
          <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-44 h-0.5 bg-[#111]"></span>
          <span className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 text-xl text-[#dc143c] bg-white px-2">
            what I made
          </span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-md cursor-pointer hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
            >
              {/* Image */}
              <div className="relative h-64 w-full overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-110"
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
              </div>

              {/* Overlay Content */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#dc143c] via-[#dc143c]/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                <h3 className="text-white text-2xl font-medium mb-2">{project.title}</h3>
                <p className="text-white text-sm">{project.description}</p>
              </div>

              {/* Static Title at Bottom */}
              <div className="bg-gray-100 p-4">
                <h3 className="text-xl font-medium text-[#111]">{project.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
