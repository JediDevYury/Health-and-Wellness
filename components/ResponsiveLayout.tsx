import useResponsiveLayout from '@/hooks/useResponsiveLayout'
import React, { ReactElement } from 'react'
import { useEffect } from 'react'

type Props = {
  renderOnTablet?: () => ReactElement<any, any>
  renderOnPhone?: () => ReactElement<any, any>
  onLayoutChange?: (layout: 'tablet' | 'phone') => any
}

const ResponsiveLayout = (props: Props) => {
  const { isTablet } = useResponsiveLayout()
  const { renderOnTablet, renderOnPhone, onLayoutChange } = props
  // may return nothing:
  // 1. renderOnWide set but we have narrow layout
  // 2. renderOnNarrow set but we have wide layout
  let children: React.ReactElement<any, any> | null = null

  if (isTablet && renderOnTablet) {
    children = renderOnTablet()
  } else if (!isTablet && renderOnPhone) {
    children = renderOnPhone()
  }

  useEffect(() => {
    onLayoutChange && onLayoutChange(isTablet ? 'tablet' : 'phone')
  }, [isTablet])

  return children
}

export default ResponsiveLayout