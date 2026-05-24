import { cn } from '@/lib/utils'

export function BrandMark({ className }: { className?: string }) {
  return (
    <span className={cn('font-semibold tracking-tight', className)}>
      Grader<span className="text-gray-400"> Samsen</span>
    </span>
  )
}
