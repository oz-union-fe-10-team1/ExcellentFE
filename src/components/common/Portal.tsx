import { useEffect, useState, type ReactNode } from 'react'
import { createPortal } from 'react-dom'

interface PortalProps {
  children: ReactNode
  containerId: string
}

const Portal = ({ children, containerId }: PortalProps) => {
  const [container, setContainer] = useState<HTMLElement | null>(null)

  useEffect(() => {
    const portalContainer = document.getElementById(containerId)
    setContainer(portalContainer)
  }, [containerId])

  if (!container) return null

  return createPortal(children, container)
}

export default Portal
