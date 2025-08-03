import './App.css';

function App() {
  return (
    <div className="app-container">
      <header className="header">
        <h1 className="logo">MyCrazyApp</h1>
        <nav>
          <ul className="nav-links">
            <li><a href="#">Home</a></li>
            <li><a href="#">Features</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Login</a></li>
          </ul>
        </nav>
      </header>

      <main className="hero-section">
        <h2>Welcome to <span>MyCrazyApp 🚀</span></h2>
        <p>This is going to be the craziest youth app ever built.</p>
        <button className="cta-button">Join the Hype</button>
      </main>

      <footer className="footer">
        © 2025 MyCrazyApp. All rights reserved.
      </footer>
    </div>
  );
}

export default App;
