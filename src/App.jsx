import { useState } from 'react';
import { 
  Compass, ArrowRight,  
  LogOut, Bell, Search, Filter, Plus, Plane, Hotel, 
  Utensils, ChevronRight, Star, MapPin, FileText 
} from 'lucide-react';

export default function App() {
  const [view, setView] = useState('welcome'); // 'welcome' | 'login' | 'app'
  const [activeTab, setActiveTab] = useState('dashboard'); // 'dashboard' | 'enquiries' | 'flights' | 'hotels' | 'dining'
  const [email, setEmail] = useState('maxwel.ray@apexglobalvoyages.com');
  const [password, setPassword] = useState('••••••••••••');

  return (
    <div className="safara-app-container">
      {}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&family=Playfair+Display:wght@600;700&display=swap');

        .safara-app-container {
          min-height: 100vh;
          width: 100%;
          background-color: #0f172a;
          color: #1e293b;
          display: flex;
          align-items: center;
          justify-content: center;
          font-family: 'Plus Jakarta Sans', sans-serif;
          position: relative;
          overflow-y: auto;
          padding: 32px 16px;
          box-sizing: border-box;
        }

        .safara-global-image-bg {
          position: fixed;
          inset: 0;
          background-image: url('https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=2200&q=85');
          background-size: cover;
          background-position: center;
          z-index: 1;
          filter: brightness(0.85);
        }

        .safara-glass-container {
          position: relative;
          z-index: 10;
          background: rgba(255, 255, 255, 0.95);
          backdrop-filter: blur(20px);
          -webkit-backdrop-filter: blur(20px);
          border: 1px solid rgba(255, 255, 255, 1);
          border-radius: 24px;
          padding: 36px;
          max-width: 960px;
          width: 100%;
          box-shadow: 0 25px 50px -12px rgba(15, 23, 42, 0.35);
          animation: safaraFadeIn 0.3s cubic-bezier(0.16, 1, 0.3, 1) forwards;
          box-sizing: border-box;
          margin: auto;
        }

        /* Top Nav inside Main App */
        .safara-navbar {
          display: flex;
          justify-content: space-between;
          align-items: center;
          border-bottom: 1px solid rgba(226, 232, 240, 0.8);
          padding-bottom: 20px;
          margin-bottom: 30px;
          flex-wrap: wrap;
          gap: 16px;
        }

        .safara-brand-logo {
          display: flex;
          align-items: center;
          gap: 10px;
          font-weight: 800;
          font-size: 18px;
          letter-spacing: -0.5px;
          color: #0f172a;
        }

        .safara-brand-badge {
          background: #ffedd5;
          color: #ea580c;
          font-size: 10px;
          padding: 3px 8px;
          border-radius: 6px;
          font-weight: 700;
          letter-spacing: 0.5px;
        }

        .safara-nav-tabs {
          display: flex;
          gap: 6px;
          background: #f1f5f9;
          padding: 6px;
          border-radius: 14px;
          border: 1px solid #e2e8f0;
          flex-wrap: wrap;
        }

        .safara-tab-btn {
          background: transparent;
          border: none;
          padding: 8px 14px;
          border-radius: 10px;
          font-size: 13px;
          font-weight: 600;
          color: #64748b;
          cursor: pointer;
          display: flex;
          align-items: center;
          gap: 6px;
          transition: all 0.2s;
        }

        .safara-tab-btn.active {
          background: #ffffff;
          color: #0f172a;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
        }

        .safara-user-profile {
          display: flex;
          align-items: center;
          gap: 12px;
        }

        .safara-avatar {
          width: 38px;
          height: 38px;
          border-radius: 50%;
          background: linear-gradient(135deg, #f97316 0%, #ea580c 100%);
          color: white;
          font-weight: 700;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 13px;
          box-shadow: 0 4px 10px rgba(249, 115, 22, 0.3);
        }

        .safara-icon-btn {
          background: #ffffff;
          border: 1px solid #e2e8f0;
          width: 38px;
          height: 38px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          color: #64748b;
          transition: all 0.2s;
        }
        .safara-icon-btn:hover { color: #0f172a; background: #f8fafc; }

        /* Typography & Buttons */
        .safara-title {
          font-family: 'Playfair Display', serif;
          font-size: 32px;
          font-weight: 700;
          color: #0f172a;
          margin: 0 0 8px 0;
          letter-spacing: -0.5px;
        }

        .safara-subtitle {
          font-size: 14px;
          color: #64748b;
          margin-bottom: 24px;
          line-height: 1.5;
        }

        .safara-btn-orange {
          background: linear-gradient(135deg, #f97316 0%, #ea580c 100%);
          color: white;
          border: none;
          padding: 12px 24px;
          border-radius: 12px;
          cursor: pointer;
          font-weight: 600;
          font-size: 14px;
          display: inline-flex;
          align-items: center;
          gap: 8px;
          transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
          box-shadow: 0 4px 15px rgba(249, 115, 22, 0.35);
        }
        .safara-btn-orange:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 22px rgba(249, 115, 22, 0.45);
        }

        /* Form Inputs */
        .safara-input-group {
          margin-bottom: 20px;
          text-align: left;
        }
        .safara-label {
          display: block;
          font-size: 11px;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.8px;
          color: #64748b;
          margin-bottom: 8px;
        }
        .safara-input {
          width: 100%;
          padding: 12px 16px;
          border: 1px solid #cbd5e1;
          border-radius: 12px;
          font-size: 14px;
          background: #ffffff;
          color: #0f172a;
          outline: none;
          box-sizing: border-box;
          transition: border-color 0.2s;
        }
        .safara-input:focus { border-color: #f97316; box-shadow: 0 0 0 3px rgba(249, 115, 22, 0.15); }

        /* Cards & Banners */
        .safara-hero-banner {
          background: linear-gradient(135deg, #f97316 0%, #ea580c 100%);
          border-radius: 20px;
          padding: 36px;
          color: white;
          position: relative;
          overflow: hidden;
          box-shadow: 0 15px 30px -10px rgba(234, 88, 12, 0.4);
        }
        .safara-cards-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 20px;
        }
        .safara-card {
          background: #ffffff;
          border: 1px solid #e2e8f0;
          border-radius: 18px;
          padding: 24px;
          display: flex;
          flex-direction: column;
          gap: 12px;
          box-shadow: 0 10px 25px -5px rgba(0, 0, 0, 0.03);
          transition: all 0.3s;
        }
        .safara-card:hover { transform: translateY(-2px); box-shadow: 0 15px 30px -5px rgba(0, 0, 0, 0.06); }

        @keyframes safaraFadeIn {
          from { opacity: 0; transform: translateY(10px) scale(0.99); }
          to { opacity: 1; transform: translateY(0) scale(1); }
        }

        @media (max-width: 768px) {
          .safara-cards-grid { grid-template-columns: 1fr; }
          .safara-navbar { flex-direction: column; align-items: stretch; }
        }
      `}</style>

      {}
      <div className="safara-global-image-bg"></div>

      {}
      {view === 'welcome' && (
        <div className="safara-glass-container" style={{ textAlign: 'center', padding: '50px 40px', maxWidth: '640px' }}>
          <div style={{ 
            width: '64px', height: '64px', background: 'linear-gradient(135deg, #f97316 0%, #ea580c 100%)', borderRadius: '18px', 
            display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 20px auto', color: 'white',
            boxShadow: '0 10px 25px rgba(249, 115, 22, 0.4)'
          }}>
            <Compass style={{ width: '32px', height: '32px' }} />
          </div>

          <div style={{ display: 'inline-block', background: '#ffedd5', color: '#ea580c', fontSize: '11px', fontWeight: '700', padding: '4px 12px', borderRadius: '20px', marginBottom: '16px', letterSpacing: '0.5px' }}>
            ☀️ B2B LUXURY TRAVEL SUITE
          </div>

          <h1 className="safara-title" style={{ fontSize: '38px', marginBottom: '12px' }}>SAFARA</h1>
          <p className="safara-subtitle" style={{ maxWidth: '480px', margin: '0 auto 32px auto' }}>
            Elevating corporate luxury travel orchestration with bespoke curation, seamless itineraries, and elite partner networks.
          </p>

          <button className="safara-btn-orange" onClick={() => setView('login')} style={{ fontSize: '15px', padding: '14px 28px' }}>
            Access Enterprise Suite <ArrowRight style={{ width: '18px', height: '18px' }} />
          </button>
        </div>
      )}

      {}
      {view === 'login' && (
        <div className="safara-glass-container" style={{ maxWidth: '480px', textAlign: 'center' }}>
          <div style={{ 
            width: '52px', height: '52px', background: 'linear-gradient(135deg, #f97316 0%, #ea580c 100%)', borderRadius: '14px', 
            display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 16px auto', color: 'white'
          }}>
            <Compass style={{ width: '26px', height: '26px' }} />
          </div>

          <h2 className="safara-title" style={{ fontSize: '24px', marginBottom: '6px' }}>Welcome Back to SAFARA</h2>
          <p className="safara-subtitle" style={{ marginBottom: '24px' }}>Authenticate your enterprise session</p>

          <div className="safara-input-group">
            <label className="safara-label">Corporate Email</label>
            <input 
              type="email" 
              className="safara-input" 
              value={email} 
              onChange={(e) => setEmail(e.target.value)} 
            />
          </div>

          <div className="safara-input-group">
            <label className="safara-label">Secure Password</label>
            <input 
              type="password" 
              className="safara-input" 
              value={password} 
              onChange={(e) => setPassword(e.target.value)} 
            />
          </div>

          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontSize: '12px', marginBottom: '24px', color: '#64748b' }}>
            <label style={{ display: 'flex', alignItems: 'center', gap: '6px', cursor: 'pointer' }}>
              <input type="checkbox" defaultChecked style={{ accentColor: '#f97316' }} /> Remember device for 30 days
            </label>
            <span style={{ color: '#ea580c', cursor: 'pointer', fontWeight: '600' }}>Reset key?</span>
          </div>

          <button className="safara-btn-orange" onClick={() => { setView('app'); setActiveTab('dashboard'); }} style={{ width: '100%', justifyContent: 'center', padding: '13px' }}>
            Launch Suite Workspace
          </button>

          <div style={{ marginTop: '20px' }}>
            <button 
              onClick={() => setView('welcome')} 
              style={{ background: 'none', border: 'none', color: '#64748b', fontSize: '13px', cursor: 'pointer', fontWeight: '600' }}
            >
              ← Back to welcome screen
            </button>
          </div>
        </div>
      )}

      {}
      {view === 'app' && (
        <div className="safara-glass-container">
          
          {/* Top Navbar */}
          <div className="safara-navbar">
            <div className="safara-brand-logo">
              <div style={{ width: '32px', height: '32px', background: '#f97316', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white' }}>
                <Compass style={{ width: '18px', height: '18px' }} />
              </div>
              SAFARA <span className="safara-brand-badge">ENTERPRISE</span>
            </div>

            {/* Navigation Tabs */}
            <div className="safara-nav-tabs">
              <button className={`safara-tab-btn ${activeTab === 'dashboard' ? 'active' : ''}`} onClick={() => setActiveTab('dashboard')}>
                <Compass style={{ width: '14px', height: '14px' }} /> Dashboard
              </button>
              <button className={`safara-tab-btn ${activeTab === 'enquiries' ? 'active' : ''}`} onClick={() => setActiveTab('enquiries')}>
                <FileText style={{ width: '14px', height: '14px' }} /> Enquiries
              </button>
              <button className={`safara-tab-btn ${activeTab === 'flights' ? 'active' : ''}`} onClick={() => setActiveTab('flights')}>
                <Plane style={{ width: '14px', height: '14px' }} /> Flights
              </button>
              <button className={`safara-tab-btn ${activeTab === 'hotels' ? 'active' : ''}`} onClick={() => setActiveTab('hotels')}>
                <Hotel style={{ width: '14px', height: '14px' }} /> Hotels
              </button>
              <button className={`safara-tab-btn ${activeTab === 'dining' ? 'active' : ''}`} onClick={() => setActiveTab('dining')}>
                <Utensils style={{ width: '14px', height: '14px' }} /> Dining
              </button>
            </div>

            {/* User Profile Info */}
            <div className="safara-user-profile">
              <button className="safara-icon-btn"><Bell style={{ width: '16px', height: '16px' }} /></button>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <div className="safara-avatar">ER</div>
                <div style={{ textAlign: 'left', display: window.innerWidth < 640 ? 'none' : 'block' }}>
                  <div style={{ fontSize: '13px', fontWeight: '700', color: '#0f172a' }}>Elena Rostova</div>
                  <div style={{ fontSize: '11px', color: '#64748b' }}>Apex Global Voyages</div>
                </div>
              </div>
              <button className="safara-icon-btn" onClick={() => setView('login')} title="Sign Out"><LogOut style={{ width: '16px', height: '16px' }} /></button>
            </div>
          </div>

          {/* TAB 1: DASHBOARD */}
          {activeTab === 'dashboard' && (
            <div>
              <div className="safara-hero-banner">
                <div style={{ display: 'inline-block', background: 'rgba(255,255,255,0.2)', fontSize: '11px', fontWeight: '700', padding: '4px 10px', borderRadius: '6px', marginBottom: '14px' }}>
                  ✨ Q4 Enterprise Travel Portfolio
                </div>
                <h1 style={{ fontFamily: 'Playfair Display, serif', fontSize: '32px', margin: '0 0 10px 0', fontWeight: '700' }}>
                  Excellence in Motion, Elena.
                </h1>
                <p style={{ fontSize: '14px', opacity: '0.9', maxWidth: '500px', lineHeight: '1.5', margin: '0 0 24px 0' }}>
                  You have 4 active corporate itineraries under management with a total portfolio value of $279,500. All VIP bookings are currently on track.
                </p>
                <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
                  <button onClick={() => setActiveTab('enquiries')} style={{ background: 'white', color: '#ea580c', border: 'none', padding: '10px 18px', borderRadius: '10px', fontWeight: '700', fontSize: '13px', cursor: 'pointer' }}>
                    Review All Enquiries
                  </button>
                  <button onClick={() => setActiveTab('flights')} style={{ background: 'rgba(255,255,255,0.2)', color: 'white', border: '1px solid rgba(255,255,255,0.4)', padding: '10px 18px', borderRadius: '10px', fontWeight: '700', fontSize: '13px', cursor: 'pointer' }}>
                    View Kyoto Retreat (Active)
                  </button>
                </div>
              </div>
            </div>
          )}

          {/* TAB 2: ENQUIRIES */}
          {activeTab === 'enquiries' && (
            <div>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '20px', flexWrap: 'wrap', gap: '12px' }}>
                <div>
                  <h1 className="safara-title" style={{ fontSize: '24px' }}>Enterprise Enquiries</h1>
                  <p className="safara-subtitle" style={{ margin: 0 }}>Manage client proposals, budgets, and travel pipelines.</p>
                </div>
                <button className="safara-btn-orange" style={{ padding: '10px 18px', fontSize: '13px' }}>
                  <Plus style={{ width: '15px', height: '15px' }} /> New Enquiry
                </button>
              </div>

              <div style={{ display: 'flex', gap: '12px', marginBottom: '20px' }}>
                <div style={{ flex: 1, position: 'relative' }}>
                  <Search style={{ position: 'absolute', left: '14px', top: '13px', width: '16px', height: '16px', color: '#94a3b8' }} />
                  <input type="text" placeholder="Search by client, destination, or ID..." className="safara-input" style={{ paddingLeft: '40px' }} />
                </div>
                <button className="safara-btn-orange" style={{ background: '#ffffff', color: '#475569', border: '1px solid #cbd5e1', boxShadow: 'none' }}>
                  <Filter style={{ width: '15px', height: '15px' }} /> Filter Status
                </button>
              </div>

              <div className="safara-card" style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap' }}>
                <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
                  <div style={{ background: '#ffedd5', color: '#ea580c', fontWeight: '800', padding: '12px 14px', borderRadius: '12px', fontSize: '16px' }}>
                    9821
                  </div>
                  <div>
                    <div style={{ display: 'flex', gap: '8px', alignItems: 'center', marginBottom: '4px', flexWrap: 'wrap' }}>
                      <span style={{ fontSize: '11px', color: '#64748b', fontWeight: '700' }}>SAF–9821</span>
                      <span style={{ background: '#ffedd5', color: '#c2410c', fontSize: '10px', padding: '2px 8px', borderRadius: '6px', fontWeight: '700' }}>CORPORATE RETREAT</span>
                      <span style={{ background: '#dcfce7', color: '#15803d', fontSize: '10px', padding: '2px 8px', borderRadius: '6px', fontWeight: '700' }}>Confirmed</span>
                    </div>
                    <h3 style={{ margin: 0, fontSize: '18px', fontWeight: '700', color: '#0f172a' }}>Kyoto, Japan</h3>
                    <p style={{ margin: '4px 0 0 0', fontSize: '12px', color: '#64748b' }}>Client: <strong>Horizon Tech Corp</strong> • 12 Travelers • Oct 12 – Oct 20, 2026</p>
                  </div>
                </div>
                <div style={{ textAlign: 'right' }}>
                  <div style={{ fontSize: '11px', color: '#64748b', fontWeight: '700' }}>TOTAL BUDGET</div>
                  <div style={{ fontSize: '20px', fontWeight: '800', color: '#0f172a', marginBottom: '8px' }}>$78,500</div>
                  <button className="safara-btn-orange" style={{ padding: '8px 16px', fontSize: '12px' }}>
                    Open Dossier <ChevronRight style={{ width: '14px', height: '14px' }} />
                  </button>
                </div>
              </div>
            </div>
          )}

          {/* TAB 3: FLIGHTS */}
          {activeTab === 'flights' && (
            <div>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '20px', flexWrap: 'wrap', gap: '12px' }}>
                <div>
                  <h1 className="safara-title" style={{ fontSize: '24px' }}>Global Flight Orchestration</h1>
                  <p className="safara-subtitle" style={{ margin: 0 }}>Access private jet charters, first class cabins, and executive business routes.</p>
                </div>
                <button className="safara-btn-orange" style={{ padding: '10px 18px', fontSize: '13px' }}>
                  Request Private Charter
                </button>
              </div>

              <div className="safara-cards-grid">
                <div className="safara-card">
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <span style={{ background: '#ffedd5', color: '#c2410c', fontSize: '11px', fontWeight: '700', padding: '4px 10px', borderRadius: '8px' }}>Singapore Airlines</span>
                    <span style={{ fontSize: '12px', color: '#64748b', fontWeight: '700' }}>SQ 038</span>
                  </div>
                  <h3 style={{ margin: '6px 0', fontSize: '20px', fontWeight: '800', color: '#0f172a' }}>JFK → SIN</h3>
                  <p style={{ margin: 0, fontSize: '13px', color: '#475569', lineHeight: '1.5' }}>
                    🕒 Schedule: <strong>09:20 AM - 05:40 PM (+1)</strong><br/>
                    ⭐ Class: <strong>Business Suite</strong>
                  </p>
                  <div style={{ marginTop: 'auto', paddingTop: '12px', borderTop: '1px solid #f1f5f9', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <span style={{ fontSize: '12px', color: '#64748b' }}>PER PASSENGER</span>
                    <button className="safara-btn-orange" style={{ padding: '6px 14px', fontSize: '12px' }}>Reserve Seats</button>
                  </div>
                </div>

                <div className="safara-card">
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <span style={{ background: '#ffedd5', color: '#c2410c', fontSize: '11px', fontWeight: '700', padding: '4px 10px', borderRadius: '8px' }}>Emirates</span>
                    <span style={{ fontSize: '12px', color: '#64748b', fontWeight: '700' }}>EK 202</span>
                  </div>
                  <h3 style={{ margin: '6px 0', fontSize: '20px', fontWeight: '800', color: '#0f172a' }}>JFK → DXB</h3>
                  <p style={{ margin: 0, fontSize: '13px', color: '#475569', lineHeight: '1.5' }}>
                    🕒 Schedule: <strong>11:10 PM - 07:30 (+1)</strong><br/>
                    ⭐ Class: <strong>First Class Suite</strong>
                  </p>
                  <div style={{ marginTop: 'auto', paddingTop: '12px', borderTop: '1px solid #f1f5f9', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <span style={{ fontSize: '12px', color: '#64748b' }}>PER PASSENGER</span>
                    <button className="safara-btn-orange" style={{ padding: '6px 14px', fontSize: '12px' }}>Reserve Seats</button>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* TAB 4: HOTELS */}
          {activeTab === 'hotels' && (
            <div>
              <div style={{ marginBottom: '20px' }}>
                <h1 className="safara-title" style={{ fontSize: '24px' }}>Luxury Hotel Sanctuaries</h1>
                <p className="safara-subtitle" style={{ margin: 0 }}>Hand-curated 5-star properties, private villas, and alpine retreats.</p>
              </div>

              <div className="safara-cards-grid">
                <div className="safara-card" style={{ padding: 0, overflow: 'hidden' }}>
                  <div style={{ height: '160px', backgroundImage: 'url(https://images.unsplash.com/photo-1582719508461-905c673771fd?auto=format&fit=crop&w=800&q=80)', backgroundSize: 'cover', backgroundPosition: 'center' }}></div>
                  <div style={{ padding: '20px' }}>
                    <h3 style={{ margin: '0 0 6px 0', fontSize: '18px', fontWeight: '700', color: '#0f172a' }}>Aman Tokyo</h3>
                    <p style={{ margin: '0 0 12px 0', fontSize: '13px', color: '#64748b' }}>Otemachi Tower • Skyline & Imperial Garden Views</p>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                      <span style={{ fontSize: '14px', fontWeight: '800', color: '#ea580c' }}>$1,850 / night</span>
                      <button className="safara-btn-orange" style={{ padding: '8px 16px', fontSize: '12px' }}>Book Suites</button>
                    </div>
                  </div>
                </div>

                <div className="safara-card" style={{ padding: 0, overflow: 'hidden' }}>
                  <div style={{ height: '160px', backgroundImage: 'url(https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=800&q=80)', backgroundSize: 'cover', backgroundPosition: 'center' }}></div>
                  <div style={{ padding: '20px' }}>
                    <h3 style={{ margin: '0 0 6px 0', fontSize: '18px', fontWeight: '700', color: '#0f172a' }}>Le Bristol Paris</h3>
                    <p style={{ margin: '0 0 12px 0', fontSize: '13px', color: '#64748b' }}>Rue du Faubourg Saint-Honoré • 3 Michelin Stars</p>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                      <span style={{ fontSize: '14px', fontWeight: '800', color: '#ea580c' }}>$2,100 / night</span>
                      <button className="safara-btn-orange" style={{ padding: '8px 16px', fontSize: '12px' }}>Book Suites</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* TAB 5: DINING */}
          {activeTab === 'dining' && (
            <div>
              <div style={{ marginBottom: '20px' }}>
                <h1 className="safara-title" style={{ fontSize: '24px' }}>Fine Dining & Culinary Curation</h1>
                <p className="safara-subtitle" style={{ margin: 0 }}>Michelin-starred gastronomy and private Chef experiences worldwide.</p>
              </div>

              <div className="safara-cards-grid">
                <div className="safara-card">
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                    <span style={{ background: '#ffedd5', color: '#c2410c', fontSize: '11px', fontWeight: '700', padding: '3px 8px', borderRadius: '6px' }}>$$$$</span>
                    <span style={{ display: 'flex', alignItems: 'center', gap: '4px', fontSize: '13px', fontWeight: '700', color: '#d97706' }}>
                      <Star style={{ width: '14px', height: '14px', fill: '#d97706' }} /> 4.9
                    </span>
                  </div>
                  <h3 style={{ margin: '6px 0 2px 0', fontSize: '18px', fontWeight: '700', color: '#0f172a' }}>Kikunoi Honten</h3>
                  <p style={{ margin: '0 0 8px 0', fontSize: '13px', color: '#475569' }}>Traditional Kyoto Kaiseki (3 Michelin Stars)</p>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '12px', color: '#64748b', marginBottom: '16px' }}>
                    <MapPin style={{ width: '14px', height: '14px', color: '#ea580c' }} /> Kyoto, Japan
                  </div>
                  <button className="safara-btn-orange" style={{ width: '100%', justifyContent: 'center', padding: '10px' }}>
                    Reserve Private Table
                  </button>
                </div>

                <div className="safara-card">
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                    <span style={{ background: '#ffedd5', color: '#c2410c', fontSize: '11px', fontWeight: '700', padding: '3px 8px', borderRadius: '6px' }}>$$$$</span>
                    <span style={{ display: 'flex', alignItems: 'center', gap: '4px', fontSize: '13px', fontWeight: '700', color: '#d97706' }}>
                      <Star style={{ width: '14px', height: '14px', fill: '#d97706' }} /> 4.8
                    </span>
                  </div>
                  <h3 style={{ margin: '6px 0 2px 0', fontSize: '18px', fontWeight: '700', color: '#0f172a' }}>La Sponda</h3>
                  <p style={{ margin: '0 0 8px 0', fontSize: '13px', color: '#475569' }}>Mediterranean Seafood & Candlelit Terrace</p>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '12px', color: '#64748b', marginBottom: '16px' }}>
                    <MapPin style={{ width: '14px', height: '14px', color: '#ea580c' }} /> Amalfi, Italy
                  </div>
                  <button className="safara-btn-orange" style={{ width: '100%', justifyContent: 'center', padding: '10px' }}>
                    Reserve Private Table
                  </button>
                </div>
              </div>
            </div>
          )}

        </div>
      )}
    </div>
  );
}