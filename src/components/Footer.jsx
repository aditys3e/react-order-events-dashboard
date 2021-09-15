import './Footer.css';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-left">
        <span>© {new Date().getFullYear()} Order Events Platform</span>
        <span className="footer-sep">·</span>
        <span>v0.1.0</span>
      </div>
      <div className="footer-right">
        <a href="#docs">Docs</a>
        <a href="#api">API</a>
        <a href="#status">Status</a>
        <a href="#privacy">Privacy</a>
      </div>
    </footer>
  );
}
