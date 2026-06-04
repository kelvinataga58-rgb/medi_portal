import { useState } from 'react'
import { Link, Route, Routes } from 'react-router-dom'
import './App.css'

const doctors = [
  {
    name: 'Dr. Maya Patel',
    specialty: 'Cardiology',
    availability: 'Mon, Wed, Fri',
    image: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=600&q=80',
    review: '“Very clear, caring, and attentive during every consultation.”',
  },
  {
    name: 'Dr. Aaron Brooks',
    specialty: 'Family Medicine',
    availability: 'Daily',
    image: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&w=600&q=80',
    review: '“Excellent guidance and wonderful follow-up care for my family.”',
  },
  {
    name: 'Dr. Leila Hassan',
    specialty: 'Dermatology',
    availability: 'Tue, Thu',
    image: 'https://images.unsplash.com/photo-1594824476967-48c8b964273f?auto=format&fit=crop&w=600&q=80',
    review: '“Professional, friendly, and great at explaining treatment options.”',
  },
]

const appointments = [
  { patient: 'Ava Green', doctor: 'Dr. Maya Patel', slot: '09:30 AM', status: 'Confirmed' },
  { patient: 'Noah Reed', doctor: 'Dr. Aaron Brooks', slot: '11:15 AM', status: 'Pending' },
  { patient: 'Sophia Lane', doctor: 'Dr. Leila Hassan', slot: '02:00 PM', status: 'Confirmed' },
]

const prescriptions = [
  { medicine: 'Aspirin 100mg', dosage: '1 tablet daily', notes: 'Take after breakfast' },
  { medicine: 'Vitamin D3', dosage: '1 capsule weekly', notes: 'With lunch' },
  { medicine: 'Calcium Support', dosage: '2 tablets daily', notes: 'After dinner' },
]

const availableDoctors = [
  'Dr. Maya Patel — Cardiology',
  'Dr. Aaron Brooks — Family Medicine',
  'Dr. Leila Hassan — Dermatology',
  'Dr. Ethan Cole — Nutritionist',
]

const adminStats = [
  { label: 'Appointments today', value: '42', detail: '+8% vs yesterday' },
  { label: 'Active doctors', value: '18', detail: '3 specialists on call' },
  { label: 'Premium users', value: '126', detail: '24 new this week' },
  { label: 'Bed occupancy', value: '78%', detail: '12 beds available' },
]

const adminTasks = [
  { title: 'Review discharge summaries', time: '09:30 AM', status: 'Pending' },
  { title: 'Approve lab reports', time: '11:15 AM', status: 'In review' },
  { title: 'Confirm surgical roster', time: '02:00 PM', status: 'Ready' },
]

const adminAlerts = [
  'ICU bed turnover is on track for the afternoon shift.',
  '3 premium members requested urgent follow-up consultations.',
  'Pharmacy refill requests are 12% below the weekly average.',
]

function NavBar() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <nav className="topbar">
      <Link className="brand" to="/">MediPortal</Link>
      <button
        type="button"
        className="menu-toggle"
        onClick={() => setMenuOpen((prev) => !prev)}
        aria-label="Toggle navigation"
      >
        ☰
      </button>
      <div className={`nav-links ${menuOpen ? 'open' : ''}`}>
        <Link to="/doctors" onClick={() => setMenuOpen(false)}>Doctors</Link>
        <Link to="/appointments" onClick={() => setMenuOpen(false)}>Appointments</Link>
        <Link to="/prescriptions" onClick={() => setMenuOpen(false)}>Prescriptions</Link>
        <Link to="/available" onClick={() => setMenuOpen(false)}>Available Doctors</Link>
        <Link to="/premium" onClick={() => setMenuOpen(false)}>Premium</Link>
        <Link to="/admin" onClick={() => setMenuOpen(false)}>Admin Dashboard</Link>
      </div>
    </nav>
  )
}

