import type { GlobalConfig } from 'payload'

import { adminOnly } from '@/access/adminOnly'
import { link } from '@/fields/link'

import { revalidateGlobal } from '@/hooks/revalidateGlobal'

export const Footer: GlobalConfig = {
  slug: 'footer',
  access: {
    read: () => true,
    update: adminOnly,
  },
  hooks: {
    afterChange: [revalidateGlobal],
  },
  fields: [
    {
      name: 'columns',
      type: 'array',
      label: 'Footer Columns',
      fields: [
        {
          name: 'title',
          type: 'text',
          required: true,
        },
        {
          name: 'navItems',
          type: 'array',
          fields: [
            link({
              appearances: false,
            }),
          ],
        },
      ],
      maxRows: 4,
    },
  ],
}
