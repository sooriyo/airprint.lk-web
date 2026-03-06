import type { CollectionConfig } from 'payload'

import { adminOnly } from '@/access/adminOnly'

export const Reviews: CollectionConfig = {
    slug: 'reviews',
    access: {
        create: adminOnly,
        delete: adminOnly,
        read: () => true,
        update: adminOnly,
    },
    admin: {
        useAsTitle: 'name',
        group: 'Content',
    },
    fields: [
        {
            name: 'name',
            type: 'text',
            required: true,
            label: 'Reviewer Name',
        },
        {
            name: 'role',
            type: 'text',
            required: true,
            label: 'Reviewer Role (e.g. Marketing Manager)',
        },
        {
            name: 'review',
            type: 'textarea',
            required: true,
            label: 'Review Content',
        },
        {
            name: 'avatar',
            type: 'upload',
            relationTo: 'media',
            required: false,
            label: 'Reviewer Avatar',
        },
    ],
}
