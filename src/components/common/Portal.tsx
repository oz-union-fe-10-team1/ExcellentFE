import { useEffect, useState, type ReactNode } from 'react'
import { createPortal } from 'react-dom'

type PortalProps = {
  children: ReactNode // Portal 안에 렌더링될 내용
  containerId: string // 어떤 DOM id에 렌더링할지
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
