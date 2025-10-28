import { useState, useEffect } from 'react'
import './App.css'

function App() {
  const [time, setTime] = useState(new Date())

  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000)
    return () => clearInterval(timer)
  }, [])

  // DATOS DEL GRUPO
  const grupoInfo = {
    nombre: "c0mp1l3Cats",
    motto: "Building the future, one commit at a time"
  }

  // MIEMBROS - CAMBIAD POR VUESTROS DATOS REALES
  const miembros = [
    {
      nombre: "SραrκLynx",
      rol: " ",
      avatar: "👤", // Puedes cambiarlo por 👨‍💻, 👩‍💻, o cualquier otro
      color: "#00ff88",
      bio: "-",
      curiosidades: [],
      skills: []
    },
    {
      nombre: "vengadormaldito",
      rol: "",
      avatar: "👤",
      color: "#00d4ff",
      bio: "-",
      curiosidades: [
      ],
      skills: []
    },
    {
      nombre: "ruffus",
      rol: " ",
      avatar: "👤",
      color: "#ff00ff",
      bio: "-",
      curiosidades: [],
      skills: []
    },
    {
      nombre: "Kyru",
      rol: " ",
      avatar: "👤",
      color: "#ffd000",
      bio: "-",
      curiosidades: [],
      skills: []
    },
    {
      nombre: "k0vl",
      rol: " ",
      avatar: "👤",
      color: "#ff6b00",
      bio: "-",
      curiosidades: [],
      skills: []
    }
  ]

  return (
    <div className="App">
      {/* Background */}
      <div className="bg-gradient"></div>
      <div className="bg-dots"></div>
      
      {/* Navbar */}
      <nav className="navbar">
        <div className="container">
          <div className="nav-content">
            <div className="brand">
              <span className="brand-icon">⚡</span>
              <span className="brand-name">{grupoInfo.nombre}</span>
            </div>
            <div className="nav-time">
              {time.toLocaleTimeString()}
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="hero">
        <div className="container">
          <div className="hero-content">
            <div className="status-badge">
              <span className="status-dot"></span>
              Active Project
            </div>
            
            <h1 className="main-title">{grupoInfo.nombre}</h1>
            <p className="subtitle">{grupoInfo.motto}</p>
            
            <div className="stats-bar">
              <div className="stat">
                <span className="stat-value">5</span>
                <span className="stat-label">Members</span>
              </div>
              <div className="divider"></div>
              <div className="stat">
                <span className="stat-value">100%</span>
                <span className="stat-label">Dedication</span>
              </div>
              <div className="divider"></div>
              <div className="stat">
                <span className="stat-value">2025</span>
                <span className="stat-label">Year</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="team">
        <div className="container">
          <h2 className="section-title">Our Team</h2>
          
          <div className="team-grid">
            {miembros.map((miembro, idx) => (
              <div key={idx} className="member-card">
                <div className="card-glow" style={{background: `radial-gradient(circle, ${miembro.color}20 0%, transparent 70%)`}}></div>
                
                <div className="member-top">
                  <div className="member-avatar" style={{borderColor: miembro.color}}>
                    <span>{miembro.avatar}</span>
                  </div>
                  <div className="member-header">
                    <h3 className="member-name">{miembro.nombre}</h3>
                    <p className="member-role" style={{color: miembro.color}}>{miembro.rol}</p>
                  </div>
                </div>
                
                <p className="member-bio">{miembro.bio}</p>
                
                <div className="member-section">
                  <h4 className="section-subtitle">About</h4>
                  <ul className="info-list">
                    {miembro.curiosidades.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                </div>
                
                <div className="member-section">
                  <h4 className="section-subtitle">Skills</h4>
                  <div className="skills-container">
                    {miembro.skills.map((skill, i) => (
                      <span key={i} className="skill-badge" style={{borderColor: miembro.color}}>
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="values">
        <div className="container">
          <h2 className="section-title">What We Believe In</h2>
          
          <div className="values-grid">
            <div className="value-card">
              <div className="value-icon">💡</div>
              <h3>Innovation</h3>
              <p>Siempre buscando nuevas formas de resolver problemas</p>
            </div>
            
            <div className="value-card">
              <div className="value-icon">🤝</div>
              <h3>Teamwork</h3>
              <p>Juntos llegamos más lejos y aprendemos más</p>
            </div>
            
            <div className="value-card">
              <div className="value-icon">🎯</div>
              <h3>Quality</h3>
              <p>Comprometidos con la excelencia en cada línea de código</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <div className="footer-content">
            <div className="footer-brand">
              <span className="brand-icon">⚡</span>
              <span className="brand-name">{grupoInfo.nombre}</span>
            </div>
            <div className="footer-info">
              <p>© 2025 {grupoInfo.nombre}</p>
              <p>Cursillo de Programación Web</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App