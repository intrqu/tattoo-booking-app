import { Bell, CalendarDays, FileText, LayoutDashboard, MessageSquare, Settings, Users } from 'lucide-react'

const tabs = [
  { id: 'dashboard', label: 'Dashboard', icon: LayoutDashboard },
  { id: 'clients', label: 'Clients', icon: Users },
  { id: 'calendar', label: 'Appointments', icon: CalendarDays },
  { id: 'forms', label: 'Forms', icon: FileText },
  { id: 'messages', label: 'Messages', icon: MessageSquare },
  { id: 'settings', label: 'Settings', icon: Settings },
]

type SidebarProps = {
  activeTab: string;
  onSelect: (tab: string) => void;
}

export function Sidebar({ activeTab, onSelect }: SidebarProps) {
  return (
    <aside className="flex h-full flex-col rounded-[28px] border border-zinc-800 bg-zinc-950/90 p-4 shadow-panel">
      <div className="mb-6 flex items-center gap-3 rounded-2xl border border-zinc-800 bg-zinc-900/60 p-4">
        <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white text-sm font-bold text-black">
          IF
        </div>
        <div>
          <p className="text-xs uppercase tracking-[0.25em] text-zinc-500">Studio App</p>
          <h1 className="text-lg font-semibold text-white">Inkflow</h1>
        </div>
      </div>

      <nav className="space-y-2">
        {tabs.map(({ id, label, icon: Icon }) => {
          const active = activeTab === id
          return (
            <button
              key={id}
              onClick={() => onSelect(id)}
              className={`flex w-full items-center gap-3 rounded-2xl px-4 py-3 text-left transition ${
                active
                  ? 'bg-white text-black'
                  : 'border border-transparent text-zinc-400 hover:border-zinc-800 hover:bg-zinc-900 hover:text-white'
              }`}
            >
              <Icon className="h-4 w-4" />
              <span className="text-sm font-medium">{label}</span>
            </button>
          )
        })}
      </nav>

      <div className="mt-auto rounded-2xl border border-zinc-800 bg-zinc-900/70 p-4">
        <div className="mb-2 flex items-center gap-2 text-white">
          <Bell className="h-4 w-4" />
          <p className="text-sm font-medium">Today</p>
        </div>
        <p className="text-sm text-zinc-400">3 reminders going out, 4 appointments booked, 1 deposit pending.</p>
      </div>
    </aside>
  )
}
