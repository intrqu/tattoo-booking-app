import type { PropsWithChildren, ReactNode } from 'react'

export function Panel({ title, action, children }: PropsWithChildren<{ title: string; action?: ReactNode }>) {
  return (
    <section className="rounded-[28px] border border-zinc-800 bg-zinc-950 p-5 shadow-panel">
      <div className="mb-4 flex items-center justify-between gap-3">
        <h2 className="text-lg font-semibold text-white">{title}</h2>
        {action}
      </div>
      {children}
    </section>
  )
}

export function Pill({ children, tone = 'default' }: PropsWithChildren<{ tone?: 'default' | 'success' | 'warn' | 'soft' }>) {
  const tones = {
    default: 'border-zinc-700 bg-zinc-900 text-zinc-100',
    success: 'border-emerald-900 bg-emerald-950 text-emerald-300',
    warn: 'border-amber-900 bg-amber-950 text-amber-300',
    soft: 'border-zinc-800 bg-zinc-900 text-zinc-400',
  }

  return <span className={`inline-flex rounded-full border px-2.5 py-1 text-xs font-medium ${tones[tone]}`}>{children}</span>
}

export function StatCard({ title, value, subtext, icon }: { title: string; value: string; subtext: string; icon: ReactNode }) {
  return (
    <div className="rounded-[28px] border border-zinc-800 bg-zinc-950 p-5 shadow-panel">
      <div className="flex items-start justify-between gap-3">
        <div>
          <p className="text-sm text-zinc-400">{title}</p>
          <p className="mt-2 text-3xl font-semibold tracking-tight text-white">{value}</p>
          <p className="mt-2 text-sm text-zinc-500">{subtext}</p>
        </div>
        <div className="rounded-2xl border border-zinc-800 bg-zinc-900 p-3">{icon}</div>
      </div>
    </div>
  )
}
