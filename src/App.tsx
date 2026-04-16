import { useMemo, useState } from 'react'
import {
  Bell,
  Calendar,
  CheckCircle2,
  Clock3,
  Filter,
  Instagram,
  Mail,
  MessageSquare,
  Phone,
  Plus,
  Search,
  StickyNote,
  Upload,
  Users,
} from 'lucide-react'
import { Sidebar } from './components/Sidebar'
import { Panel, Pill, StatCard } from './components/UI'
import { appointments, clients, messages } from './data/mockData'

function App() {
  const [activeTab, setActiveTab] = useState('dashboard')
  const [query, setQuery] = useState('')
  const [selectedClientId, setSelectedClientId] = useState(clients[0].id)

  const filteredClients = useMemo(() => {
    const q = query.toLowerCase().trim()
    if (!q) return clients

    return clients.filter((client) => {
      return [client.name, client.email, client.phone, client.instagram, client.notes].some((value) =>
        value.toLowerCase().includes(q),
      )
    })
  }, [query])

  const selectedClient = filteredClients.find((client) => client.id === selectedClientId) ?? clients[0]

  return (
    <div className="min-h-screen bg-zinc-950 text-white">
      <div className="mx-auto grid min-h-screen max-w-[1600px] gap-5 p-5 lg:grid-cols-[280px_minmax(0,1fr)]">
        <Sidebar activeTab={activeTab} onSelect={setActiveTab} />

        <main className="space-y-5">
          <header className="flex flex-col gap-4 rounded-[28px] border border-zinc-800 bg-gradient-to-br from-zinc-950 via-zinc-950 to-zinc-900 p-6 shadow-panel lg:flex-row lg:items-center lg:justify-between">
            <div>
              <p className="text-sm uppercase tracking-[0.3em] text-zinc-500">Tattoo studio manager</p>
              <h1 className="mt-2 text-3xl font-semibold tracking-tight">Run bookings, forms, notes, and clients in one place</h1>
              <p className="mt-3 max-w-3xl text-sm text-zinc-400">
                This starter app is built for solo tattoo artists who want one clean dashboard instead of juggling Setmore,
                Jotform, notes apps, and DMs.
              </p>
            </div>

            <div className="flex flex-wrap gap-3">
              <button className="inline-flex items-center gap-2 rounded-2xl border border-zinc-700 bg-zinc-900 px-4 py-3 text-sm font-medium text-white hover:bg-zinc-800">
                <Bell className="h-4 w-4" />
                Send reminders
              </button>
              <button className="inline-flex items-center gap-2 rounded-2xl bg-white px-4 py-3 text-sm font-semibold text-black hover:bg-zinc-200">
                <Plus className="h-4 w-4" />
                New appointment
              </button>
            </div>
          </header>

          <section className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            <StatCard title="Appointments today" value="4" subtext="2 consultations, 2 sessions" icon={<Calendar className="h-5 w-5 text-zinc-300" />} />
            <StatCard title="Active clients" value="126" subtext="14 added this month" icon={<Users className="h-5 w-5 text-zinc-300" />} />
            <StatCard title="Reminders queued" value="9" subtext="Email ready for tomorrow" icon={<Bell className="h-5 w-5 text-zinc-300" />} />
            <StatCard title="Forms waiting" value="3" subtext="New inquiries to review" icon={<StickyNote className="h-5 w-5 text-zinc-300" />} />
          </section>

          <section className="grid gap-5 xl:grid-cols-[1.25fr_0.95fr]">
            <div className="space-y-5">
              <Panel
                title={activeTab === 'clients' ? 'Client list' : 'Client inbox'}
                action={
                  <div className="flex items-center gap-2">
                    <div className="relative hidden md:block">
                      <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-zinc-500" />
                      <input
                        value={query}
                        onChange={(e) => setQuery(e.target.value)}
                        placeholder="Search clients"
                        className="w-64 rounded-2xl border border-zinc-800 bg-zinc-900 py-2 pl-9 pr-3 text-sm text-white outline-none placeholder:text-zinc-500 focus:border-zinc-600"
                      />
                    </div>
                    <button className="inline-flex items-center gap-2 rounded-2xl border border-zinc-800 bg-zinc-900 px-3 py-2 text-sm text-zinc-300 hover:text-white">
                      <Filter className="h-4 w-4" />
                      Filter
                    </button>
                  </div>
                }
              >
                <div className="space-y-3">
                  {filteredClients.map((client) => (
                    <button
                      key={client.id}
                      onClick={() => setSelectedClientId(client.id)}
                      className={`flex w-full flex-col gap-3 rounded-3xl border p-4 text-left transition md:flex-row md:items-center md:justify-between ${
                        selectedClient.id === client.id
                          ? 'border-zinc-600 bg-zinc-900'
                          : 'border-zinc-800 bg-zinc-950 hover:border-zinc-700 hover:bg-zinc-900/70'
                      }`}
                    >
                      <div>
                        <div className="flex items-center gap-3">
                          <p className="font-semibold text-white">{client.name}</p>
                          <Pill tone={client.status === 'Booked' ? 'success' : client.status === 'Inquiry' ? 'warn' : 'soft'}>
                            {client.status}
                          </Pill>
                        </div>
                        <p className="mt-2 text-sm text-zinc-400">{client.notes}</p>
                      </div>
                      <div className="shrink-0 text-sm text-zinc-500">
                        <p>Next: {client.upcoming}</p>
                        <p className="mt-1">Last visit: {client.lastVisit}</p>
                      </div>
                    </button>
                  ))}
                </div>
              </Panel>

              <Panel title="Appointments">
                <div className="space-y-3">
                  {appointments.map((appointment) => (
                    <div key={appointment.id} className="flex flex-col gap-3 rounded-3xl border border-zinc-800 bg-zinc-900/40 p-4 md:flex-row md:items-center md:justify-between">
                      <div>
                        <div className="flex items-center gap-3">
                          <p className="font-semibold text-white">{appointment.client}</p>
                          <Pill tone={appointment.status === 'Confirmed' ? 'success' : appointment.status === 'Deposit Pending' ? 'warn' : 'soft'}>
                            {appointment.status}
                          </Pill>
                        </div>
                        <p className="mt-2 text-sm text-zinc-400">{appointment.type}</p>
                      </div>
                      <div className="grid gap-2 text-sm text-zinc-400 md:text-right">
                        <p>{appointment.date}</p>
                        <p>{appointment.time}</p>
                        <p>{appointment.duration}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </Panel>
            </div>

            <div className="space-y-5">
              <Panel title="Client profile">
                <div className="rounded-3xl border border-zinc-800 bg-zinc-900/40 p-5">
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <p className="text-2xl font-semibold text-white">{selectedClient.name}</p>
                      <p className="mt-2 text-sm text-zinc-400">Saved profile, appointment history, and private artist notes.</p>
                    </div>
                    <Pill tone={selectedClient.status === 'Booked' ? 'success' : selectedClient.status === 'Inquiry' ? 'warn' : 'soft'}>
                      {selectedClient.status}
                    </Pill>
                  </div>

                  <div className="mt-5 grid gap-3 text-sm text-zinc-300">
                    <div className="flex items-center gap-3"><Phone className="h-4 w-4 text-zinc-500" />{selectedClient.phone}</div>
                    <div className="flex items-center gap-3"><Mail className="h-4 w-4 text-zinc-500" />{selectedClient.email}</div>
                    <div className="flex items-center gap-3"><Instagram className="h-4 w-4 text-zinc-500" />{selectedClient.instagram}</div>
                    <div className="flex items-center gap-3"><Clock3 className="h-4 w-4 text-zinc-500" />Upcoming: {selectedClient.upcoming}</div>
                  </div>

                  <div className="mt-5 rounded-2xl border border-zinc-800 bg-zinc-950/60 p-4">
                    <p className="mb-2 text-xs uppercase tracking-[0.25em] text-zinc-500">Artist notes</p>
                    <p className="text-sm leading-6 text-zinc-300">{selectedClient.notes}</p>
                  </div>

                  <div className="mt-5 grid gap-3 sm:grid-cols-2">
                    <button className="inline-flex items-center justify-center gap-2 rounded-2xl border border-zinc-800 bg-zinc-950 px-4 py-3 text-sm text-zinc-300 hover:text-white">
                      <Upload className="h-4 w-4" />
                      Upload references
                    </button>
                    <button className="inline-flex items-center justify-center gap-2 rounded-2xl bg-white px-4 py-3 text-sm font-semibold text-black hover:bg-zinc-200">
                      <MessageSquare className="h-4 w-4" />
                      Message client
                    </button>
                  </div>
                </div>
              </Panel>

              <Panel title="Recent messages">
                <div className="space-y-3">
                  {messages.map((message) => (
                    <div key={message.id} className="rounded-3xl border border-zinc-800 bg-zinc-900/40 p-4">
                      <div className="flex items-center justify-between gap-3">
                        <p className="font-medium text-white">{message.client}</p>
                        <p className="text-xs text-zinc-500">{message.at}</p>
                      </div>
                      <p className="mt-2 text-sm leading-6 text-zinc-400">{message.body}</p>
                    </div>
                  ))}
                </div>
              </Panel>

              <Panel title="Form builder preview">
                <div className="space-y-3">
                  {['Tattoo inquiry form', 'Consultation intake', 'Consent + aftercare form'].map((item) => (
                    <div key={item} className="flex items-center justify-between rounded-2xl border border-zinc-800 bg-zinc-900/40 px-4 py-3">
                      <div>
                        <p className="font-medium text-white">{item}</p>
                        <p className="text-sm text-zinc-500">Replace external form tools with branded studio forms.</p>
                      </div>
                      <CheckCircle2 className="h-5 w-5 text-zinc-500" />
                    </div>
                  ))}
                </div>
              </Panel>
            </div>
          </section>
        </main>
      </div>
    </div>
  )
}

export default App
