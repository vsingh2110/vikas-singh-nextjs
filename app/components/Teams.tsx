'use client'

import Image from 'next/image'

export default function Teams() {
  const team = [
    {
      image: '/images/gaurav.jpeg',
      name: 'Gaurav Mahlawat',
      role: 'Drupal & Wordpress Developer',
    },
    {
      image: '/images/tejaswi-img.jpg',
      name: 'Tejaswi D',
      role: 'Software Engineer in Embedded',
    },
    {
      image: '/images/sahil-kumar.jpg',
      name: 'Sahil Sharma',
      role: 'Full stack and API Developer',
    },
    {
      image: '/images/profile-4.jpeg',
      name: 'Sunil Kumar',
      role: 'Full stack developer & Python Expert',
    },
    {
      image: '/images/aaqib.jpg',
      name: 'Aaqib Pathan',
      role: 'Data Science and AI-ML Engineer',
    },
  ]

  return (
    <section id="teams" className="py-24 bg-[#111] text-white">
      <div className="max-w-[1300px] mx-auto px-20">
        <h2 className="text-center text-[40px] font-medium font-ubuntu mb-16 relative pb-5">
          My teams
          <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-44 h-0.5 bg-white"></span>
          <span className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 text-xl text-[#dc143c] bg-[#111] px-2">
            who with me
          </span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-8">
          {team.map((member, index) => (
            <div
              key={index}
              className="bg-[#222] rounded-md p-6 text-center cursor-pointer transition-all duration-300 hover:bg-[#dc143c]"
            >
              <div className="relative w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden border-4 border-[#dc143c]">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="object-cover"
                  sizes="128px"
                />
              </div>
              <h3 className="text-xl font-medium mb-2">{member.name}</h3>
              <p className="text-gray-300">{member.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
