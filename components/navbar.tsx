import { ReactNode } from 'react'
import { Shield } from 'lucide-react'

export default function Navbar({ children }: { children: ReactNode }) {
  return (
    <header className="h-16 bg-navbar text-navbar-foreground flex items-center justify-between px-4 shadow-md">
      <div className="flex items-center space-x-2">
        <Shield className="h-8 w-8 text-primary" />
        <h1 className="text-xl font-bold">Cybersecurity Portfolio</h1>
      </div>
      <div>{children}</div>
    </header>
  )
}

