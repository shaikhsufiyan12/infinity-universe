import Image from 'next/image'
import {
  ArrowUpRight,
  BriefcaseBusiness,
  Camera,
  Check,
  Clapperboard,
  FileCheck2,
  FileText,
  Globe2,
  Landmark,
  Mail,
  MapPin,
  MessageCircle,
  PenTool,
  Play,
  ShieldCheck,
  Sparkles,
  Video,
  WandSparkles,
} from 'lucide-react'

const whatsappBase = 'https://wa.me/919409181677?text='
const whatsapp = (message: string) => `${whatsappBase}${encodeURIComponent(message)}`

const consultancyServices = [
  { icon: Landmark, title: 'Aadhaar Services', description: 'Eligible application assistance and guidance for available Aadhaar-related services.' },
  { icon: Globe2, title: 'Passport Services', description: 'Passport application assistance and careful document preparation.' },
  { icon: FileCheck2, title: 'Driving Licence Services', description: 'Learner’s and driving licence guidance, form assistance, and document preparation.' },
  { icon: FileText, title: 'PAN Card Services', description: 'PAN application, correction, and related document assistance.' },
  { icon: PenTool, title: 'Application & Documentation', description: 'Help with forms, applications, certificates, and document preparation.' },
  { icon: BriefcaseBusiness, title: 'Business Registration', description: 'Assistance with GST, MSME/Udyam, and other applicable registrations.' },
  { icon: ShieldCheck, title: 'Business Compliance Support', description: 'Coordination and documentation support for applicable compliance requirements.' },
  { icon: FileText, title: 'Legal Documentation Support', description: 'Organize documents with qualified legal professionals involved when required.' },
]

const studioServices = [
  { icon: Clapperboard, title: 'Advertisement Shoots & Brand Promotions', description: 'Creative campaigns and promotional content that make businesses memorable.' },
  { icon: Video, title: 'Video Editing & Reels', description: 'Professional editing for reels, short videos, and social media.' },
  { icon: Camera, title: 'Birthday & Event Shoots', description: 'Thoughtful coverage of celebrations and special events.' },
  { icon: WandSparkles, title: 'Photography & Videography', description: 'Visual coverage for personal, business, and creative projects.' },
  { icon: Sparkles, title: 'Commercial & Social Media Content', description: 'Content designed for brands, products, and online platforms.' },
]

function WhatsAppButton({ label, message, className = '' }: { label: string; message: string; className?: string }) {
  return <a className={`whatsapp-button ${className}`} href={whatsapp(message)} target="_blank" rel="noreferrer"><MessageCircle aria-hidden="true" />{label}<ArrowUpRight aria-hidden="true" /></a>
}

function SectionHeader({ eyebrow, title, copy }: { eyebrow: string; title: string; copy: string }) {
  return <div className="section-header"><span className="eyebrow">{eyebrow}</span><h2>{title}</h2><p>{copy}</p></div>
}

