import PageHeader from '../../components/PageHeader';

const STEPS = [
  { name: 'OrderCreated',      done: true,  at: '2 min ago' },
  { name: 'InventoryReserved', done: true,  at: '2 min ago' },
  { name: 'PaymentProcessed',  done: true,  at: '1 min ago' },
  { name: 'OrderConfirmed',    done: false, at: 'pending'  },
];

export default function OrderTracking() {
  return (
    <>
      <PageHeader
        breadcrumbs={['Orders', 'Order Tracking']}
        title="Order Tracking"
        subtitle="Follow a saga across services. Each step corresponds to a Kafka event."
      />
      <div className="card" style={{ maxWidth: 720 }}>
        <div className="card-header">
          <div className="card-title">ord_8af2 · Alicia Reyes</div>
          <span className="badge badge-success">3 of 4 steps complete</span>
        </div>
        <ol style={{ listStyle: 'none', padding: 0, margin: 0 }}>
          {STEPS.map((s, i) => (
            <li key={s.name} style={{
              display: 'grid',
              gridTemplateColumns: '24px 1fr auto',
              alignItems: 'center',
              padding: '14px 0',
              borderBottom: i < STEPS.length - 1 ? '1px solid var(--border)' : 'none',
            }}>
              <span style={{
                width: 18, height: 18, borderRadius: '50%',
                background: s.done ? 'var(--success)' : 'transparent',
                border: s.done ? 'none' : '2px dashed var(--border-strong)',
                boxShadow: s.done ? '0 0 0 4px #d1fae5' : 'none',
              }} />
              <div>
                <div style={{ fontWeight: 600 }}>{s.name}</div>
                <div className="muted" style={{ fontSize: '0.8rem' }}>{s.at}</div>
              </div>
              {s.done && <span className="badge badge-success">done</span>}
            </li>
          ))}
        </ol>
      </div>
    </>
  );
}
