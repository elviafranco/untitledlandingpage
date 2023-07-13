import Link from 'next/link'

import { Container } from '@/components/Container'
import { Logo } from '@/components/Logo'
import { NavLink } from '@/components/NavLink'

export function Footer() {
  return (
    <footer className="bg-indigo-700">
      <Container>
        <div className="py-8 flex items-center space-x-6">
          <Logo className="mx-auto h-10 w-auto" />
          <nav className="text-sm" aria-label="quick links">
            <div className="-my-1 flex justify-center gap-x-6">
              <NavLink href="#features">Features</NavLink>
              <NavLink href="#testimonials">Testimonials</NavLink>
            </div>
          </nav>
        </div>
        <div className="flex flex-col items-center border-t border-indigo-300/10 py-10 sm:flex-row-reverse sm:justify-between">
          <div className="flex gap-x-6 text-sm">
            <Link className="text-indigo-300 hover:text-white" href="#">Terms</Link>
            <Link className="text-indigo-300 hover:text-white" href="#">Privacy</Link>
            <Link className="text-indigo-300 hover:text-white" href="#">Cookies</Link>
          </div>
          <p className="mt-6 text-sm text-indigo-300 sm:mt-0">
            Copyright &copy; {new Date().getFullYear()} Untitled. All rights
            reserved.
          </p>
        </div>
      </Container>
    </footer>
  )
}