function HomePage() {
  return (
    <main className="medical-shell home-page">
      <section className="hero-card landing-hero">
        <div className="hero-copy">
          <p className="eyebrow">Your trusted medical hub</p>
          <h1>Compassionate healthcare, beautifully organized.</h1>
          <p className="lead">
            Discover a calm, modern portal for premium medical support, fast appointments, and
            expert care guidance. Everything you need is just a click away.
          </p>
          <div className="hero-actions">
            <Link className="button primary" to="/premium">Apply Premium (650)</Link>
            <Link className="button secondary" to="/doctors">Meet our doctors</Link>
          </div>
        </div>

        <aside className="hero-panel highlight-panel" aria-label="Clinic highlights">
          <span className="badge">Why patients love us</span>
          <h2>Fast booking, clear advice, and personal attention</h2>
          <ul>
            <li>Priority premium access</li>
            <li>Easy doctor and appointment navigation</li>
            <li>Simple prescription and wellness tracking</li>
          </ul>
        </aside>
      </section>

      <section className="feature-grid">
        <article className="feature-card">
          <p className="emoji">🩺</p>
          <h3>Expert Doctors</h3>
          <p>Meet skilled specialists with easy-to-read profiles and trusted reviews.</p>
        </article>
        <article className="feature-card">
          <p className="emoji">📅</p>
          <h3>Smart Appointments</h3>
          <p>Stay on top of visits, timings, and care plans with a simple booking view.</p>
        </article>
        <article className="feature-card">
          <p className="emoji">💊</p>
          <h3>Prescription Support</h3>
          <p>Keep track of medicines, dosage instructions, and reminders in one place.</p>
        </article>
      </section>

      <section className="photo-strip">
        <img src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=900&q=80" alt="Doctors consulting in a bright clinic" />
        <img src="https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&w=900&q=80" alt="Medical team in a modern hospital" />
        <img src="https://images.unsplash.com/photo-1584515933487-779824d29309?auto=format&fit=crop&w=900&q=80" alt="Healthy lifestyle and wellness support" />
      </section>
    </main>
  )
}

function DoctorsPage() {
  return (
    <main className="page-shell">
      <section className="page-card">
        <p className="eyebrow">Doctors</p>
        <h1>Doctor details</h1>
        <div className="card-grid">
          {doctors.map((doctor) => (
            <article className="info-card doctor-card" key={doctor.name}>
              <img className="doctor-photo" src={doctor.image} alt={doctor.name} />
              <h3>{doctor.name}</h3>
              <p>{doctor.specialty}</p>
              <p className="muted">Available: {doctor.availability}</p>
              <p className="review-text">{doctor.review}</p>
            </article>
          ))}
        </div>
      </section>
    </main>
  )
}

function AppointmentsPage() {
  return (
    <main className="page-shell">
      <section className="page-card">
        <p className="eyebrow">Appointments</p>
        <h1>Upcoming visits</h1>
        <div className="card-grid">
          {appointments.map((item) => (
            <article className="info-card" key={`${item.patient}-${item.slot}`}>
              <h3>{item.patient}</h3>
              <p>{item.doctor}</p>
              <p className="muted">{item.slot} — {item.status}</p>
            </article>
          ))}
        </div>
      </section>
    </main>
  )
}

function PrescriptionsPage() {
  return (
    <main className="page-shell">
      <section className="page-card">
        <p className="eyebrow">Prescriptions</p>
        <h1>Prescription overview</h1>
        <div className="card-grid">
          {prescriptions.map((item) => (
            <article className="info-card" key={item.medicine}>
              <h3>{item.medicine}</h3>
              <p>{item.dosage}</p>
              <p className="muted">{item.notes}</p>
            </article>
          ))}
        </div>
      </section>
    </main>
  )
}

function AvailableDoctorsPage() {
  return (
    <main className="page-shell">
      <section className="page-card">
        <p className="eyebrow">Available doctors</p>
        <h1>Current availability</h1>
        <ul className="chip-list">
          {availableDoctors.map((doctor) => (
            <li key={doctor}>{doctor}</li>
          ))}
        </ul>
      </section>
    </main>
  )
}

