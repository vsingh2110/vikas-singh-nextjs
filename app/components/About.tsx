'use client'

import Image from 'next/image'
import { TypeAnimation } from 'react-type-animation'

export default function About() {
    return (
        <section id="about" className="py-16 md:py-20 lg:py-24 bg-white">
            <div className="max-w-7xl lg:max-w-[1280px] xl:max-w-[1480px] 2xl:max-w-[1680px] mx-auto px-4 sm:px-6 lg:px-12 xl:px-16 2xl:px-20">
                <h2 className="text-center text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl font-medium font-heading mb-12 md:mb-16 relative pb-5">
                    About me
                    <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-44 lg:w-56 xl:w-64 2xl:w-72 h-0.5 bg-gray-800"></span>
                    <span className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl text-brand-crimson bg-white px-2">
                        who i am
                    </span>
                </h2>

                <div className="flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-16 xl:gap-20 2xl:gap-24">
                    {/* Left Column - Image */}
                    <div className="lg:w-1/2 flex justify-center">
                        <div className="relative w-72 h-72 md:w-96 md:h-96 lg:w-[450px] lg:h-[450px] xl:w-[550px] xl:h-[550px] 2xl:w-[650px] 2xl:h-[650px] rounded-lg overflow-hidden">
                            <Image
                                src="/images/vikas-socialist.png"
                                alt="Vikas Singh - Social Psychologist & Developer"
                                fill
                                className="object-cover"
                                sizes="(max-width: 768px) 288px, (max-width: 1024px) 384px, (max-width: 1280px) 450px, (max-width: 1536px) 550px, 650px"
                            />
                        </div>
                    </div>

                    {/* Right Column - Text */}
                    <div className="lg:w-1/2">
                        <div className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl font-medium mb-4 lg:mb-6">
                            I&apos;m Vikas and I&apos;m a{' '}
                            <span className="text-brand-crimson">
                                <TypeAnimation
                                    sequence={[
                                        'Social Psychologist',
                                        2000,
                                        'Front End Developer',
                                        2000,
                                        'Digital Marketer',
                                        2000,
                                        'Researcher & Activist',
                                        2000,
                                    ]}
                                    wrapper="span"
                                    speed={50}
                                    repeat={Infinity}
                                />
                            </span>
                        </div>
                        <p className="text-gray-700 text-base md:text-lg lg:text-[22px] xl:text-[26px] 2xl:text-[30px] leading-relaxed mb-6">
                            Social Psychologist and Software Professional researching how digital platforms shape human cognition and behavior. Founder of CogniSocial Research, investigating algorithmic influence, digital propaganda, and platform ethics.
                        </p>
                        <p className="text-gray-700 text-base md:text-lg lg:text-[22px] xl:text-[26px] 2xl:text-[30px] leading-relaxed mb-6">
                            Technical expertise in React.js, Next.js, TypeScript, and SEO/AISEO/GEO/AEO. Environmental & activist, former Working President as Student Leader at University level for a National Party, published writer in regional newspapers. Former founder of NEWS YMCA student portal.
                        </p>
                        <a
                            href="https://drive.google.com/file/d/13qssfiu6Ni-p49nW2YPlo7ZYmMAD9WiA/view?usp=drive_link"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-block bg-brand-crimson hover:bg-brand-crimson-dark text-white text-lg lg:text-xl xl:text-2xl 2xl:text-3xl font-medium px-8 lg:px-10 xl:px-12 2xl:px-14 py-3 lg:py-4 xl:py-5 rounded-md transition-colors duration-300"
                        >
                            View CV
                        </a>
                    </div>
                </div>
            </div>
        </section>
    )
}
