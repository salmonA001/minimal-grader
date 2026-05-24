import { SITE_ADDRESS } from '@/lib/brand'
import { cn } from '@/lib/utils'

export function SiteAddress({ className }: { className?: string }) {
  return (
    <span className={cn('font-mono text-xs text-gray-500', className)}>
      {SITE_ADDRESS}
    </span>
  )
}
