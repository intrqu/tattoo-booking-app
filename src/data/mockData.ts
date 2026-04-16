export type Client = {
  id: number;
  name: string;
  phone: string;
  email: string;
  instagram: string;
  status: 'New' | 'Inquiry' | 'Booked' | 'Follow-up';
  upcoming: string;
  notes: string;
  lastVisit: string;
}

export type Appointment = {
  id: number;
  client: string;
  type: string;
  date: string;
  time: string;
  duration: string;
  status: 'Confirmed' | 'Deposit Pending' | 'Reminder Sent';
}

export type Message = {
  id: number;
  client: string;
  body: string;
  at: string;
}

export const clients: Client[] = [
  {
    id: 1,
    name: 'Maya Thompson',
    phone: '(604) 555-0192',
    email: 'maya@email.com',
    instagram: '@mayathompson',
    status: 'Booked',
    upcoming: 'Apr 18, 1:00 PM',
    notes: 'Sleeve consult, prefers black and grey, allergic to latex adhesive.',
    lastVisit: 'Apr 2',
  },
  {
    id: 2,
    name: 'Jordan Lee',
    phone: '(778) 555-0144',
    email: 'jordan@email.com',
    instagram: '@jordraws',
    status: 'Inquiry',
    upcoming: 'Apr 19, 11:30 AM',
    notes: 'Wants forearm cover-up, sent 3 reference images, prefers email.',
    lastVisit: 'Mar 24',
  },
  {
    id: 3,
    name: 'Avery Chen',
    phone: '(236) 555-0109',
    email: 'avery@email.com',
    instagram: '@averyinked',
    status: 'Follow-up',
    upcoming: 'Apr 21, 4:00 PM',
    notes: 'Needs a touch-up reminder in 6 weeks, healed well last session.',
    lastVisit: 'Feb 11',
  },
  {
    id: 4,
    name: 'Riley Brooks',
    phone: '(604) 555-0178',
    email: 'riley@email.com',
    instagram: '@goonsketch',
    status: 'New',
    upcoming: 'Apr 22, 2:00 PM',
    notes: 'Submitted intake form for chest piece consultation.',
    lastVisit: 'Never',
  },
]

export const appointments: Appointment[] = [
  {
    id: 1,
    client: 'Maya Thompson',
    type: 'Consultation',
    date: 'Today',
    time: '10:00 AM',
    duration: '30 min',
    status: 'Confirmed',
  },
  {
    id: 2,
    client: 'Jordan Lee',
    type: 'Tattoo Session',
    date: 'Today',
    time: '12:00 PM',
    duration: '3 hrs',
    status: 'Deposit Pending',
  },
  {
    id: 3,
    client: 'Avery Chen',
    type: 'Touch-Up',
    date: 'Today',
    time: '4:00 PM',
    duration: '1 hr',
    status: 'Reminder Sent',
  },
  {
    id: 4,
    client: 'Riley Brooks',
    type: 'Consultation',
    date: 'Tomorrow',
    time: '2:00 PM',
    duration: '45 min',
    status: 'Confirmed',
  },
]

export const messages: Message[] = [
  { id: 1, client: 'Jordan Lee', body: 'Hey, can we move my appointment to next week?', at: '9:14 AM' },
  { id: 2, client: 'Riley Brooks', body: 'Just uploaded more reference images for the piece.', at: 'Yesterday' },
  { id: 3, client: 'Maya Thompson', body: 'Deposit sent, thanks.', at: 'Yesterday' },
]
