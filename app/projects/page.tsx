"use client"

import Link from "next/link"
import { ExternalLink, CheckCircle2, Github } from "lucide-react"

const projects = [
  {
    id: 1,
    title: "SSR Institute LMS Portal",
    category: "Learning Management Platform",
    logo: "/Ssr%20LOGO.webp",
    image:
      "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1200&q=80",
    url: "https://portal.ssrinstitute.in/",
    role: "Frontend and full-stack product contribution",
    description:
      "A learning management portal for SSR Institute that structures course delivery, assessment workflows, and student progress tracking across academic journeys.",
    contributions: [
      "Contributed to a portal that manages courses, topics, lessons, quizzes, coding assessments, and student progress tracking.",
      "Worked with role-based access flows for Admin, Trainer, and Student users in a learning environment.",
      "Supported frontend workflows around sequential topic unlocking, student progress visibility, and structured academic content delivery.",
    ],
    technologies: ["Next.js", "React", "Node.js", "MongoDB Atlas", "REST APIs", "Tailwind CSS", "Vercel", "Render"],
    githubUrl: "https://github.com/MathiHarshitha/SSR_INSTITUTE_PORTAL",
  },
  {
    id: 2,
    title: "Gait View School ERP",
    category: "School Operations Platform",
    logo: "https://app.gaitview.com/favicon.ico",
    image:
      "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1200&q=80",
    url: "https://app.gaitview.com/",
    role: "Frontend developer on a production ERP",
    description:
      "A production School ERP platform supporting school administration and academic workflows across multiple institutions, with a responsive user experience built around React and Redux.",
    contributions: [
      "Developed frontend modules using React and Redux for student management, fees, attendance, examinations, and administrative workflows.",
      "Integrated REST APIs and built reusable, responsive UI components for operational and academic processes.",
      "Worked with backend engineers to troubleshoot production issues and improve day-to-day school management tasks.",
    ],
    technologies: ["React", "Redux", "JavaScript", "REST APIs", "SCSS"],
    githubUrl: "https://github.com/Gait-View/frontend",
  },
  {
    id: 3,
    title: "SabariyaTech Website",
    category: "Software Startup Website",
    logo: "/SabariyaTech.png",
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80",
    url: "https://www.sabariyatech.in/",
    role: "Freelance full-stack website development",
    description:
      "The website for the SabariyaTech technology brand, created to showcase services, digital products, and business offerings with a modern, conversion-focused experience.",
    contributions: [
      "Built a responsive digital brand presence for a technology company and its service offerings.",
      "Worked across frontend structure, user experience, and content-driven pages aligned with business positioning.",
      "Handled implementation work for a modern website experience with scalable technology stack decisions based on project needs.",
    ],
    technologies: ["React", "Next.js", "JavaScript", "WordPress", "Responsive Design", "Frontend Development"],
    githubUrl: "https://github.com/MathiHarshitha/SabariyaTech_New",
  },
  {
    id: 4,
    title: "Bhadradri Papikondalu Tourism",
    category: "Tourism Brand Website",
    image:
      "https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=1200&q=80",
    url: "https://www.bhadradripapikondalu.com/",
    role: "Frontend implementation and UI contribution",
    description:
      "A tourism-focused website designed to present destination information and visitor engagement in a modern, visually rich experience.",
    contributions: [
      "Contributed to the implementation of a tourism website with clear content structure and responsive design flow.",
      "Focused on creating a polished frontend experience that supports brand storytelling and visitor engagement.",
    ],
    technologies: ["Responsive UI", "JavaScript", "Frontend Development", "WordPress"],
    logo: "/bhadradipapikondalu.avif",
    githubUrl: "https://github.com/MathiHarshitha/Bhadradri_Papikondalu",
  },
  {
    id: 5,
    title: "Vijaya Developer",
    category: "Professional Portfolio Website",
    image:
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1200&q=80",
    url: "https://www.vijayadeveloper.com/",
    role: "Frontend web development contribution",
    description:
      "A professional developer website built to present services, capabilities, and business credibility through a clean brand experience.",
    contributions: [
      "Supported frontend implementation for a professional portfolio and business-facing website.",
      "Focused on maintaining a clean, modern, conversion-oriented digital presentation.",
    ],
    technologies: ["Responsive UI", "JavaScript", "Frontend Development", "WordPress"],
    logo: "/VD%20Logo.png",
    githubUrl: "https://github.com/SabariyaTech116/vijayaDevelopers",
  },
  {
    id: 6,
    title: "Rolls & Rattles",
    category: "Brand & Ecommerce Website",
    image:
      "https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&w=1200&q=80",
    url: "https://rollsandrattles.in/",
    role: "WordPress website design and frontend contribution",
    description:
      "A WordPress website for a retail and lifestyle brand, structured to highlight products and enhance customer engagement.",
    contributions: [
      "Contributed to responsive web design and front-end execution for an engaging brand presence.",
      "Helped shape layouts and product storytelling to align with customer-facing business goals.",
    ],
    technologies: ["Responsive Design", "JavaScript", "Frontend Development", "WordPress"],
    logo: "/R%26R.png",
  },
  {
    id: 7,
    title: "Papikondalu",
    category: "Destination Website",
    image:
      "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1200&q=80",
    url: "https://www.papikondalu.co/",
    role: "Website implementation contribution",
    description:
      "A destination and travel website built to share visitor information, highlights, and travel engagement through a clean digital experience.",
    contributions: [
      "Contributed to frontend implementation focused on location storytelling and user accessibility.",
      "Built responsive layout patterns suited to destination marketing and content-led browsing.",
    ],
    technologies: ["Responsive UI", "JavaScript", "Frontend Development", "Design Systems"],
    logo: "/papikondalu.png",
    githubUrl: "https://github.com/MathiHarshitha/papikondalu.co",
  },
  {
    id: 8,
    title: "Viswa Bharathi Law",
    category: "Academic & Legal Website",
    image:
      "https://images.unsplash.com/photo-1521790797524-b2497295b8a0?auto=format&fit=crop&w=1200&q=80",
    url: "https://viswabharathilaw.edu.in/",
    role: "WordPress website development",
    description:
      "A complete academic and legal website developed with WordPress to present programs, admissions, and institutional information in a clear structure.",
    contributions: [
      "Developed a WordPress website with custom theme logic and structured academic content.",
      "Implemented clear navigation, admissions information, and program-focused content presentation.",
    ],
    technologies: ["WordPress", "PHP", "Custom Themes", "Custom Plugins"],
    logo: "https://viswabharathilaw.edu.in/favicon.ico",
  },
  {
    id: 9,
    title: "Sreenivas Legal Solutions",
    category: "Legal Service Website",
    image:
      "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&w=1200&q=80",
    url: "https://www.sreenivaslegalsolutions.in/",
    role: "Frontend development and brand implementation",
    description:
      "A legal services website designed to present expertise, practice areas, and trust-building content for a professional services brand.",
    contributions: [
      "Contributed to a responsive website build focused on professional presentation and clear service communication.",
      "Implemented frontend layout and content structure to align with legal services branding and conversion goals.",
    ],
    technologies: ["Responsive UI", "JavaScript", "Frontend Development", "WordPress"],
    logo: "/Sreenivasa%20logo.webp",
    githubUrl: "https://github.com/SabariyaTech116/sreenivas-legal-solutions",
  },
  {
    id: 10,
    title: "Sri Geetha Eye Hospitals",
    category: "Healthcare Website",
    image:
      "https://images.unsplash.com/photo-1584515933487-779824d29309?auto=format&fit=crop&w=1200&q=80",
    url: "https://www.srigeethaeyehospitals.com/",
    role: "Healthcare website frontend contribution",
    description:
      "A healthcare website designed to deliver a trustworthy, easy-to-navigate experience for patients and healthcare services.",
    contributions: [
      "Contributed to a healthcare website experience focused on clarity, responsiveness, and patient-friendly information flow.",
      "Worked on presentation layers that support service communication and modern digital accessibility.",
    ],
    technologies: ["Responsive UI", "JavaScript", "Frontend Development", "WordPress"],
    logo: "/Sreegeetha%20logo.webp",
  },
  {
    id: 11,
    title: "HoliThemes",
    category: "WordPress Product Brand",
    image:
      "https://images.unsplash.com/photo-1516321165247-4aa89a48be28?auto=format&fit=crop&w=1200&q=80",
    url: "https://holithemes.com/",
    role: "Web developer and technical content writer",
    description:
      "The HoliThemes website and product platform where product pages, pricing flows, and digital experience were built to support WordPress plugin growth and product visibility.",
    contributions: [
      "Developed responsive website and product pages with conversion-focused structure and frontend styling.",
      "Supported WordPress and custom frontend work while creating technical documentation aligned with business goals.",
      "Worked on product pages designed to improve clarity, visual engagement, and conversion-ready presentation.",
    ],
    technologies: ["JavaScript", "WordPress", "PHP", "CSS", "Responsive UI", "Technical Writing"],
    logo: "https://holithemes.com/favicon.ico",
    githubUrl: "https://github.com/harshitha7-ht",
  },
  {
    id: 12,
    title: "Click to Chat WhatsApp Plugin",
    category: "WordPress Plugin Product Website",
    image:
      "https://images.unsplash.com/photo-1577563908411-5077b6dc7624?auto=format&fit=crop&w=1200&q=80",
    url: "https://holithemes.com/plugins/click-to-chat/",
    role: "Product website and monetization experience",
    description:
      "A plugin product website focused on clarity, pricing, and conversion flow for a widely used WhatsApp integration tool.",
    contributions: [
      "Built the complete product website for a WordPress plugin with conversion-focused pricing and checkout presentation.",
      "Worked on product messaging, features, payment flow pages, and product positioning to support user acquisition.",
    ],
    technologies: ["WordPress", "JavaScript", "Payments", "PHP", "HTML/CSS", "Tailwind CSS"],
    logo: "https://res.cloudinary.com/dv5lcy4na/image/upload/v1767162143/holithemes_logo.png",
    githubUrl: "https://github.com/harshitha7-ht/webPages",
  },
  {
    id: 13,
    title: "Anantha Law College",
    category: "Academic Website Project",
    image:
      "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&w=1200&q=80",
    url: undefined,
    role: "Website project",
    description:
      "The Anantha Law College website project, with its source repository available on GitHub.",
    contributions: [
      "Project source code is available in the Anantha Law College GitHub repository.",
    ],
    technologies: ["Website Development"],
    githubUrl: "https://github.com/MathiHarshitha/Anantha-Law-College/tree/main",
  },
]

