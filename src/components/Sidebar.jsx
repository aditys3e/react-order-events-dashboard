import { useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import './Sidebar.css';

const NAV = [
  { type: 'item', label: 'Dashboard', to: '/dashboard', icon: '▦' },
  {
    type: 'group',
    label: 'Orders',
    icon: '◰',
    base: '/orders',
    children: [
      { label: 'All Orders', to: '/orders/all' },
      { label: 'New Order', to: '/orders/new' },
      { label: 'Order Tracking', to: '/orders/tracking' },
    ],
  },
  {
    type: 'group',
    label: 'Inventory',
    icon: '◫',
    base: '/inventory',
    children: [
      { label: 'Stock Levels', to: '/inventory/stock' },
      { label: 'Reservations', to: '/inventory/reservations' },
    ],
  },
  {
    type: 'group',
    label: 'Payments',
    icon: '◇',
    base: '/payments',
    children: [
      { label: 'Transactions', to: '/payments/transactions' },
      { label: 'Refunds', to: '/payments/refunds' },
    ],
  },
  {
    type: 'group',
    label: 'Events',
    icon: '◊',
    base: '/events',
    children: [
      { label: 'Event Stream', to: '/events/stream' },
      { label: 'Dead Letter Queue', to: '/events/dlq' },
    ],
  },
  { type: 'item', label: 'Settings', to: '/settings', icon: '◉' },
];

export default function Sidebar() {
  const { pathname } = useLocation();
  const initiallyOpen = NAV.filter(
    (n) => n.type === 'group' && pathname.startsWith(n.base)
  ).map((n) => n.label);
  const [open, setOpen] = useState(new Set(initiallyOpen));

  const toggle = (label) => {
    setOpen((prev) => {
      const next = new Set(prev);
      if (next.has(label)) next.delete(label);
      else next.add(label);
      return next;
    });
  };

  return (
    <aside className="sidebar">
      <div className="sidebar-brand">
        <div className="sidebar-brand-mark">⬢</div>
        <div className="sidebar-brand-text">
          <div className="sidebar-brand-name">Order Events</div>
          <div className="sidebar-brand-sub">Platform Console</div>
        </div>
      </div>

      <nav className="sidebar-nav">
        {NAV.map((entry) => {
          if (entry.type === 'item') {
            return (
              <NavLink
                key={entry.label}
                to={entry.to}
                className={({ isActive }) =>
                  'nav-item' + (isActive ? ' nav-item-active' : '')
                }
              >
                <span className="nav-icon">{entry.icon}</span>
                <span className="nav-label">{entry.label}</span>
              </NavLink>
            );
          }

          const isOpen = open.has(entry.label);
          const groupActive = pathname.startsWith(entry.base);

          return (
            <div key={entry.label} className="nav-group">
              <button
                type="button"
                onClick={() => toggle(entry.label)}
                className={
                  'nav-item nav-group-toggle' +
                  (groupActive ? ' nav-group-active' : '')
                }
              >
                <span className="nav-icon">{entry.icon}</span>
                <span className="nav-label">{entry.label}</span>
                <span className={'nav-chev' + (isOpen ? ' nav-chev-open' : '')}>
                  ›
                </span>
              </button>

              {isOpen && (
                <div className="nav-children">
                  {entry.children.map((child) => (
                    <NavLink
                      key={child.to}
                      to={child.to}
                      className={({ isActive }) =>
                        'nav-child' + (isActive ? ' nav-child-active' : '')
                      }
                    >
                      <span className="nav-child-dot" />
                      {child.label}
                    </NavLink>
                  ))}
                </div>
              )}
            </div>
          );
        })}
      </nav>

      <div className="sidebar-footer">
        <div className="sidebar-status">
          <span className="status-dot" />
          <div>
            <div className="status-label">All systems operational</div>
            <div className="status-sub">Kafka · Postgres · Services</div>
          </div>
        </div>
      </div>
    </aside>
  );
}
