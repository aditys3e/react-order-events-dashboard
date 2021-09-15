import PageHeader from '../components/PageHeader';
import './Dashboard.css';

const STATS = [
  { label: 'Orders today', value: '1,284', delta: '+12.4%', trend: 'up', accent: 'indigo' },
  { label: 'Events processed', value: '46.2k', delta: '+3.1%', trend: 'up', accent: 'green' },
  { label: 'DLQ messages', value: '7', delta: '-3', trend: 'down', accent: 'amber' },
  { label: 'Avg latency', value: '128ms', delta: '+4ms', trend: 'up', accent: 'slate' },
];

const RECENT = [
  { id: 'ord_8af2', customer: 'Alicia Reyes',   total: '$129.40', status: 'Paid',       at: '2 min ago' },
  { id: 'ord_8ae9', customer: 'Marcus Chen',    total: '$48.00',  status: 'Reserved',   at: '4 min ago' },
  { id: 'ord_8ad5', customer: 'Priya Patel',    total: '$312.55', status: 'Pending',    at: '7 min ago' },
  { id: 'ord_8ac0', customer: 'David Okafor',   total: '$22.10',  status: 'Failed',     at: '12 min ago' },
  { id: 'ord_8aa7', customer: 'Yuki Tanaka',    total: '$87.65',  status: 'Paid',       at: '18 min ago' },
];

const STATUS_BADGE = {
  Paid: 'badge-success',
  Reserved: 'badge-info',
  Pending: 'badge-warning',
  Failed: 'badge-danger',
};

export default function Dashboard() {
  return (
    <>
      <PageHeader
        breadcrumbs={['Home', 'Dashboard']}
        title="Welcome back, Aditya"
        subtitle="Here's what's happening across your event platform right now."
        actions={<button className="btn btn-primary">+ New Order</button>}
      />

      <div className="stat-grid">
        {STATS.map((s) => (
          <div key={s.label} className={`stat-card stat-${s.accent}`}>
            <div className="stat-label">{s.label}</div>
            <div className="stat-value">{s.value}</div>
            <div className={`stat-delta stat-${s.trend}`}>{s.delta}</div>
          </div>
        ))}
      </div>

      <div className="dashboard-grid">
        <div className="card">
          <div className="card-header">
            <div className="card-title">Recent orders</div>
            <a href="/orders/all" className="card-link">View all →</a>
          </div>
          <table className="table">
            <thead>
              <tr>
                <th>Order</th>
                <th>Customer</th>
                <th>Total</th>
                <th>Status</th>
                <th>When</th>
              </tr>
            </thead>
            <tbody>
              {RECENT.map((r) => (
                <tr key={r.id}>
                  <td><code>{r.id}</code></td>
                  <td>{r.customer}</td>
                  <td>{r.total}</td>
                  <td><span className={`badge ${STATUS_BADGE[r.status]}`}>{r.status}</span></td>
                  <td className="muted">{r.at}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="card">
          <div className="card-header">
            <div className="card-title">Event flow</div>
            <span className="badge badge-info">live</span>
          </div>
          <ul className="event-list">
            <li><span className="event-dot ev-green" /><div><b>OrderCreated</b><span className="muted"> · ord_8af2 · 2m ago</span></div></li>
            <li><span className="event-dot ev-indigo" /><div><b>InventoryReserved</b><span className="muted"> · ord_8af2 · 2m ago</span></div></li>
            <li><span className="event-dot ev-indigo" /><div><b>PaymentProcessed</b><span className="muted"> · ord_8af2 · 1m ago</span></div></li>
            <li><span className="event-dot ev-amber" /><div><b>InventoryFailed</b><span className="muted"> · ord_8ac0 · 12m ago</span></div></li>
            <li><span className="event-dot ev-green" /><div><b>OrderCreated</b><span className="muted"> · ord_8aa7 · 18m ago</span></div></li>
          </ul>
        </div>
      </div>
    </>
  );
}
