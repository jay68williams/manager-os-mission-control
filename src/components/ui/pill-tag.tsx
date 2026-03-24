'use client'

import { type ReactNode } from 'react'

export type PillVariant = 'default' | 'active' | 'warning' | 'critical' | 'info'

const variantStyles: Record<PillVariant, string> = {
  default:  'bg-[#252524] text-[#888884]',
  active:   'bg-[#1E7B3A]/15 text-[#4ADE80]',
  warning:  'bg-[#D4830A]/15 text-[#FBBF24]',
  critical: 'bg-[#E8353C]/15 text-[#E8353C]',
  info:     'bg-[#3B82F6]/15 text-[#60A5FA]',
}

interface PillTagProps {
  children: ReactNode
  variant?: PillVariant
  className?: string
}

export function PillTag({ children, variant = 'default', className = '' }: PillTagProps) {
  return (
    <span
      className={`inline-flex items-center rounded-[6px] px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.08em] leading-none select-none ${variantStyles[variant]} ${className}`}
    >
      {children}
    </span>
  )
}
