import React from 'react'

export function LogoIcon(props: React.ComponentProps<'img'>) {
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src="/media/airprint-logo.svg"
      alt="AirPrint Logo"
      {...props}
    />
  )
}