export default function Page() {
  return (
    <main>
      <header className="site-header">
        <a className="nav-logo" href="#top" aria-label="Infinity Universe home"><Image src="/infinity-universe-logo.png" alt="Infinity Universe golden cosmic infinity emblem" width={54} height={54} /><span><strong>INFINITY</strong><small>UNIVERSE</small></span></a>
        <nav aria-label="Main navigation"><a href="#consultancy">Consultancy</a><a href="#studio">Studio</a><a href="#portfolio">Portfolio</a><a href="#contact">Contact</a></nav>
        <a className="nav-cta" href={whatsapp('Hello Infinity Universe, I would like to discuss a project.')}>Start a conversation <ArrowUpRight aria-hidden="true" /></a>
      </header>

      <section id="top" className="hero" aria-labelledby="hero-title">
        <div className="hero-orbit orbit-one" /><div className="hero-orbit orbit-two" /><div className="hero-grid" />
        <div className="hero-content"><div className="hero-kicker"><span /> A universe of possibility <span /></div><Image className="hero-logo" src="/infinity-universe-logo.png" alt="Infinity Universe logo" width={270} height={270} priority /><h1 id="hero-title">Your vision,<br /><em>our strategy.</em></h1><p>Two disciplines. One infinite perspective.<br />We turn ambition into meaningful momentum.</p><div className="hero-actions"><a className="gold-button" href="#consultancy">Explore Consultancy <ArrowUpRight aria-hidden="true" /></a><a className="ghost-button" href="#studio">Explore Studio <Play aria-hidden="true" /></a></div></div>
        <div className="scroll-cue"><span /> Scroll to explore</div>
      </section>

      <section id="consultancy" className="service-section consultancy-section"><div className="container"><SectionHeader eyebrow="∞ / Infinity Consultancy" title="Clarity for every next step." copy="Practical guidance for life, documentation, and business — delivered with care, precision, and complete transparency." /><div className="trust-strip"><span><Check /> Process-led guidance</span><span><Check /> Personal attention</span><span><Check /> Qualified professionals when required</span></div><div className="service-grid">{consultancyServices.map(({ icon: Icon, title, description }) => <article className="service-card" key={title}><div className="card-icon"><Icon aria-hidden="true" /></div><span className="card-number">CONSULTANCY / 0{consultancyServices.indexOf(consultancyServices.find((s) => s.title === title)!) + 1}</span><h3>{title}</h3><p>{description}</p><WhatsAppButton label="Enquire now" message={`Hello Infinity Consultancy, I am interested in ${title}. Please share the application assistance and document requirements.`} /></article>)}<article className="service-card coming-card"><div className="infinity-mark">∞</div><span className="card-number">CONSULTANCY / 09</span><h3>More Coming Soon</h3><p>More services are on the way.</p><WhatsAppButton label="Stay informed" message="Hello Infinity Consultancy, I would like to know about your upcoming services." /></article></div><div className="disclaimer"><ShieldCheck /> <span>We provide application assistance, document preparation, and process guidance. We are not a government department and cannot guarantee approval or official outcomes.</span></div></div></section>

      <section id="studio" className="service-section studio-section"><div className="container"><SectionHeader eyebrow="∞ / Infinity Studio" title="Make your moment impossible to forget." copy="A creative studio for brands, people, and stories that deserve to be seen in a different light." /><div className="studio-intro"><div><span className="eyebrow">The creative advantage</span><h3>From first frame<br /><em>to lasting feeling.</em></h3></div><p>We bring strategy, cinematic craft, and a sharp eye for detail to every production — whether it is a launch, a celebration, or the next scroll-stopping idea.</p></div><div className="service-grid studio-grid">{studioServices.map(({ icon: Icon, title, description }, index) => <article className="service-card" key={title}><div className="card-icon"><Icon aria-hidden="true" /></div><span className="card-number">STUDIO / 0{index + 1}</span><h3>{title}</h3><p>{description}</p><WhatsAppButton label="Enquire now" message={`Hello Infinity Studio, I am interested in ${title}. I would like to discuss my creative project.`} /></article>)}<article className="service-card coming-card"><div className="infinity-mark">∞</div><span className="card-number">STUDIO / 06</span><h3>More Coming Soon</h3><p>New creative services are coming soon.</p><WhatsAppButton label="Stay informed" message="Hello Infinity Studio, I would like to know about your upcoming creative services." /></article></div><a className="gold-button centered-button" href={whatsapp('Hello Infinity Studio, I would like to book a shoot. Please share your availability and process.')}>Book a Shoot <ArrowUpRight aria-hidden="true" /></a></div></section>

      <section id="portfolio" className="portfolio-section"><div className="container"><SectionHeader eyebrow="Selected possibilities" title="A canvas waiting for your story." copy="A considered preview of the worlds we can build together." /><div className="portfolio-note"><Sparkles /> Portfolio Preview — Sample Placeholders <span>Replace with real projects as they arrive</span></div><div className="portfolio-grid"><div className="portfolio-tile tile-wide"><div><span>01 / Campaigns</span><h3>Bold ideas,<br />beautifully framed.</h3></div></div><div className="portfolio-tile tile-blue"><div><span>02 / Events</span><h3>Moments<br />in motion.</h3></div></div><div className="portfolio-tile tile-gold"><div><span>03 / Photography</span><h3>Details worth<br />remembering.</h3></div></div><div className="portfolio-tile tile-dark"><div><span>04 / Social Content</span><h3>Made to<br />stop the scroll.</h3></div></div></div></div></section>

      <section id="contact" className="contact-section"><div className="container contact-wrap"><div><span className="eyebrow">Let’s make it happen</span><h2>Have a vision<br /><em>in mind?</em></h2><p>Tell us where you want to go. We’ll help you find the next step.</p></div><div className="contact-actions"><div className="collab-card"><span className="eyebrow">Work with us</span><h3>Bring your expertise<br /><em>into our universe.</em></h3><p>Interested in collaborating, partnering, or joining a project? We would love to hear from you.</p><WhatsAppButton label="Talk to our team" message="Hello Infinity Universe, I am interested in working with you. I would like to discuss a collaboration opportunity." /></div><a className="contact-link" href="mailto:infinityconsultancy12@gmail.com" aria-label="Email Infinity Universe"><span className="contact-line"><Mail aria-hidden="true" /><span>infinityconsultancy12@gmail.com</span><ArrowUpRight aria-hidden="true" className="external-link-icon" /></span><span className="contact-line secondary"><Camera aria-hidden="true" /><span>@infinity_universe_12</span></span></a></div></div></section>

      <footer><div className="footer-top"><a className="nav-logo" href="#top"><Image src="/infinity-universe-logo.png" alt="Infinity Universe logo" width={58} height={58} /><span><strong>INFINITY</strong><small>UNIVERSE</small></span></a><p>Your vision, our strategy.</p><div className="footer-links"><a href="#consultancy">Consultancy</a><a href="#studio">Studio</a><a href="#portfolio">Portfolio</a><a href="mailto:infinityconsultancy12@gmail.com">Email us</a></div></div><div className="footer-bottom"><span>© 2025 Infinity Universe. All rights reserved.</span><span className="footer-contact"><MapPin /> India <a href="https://wa.me/919409181677">+91 94091 81677</a></span></div></footer><a className="floating-whatsapp" href={whatsapp('Hello Infinity Universe, I would like to enquire about your services.')} target="_blank" rel="noreferrer" aria-label="Chat with Infinity Universe on WhatsApp"><MessageCircle /></a>
    </main>
  )
}
