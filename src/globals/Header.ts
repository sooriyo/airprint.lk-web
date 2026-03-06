import type { GlobalConfig } from 'payload'

import { adminOnly } from '@/access/adminOnly'
import { link } from '@/fields/link'
import { revalidateGlobal } from '@/hooks/revalidateGlobal'

export const Header: GlobalConfig = {
  slug: 'header',
  access: {
    read: () => true,
    update: adminOnly,
  },
  hooks: {
    afterChange: [revalidateGlobal],
  },
  fields: [
    {
      name: 'navItems',
      type: 'array',
      fields: [
        link({
          appearances: false,
        }),
        {
          name: 'enableDirectLink',
          type: 'checkbox',
          admin: {
            description: 'If checked, the top-level item will be a clickable link. If unchecked, it will only trigger the sub-menu.',
          },
          defaultValue: true,
        },
        {
          name: 'subMenu',
          type: 'group',
          label: 'Sub Menu',
          fields: [
            {
              name: 'blocks',
              type: 'array',
              label: 'Menu Columns',
              fields: [
                {
                  name: 'title',
                  type: 'text',
                  label: 'Column Title',
                },
                {
                  name: 'links',
                  type: 'array',
                  fields: [
                    link({
                      appearances: false,
                    }),
                  ],
                },
              ],
            },
          ],
        },
      ],
      maxRows: 12,
    },
  ],
}
