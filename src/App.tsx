import './App.css';

function App() {
  return (
    <>
      <a href="#main-content" className="skip-link">Ana icerige atla</a>

      <header>
        <div className="site-title">Mustafa Dürü - Kisisel Portfolyo</div>
        <nav aria-label="Ana navigasyon">
          <ul>
            <li><a href="#hakkimda">Hakkimda</a></li>
            <li><a href="#projeler">Projelerim</a></li>
            <li><a href="#iletisim">Iletisim</a></li>
          </ul>
        </nav>
      </header>

      <main id="main-content">
        <section id="hakkimda">
          <h2>Hakkimda</h2>
          <div className="about-content">
            <figure>
              <img src="/profil.jpg" alt=" " width="150" />
            </figure>
            <div>
              <p>Merhaba, ben Fırat Üniversitesi'nde okuyan bir öğrenciyim. Modern web ve mobil teknolojileri üzerine çalışıyorum.</p>
              {/* Flexbox ile yan yana dizeceğimiz beceri etiketleri */}
              <ul className="skill-tags" role="list" aria-label="Beceri etiketleri">
                <li>React & Vite</li>
                <li>TypeScript</li>
                <li>Semantik HTML5</li>
                <li>CSS Flex/Grid</li>
              </ul>
            </div>
          </div>
        </section>

        <section id="projeler">
          <h2>Projelerim</h2>
          {/* CSS Grid ile ızgara yapacağımız alan */}
          <div className="project-grid">
            <article className="project-card">
              <h3>Proje 1: E-Ticaret Platformu</h3>
              <p>Kullanıcıların ürün alıp satabildiği modern bir web uygulaması.</p>
              <ul className="skill-tags">
                <li>React</li>
                <li>TypeScript</li>
              </ul>
            </article>
            <article className="project-card">
              <h3>Proje 2: Kişisel Blog Sitesi</h3>
              <p>Dinamik içerik yönetimine sahip, SEO uyumlu blog projesi.</p>
              <ul className="skill-tags">
                <li>HTML5</li>
                <li>CSS3</li>
              </ul>
            </article>
          </div>
        </section>

        <section id="iletisim">
          <h2>Iletisim</h2>
          <form action="#" method="POST" noValidate>
            <fieldset>
              <legend>Iletisim Formu</legend>

              <div className="form-group">
                <label htmlFor="name">Ad Soyad: </label>
                <input type="text" id="name" name="name" required minLength={2} aria-describedby="name-error" />
                <small id="name-error" className="error-msg" role="alert"></small>
              </div>

              <div className="form-group">
                <label htmlFor="email">E-posta: </label>
                <input type="email" id="email" name="email" required aria-describedby="email-error" />
                <small id="email-error" className="error-msg" role="alert"></small>
              </div>

              <div className="form-group">
                <label htmlFor="subject">Konu: </label>
                <select id="subject" name="subject" required aria-describedby="subject-error">
                  <option value="">-- Seciniz --</option>
                  <option value="is">Is Teklifi</option>
                  <option value="soru">Soru</option>
                  <option value="oneri">Oneri</option>
                </select>
                <small id="subject-error" className="error-msg" role="alert"></small>
              </div>

              <div className="form-group">
                <label htmlFor="message">Mesajiniz:</label>
                <textarea id="message" name="message" rows={5} required minLength={10} aria-describedby="message-error"></textarea>
                <small id="message-error" className="error-msg" role="alert"></small>
              </div>

              <button type="submit">Gonder</button>
            </fieldset>
          </form>
        </section>
      </main>

      <footer>
        <p>&copy; 2026 Mustafa Dürü. Tum haklari saklidir.</p>
      </footer>
    </>
  )
}

export default App;