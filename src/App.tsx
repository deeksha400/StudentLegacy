import { type ReactNode } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Award, BadgeCheck, BarChart3, Brain, Building2, Camera, ChevronRight, FileText, GraduationCap, Landmark, Lock, MessageSquare, Route as RouteIcon, Search, ShieldCheck, Sparkles, TrendingUp, Upload, UserCircle2, Users } from 'lucide-react';
import { Link, NavLink, Route, Routes } from 'react-router-dom';

const navItems = [
  { to: '/', label: 'Home' },
  { to: '/dashboard', label: 'Student Dashboard' },
  { to: '/passport', label: 'Digital Passport' },
  { to: '/upload', label: 'Upload Certificate' },
  { to: '/wall', label: 'Achievement Wall' },
  { to: '/faculty', label: 'Faculty' },
  { to: '/admin', label: 'Admin' },
  { to: '/resume', label: 'Resume' },
];

const stats = [
  { label: 'Verified Certificates', value: '18.4k', icon: ShieldCheck },
  { label: 'Active Students', value: '5k+', icon: Users },
  { label: 'AI Verification', value: '96%', icon: Brain },
  { label: 'Career Match', value: '92%', icon: TrendingUp },
];

const dashboardCards = [
  { title: 'Achievement Passport', value: '15 Certificates', subtitle: 'Gold Awards 5 • 3 papers • 8 skills' },
  { title: 'Achievement Score', value: '92%', subtitle: 'Top 8% of the university' },
  { title: 'Current Ranking', value: '#12', subtitle: 'Computer Science Dept' },
];

const timeline = [
  { year: '2024', title: 'Java Certification', detail: 'Advanced backend development track' },
  { year: '2025', title: 'National Hackathon Winner', detail: 'AI-powered student innovation challenge' },
  { year: '2026', title: 'Research Publication', detail: 'Published in IEEE student innovation review' },
];

const wallPosts = [
  { name: 'Ananya', title: 'Won National Hackathon', likes: 240, comments: 45 },
  { name: 'Rohan', title: 'Published AI Research Paper', likes: 182, comments: 28 },
  { name: 'Meera', title: 'Completed Google Cloud Scholar Track', likes: 164, comments: 21 },
];

const facultyQueue = [
  { student: 'Deeksha', cert: 'Java Certification', status: 'Pending' },
  { student: 'Rishi', cert: 'AI Workshop', status: 'Verified' },
  { student: 'Asha', cert: 'Leadership Summit', status: 'Rejected' },
];

const adminMetrics = [
  { label: 'Total Students', value: '5000' },
  { label: 'Verified Certificates', value: '18450' },
  { label: 'Top Department', value: 'Computer Science' },
  { label: 'Growth', value: '+25%' },
];

function AppShell({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen bg-transparent text-slate-100">
      <header className="sticky top-0 z-20 border-b border-white/10 bg-midnight/80 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
          <Link to="/" className="flex items-center gap-3 text-lg font-semibold">
            <div className="rounded-full border border-gold/30 bg-gold/10 p-2">
              <Award className="h-5 w-5 text-gold" />
            </div>
            <span>CrediVault</span>
          </Link>
          <nav className="hidden items-center gap-6 md:flex">
            {navItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                className={({ isActive }) =>
                  `text-sm transition ${isActive ? 'text-gold' : 'text-slate-300 hover:text-white'}`
                }
              >
                {item.label}
              </NavLink>
            ))}
          </nav>
          <div className="flex items-center gap-3">
            <Link to="/auth" className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm font-medium text-slate-200">
              Login / Register
            </Link>
            <Link to="/dashboard" className="rounded-full border border-gold/40 bg-gold/10 px-4 py-2 text-sm font-medium text-gold">
              Launch Portal
            </Link>
          </div>
        </div>
      </header>
      <main>{children}</main>
    </div>
  );
}