function AdminDashboardPage() {
  return (
    <main className="admin-shell">
      <section className="page-card admin-hero-card">
        <p className="eyebrow">Hospital operations</p>
        <h1>Admin dashboard</h1>
        <p className="lead">
          A clean, clinic-ready overview for hospital leadership, staff coordination, and patient flow.
        </p>
      </section>

      <section className="admin-grid">
        {adminStats.map((item) => (
          <article className="admin-stat-card" key={item.label}>
            <p className="card-label">{item.label}</p>
            <h2>{item.value}</h2>
            <p className="muted">{item.detail}</p>
          </article>
        ))}
      </section>

      <section className="admin-panel-grid">
        <article className="page-card admin-panel">
          <p className="eyebrow">Today's priorities</p>
          <h2>Operational tasks</h2>
          <ul className="stack-list">
            {adminTasks.map((task) => (
              <li key={task.title} className="task-item">
                <strong>{task.title}</strong>
                <span>{task.time}</span>
                <em>{task.status}</em>
              </li>
            ))}
          </ul>
        </article>

        <article className="page-card admin-panel">
          <p className="eyebrow">Live alerts</p>
          <h2>Hospital updates</h2>
          <ul className="stack-list">
            {adminAlerts.map((alert) => (
              <li key={alert}>{alert}</li>
            ))}
          </ul>
        </article>
      </section>

      <section className="page-card admin-footer-card">
        <p className="eyebrow">Presentation-ready</p>
        <h2>Why this helps a hospital</h2>
        <p className="lead">
          This dashboard gives administrators a fast view of appointments, premium users, staffing, and care flow in one place.
        </p>
      </section>
    </main>
  )
}

function PremiumPage() {
  const [applied, setApplied] = useState(false)
  const [recordsVisible, setRecordsVisible] = useState(false)

  const handlePay = () => {
    setApplied(true)
    setRecordsVisible(true)
  }

  return (
    <main className="premium-shell">
      <section className="premium-card">
        <p className="eyebrow">Premium access</p>
        <h1>Upgrade to the premium plan</h1>
        <p className="lead">
          Premium members receive priority booking, extended consultation windows, and faster
          prescription renewals. The application fee is 650.
        </p>

        <div className="fee-box">
          <strong>Application fee:</strong> 650
        </div>

        <button
          type="button"
          className="button primary"
          onClick={handlePay}
        >
          Pay Premium Fee (650)
        </button>

        {applied && (
          <p className="success-note">
            Payment confirmed. You now have access to your private medical records.
          </p>
        )}

        {recordsVisible && (
          <article className="records-card">
            <p className="eyebrow">Private medical records</p>
            <h2>Secure patient summary</h2>
            <div className="records-grid">
              <div>
                <h3>Latest consultation</h3>
                <p>Routine cardiovascular review completed. Blood pressure stable, lifestyle guidance updated, and next follow-up scheduled for 14 days.</p>
              </div>
              <div>
                <h3>Lab overview</h3>
                <p>Cholesterol, glucose, and vitamin levels are within the recommended range. No urgent follow-up required.</p>
              </div>
              <div>
                <h3>Medication history</h3>
                <p>Current prescriptions include Aspirin 100mg, Vitamin D3, and Calcium Support. All renewals are up to date.</p>
              </div>
              <div>
                <h3>Care notes</h3>
                <p>Premium access includes priority physician messaging, personalized wellness reminders, and secure document sharing.</p>
              </div>
            </div>
            <p className="privacy-note">This private summary is displayed only after your premium payment is confirmed.</p>
          </article>
        )}
      </section>
    </main>
  )
}

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/doctors" element={<DoctorsPage />} />
        <Route path="/appointments" element={<AppointmentsPage />} />
        <Route path="/prescriptions" element={<PrescriptionsPage />} />
        <Route path="/available" element={<AvailableDoctorsPage />} />
        <Route path="/premium" element={<PremiumPage />} />
        <Route path="/admin" element={<AdminDashboardPage />} />
      </Routes>
    </>
  )
}

export default App
