'use client'

import ScrollUp from '@/components/Common/ScrollUp'
import EmailConfirmation from '@/components/EmailConfirmation'
import { Inter } from '@next/font/google'

// eslint-disable-next-line no-unused-vars
const inter = Inter({ subsets: ['latin'] })

export default function UserPage({ params }) {
  console.log(params.id)
  return (
    <>
      <ScrollUp />
      <EmailConfirmation id={params.id} />
    </>
  )
}
