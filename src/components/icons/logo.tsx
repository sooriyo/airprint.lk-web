import React from 'react'
import Image from 'next/image'

export function LogoIcon({ className }: { className?: string }) {
  return (
    <Image
      src="/media/airprint-logo.svg"
      alt="AirPrint Logo"
      width={108}
      height={40}
      className={className}
      priority
    />
  )
}
