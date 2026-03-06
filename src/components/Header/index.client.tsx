'use client'
import { Cart } from '@/components/Cart'
import { OpenCartButton } from '@/components/Cart/OpenCart'
import { CMSLink } from '@/components/Link'
import { ChevronDown, User } from 'lucide-react'
import Link from 'next/link'
import { Suspense, useState } from 'react'

import type { Header } from '@/payload-types'
import { MobileMenu } from './MobileMenu'

import { LogoIcon } from '@/components/icons/logo'
import { Search } from '@/components/Search'
import { cn } from '@/utilities/cn'
import { usePathname } from 'next/navigation'

type Props = {
  header: Header
}

export function HeaderClient({ header }: Props) {
  const menu = header.navItems || []
  const pathname = usePathname()
  const [activeMenuIndex, setActiveMenuIndex] = useState<number | null>(null)

  return (
    <header className="sticky top-0 z-[1000] w-full">
      {/* 
        ROW 1: Top Bar 
        Higher z-index than the overlay.
      */}
      <div className="relative bg-white z-[1002] border-b border-gray-100">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between py-4 gap-4">
            {/* Mobile Menu */}
            <div className="block md:hidden">
              <Suspense fallback={null}>
                <MobileMenu menu={menu} />
              </Suspense>
            </div>

            {/* Logo */}
            <Link href="/" className="flex items-center">
              <LogoIcon className="w-auto h-8" />
            </Link>

            {/* Search */}
            <div className="hidden md:flex flex-1 max-w-2xl mx-8">
              <Search />
            </div>

            {/* Right Side Actions */}
            <div className="flex items-center gap-6 lg:gap-8">
              <Suspense fallback={<OpenCartButton />}>
                <Cart />
              </Suspense>

              <Link
                href="/account"
                className="flex items-center gap-3 hover:text-blue-600 transition-colors"
              >
                <User size={24} strokeWidth={1.5} className="flex-shrink-0" />
                <span className="font-light text-sm hidden sm:inline whitespace-nowrap">Account</span>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* 
        ROW 2: Main Navigation 
        Solid white background ensures it blocks the overlay.
      */}
      <div className="relative bg-white z-[1001] border-b border-gray-100">
        <nav className="hidden md:block">
          <div className="container mx-auto px-4">
            <div className="flex items-center justify-center gap-0">
              {menu.length ? (
                menu.map((item, index) => {
                  const subMenuBlocks = (item as any).subMenu?.blocks || []
                  const hasSubMenu = subMenuBlocks.length > 0
                  const isDirectLink = item.enableDirectLink
                  const isActive = activeMenuIndex === index

                  return (
                    <div
                      key={item.id}
                      className="flex items-center"
                      onMouseEnter={() => hasSubMenu && setActiveMenuIndex(index)}
                      onMouseLeave={() => setActiveMenuIndex(null)}
                    >
                      {/* Top Level Item */}
                      {isDirectLink ? (
                        <CMSLink
                          {...item.link}
                          size={'clear'}
                          className={cn(
                            'navLink text-sm font-medium text-gray-700 whitespace-nowrap px-4 py-5 border-b-2 border-transparent transition-colors',
                            {
                              'text-blue-600 border-blue-600':
                                (item.link.url && item.link.url !== '/' && pathname.includes(item.link.url)) || isActive,
                              'text-blue-600': item.link.label === 'The AirPrint',
                            },
                          )}
                          appearance="nav"
                        />
                      ) : (
                        <button
                          type="button"
                          className={cn(
                            'navLink text-sm font-medium text-gray-700 whitespace-nowrap px-4 py-5 border-b-2 border-transparent flex items-center gap-1 cursor-pointer transition-colors outline-none',
                            {
                              'text-blue-600 border-blue-600': isActive,
                              'text-blue-600': item.link.label === 'The AirPrint',
                            },
                          )}
                        >
                          {item.link.label}
                          {hasSubMenu && <ChevronDown size={14} className={cn("transition-transform", isActive && "rotate-180")} />}
                        </button>
                      )}

                      {/* Mega Menu Dropdown */}
                      {hasSubMenu && isActive && (
                        <div className="megaMenuContainer">
                          <div className="container mx-auto px-4 py-12">
                            <div className="grid grid-cols-4 gap-8">
                              {subMenuBlocks.map((block: any, bIndex: number) => (
                                <div key={bIndex} className="flex flex-col">
                                  {block.title && <h3 className="megaMenuColumnTitle text-black">{block.title}</h3>}
                                  <div className="flex flex-col gap-2">
                                    {block.links?.map((subLink: any) => (
                                      <CMSLink
                                        key={subLink.id}
                                        {...subLink.link}
                                        className="megaMenuLink"
                                        appearance="inline"
                                      />
                                    ))}
                                  </div>
                                </div>
                              ))}
                            </div>
                          </div>
                        </div>
                      )}
                    </div>
                  )
                })
              ) : (
                <p className="text-sm text-gray-500 py-4">No navigation items</p>
              )}
            </div>
          </div>
        </nav>
      </div>

      {/* 
        Single Global Overlay 
        Visible only when a sub-menu is active.
        Positioned below the white header rows (z-index: 1000) 
      */}
      <div
        className={cn(
          "fixed inset-0 bg-black/40 transition-opacity duration-300 pointer-events-none z-[999]",
          activeMenuIndex !== null ? "opacity-100" : "opacity-0 invisible"
        )}
      />

      {/* Mobile Search */}
      <div className="md:hidden bg-white border-t border-gray-100">
        <div className="container mx-auto px-4 py-3">
          <Search />
        </div>
      </div>
    </header>
  )
}