export default function ProjectsPage() {
  return (
    <main className="min-h-screen bg-white text-gray-900">
      <header className="sticky top-0 z-40 border-b border-orange-100 bg-white/90 backdrop-blur-md">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 sm:px-6">
          <Link href="/" className="flex items-center gap-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-orange-400 to-orange-500 text-sm font-bold text-white">
              HM
            </div>
            <span className="text-lg font-semibold text-gray-800">Harshitha</span>
          </Link>

          <nav className="hidden items-center gap-6 md:flex">
            <Link href="/" className="text-sm text-gray-600 transition hover:text-orange-500">
              Home
            </Link>
            <Link href="/#about" className="text-sm text-gray-600 transition hover:text-orange-500">
              About
            </Link>
            <Link href="/#skills" className="text-sm text-gray-600 transition hover:text-orange-500">
              Skills
            </Link>
            <Link href="/projects" className="text-sm font-medium text-orange-600">
              Projects
            </Link>
            <Link href="/#contact" className="text-sm text-gray-600 transition hover:text-orange-500">
              Contact
            </Link>
          </nav>

          <Link
            href="/#contact"
            className="rounded-full bg-orange-500 px-5 py-2 text-sm font-medium text-white shadow-lg shadow-orange-200 transition hover:bg-orange-600"
          >
            Hire Me
          </Link>
        </div>
      </header>

      <section className="relative flex min-h-[540px] items-center overflow-hidden bg-gradient-to-br from-orange-50/70 via-white to-pink-50/50 pt-8 sm:min-h-[600px]">
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <div className="absolute right-0 top-0 h-[80%] w-full bg-gradient-to-bl from-orange-200/60 via-pink-100/40 to-transparent" />
          <div className="absolute right-0 top-0 h-[90%] w-[80%] rounded-bl-[100%] bg-gradient-to-bl from-purple-200/30 via-pink-100/20 to-transparent sm:w-[70%]" />
          <div className="absolute inset-0 bg-gradient-to-r from-orange-50/30 via-pink-50/20 to-purple-50/30" />
          <div className="absolute left-8 top-32 h-24 w-24 animate-blob rounded-full bg-yellow-200/50 animate-pulse-soft sm:left-16" />
          <div className="absolute bottom-20 left-1/3 h-16 w-16 animate-blob rounded-full bg-pink-200/50 animate-pulse-soft" style={{ animationDelay: "2s" }} />
          <div className="absolute right-[12%] top-1/4 h-8 w-8 animate-float rounded-full bg-purple-300/40" />
          <div className="absolute bottom-1/4 right-8 h-12 w-12 animate-blob bg-orange-200/50" style={{ animationDelay: "4s" }} />
        </div>

        <div className="relative z-10 mx-auto grid w-full max-w-6xl items-center gap-12 px-4 py-16 sm:px-6 lg:grid-cols-[1.1fr_0.9fr] lg:py-20">
          <div>
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-orange-200 bg-white/80 px-4 py-2 text-sm font-medium text-orange-700 shadow-sm backdrop-blur">
              <span className="h-2 w-2 animate-pulse rounded-full bg-orange-500" />
              Project Showcase
            </div>
            <h1 className="max-w-3xl text-4xl font-bold leading-tight tracking-tight text-gray-900 sm:text-5xl lg:text-6xl">
              Thoughtful work.
              <br />
              <span className="bg-gradient-to-r from-orange-500 to-pink-500 bg-clip-text text-transparent">
                Real-world impact.
              </span>
            </h1>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-gray-600 sm:text-lg">
              Explore the products, platforms, and websites I have helped build—from production ERP workflows and learning tools to client websites and WordPress products.
            </p>
            <div className="mt-8 flex flex-wrap gap-3 text-sm text-gray-600">
              <span className="rounded-full border border-orange-100 bg-white/80 px-4 py-2 shadow-sm">{projects.length} projects</span>
              <span className="rounded-full border border-orange-100 bg-white/80 px-4 py-2 shadow-sm">ERP · Product · Web</span>
              <span className="rounded-full border border-orange-100 bg-white/80 px-4 py-2 shadow-sm">Team & freelance work</span>
            </div>
          </div>

          <div className="relative mx-auto flex min-h-[330px] w-full max-w-md items-center justify-center sm:min-h-[390px]">
            <div className="absolute inset-8 rounded-full bg-gradient-to-br from-orange-300/40 via-pink-200/40 to-purple-300/40 blur-3xl" />
            <div className="absolute left-5 top-10 h-20 w-20 animate-float rounded-[28px] border border-white/80 bg-white/70 shadow-xl shadow-orange-200/40 backdrop-blur" />
            <div className="absolute bottom-8 right-4 h-16 w-16 animate-float rounded-full border border-white/80 bg-white/70 shadow-xl shadow-purple-200/40 backdrop-blur" style={{ animationDelay: "1.5s" }} />
            <div className="relative w-full rotate-[-3deg] rounded-[30px] border border-white/80 bg-white/80 p-5 shadow-2xl shadow-orange-200/50 backdrop-blur-md sm:p-7">
              <div className="mb-6 flex items-center justify-between">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-orange-500">Selected work</p>
                  <p className="mt-1 text-xl font-bold text-gray-900">Built to make a difference</p>
                </div>
                <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br from-orange-400 to-pink-500 text-white shadow-lg shadow-orange-200">
                  <ExternalLink size={20} />
                </div>
              </div>
              <div className="space-y-3">
                {projects.slice(0, 3).map((project, index) => (
                  <div key={project.id} className="flex items-center gap-4 rounded-2xl border border-gray-100 bg-white/90 p-3 shadow-sm">
                    {project.logo && (
                      <div className="flex h-12 w-12 shrink-0 items-center justify-center overflow-hidden rounded-xl border border-orange-100 bg-white p-1">
                        <img
                          src={project.logo}
                          alt={`${project.title} logo`}
                          className="h-full w-full object-contain"
                          onError={(event) => {
                            event.currentTarget.parentElement?.remove()
                          }}
                        />
                      </div>
                    )}
                    <div className="min-w-0 flex-1">
                      <p className="truncate text-sm font-semibold text-gray-900">{project.title}</p>
                      <p className="mt-0.5 text-xs text-gray-500">{project.category}</p>
                    </div>
                    <span className="text-xs font-semibold text-orange-500">0{index + 1}</span>
                  </div>
                ))}
              </div>
              <div className="mt-5 flex items-center gap-2 text-xs font-medium text-gray-500">
                <span className="h-2 w-2 rounded-full bg-green-500" />
                Production platforms · Client products · Websites
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
        <div className="space-y-8">
          {projects.map((project, index) => (
            <article
              key={project.id}
              className="overflow-hidden rounded-[28px] border border-gray-100 bg-white shadow-[0_20px_60px_rgba(15,23,42,0.08)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_30px_80px_rgba(249,115,22,0.12)]"
            >
              <div className="grid gap-0 lg:grid-cols-[1.15fr_1.85fr]">
                <div className="relative min-h-[240px] bg-gray-100">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="h-full w-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
                  <div className="absolute left-4 top-4 rounded-full bg-white/90 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-orange-600 backdrop-blur-sm">
                    {project.category}
                  </div>
                </div>

                <div className="p-6 sm:p-8">
                  <div className="mb-4 flex flex-wrap items-center justify-between gap-3">
                    <div className="flex items-center gap-3">
                      {project.logo && (
                        <div className="flex h-12 w-12 shrink-0 items-center justify-center overflow-hidden rounded-xl border border-orange-200 bg-white p-1">
                          <img
                            src={project.logo}
                            alt={`${project.title} logo`}
                            className="h-full w-full object-contain"
                            onError={(event) => {
                              event.currentTarget.parentElement?.remove()
                            }}
                          />
                        </div>
                      )}
                      <div>
                        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-orange-500">Project {index + 1}</p>
                        <h2 className="text-2xl font-bold text-gray-900">{project.title}</h2>
                      </div>
                    </div>

                    {project.url && (
                      <a
                        href={project.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 rounded-full border border-orange-200 bg-orange-50 px-4 py-2 text-sm font-medium text-orange-700 transition hover:bg-orange-100"
                      >
                        Visit Live Site
                        <ExternalLink size={14} />
                      </a>
                    )}
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 rounded-full border border-gray-200 bg-white px-4 py-2 text-sm font-medium text-gray-700 transition hover:border-gray-300 hover:bg-gray-50"
                      >
                        GitHub
                        <Github size={14} />
                      </a>
                    )}
                  </div>

                  <p className="mb-4 text-sm font-medium text-gray-700">{project.role}</p>
                  <p className="text-base leading-relaxed text-gray-600">{project.description}</p>

                  <div className="mt-6 flex flex-wrap gap-2">
                    {project.technologies.map((technology) => (
                      <span
                        key={technology}
                        className="rounded-full border border-orange-100 bg-gradient-to-r from-orange-50 to-pink-50 px-3 py-1.5 text-xs font-medium text-orange-700"
                      >
                        {technology}
                      </span>
                    ))}
                  </div>

                  <div className="mt-8">
                    <h3 className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-gray-500">My contribution</h3>
                    <ul className="space-y-3">
                      {project.contributions.map((item) => (
                        <li key={item} className="flex items-start gap-3 text-sm leading-relaxed text-gray-700">
                          <CheckCircle2 size={16} className="mt-0.5 shrink-0 text-orange-500" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <footer className="border-t border-gray-100 bg-white py-10">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-4 text-center text-sm text-gray-500 sm:px-6 md:flex-row md:text-left">
          <div className="flex items-center gap-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-orange-400 to-orange-500 text-sm font-bold text-white">
              HM
            </div>
            <span className="font-semibold text-gray-800">Harshitha Mathi</span>
          </div>
          <p>© {new Date().getFullYear()} Harshitha Mathi - Software Developer</p>
        </div>
      </footer>
    </main>
  )
}
