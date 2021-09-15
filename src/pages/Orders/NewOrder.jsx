import PageHeader from '../../components/PageHeader';

export default function NewOrder() {
  return (
    <>
      <PageHeader
        breadcrumbs={['Orders', 'New Order']}
        title="New Order"
        subtitle="POST /orders — publishes an OrderCreated event via the transactional outbox."
      />
      <div className="card" style={{ maxWidth: 560 }}>
        <div className="form-row">
          <label>Customer</label>
          <input className="form-input" placeholder="customer@example.com" />
        </div>
        <div className="form-row">
          <label>Product SKU</label>
          <input className="form-input" placeholder="SKU-001" />
        </div>
        <div className="form-row">
          <label>Quantity</label>
          <input className="form-input" type="number" defaultValue={1} />
        </div>
        <div style={{ display: 'flex', gap: 10, marginTop: 12 }}>
          <button className="btn btn-primary">Create Order</button>
          <button className="btn">Cancel</button>
        </div>
      </div>

      <style>{`
        .form-row { display: flex; flex-direction: column; gap: 6px; margin-bottom: 14px; }
        .form-row label { font-size: 0.78rem; font-weight: 600; color: var(--text-secondary); text-transform: uppercase; letter-spacing: 0.04em; }
        .form-input {
          padding: 9px 12px;
          font-size: 0.9rem;
          font-family: inherit;
          border: 1px solid var(--border-strong);
          border-radius: var(--radius-sm);
          background: var(--bg-surface);
          outline: none;
          transition: border-color 0.15s ease, box-shadow 0.15s ease;
        }
        .form-input:focus { border-color: var(--accent); box-shadow: 0 0 0 3px rgba(79,70,229,0.12); }
      `}</style>
    </>
  );
}
