import { useState } from 'react'
import { useScrollReveal } from '../hooks/useScrollReveal'
import '../pages/SharedStyles.css'
// import SponsorsCarousel from '../components/SponsorsCarousel'

const Leadership = () => {
  useScrollReveal()

  const people = [
    {
      name: 'Dele Ayanleke',
      title: 'National President',
      image:
        'https://res.cloudinary.com/dufw6bsko/image/upload/v1764072138/dele-ayanleke-1_x3dhno.png',
      bio:
        "‘Dele Ayanleke hails from Komu in Itesiwaju LGA of Oyo State over 60 years ago and he is the current National Secretary of Miners Association of Nigeria, a position he has been holding since 2014. He is also the Director of Mining Operations for Topmost Minerals and Allied Resources Ltd., an indigenous mining company operating in Oyo State, Nigeria. He holds a Higher National Diploma in Marketing and a Master of Business Administration Degree. An experienced mining operations administrator of over two decades, he is a regular representative of Miners Association of Nigeria in mining conferences and meetings. ‘Dele Ayanleke is married with children.",
    },
    {
      name: 'Dr. Umar A. Hassan',
      title: 'President,Nigerian Society of Mining Engineers',
      image:
        'https://res.cloudinary.com/dufw6bsko/image/upload/v1764752297/speaker-and-ad-board-template-for-DRC-Mining-Week-23_fvpb3i.png',
      bio: `Engr. Umar Albarka Hassan, ACSM, PhD, FNMGS, FNSME, FNMS, FNAEGE is a veteran mineral process engineer with nearly four decades of leadership across Nigeria’s mining value chain. He holds a B.Eng (Hons) in Mineral Process Engineering and an Associateship of Camborne School of Mines (ACSM) from the University of Exeter, a PGD in Management (ATBU Bauchi), and MSc/PhD in Metallurgical & Materials Engineering from Ahmadu Bello University, Zaria. A registered professional with COMEG and COREN, he is a Fellow of NMGS, NSME, the Nigerian Metallurgical Society, and the Nigerian Association for Engineering Geology & the Environment; he is also a Corporate Member of NSE and a Professional Member of SME (USA).

        His career spans academia, public agencies, and industry: Lecturer; Mineral Process Engineer/General Manager within the Nigerian Mining Corporation group; Manager, Mining Community Resource Centre at NIMG, Jos; World Bank–assisted consultant to SMMRP and MinDiver (ASM extension services and industrial minerals). He is the immediate past Director-General/CEO of the National Steel Raw Materials Exploration Agency and currently Executive Director (Mining) at Steron Mining Company Ltd, as well as a member of the NESG Mining Technical Advisory Committee.

        Engr. Hassan co-founded MINRE ASSOCIATES and co-authored cornerstone sector resources, including the ASM Handbook for Nigeria, Training Manual for ASM in Nigeria, and the Scoping Study of the Nigerian Mining Sector (with NEITI/GEUS), alongside multiple journal publications. He currently serves as President, Nigerian Society of Mining Engineers (NSME).`,
    },
    {
      name: 'Amanda Lumen Feese',
      title: 'Independent Consultant,Vuka Group',
      image:
        'https://res.cloudinary.com/dufw6bsko/image/upload/v1764752297/speaker-and-ad-board-template-for-DRC-Mining-Week-37_aaiwfj.webp',
      bio:
        'Lumun Amanda Feese is a public policy and governance strategist with nearly 30 years of experience shaping Nigeria’s mining, industrial, and natural resource sectors. As CEO of RBI Perse Advisory, she advises governments, investors, private institutions, philanthropic organisations, and development partners on reforms that unlock sustainable industrial growth. Her career spans the World Bank, Nigeria’s Ministry of Solid Minerals, and the Bureau of Public Enterprises, where she delivered policy, governance, and investment strategies. As a co-facilitator at the Nigerian Economic Summit Group, she actively champions Africa’s resource-based industrialisation agenda through cross-sectoral collaboration.',
    },
  ]

  const [selected, setSelected] = useState<typeof people[number] | null>(null)
  const [open, setOpen] = useState(false)

  const openModal = (person: typeof people[number]) => {
    setSelected(person)
    setOpen(true)
  }

  const closeModal = () => {
    setOpen(false)
    setSelected(null)
  }

  return (
    <div className="page-container">
      {/* Hero Section */}
      <section
        className="page-hero"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1519378058457-4c29a0a2efac?q=80&w=1600&auto=format&fit=crop')",
        }}
      >
        <div className="page-hero-content">
          <h1 className="page-hero-title">Partners & Owners</h1>
          <p className="page-hero-subtitle">Meet the organizations and people powering our mission.</p>
        </div>
      </section>

      {/* Content Section */}
      <section className="content-section">
        <div className="section-container">
          <h2 className="section-title">Strategic Overview</h2>
          <p className="section-subtitle">
            We collaborate with reputable partners and are guided by experienced owners and leaders
            committed to responsible growth, transparency, and lasting impact.
          </p>
          <div className="grid-3">
            <div className="card hover-lift">
              <div className="card-title">Our Partners</div>
              <p className="card-description">
                Collaboration across exploration, operations, logistics, technology, and finance to
                deliver shared value and industry advancement.
              </p>
            </div>
            <div className="card hover-lift">
              <div className="card-title">Owners & Leadership</div>
              <p className="card-description">
                A leadership group with deep sector experience provides strategic direction and
                governance across our portfolio.
              </p>
            </div>
            <div className="card hover-lift">
              <div className="card-title">Advisory & Committees</div>
              <p className="card-description">
                Independent committees ensure accountability in safety, sustainability, community,
                and financial stewardship.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* <SponsorsCarousel title="OUR PARTNERS" /> */}

      <section className="content-section gray">
        <div className="section-container">
          <h2 className="section-title">Leadership & Owners</h2>
          <div className="grid-3">
            {people.map((p) => (
              <button
                key={p.name}
                className="card hover-lift"
                onClick={() => openModal(p)}
                style={{ textAlign: 'left', cursor: 'pointer', border: 'none', background: 'white' }}
              >
                <img
                  src={p.image}
                  alt={p.name}
                  className="feature-image"
                  style={{ height: 220, borderRadius: 6, marginBottom: 16 }}
                />
                <div className="card-title">{p.name}</div>
                <p className="card-description">{p.title}</p>
              </button>
            ))}
          </div>
        </div>
      </section>

      <section className="content-section">
        <div className="section-container">
          <h2 className="section-title">Advisory Committees</h2>
          <div className="grid-2">
            <div className="card hover-lift">
              <div className="card-title">Sustainability & Community</div>
              <ul className="text-content">
                <li>Environmental stewardship and ESG reporting</li>
                <li>Community engagement and local content</li>
                <li>Health, safety, and welfare programs</li>
              </ul>
            </div>
            <div className="card hover-lift">
              <div className="card-title">Technical & Operations</div>
              <ul className="text-content">
                <li>Exploration and resource development</li>
                <li>Processing, logistics, and QA/QC</li>
                <li>Risk management and compliance</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="content-section dark">
        <div className="section-container" style={{ textAlign: 'center' }}>
          <h2 className="section-title">Partner With Us</h2>
          <p className="section-subtitle" style={{ marginTop: 0 }}>
            Interested in collaboration, joint ventures, or industry programs?
          </p>
          <a className="btn btn-primary" href="/contact">Contact Our Team</a>
        </div>
      </section>

      {open && selected && (
        <div
          role="dialog"
          aria-modal="true"
          aria-labelledby="person-modal-title"
          onClick={closeModal}
          style={{
            position: 'fixed',
            inset: 0,
            background: 'rgba(0,0,0,0.6)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 10000,
            padding: 20,
          }}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            style={{
              width: 'min(900px, 95vw)',
              background: 'white',
              borderRadius: 10,
              overflow: 'hidden',
              boxShadow: '0 20px 60px rgba(0,0,0,0.4)',
            }}
          >
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 2fr' }}>
              <img
                src={selected.image}
                alt={selected.name}
                style={{ width: '100%', height: 360, objectFit: 'cover' }}
              />
              <div style={{ padding: 24 }}>
                <h3 id="person-modal-title" style={{ margin: 0, fontSize: 24 }}>{selected.name}</h3>
                <p style={{ marginTop: 6, color: '#555' }}>{selected.title}</p>
                <p style={{ marginTop: 16, lineHeight: 1.8, color: '#444' }}>{selected.bio}</p>
                <div style={{ display: 'flex', gap: 12, marginTop: 24 }}>
                  <button
                    className="btn btn-primary"
                    onClick={closeModal}
                    style={{ borderRadius: 6 }}
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default Leadership
