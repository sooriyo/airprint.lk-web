import configPromise from '@payload-config'
import Image from 'next/image'
import Link from 'next/link'
import { getPayload } from 'payload'

// Optional: Fallback icon SVG for users without an avatar
const UserIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="w-full h-full text-gray-400" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
    </svg>
)

const QuoteIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="w-10 h-10 text-blue-500" viewBox="0 0 24 24" fill="currentColor">
        <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
    </svg>
)

function ReviewCard({ review, avatarUrl }: { review: any, avatarUrl: string | null }) {
    return (
        <div className="w-[320px] md:w-[450px] flex-shrink-0 bg-white border border-gray-200 rounded-2xl p-6 md:p-8 flex flex-col shadow-sm transition-shadow">
            <div className="flex items-start justify-between mb-6">
                <div className="flex items-center gap-4">
                    <div className="relative w-12 h-12 rounded-full overflow-hidden bg-gray-100 flex-shrink-0">
                        {avatarUrl ? (
                            <Image
                                src={avatarUrl}
                                alt={`${review.name}'s avatar`}
                                fill
                                sizes="48px"
                                className="object-cover"
                            />
                        ) : (
                            <UserIcon />
                        )}
                    </div>
                    <div className="flex flex-col">
                        <h4 className="font-semibold text-gray-900 text-[1.1rem] leading-snug">{review.name}</h4>
                        <p className="text-gray-400 text-sm whitespace-normal">{review.role}</p>
                    </div>
                </div>
                <div className="flex-shrink-0">
                    <QuoteIcon />
                </div>
            </div>
            <div className="text-gray-400 text-[0.95rem] leading-relaxed font-light whitespace-normal min-h-[5rem]">
                {review.review}
            </div>
        </div>
    )
}

export async function Testimonials() {
    const payload = await getPayload({ config: configPromise })

    // Fetch up to 20 reviews for the scrolling logic
    const result = await payload.find({
        collection: 'reviews',
        limit: 20,
        sort: '-createdAt', // Show newest first
    })

    const reviews = result.docs || []
    if (reviews.length === 0) return null

    // Split reviews into two rotating rows
    const row1 = reviews.filter((_, i) => i % 2 === 0)
    const row2 = reviews.filter((_, i) => i % 2 === 1)

    // Repeat items to fill screen and create infinite illusion
    // 4 copies is safe to bridge any gaps and scroll continuously safely
    const row1Duplicated = [...row1, ...row1, ...row1, ...row1]
    const row2Duplicated = [...row2, ...row2, ...row2, ...row2]

    return (
        <section className="py-24 bg-white overflow-hidden">
            <style>{`
                @keyframes marqueeLeft {
                    0% { transform: translateX(0); }
                    100% { transform: translateX(-25%); } 
                }
                @keyframes marqueeRight {
                    0% { transform: translateX(-25%); }
                    100% { transform: translateX(0); }
                }
                .animate-marquee-left {
                    animation: marqueeLeft 65s linear infinite;
                }
                .animate-marquee-right {
                    animation: marqueeRight 65s linear infinite;
                }
                
                /* Pause on hover functionality */
                .track-hover-pause:hover .animate-marquee-left,
                .track-hover-pause:hover .animate-marquee-right {
                    animation-play-state: paused;
                }
            `}</style>

            <div className="container mx-auto px-4 max-w-[85rem] mb-16 text-center flex flex-col items-center">
                {/* Header content */}
                <span className="text-blue-500 font-light text-3xl md:text-4xl mb-2 block">Testimonials.</span>
                <h2 className="text-4xl md:text-[3.25rem] font-light text-black mb-6 tracking-tight">
                    See what our customers say
                </h2>
                <p className="text-gray-600 mb-8 max-w-lg font-light">
                    Don&apos;t let what we say influence you, take it from our customers!
                </p>
                <Link
                    href="#reviews"
                    className="text-blue-500 font-bold text-sm tracking-wider uppercase hover:text-blue-700 transition-colors"
                >
                    SEE ALL REVIEWS
                </Link>
            </div>

            {/* Scrolling Tracks */}
            <div className="w-full relative overflow-hidden">
                {/* Fade transparent overlays for smooth edges */}
                <div className="absolute inset-y-0 left-0 w-16 md:w-48 bg-gradient-to-r from-white to-white/0 z-20 pointer-events-none"></div>
                <div className="absolute inset-y-0 right-0 w-16 md:w-48 bg-gradient-to-l from-white to-white/0 z-20 pointer-events-none"></div>

                <div className="flex flex-col gap-6 w-full track-hover-pause">
                    {/* Row 1 (Moves Left) */}
                    <div className="flex gap-6 w-max animate-marquee-left py-2">
                        {row1Duplicated.map((review, i) => {
                            const avatarUrl = typeof review.avatar === 'object' && review.avatar?.url ? review.avatar.url : null;
                            return (
                                <ReviewCard key={`r1-${i}`} review={review} avatarUrl={avatarUrl} />
                            )
                        })}
                    </div>

                    {/* Row 2 (Moves Right) */}
                    <div className="flex gap-6 w-max animate-marquee-right py-2">
                        {row2Duplicated.map((review, i) => {
                            const avatarUrl = typeof review.avatar === 'object' && review.avatar?.url ? review.avatar.url : null;
                            return (
                                <ReviewCard key={`r2-${i}`} review={review} avatarUrl={avatarUrl} />
                            )
                        })}
                    </div>
                </div>
            </div>
        </section>
    )
}