function HomePage() {
  return (
    <section className="mx-auto flex max-w-7xl flex-col gap-16 px-4 py-12 sm:px-6 lg:px-8 lg:py-20">
      <div className="grid items-center gap-10 lg:grid-cols-[1.1fr_0.9fr]">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="space-y-8">
          <div className="inline-flex items-center gap-2 rounded-full border border-gold/20 bg-gold/10 px-3 py-1 text-sm text-gold">
            <Sparkles className="h-4 w-4" /> AI-powered university achievement ecosystem
          </div>
          <h1 className="text-4xl font-semibold tracking-tight text-white sm:text-5xl lg:text-6xl">
            Modern achievement intelligence for students, faculty, and universities.
          </h1>
          <p className="max-w-xl text-lg leading-8 text-slate-300">
            CrediVault unifies certificate verification, achievement passports, career guidance, and social recognition in one premium digital experience.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link to="/dashboard" className="inline-flex items-center gap-2 rounded-full bg-gold px-5 py-3 font-semibold text-slate-950 transition hover:scale-[1.02]">
              Explore Student Dashboard <ArrowRight className="h-4 w-4" />
            </Link>
            <Link to="/upload" className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-5 py-3 font-semibold text-white">
              Upload Certificate <Upload className="h-4 w-4" />
            </Link>
          </div>
        </motion.div>

        <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6, delay: 0.1 }} className="rounded-3xl border border-white/10 bg-white/10 p-6 shadow-glow backdrop-blur-2xl">
          <div className="rounded-2xl border border-gold/20 bg-slate-950/80 p-6">
            <div className="mb-6 flex items-center justify-between">
              <div>
                <p className="text-sm text-slate-400">Student Profile</p>
                <h2 className="text-xl font-semibold">Deeksha</h2>
              </div>
              <div className="rounded-full border border-gold/20 bg-gold/10 p-3 text-gold">
                <UserCircle2 className="h-6 w-6" />
              </div>
            </div>
            <div className="grid gap-3">
              {stats.map((stat) => (
                <div key={stat.label} className="flex items-center justify-between rounded-2xl border border-white/10 bg-white/5 px-4 py-3">
                  <div className="flex items-center gap-3">
                    <div className="rounded-xl bg-gold/10 p-2 text-gold"><stat.icon className="h-4 w-4" /></div>
                    <span className="text-sm text-slate-300">{stat.label}</span>
                  </div>
                  <span className="font-semibold text-white">{stat.value}</span>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>

      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        {stats.map((stat) => (
          <div key={stat.label} className="rounded-3xl border border-white/10 bg-white/5 p-5 backdrop-blur-xl">
            <div className="mb-4 inline-flex rounded-2xl bg-gold/10 p-3 text-gold"><stat.icon className="h-5 w-5" /></div>
            <p className="text-3xl font-semibold text-white">{stat.value}</p>
            <p className="mt-2 text-sm text-slate-400">{stat.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

function DashboardPage() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
      <div className="mb-8 flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
        <div>
          <p className="text-gold">Student dashboard</p>
          <h1 className="text-3xl font-semibold text-white">Welcome back, Deeksha</h1>
        </div>
        <div className="rounded-full border border-gold/20 bg-gold/10 px-4 py-2 text-sm text-gold">Achievement passport ready for sharing</div>
      </div>
      <div className="grid gap-6 xl:grid-cols-[1.2fr_0.8fr]">
        <div className="rounded-3xl border border-white/10 bg-white/10 p-6 backdrop-blur-xl">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-slate-400">Student profile</p>
              <h2 className="text-2xl font-semibold">Deeksha • Computer Science</h2>
            </div>
            <div className="flex gap-2">
              <button className="rounded-full border border-white/10 bg-white/5 px-3 py-2 text-sm">Edit profile</button>
              <button className="rounded-full bg-gold px-3 py-2 text-sm font-semibold text-slate-950">Share profile</button>
            </div>
          </div>
          <div className="mt-6 grid gap-4 md:grid-cols-3">
            {dashboardCards.map((card) => (
              <div key={card.title} className="rounded-2xl border border-white/10 bg-slate-950/70 p-4">
                <p className="text-sm text-slate-400">{card.title}</p>
                <p className="mt-2 text-xl font-semibold text-white">{card.value}</p>
                <p className="mt-2 text-sm text-slate-400">{card.subtitle}</p>
              </div>
            ))}
          </div>
          <div className="mt-6 grid gap-4 lg:grid-cols-2">
            <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
              <div className="flex items-center justify-between">
                <p className="font-medium">Certificates</p>
                <span className="text-gold">15</span>
              </div>
              <div className="mt-3 flex flex-wrap gap-2">
                {['Java', 'AI', 'Cloud', 'Research'].map((tag) => (
                  <span key={tag} className="rounded-full border border-gold/20 bg-gold/10 px-3 py-1 text-sm text-gold">{tag}</span>
                ))}
              </div>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
              <div className="flex items-center justify-between">
                <p className="font-medium">Skills</p>
                <span className="text-gold">8 technical skills</span>
              </div>
              <div className="mt-3 flex flex-wrap gap-2">
                {['React', 'Spring Boot', 'PostgreSQL', 'System Design'].map((skill) => (
                  <span key={skill} className="rounded-full border border-white/10 bg-slate-900/70 px-3 py-1 text-sm text-slate-300">{skill}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="space-y-6">
          <div className="rounded-3xl border border-white/10 bg-gradient-to-br from-gold/20 to-white/5 p-6">
            <div className="flex items-center gap-3 text-gold">
              <Brain className="h-5 w-5" />
              <h3 className="font-semibold">AI Verification Snapshot</h3>
            </div>
            <p className="mt-4 text-4xl font-semibold text-white">96% Verified</p>
            <p className="mt-2 text-sm text-slate-300">Latest certificate matched student identity, organization, and date metadata.</p>
          </div>
          <div className="rounded-3xl border border-white/10 bg-white/10 p-6 backdrop-blur-xl">
            <div className="flex items-center gap-3">
              <BadgeCheck className="h-5 w-5 text-gold" />
              <h3 className="font-semibold">Badges</h3>
            </div>
            <div className="mt-4 flex flex-wrap gap-2">
              {['Innovator', 'Gold Achiever', 'Startup Mindset', 'Coding Champion'].map((badge) => (
                <span key={badge} className="rounded-full border border-gold/20 bg-gold/10 px-3 py-1 text-sm text-gold">{badge}</span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function PassportPage() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
      <div className="rounded-3xl border border-white/10 bg-white/10 p-6 backdrop-blur-xl">
        <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <p className="text-gold">Digital achievement passport</p>
            <h1 className="text-3xl font-semibold text-white">Deeksha's public achievement profile</h1>
          </div>
          <div className="rounded-full border border-gold/20 bg-gold/10 px-4 py-2 text-sm text-gold">Shareable like a LinkedIn profile</div>
        </div>
        <div className="mt-8 grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="rounded-3xl border border-white/10 bg-slate-950/70 p-6">
            <div className="flex items-center gap-4">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gold/10 text-gold"><GraduationCap className="h-7 w-7" /></div>
              <div>
                <h2 className="text-xl font-semibold text-white">Deeksha</h2>
                <p className="text-slate-400">B.Tech • Computer Science • AI Track</p>
              </div>
            </div>
            <div className="mt-6 grid gap-3 text-sm text-slate-300">
              <div className="rounded-2xl border border-white/10 bg-white/5 p-3">Achievements: 12 awards, 3 papers, 2 hackathon wins</div>
              <div className="rounded-2xl border border-white/10 bg-white/5 p-3">Skills: Java, React, Spring Boot, Cloud Computing, System Design</div>
              <div className="rounded-2xl border border-white/10 bg-white/5 p-3">Projects: Smart Attendance Platform, AI Study Copilot, Campus Social Wall</div>
            </div>
          </div>
          <div className="space-y-6">
            <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
              <h3 className="text-lg font-semibold">Achievement timeline</h3>
              <div className="mt-4 space-y-4">
                {timeline.map((item, index) => (
                  <div key={item.year} className="flex gap-4">
                    <div className="flex flex-col items-center">
                      <div className="h-3 w-3 rounded-full bg-gold" />
                      {index < timeline.length - 1 ? <div className="mt-1 h-full w-px bg-white/10" /> : null}
                    </div>
                    <div>
                      <p className="text-sm text-gold">{item.year}</p>
                      <p className="font-medium text-white">{item.title}</p>
                      <p className="text-sm text-slate-400">{item.detail}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function UploadPage() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
      <div className="grid gap-6 xl:grid-cols-[1.1fr_0.9fr]">
        <div className="rounded-3xl border border-white/10 bg-white/10 p-6 backdrop-blur-xl">
          <p className="text-gold">Upload certificate</p>
          <h1 className="mt-2 text-3xl font-semibold text-white">AI Smart Verify</h1>
          <div className="mt-6 rounded-3xl border border-dashed border-gold/40 bg-gold/10 p-8 text-center">
            <Upload className="mx-auto h-10 w-10 text-gold" />
            <p className="mt-4 text-lg font-semibold text-white">Drop certificate PDF or image</p>
            <p className="mt-2 text-sm text-slate-400">AI will extract student name, organization, title, date, category, and skills.</p>
            <button className="mt-6 rounded-full bg-gold px-4 py-2 font-semibold text-slate-950">Choose file</button>
          </div>
          <Link to="/verification" className="mt-6 inline-flex items-center gap-2 text-sm text-gold">
            View AI verification report <ChevronRight className="h-4 w-4" />
          </Link>
        </div>
        <div className="rounded-3xl border border-white/10 bg-slate-950/70 p-6">
          <div className="flex items-center gap-3 text-gold">
            <ShieldCheck className="h-5 w-5" />
            <h2 className="text-xl font-semibold">Live verification snapshot</h2>
          </div>
          <div className="mt-6 space-y-4">
            <div className="rounded-2xl border border-green-500/20 bg-green-500/10 p-4">
              <p className="text-sm text-green-300">Certificate Authenticity Score</p>
              <p className="text-3xl font-semibold text-white">96% Verified</p>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
              <p className="font-medium text-white">Verification report</p>
              <ul className="mt-3 space-y-2 text-sm text-slate-300">
                <li>✓ Name matched</li>
                <li>✓ Organization detected</li>
                <li>✓ Date verified</li>
                <li>✓ Certificate format checked</li>
                <li>⚠ Fake certificate detection flagged low-resolution watermark</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function VerificationPage() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
      <div className="rounded-3xl border border-white/10 bg-white/10 p-6 backdrop-blur-xl">
        <div className="flex items-center justify-between gap-4">
          <div>
            <p className="text-gold">AI verification result</p>
            <h1 className="text-3xl font-semibold text-white">Java Certification • Verified</h1>
          </div>
          <div className="rounded-full border border-green-500/20 bg-green-500/10 px-4 py-2 text-sm text-green-300">Authentic</div>
        </div>
        <div className="mt-8 grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="rounded-3xl border border-white/10 bg-slate-950/70 p-6">
            <p className="text-sm text-slate-400">Certificate ID</p>
            <p className="mt-2 text-2xl font-semibold text-white">CV-2026-000123</p>
            <div className="mt-6 rounded-2xl border border-gold/20 bg-gold/10 p-4">
              <p className="text-sm text-gold">Authenticity score</p>
              <p className="mt-2 text-4xl font-semibold text-white">96%</p>
            </div>
          </div>
          <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
            <h2 className="text-xl font-semibold text-white">Verification details</h2>
            <div className="mt-4 space-y-3 text-sm text-slate-300">
              <div className="rounded-2xl border border-white/10 bg-slate-950/70 p-4">Student Name: Deeksha</div>
              <div className="rounded-2xl border border-white/10 bg-slate-950/70 p-4">Organization: Tech University</div>
              <div className="rounded-2xl border border-white/10 bg-slate-950/70 p-4">Certificate Title: Advanced Java Development</div>
              <div className="rounded-2xl border border-white/10 bg-slate-950/70 p-4">Category: Technical • Skills: Spring Boot, API Design</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function AuthPage() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
      <div className="grid gap-6 lg:grid-cols-[0.95fr_1.05fr]">
        <div className="rounded-3xl border border-white/10 bg-white/10 p-6 backdrop-blur-xl">
          <p className="text-gold">Secure access</p>
          <h1 className="mt-2 text-3xl font-semibold text-white">Login / Register</h1>
          <p className="mt-4 text-slate-300">Role-based entry for students, faculty, and administrators with JWT-based access.</p>
          <div className="mt-6 space-y-3 text-sm text-slate-300">
            <div className="rounded-2xl border border-white/10 bg-slate-950/70 p-4">Student portal: dashboards, uploads, public passport</div>
            <div className="rounded-2xl border border-white/10 bg-slate-950/70 p-4">Faculty portal: document review and verification seals</div>
            <div className="rounded-2xl border border-white/10 bg-slate-950/70 p-4">Admin portal: analytics and compliance</div>
          </div>
        </div>
        <div className="rounded-3xl border border-white/10 bg-slate-950/70 p-6">
          <div className="flex items-center gap-3 text-gold">
            <Lock className="h-5 w-5" />
            <h2 className="text-xl font-semibold">Authentication</h2>
          </div>
          <div className="mt-6 space-y-4">
            <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
              <label className="text-sm text-slate-400">Email</label>
              <input className="mt-2 w-full rounded-xl border border-white/10 bg-slate-900/80 px-3 py-3 text-white outline-none" placeholder="student@university.edu" />
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
              <label className="text-sm text-slate-400">Password</label>
              <input type="password" className="mt-2 w-full rounded-xl border border-white/10 bg-slate-900/80 px-3 py-3 text-white outline-none" placeholder="••••••••" />
            </div>
            <button className="w-full rounded-full bg-gold px-4 py-3 font-semibold text-slate-950">Continue</button>
          </div>
        </div>
      </div>
    </section>
  );
}

function WallPage() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
      <div className="mb-8 flex items-end justify-between">
        <div>
          <p className="text-gold">Campus achievement wall</p>
          <h1 className="text-3xl font-semibold text-white">Trending achievements</h1>
        </div>
        <button className="rounded-full bg-gold px-4 py-2 font-semibold text-slate-950">Post achievement</button>
      </div>
      <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="space-y-6">
          {wallPosts.map((post) => (
            <motion.article key={post.name} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="rounded-3xl border border-white/10 bg-white/10 p-6 backdrop-blur-xl">
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-semibold text-white">{post.name}</p>
                  <p className="text-sm text-slate-400">{post.title}</p>
                </div>
                <div className="rounded-full border border-gold/20 bg-gold/10 px-3 py-1 text-sm text-gold">Trending</div>
              </div>
              <div className="mt-4 flex items-center gap-4 text-sm text-slate-300">
                <span className="flex items-center gap-2"><MessageSquare className="h-4 w-4" /> {post.comments} congratulations</span>
                <span className="flex items-center gap-2"><Sparkles className="h-4 w-4" /> {post.likes} likes</span>
              </div>
            </motion.article>
          ))}
        </div>
        <div className="rounded-3xl border border-white/10 bg-slate-950/70 p-6">
          <h2 className="text-xl font-semibold">Community highlights</h2>
          <div className="mt-4 space-y-3">
            {['National Hackathon Winners', 'Research Publications', 'Cloud Scholar Track'].map((item) => (
              <div key={item} className="rounded-2xl border border-white/10 bg-white/5 p-4 text-sm text-slate-300">{item}</div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function FacultyPage() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
      <div className="mb-8">
        <p className="text-gold">Faculty verification portal</p>
        <h1 className="text-3xl font-semibold text-white">Review pending documents</h1>
      </div>
      <div className="rounded-3xl border border-white/10 bg-white/10 p-6 backdrop-blur-xl">
        <div className="grid gap-4">
          {facultyQueue.map((entry) => (
            <div key={entry.student} className="flex flex-col gap-3 rounded-2xl border border-white/10 bg-slate-950/70 p-4 md:flex-row md:items-center md:justify-between">
              <div>
                <p className="font-semibold text-white">{entry.student}</p>
                <p className="text-sm text-slate-400">{entry.cert}</p>
              </div>
              <div className="flex items-center gap-2">
                <span className="rounded-full border border-gold/20 bg-gold/10 px-3 py-1 text-sm text-gold">{entry.status}</span>
                <button className="rounded-full border border-white/10 bg-white/5 px-3 py-2 text-sm">Review</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function AdminPage() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
      <div className="mb-8">
        <p className="text-gold">Admin analytics dashboard</p>
        <h1 className="text-3xl font-semibold text-white">Enterprise visibility for achievement growth</h1>
      </div>
      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        {adminMetrics.map((metric) => (
          <div key={metric.label} className="rounded-3xl border border-white/10 bg-white/10 p-6 backdrop-blur-xl">
            <p className="text-sm text-slate-400">{metric.label}</p>
            <p className="mt-3 text-3xl font-semibold text-white">{metric.value}</p>
          </div>
        ))}
      </div>
      <div className="mt-6 grid gap-6 lg:grid-cols-2">
        <div className="rounded-3xl border border-white/10 bg-slate-950/70 p-6">
          <div className="flex items-center gap-3">
            <BarChart3 className="h-5 w-5 text-gold" />
            <h2 className="text-xl font-semibold">Department performance</h2>
          </div>
          <div className="mt-6 space-y-3">
            {['Computer Science 1250', 'Artificial Intelligence 1100', 'Business 900', 'Mechanical 780'].map((entry) => (
              <div key={entry} className="flex items-center justify-between rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-slate-300">{entry}</div>
            ))}
          </div>
        </div>
        <div className="rounded-3xl border border-white/10 bg-slate-950/70 p-6">
          <div className="flex items-center gap-3">
            <RouteIcon className="h-5 w-5 text-gold" />
            <h2 className="text-xl font-semibold">Achievement categories</h2>
          </div>
          <div className="mt-6 space-y-3">
            {['Certificates 45%', 'Research 25%', 'Hackathons 20%', 'Leadership 10%'].map((entry) => (
              <div key={entry} className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-slate-300">{entry}</div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function ResumePage() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
      <div className="rounded-3xl border border-white/10 bg-white/10 p-6 backdrop-blur-xl">
        <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <p className="text-gold">Smart resume generator</p>
            <h1 className="text-3xl font-semibold text-white">Generate My Resume</h1>
          </div>
          <button className="rounded-full bg-gold px-4 py-2 font-semibold text-slate-950">Export PDF Resume</button>
        </div>
        <div className="mt-8 grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="rounded-3xl border border-white/10 bg-slate-950/70 p-6">
            <p className="text-sm text-slate-400">AI will compose</p>
            <ul className="mt-4 space-y-3 text-sm text-slate-300">
              <li className="flex items-center gap-2"><FileText className="h-4 w-4 text-gold" /> Career objective</li>
              <li className="flex items-center gap-2"><Search className="h-4 w-4 text-gold" /> Skills</li>
              <li className="flex items-center gap-2"><Award className="h-4 w-4 text-gold" /> Certificates</li>
              <li className="flex items-center gap-2"><Building2 className="h-4 w-4 text-gold" /> Projects</li>
              <li className="flex items-center gap-2"><Landmark className="h-4 w-4 text-gold" /> Research</li>
            </ul>
          </div>
          <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
            <div className="flex items-center gap-3">
              <Camera className="h-5 w-5 text-gold" />
              <h2 className="text-xl font-semibold text-white">Your resume preview</h2>
            </div>
            <div className="mt-6 space-y-3 text-sm text-slate-300">
              <div className="rounded-2xl border border-white/10 bg-slate-950/70 p-4">Name: Deeksha</div>
              <div className="rounded-2xl border border-white/10 bg-slate-950/70 p-4">Career Objective: Build resilient AI-first software products that create measurable impact.</div>
              <div className="rounded-2xl border border-white/10 bg-slate-950/70 p-4">Skills: Java, React, Spring Boot, Cloud Computing, System Design</div>
              <div className="rounded-2xl border border-white/10 bg-slate-950/70 p-4">Achievements: National Hackathon Winner, Research Publication, Leadership Summit</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function App() {
  return (
    <AppShell>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/dashboard" element={<DashboardPage />} />
        <Route path="/passport" element={<PassportPage />} />
        <Route path="/upload" element={<UploadPage />} />
        <Route path="/verification" element={<VerificationPage />} />
        <Route path="/auth" element={<AuthPage />} />
        <Route path="/wall" element={<WallPage />} />
        <Route path="/faculty" element={<FacultyPage />} />
        <Route path="/admin" element={<AdminPage />} />
        <Route path="/resume" element={<ResumePage />} />
      </Routes>
    </AppShell>
  );
}

export default App;
