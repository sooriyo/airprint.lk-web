import { LogoIcon } from '@/components/icons/logo'
import { CMSLink } from '@/components/Link'
import type { Footer as FooterType } from '@/payload-types'
import { getCachedGlobal } from '@/utilities/getGlobals'
import { Facebook, Instagram } from 'lucide-react'
import Link from 'next/link'
import './index.css'

export async function Footer() {
  const footer: FooterType = await getCachedGlobal('footer', 1)()
  const columns = footer.columns || []
  const currentYear = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Left Section */}
          <div className="lg:col-span-5">
            <Link href="/" className="inline-block">
              <LogoIcon className="footerLogo" />
            </Link>

            <h2 className="footerTagline">
              Create the perfect packaging solution for your product!
            </h2>

            <div className="max-w-md">
              <span className="footerNewsletterLabel">
                Sign up for exclusive offers and updates!
              </span>
              <div className="footerNewsletterForm">
                <svg width="20" height="20" viewBox="16 19 20 17" fill="none" xmlns="http://www.w3.org/2000/svg" className="flex-shrink-0">
                  <path d="M30.1641 34.5834H21.8307C19.3307 34.5834 17.6641 33.3334 17.6641 30.4167V24.5834C17.6641 21.6667 19.3307 20.4167 21.8307 20.4167H30.1641C32.6641 20.4167 34.3307 21.6667 34.3307 24.5834V30.4167C34.3307 33.3334 32.6641 34.5834 30.1641 34.5834Z" stroke="#A1A1AA" strokeWidth="1.2" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M30.1693 25L27.5609 27.0833C26.7026 27.7667 25.2943 27.7667 24.4359 27.0833L21.8359 25" stroke="#A1A1AA" strokeWidth="1.2" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="footerNewsletterInput"
                />
                <button type="button" className="footerNewsletterButton">
                  SUBSCRIBE
                </button>
              </div>
            </div>
          </div>

          {/* Right Section - Columns */}
          <div className="lg:col-span-7">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {columns.map((column, i) => (
                <div key={i}>
                  <h3 className="footerColumnTitle">{column.title}</h3>
                  <div className="flex flex-col gap-2">
                    {column.navItems?.map((item, j) => (
                      <CMSLink
                        key={j}
                        {...item.link}
                        className="footerNavLink"
                        appearance="inline"
                      />
                    ))}
                  </div>
                </div>
              ))}

              {/* Fallback columns if none exist in Payload yet */}
              {columns.length === 0 && (
                <>
                  <div>
                    <h3 className="footerColumnTitle">Information</h3>
                    <div className="text-xs opacity-50">Add columns in Payload Admin</div>
                  </div>
                  <div>
                    <h3 className="footerColumnTitle">Useful links</h3>
                  </div>
                  <div>
                    <h3 className="footerColumnTitle">About Us</h3>
                  </div>
                  <div>
                    <h3 className="footerColumnTitle">Our category</h3>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="footerBottom">
          <div className="footerSocials">
            <span className="footerSocialLabel">Connect with Us</span>
            <a href="#" className="footerSocialIcon">
              <Facebook size={18} strokeWidth={1.5} />
            </a>
            <a href="#" className="footerSocialIcon">
              <Instagram size={18} strokeWidth={1.5} />
            </a>
          </div>

          <div className="footerCopyright">
            © {currentYear} AirPrint. All Rights Reserved
          </div>
        </div>
      </div>
    </footer>
  )
}
