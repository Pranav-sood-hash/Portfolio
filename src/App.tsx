import { useState, useRef, useEffect } from "react";
const profileImg = "https://cdn.builder.io/api/v1/image/assets%2Fa0d90af5fbda4595aa44ba0e53998fda%2Fb22331202ce74e5abe829e1590dfc7ad?format=webp&width=800";
const carVideo = "/car.mp4";
import "./styles/thankyou-video.css";

export default function App() {
  const [open, setOpen] = useState(false);
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const audioOnRef = useRef(false);

  useEffect(() => {
    (window as any).startCarAudio = async () => {
      const v = videoRef.current;
      if (!v) return;
      v.muted = false;
      try { await v.play(); } catch (e) { console.warn('startCarAudio play failed', e); }
      audioOnRef.current = true;
    };

    (window as any).stopCarAudio = () => {
      const v = videoRef.current;
      if (!v) return;
      v.muted = true;
      try { v.pause(); } catch (e) { console.warn('stopCarAudio pause failed', e); }
      audioOnRef.current = false;
    };

    (window as any).toggleCarAudio = async () => {
      if (audioOnRef.current) {
        (window as any).stopCarAudio();
      } else {
        await (window as any).startCarAudio();
      }
    };

    // Do NOT auto-start or unmute the video on first interaction.
    // User must explicitly press play; keeping start/stop functions available for manual control.

    return () => {
      delete (window as any).startCarAudio;
      delete (window as any).stopCarAudio;
      delete (window as any).toggleCarAudio;
    };
  }, []);

  return (
    <>
      {/* Fixed Navigation */}
      <nav className="navbar">
        <div className="nav-container">
          <div className="logo">PS</div>
          
          {/* Hamburger Menu (button) */}
          <button
            type="button"
            className={`nav-toggle-label hamburger-btn mobile-only${open ? " open" : ""}`}
            aria-label="Toggle navigation"
            aria-expanded={open ? "true" : "false"}
            onClick={() => setOpen((v) => !v)}
          >
            <span className="laptop-lid"></span>
            <span className="laptop-lid"></span>
            <span className="laptop-lid"></span>
          </button>

          <ul className={`nav-menu${open ? " open" : ""}`}>
            <li><a href="#home" onClick={() => setOpen(false)}>Home</a></li>
            <li><a href="#about" onClick={() => setOpen(false)}>About</a></li>
            <li><a href="#skills" onClick={() => setOpen(false)}>Skills</a></li>
            <li><a href="#showcase" onClick={() => setOpen(false)}>Showcase</a></li>
            <li><a href="#socials" onClick={() => setOpen(false)}>Socials</a></li>
            <li><a href="#contact" onClick={() => setOpen(false)}>Contact</a></li>
          </ul>
        </div>
      </nav>

      {/* Hero / About Me Section */}
      <section id="home" className="hero-section">
        <div className="light-flare flare-1"></div>
        <div className="light-flare flare-2"></div>
        <div className="light-flare flare-3"></div>
        
        <div className="hero-content">
          <div className="profile-image-container">
            {/* Add your profile image here */}
            <div className="profile-placeholder">
              <img src={profileImg} alt="Pranav Sood profile photo" />
              <div className="ring-light"></div>
            </div>
          </div>
          
          <h1 className="glowing-title">
            <span className="name-highlight">Pranav Sood</span>
          </h1>
          
          <div className="hero-text">
            <p className="intro-text">
              Hi, I'm <strong>Pranav Sood</strong>, a 20-year-old college student pursuing B.Tech in Computer Science.
            </p>
            <p className="intro-text">
              I'm a passionate <span className="highlight">Creative Editor (Video & Photo)</span> with 5 years of experience, 
              a <span className="highlight">Frontend Developer (HTML)</span>, and an <span className="highlight">n8n Workflow Automation Designer</span>.
            </p>
            <p className="intro-text tagline">
              My creativity bridges technology and art — I transform imagination into meaningful visuals and experiences.
            </p>
            
            <div className="tools-section">
              <p className="tools-title">Editing Tools I Use:</p>
              <p className="tools-list">After Effects · DaVinci Resolve · Photoshop · CapCut · Alight Motion</p>
            </div>
          </div>
        </div>
        
        <div className="scroll-indicator">
          <div className="scroll-arrow"></div>
        </div>
      </section>

      {/* Quote Section */}
      <section id="about" className="quote-section">
        <div className="quote-container">
          <blockquote className="animated-quote">
            "If a problem comes, the solution also comes — it just needs to be discovered."
          </blockquote>
        </div>
        <div className="pulsing-bg"></div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="skills-section">
        <h2 className="section-title">My Expertise</h2>
        
        <div className="skills-grid">
          <div className="skill-card">
            <div className="skill-icon">
              <div className="icon-glow"></div>
              <div className="icon-symbol">🎬</div>
            </div>
            <h3>Creative Editing</h3>
            <p>Video & Photo</p>
            <div className="skill-details">
              5 years of experience crafting visual stories that captivate and inspire
            </div>
          </div>

          <div className="skill-card">
            <div className="skill-icon">
              <div className="icon-glow"></div>
              <div className="icon-symbol">💻</div>
            </div>
            <h3>Frontend Development</h3>
            <p>HTML, CSS</p>
            <div className="skill-details">
              Building beautiful, responsive web experiences with clean code
            </div>
          </div>

          <div className="skill-card">
            <div className="skill-icon">
              <div className="icon-glow"></div>
              <div className="icon-symbol">⚙️</div>
            </div>
            <h3>Workflow Automation</h3>
            <p>n8n Design</p>
            <div className="skill-details">
              Designing intelligent automation systems that streamline processes
            </div>
          </div>
        </div>
        
        <div className="studio-elements">
          <div className="tripod-light left"></div>
          <div className="tripod-light right"></div>
        </div>
      </section>

      {/* Video Showcase Section */}
      <section id="showcase" className="showcase-section">
        <h2 className="section-title">Video Showcase</h2>
        
        <div className="showcase-gallery">
          {/* Add your video showcase here */}
          <div className="video-box">
            <div className="video-wrapper">
              <video ref={videoRef} className="video-media" src={carVideo} controls preload="metadata" muted></video>
            </div>
          </div>
          
          <div className="video-box">
            <div className="video-placeholder">
              <p>Video 2</p>
              <span>Your creative work goes here</span>
            </div>
          </div>
          
          <div className="video-box">
            <div className="video-placeholder">
              <p>Video 3</p>
              <span>Your creative work goes here</span>
            </div>
          </div>
          
          <div className="video-box">
            <div className="video-placeholder">
              <p>Video 4</p>
              <span>Your creative work goes here</span>
            </div>
          </div>
        </div>
        
        <div className="camera-setup">
          <div className="ring-light-large"></div>
          <div className="lens-reflection"></div>
        </div>
      </section>

      {/* Social Media Section */}
      <section id="socials" className="social-section">
        <div className="social-container">
          <h2 className="section-title">Let's Connect</h2>
          <p className="social-subtitle">
            Let's connect, collaborate, and create something amazing together.
          </p>
          
          <div className="separator-line"></div>
          
          <div className="social-buttons">
            <a href="https://www.instagram.com/cse.editz?utm_source=qr" target="_blank" rel="noopener noreferrer" className="social-btn instagram">
              <span className="btn-glow"></span>
              <span className="btn-text">Instagram</span>
            </a>
            
            <a href="http://youtube.com/@paap_life?si=8igNoVmrnod06TuK" target="_blank" rel="noopener noreferrer" className="social-btn youtube">
              <span className="btn-glow"></span>
              <span className="btn-text">YouTube</span>
            </a>
            
            <a href="https://www.linkedin.com/in/pranav-sood-ab107b311" target="_blank" rel="noopener noreferrer" className="social-btn linkedin">
              <span className="btn-glow"></span>
              <span className="btn-text">LinkedIn</span>
            </a>
          </div>
          
          <div className="separator-line"></div>
        </div>
      </section>

      {/* Thank You Section */}
      <section id="contact" className="thankyou-section">
        <div className="thankyou-content">
          <div className="thankyou-image-container">
            <div className="thankyou-image-placeholder">
              <video
                className="thankyou-video"
                src="https://cdn.builder.io/o/assets%2Fa0d90af5fbda4595aa44ba0e53998fda%2Fb678ad45ad8c4e539dcf1eccb330a8fa?alt=media&token=b3656c2d-2dc1-440a-b674-9c65f0392500&apiKey=a0d90af5fbda4595aa44ba0e53998fda"
                muted
                loop
                              />
            </div>
          </div>
          
          <h2 className="thankyou-title">Thank You</h2>
          <p className="thankyou-text">
            Thank you for visiting my portfolio. Keep creating. Keep discovering.
          </p>
          
          <p className="signature">— Pranav Sood ✨</p>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-line"></div>
        <p>© 2025 Pranav Sood | All Rights Reserved.</p>
      </footer>
    </>
  );
}
