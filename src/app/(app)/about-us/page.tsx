import { Testimonials } from '@/components/Testimonials'
import type { Metadata } from 'next'
import Image from 'next/image'

export const metadata: Metadata = {
    title: 'About Us - AirPrint',
    description: 'We are committed to making the printing industry more sustainable and digital.',
}

export default function AboutUsPage() {
    return (
        <article className="pt-16 md:pt-24 pb-16 md:pb-32 overflow-hidden">
            {/* Intro Section */}
            <section className="container mx-auto px-4 max-w-3xl text-center flex flex-col items-center">
                <span className="text-blue-500 font-medium text-xl mb-2">About us.</span>
                <h1 className="text-4xl md:text-[3.5rem] font-light text-gray-900 mb-8 tracking-tight">Hey, we are AirPrint!</h1>
                <p className="text-gray-500 text-lg md:text-xl font-light leading-relaxed">
                    We are committed to making the printing industry more sustainable and digital. Join our motivated team to contribute to rapid growth and sustainability goals that really make a difference!
                </p>
            </section>

            {/* 4 Feature Columns */}
            <section className="container mx-auto px-4 mt-16 md:mt-24 max-w-6xl">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 md:gap-12 text-center lg:text-left">
                    <div className="flex flex-col gap-2">
                        <h3 className="text-blue-500 font-medium text-[1.15rem]">Eco-Friendly Packaging</h3>
                        <p className="text-gray-600 text-sm leading-relaxed mt-1">Sustainable technology and processes. Reusable and 100% recyclable bags.</p>
                    </div>
                    <div className="flex flex-col gap-2">
                        <h3 className="text-blue-500 font-medium text-[1.15rem]">Fully Customizable</h3>
                        <p className="text-gray-600 text-sm leading-relaxed mt-1">Our packaging can be customised to include essential information, such as origin, processing methods...</p>
                    </div>
                    <div className="flex flex-col gap-2">
                        <h3 className="text-blue-500 font-medium text-[1.15rem]">Worldwide Delivery</h3>
                        <p className="text-gray-600 text-sm leading-relaxed mt-1">We can provide your business with affordable packaging with hermetic technology.</p>
                    </div>
                    <div className="flex flex-col gap-2">
                        <h3 className="text-blue-500 font-medium text-[1.15rem]">Creative Design</h3>
                        <p className="text-gray-600 text-sm leading-relaxed mt-1">Packaging design ideas along with tips on how to make your product stand out.</p>
                    </div>
                </div>
            </section>

            {/* Feature Split Section */}
            <section className="mt-16 md:mt-24 mx-4 md:mx-8 lg:mx-auto max-w-[85rem] bg-[#F0F5FF] rounded-[2rem] overflow-hidden flex flex-col md:flex-row items-stretch">
                {/* Left Content */}
                <div className="flex-1 p-8 md:p-12 lg:p-20 flex flex-col justify-center">
                    <span className="text-blue-500 uppercase text-xs md:text-sm tracking-[0.2em] font-bold mb-4 block">ECO-CONSCIOUS BUSINESSES</span>
                    <h2 className="text-3xl md:text-[2.75rem] font-medium text-black leading-[1.1] mb-12 max-w-lg">
                        Go green with custom eco-friendly packaging
                    </h2>

                    <div className="flex flex-col sm:flex-row gap-6">
                        {/* Card 1 */}
                        <div className="bg-white rounded-[1.25rem] p-8 shadow-[0_8px_30px_rgb(0,0,0,0.04)] flex-1 flex flex-col justify-center">
                            <h4 className="text-blue-500 font-medium mb-3">The AirPrint Promise</h4>
                            <p className="text-gray-600 text-[0.9rem] leading-relaxed">We guarantee the highest quality products and customer experience with every order!</p>
                        </div>
                        {/* Card 2 */}
                        <div className="bg-white rounded-[1.25rem] p-8 shadow-[0_8px_30px_rgb(0,0,0,0.04)] flex-1 flex flex-col justify-center">
                            <h4 className="text-blue-500 font-medium mb-3">Extensive Option Library</h4>
                            <p className="text-gray-600 text-[0.9rem] leading-relaxed">Access over 50+ options that you can utilize to create your very own unique box experience.</p>
                        </div>
                    </div>
                </div>

                {/* Right Image Container */}
                <div className="flex-1 relative min-h-[300px] sm:min-h-[400px] md:min-h-[500px] lg:min-h-[600px] w-full flex items-center justify-center">
                    <Image
                        src="/images/air-print-about-img-1.png"
                        alt="Custom eco-friendly packaging mockups including coffee cups, bags and donuts"
                        fill
                        sizes="(max-width: 768px) 100vw, 50vw"
                        className="object-contain md:object-cover mix-blend-multiply"
                        priority
                    />
                </div>
            </section>

            {/* The Background Section */}
            <section className="mt-20 md:mt-32">
                <div className="container mx-auto px-4 max-w-4xl text-center mb-12 md:mb-16">
                    <span className="text-blue-500 font-light text-3xl md:text-4xl mb-2 block">The Background.</span>
                    <h2 className="text-4xl md:text-[3.5rem] font-light text-gray-900 mb-12 tracking-tight">Where we come from?.</h2>

                    <div className="flex flex-col gap-6 text-gray-500 text-sm md:text-[1.05rem] font-light leading-relaxed max-w-3xl mx-auto">
                        <p>AirPrint was built on a strong foundation in the printing and packaging industry, backed by years of hands-on experience from our parent company.</p>
                        <p>As the industry evolved, we saw the need for smarter, faster, and more sustainable solutions. This led to AirPrint a digital-first platform transforming traditional printing into an efficient and eco-friendly experience.</p>
                        <p>Today, we combine industry expertise with modern technology to drive innovation and sustainability forward.</p>
                    </div>
                </div>

                {/* Gray Image Container */}
                <div className="mx-4 md:mx-8 lg:mx-auto max-w-[85rem] bg-[#f8f9fa] rounded-[2rem] pt-12 pb-16 md:pt-24 md:pb-32 px-4 flex justify-center">
                    <div className="relative w-full max-w-4xl aspect-[4/3] md:aspect-[16/9]">
                        <Image
                            src="/images/air-print-about-img-2.png"
                            alt="AirPrint background packaging mockup box"
                            fill
                            sizes="(max-width: 1024px) 100vw, 1024px"
                            className="object-contain mix-blend-multiply"
                        />
                    </div>
                </div>
            </section>

            {/* Testimonials Section */}
            <Testimonials />
        </article>
    )
}
