import 'dotenv/config'
import { getPayload } from 'payload'
import configPromise from './src/payload.config'

const MORE_REVIEWS = [
    { name: 'Sarah Connor', role: 'Operations Lead', review: 'An absolute lifesaver. Our efficiency has skyrocketed since we implemented this solution.' },
    { name: 'David Miller', role: 'CEO', review: 'The best investment we made this year. High quality, superb support, and great results.' },
    { name: 'Jessica Alba', role: 'Design Director', review: 'I love how clean and customizable the packaging options are. It really elevates our brand.' },
    { name: 'Robert Fox', role: 'Supply Chain Manager', review: 'Fast delivery and incredible quality. Their eco-friendly options are top tier.' },
    { name: 'Eleanor Pena', role: 'Founder', review: 'Amazing platform with great attention to detail. This has streamlined our entire process.' },
    { name: 'Albert Flores', role: 'Logistics Coordinator', review: 'Highly recommend for businesses looking for scalable and sustainable packaging.' },
    { name: 'Kathryn Murphy', role: 'Brand Manager', review: 'Our customers love the new packaging! Everything is seamless and professionally handled.' },
    { name: 'Kristin Watson', role: 'E-commerce Owner', review: 'Very reliable service, and the customizable prints are exceptional.' },
    { name: 'Jacob Jones', role: 'Product Manager', review: 'It completely transformed the way we handle our stock and packaging.' },
    { name: 'Cody Fisher', role: 'Operations Manager', review: 'Fantastic features that do exactly what we need. Truly a game-changer.' }
]

async function seed() {
    const payload = await getPayload({ config: configPromise })
    for (const rev of MORE_REVIEWS) {
        // Checking if already seeded to avoid duplicates during tests
        const existing = await payload.find({
            collection: 'reviews',
            where: { name: { equals: rev.name } },
            depth: 0,
        })
        if (existing.docs.length > 0) continue

        await payload.create({
            collection: 'reviews',
            data: {
                name: rev.name,
                role: rev.role,
                review: rev.review
            }
        })
        console.log(`Seeded review for: ${rev.name}`)
    }
    process.exit(0)
}

seed().catch((err) => {
    console.error(err)
    process.exit(1)
})
