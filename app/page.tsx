import Image from 'next/image'
import {
  ArrowUpRight,
  BriefcaseBusiness,
  CarFront,
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
  Smartphone,
  ShieldCheck,
  Sparkles,
  Star,
  Video,
  WandSparkles,
} from 'lucide-react'

const whatsappBase = 'https://wa.me/919409181677?text='
const whatsapp = (message: string) => `${whatsappBase}${encodeURIComponent(message)}`

const consultancyServices = [
  { icon: Landmark, title: 'Aadhaar Services', description: 'Eligible application assistance and guidance for available Aadhaar-related services.' },
  { icon: Globe2, title: 'Passport Services', description: 'Passport application assistance and careful document preparation.' },
  { icon: FileCheck2, title: 'Driving Licence Services', description: 'Learner’s and driving licence guidance, form assistance, and document preparation.' },
  { icon: CarFront, title: 'Vehicle Insurance', description: 'Vehicle insurance guidance, policy assistance, and support with required documents.' },
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
        <nav aria-label="Main navigation"><a href="#consultancy">Consultancy</a><a href="#studio">Studio</a><a href="#products">Products</a><a href="#contact">Contact</a></nav>
        <a className="nav-cta" href={whatsapp('Hello Infinity Universe, I would like to discuss a project.')}>Start a conversation <ArrowUpRight aria-hidden="true" /></a>
      </header>

      <section id="top" className="hero" aria-labelledby="hero-title">
        <video className="hero-video" autoPlay muted loop playsInline preload="metadata" aria-hidden="true">
          <source src="/videos/background%20video.mp4" type="video/mp4" />
        </video>
        <div className="hero-orbit orbit-one" /><div className="hero-orbit orbit-two" /><div className="hero-grid" />
        <div className="hero-content"><div className="hero-kicker"><span /> A universe of possibility <span /></div><h1 id="hero-title"><span>Universe of</span><em>possibility.</em></h1><p>Two disciplines. One infinite perspective.<br />We turn ambition into meaningful momentum.</p><div className="hero-actions"><a className="gold-button" href="#consultancy">Explore Consultancy <ArrowUpRight aria-hidden="true" /></a><a className="ghost-button" href="#studio">Explore Studio <Play aria-hidden="true" /></a><a className="ghost-button" href="#products">Explore Products <Sparkles aria-hidden="true" /></a></div></div>
        <div className="scroll-cue"><span aria-hidden="true">∞</span> Welcome to Universe of Possibility</div>
      </section>

      <section id="consultancy" className="service-section consultancy-section"><div className="container"><SectionHeader eyebrow="∞ / Infinity Consultancy" title="Clarity for every next step." copy="Practical guidance for life, documentation, and business — delivered with care, precision, and complete transparency." /><div className="trust-strip"><span><Check /> Process-led guidance</span><span><Check /> Personal attention</span><span><Check /> Qualified professionals when required</span></div><div className="service-grid">{consultancyServices.map(({ icon: Icon, title, description }) => <article className="service-card" key={title}><div className="card-icon"><Icon aria-hidden="true" /></div><span className="card-number">CONSULTANCY / 0{consultancyServices.indexOf(consultancyServices.find((s) => s.title === title)!) + 1}</span><h3>{title}</h3><p>{description}</p><WhatsAppButton label="Enquire now" message={`Hello Infinity Consultancy, I am interested in ${title}. Please share the application assistance and document requirements.`} /></article>)}<article className="service-card coming-card"><div className="infinity-mark">∞</div><span className="card-number">CONSULTANCY / 09</span><h3>More Coming Soon</h3><p>More services are on the way.</p><WhatsAppButton label="Stay informed" message="Hello Infinity Consultancy, I would like to know about your upcoming services." /></article></div><div className="disclaimer"><ShieldCheck /> <span>We provide application assistance, document preparation, and process guidance. We are not a government department and cannot guarantee approval or official outcomes.</span></div></div></section>

      <section id="studio" className="service-section studio-section"><div className="container"><SectionHeader eyebrow="∞ / Infinity Studio" title="Make your moment impossible to forget." copy="A creative studio for brands, people, and stories that deserve to be seen in a different light." /><div className="studio-intro"><div><span className="eyebrow">The creative advantage</span><h3>From first frame<br /><em>to lasting feeling.</em></h3></div><p>We bring strategy, cinematic craft, and a sharp eye for detail to every production — whether it is a launch, a celebration, or the next scroll-stopping idea.</p></div><div className="service-grid studio-grid">{studioServices.map(({ icon: Icon, title, description }, index) => <article className="service-card" key={title}><div className="card-icon"><Icon aria-hidden="true" /></div><span className="card-number">STUDIO / 0{index + 1}</span><h3>{title}</h3><p>{description}</p><WhatsAppButton label="Enquire now" message={`Hello Infinity Studio, I am interested in ${title}. I would like to discuss my creative project.`} /></article>)}<article className="service-card coming-card"><div className="infinity-mark">∞</div><span className="card-number">STUDIO / 06</span><h3>More Coming Soon</h3><p>New creative services are coming soon.</p><WhatsAppButton label="Stay informed" message="Hello Infinity Studio, I would like to know about your upcoming creative services." /></article></div><a className="gold-button centered-button" href={whatsapp('Hello Infinity Studio, I would like to book a shoot. Please share your availability and process.')}>Book a Shoot <ArrowUpRight aria-hidden="true" /></a></div></section>

      <section id="products" className="product-section" aria-labelledby="products-title">
        <div className="container product-container">
          <div className="section-header product-header">
            <span className="eyebrow">∞ / Infinity Universe presents</span>
            <h2 id="products-title">Make Your Business Easier to Discover, Review &amp; Trust.</h2>
            <p>A smarter way to connect your customers with your business on Google.</p>
          </div>
          <article className="product-showcase" aria-labelledby="infivers-title">
            <div className="product-artwork">
              <Image src="/infivers-review-design.jpg" alt="INFIVERS premium review card design inviting customers to tap their phone and leave a Google review" width={900} height={900} />
              <span className="product-artwork-caption"><Sparkles aria-hidden="true" /> Launch offer · save ~43%</span>
            </div>
            <div className="product-details">
              <span className="product-index">PRODUCT 01 <span> / </span> INFINITY UNIVERSE</span>
              <h3 id="infivers-title">INFIVERS<span>.</span></h3>
              <p className="product-description">Powered by Infinity Universe, INFIVERS makes it easy to connect your customers to your Google Review page. No searching. No complicated steps. Just one tap closer to building your online reputation.</p>
              <div className="product-pricing" aria-label="Introductory price 2,000 rupees, reduced from 3,500 rupees. Save 1,500 rupees, approximately 43 percent off.">
                <span className="product-price-label">Introductory price</span>
                <div className="product-price">
                  <span className="product-sale-price">₹2,000</span>
                  <del className="product-original-price">₹3,500</del>
                </div>
                <span className="product-savings">Save ₹1,500 <span aria-hidden="true">·</span> ~43% off</span>
              </div>
              <div className="product-features" aria-label="INFIVERS product features">
                <div className="product-feature">
                  <span className="product-feature-icon"><Smartphone aria-hidden="true" /></span>
                  <div><h4>Instant connection</h4><p>One tap opens your Google Review page, ready for customers to share their experience.</p></div>
                </div>
                <div className="product-feature">
                  <span className="product-feature-icon"><Check aria-hidden="true" /></span>
                  <div><h4>Broad smartphone compatibility</h4><p>Compatible with 95%+ of iPhone and Android smartphones.</p></div>
                </div>
                <div className="product-feature">
                  <span className="product-feature-icon"><ShieldCheck aria-hidden="true" /></span>
                  <div><h4>Premium glossy acrylic</h4><p>High-quality acrylic with a glossy finish and a professional look for your business.</p></div>
                </div>
                <div className="product-feature">
                  <span className="product-feature-icon"><Star aria-hidden="true" /></span>
                  <div><h4>Two sizes to choose from</h4><p>Available in 3 × 3 inch and 5 × 5 inch sizes for your counter, checkout, or reception desk.</p></div>
                </div>
              </div>
              <a className="gold-button product-cta" href={whatsapp('Hello Infinity Universe, I would like to order INFIVERS at the introductory price of ₹2,000. Please help me choose a size and complete my order.')} target="_blank" rel="noreferrer" aria-label="Buy INFIVERS for ₹2,000 via WhatsApp">Buy INFIVERS <ArrowUpRight aria-hidden="true" /></a>
              <div className="product-custom-option">
                <span className="product-custom-mark" aria-hidden="true">∞</span>
                <div className="product-custom-copy">
                  <span className="product-custom-label">Make it yours</span>
                  <h4>Customize your own design</h4>
                  <p>Have your own colours, logo, or look in mind? Let’s create a custom Infivers design for your brand.</p>
                  <a className="product-custom-link" href={whatsapp('Hello Infinity Universe, I am interested in a custom Infivers design. I would like to personalize it for my brand.')}>
                    <MessageCircle aria-hidden="true" /> Customize on WhatsApp <ArrowUpRight aria-hidden="true" />
                  </a>
                </div>
              </div>
            </div>
          </article>
          <div className="product-why">
            <div className="product-why-heading">
              <span className="eyebrow">Why INFIVERS?</span>
              <h3>Your business deserves to be <em>seen, heard and trusted.</em></h3>
            </div>
            <div className="product-why-copy">
              <p>Every customer interaction is an opportunity to strengthen your digital presence. INFIVERS bridges the gap between offline customer experiences and your online reputation, making it easier for satisfied customers to share genuine feedback.</p>
              <p className="product-mantra">One Tap. One Experience. <span>Endless Possibilities.</span></p>
              <span className="product-signoff">INFINITY UNIVERSE <span>— “UNIVERSE OF POSSIBILITY”.</span></span>
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="contact-section"><div className="container contact-wrap"><div><span className="eyebrow">Let’s make it happen</span><h2>Have a vision<br /><em>in mind?</em></h2><p>Tell us where you want to go. We’ll help you find the next step.</p></div><div className="contact-actions"><div className="collab-card"><span className="eyebrow">Work with us</span><h3>Bring your expertise<br /><em>into our universe.</em></h3><p>Interested in collaborating, partnering, or joining a project? We would love to hear from you.</p><WhatsAppButton label="Talk to our team" message="Hello Infinity Universe, I am interested in working with you. I would like to discuss a collaboration opportunity." /></div><a className="contact-link" href="mailto:infinityconsultancy12@gmail.com" aria-label="Email Infinity Universe"><span className="contact-line"><Mail aria-hidden="true" /><span>infinityconsultancy12@gmail.com</span><ArrowUpRight aria-hidden="true" className="external-link-icon" /></span><span className="contact-line secondary"><Camera aria-hidden="true" /><span>@infinity_universe_12</span></span></a></div></div></section>

      <footer><div className="footer-top"><a className="nav-logo" href="#top"><Image src="/infinity-universe-logo.png" alt="Infinity Universe logo" width={58} height={58} /><span><strong>INFINITY</strong><small>UNIVERSE</small></span></a><p>Your vision, our strategy.</p><div className="footer-links"><a href="#consultancy">Consultancy</a><a href="#studio">Studio</a><a href="#products">Products</a><a href="mailto:infinityconsultancy12@gmail.com">Email us</a></div></div><div className="footer-bottom"><span>© 2025 Infinity Universe. All rights reserved.</span><span className="footer-contact"><MapPin /> India <a href="https://wa.me/919409181677">+91 94091 81677</a></span></div></footer><a className="floating-whatsapp" href={whatsapp('Hello Infinity Universe, I would like to enquire about your services.')} target="_blank" rel="noreferrer" aria-label="Chat with Infinity Universe on WhatsApp"><MessageCircle /></a>
    </main>
  )
}
