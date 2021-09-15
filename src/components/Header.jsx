import './Header.css';

export default function Header() {
  return (
    <header className="header">
      <div className="header-left">
        <input
          type="search"
          placeholder="Search orders, events, customers..."
          className="header-search"
        />
      </div>

      <div className="header-right">
        <button className="header-icon-btn" aria-label="Notifications" title="Notifications">
          <span className="header-icon">◔</span>
          <span className="header-badge">3</span>
        </button>
        <button className="header-icon-btn" aria-label="Help" title="Help">
          <span className="header-icon">?</span>
        </button>
        <div className="header-user">
          <div className="header-avatar">AA</div>
          <div className="header-user-meta">
            <div className="header-user-name">Aditya A.</div>
            <div className="header-user-role">Platform Engineer</div>
          </div>
        </div>
      </div>
    </header>
  );
}
