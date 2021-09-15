import PageHeader from '../../components/PageHeader';

const RES = [
  { id: 'res_a32', order: 'ord_8af2', sku: 'SKU-001', qty: 2, state: 'Held',     at: '2 min ago'  },
  { id: 'res_a31', order: 'ord_8ae9', sku: 'SKU-002', qty: 1, state: 'Held',     at: '4 min ago'  },
  { id: 'res_a30', order: 'ord_8ad5', sku: 'SKU-004', qty: 5, state: 'Held',     at: '7 min ago'  },
  { id: 'res_a2f', order: 'ord_8ac0', sku: 'SKU-003', qty: 1, state: 'Released', at: '12 min ago' },
];

const BADGE = { Held: 'badge-info', Released: 'badge-warning' };

export default function Reservations() {
  return (
    <>
      <PageHeader
        breadcrumbs={['Inventory', 'Reservations']}
        title="Reservations"
        subtitle="Stock held against in-flight orders before payment confirms."
      />
      <div className="card">
        <table className="table">
          <thead>
            <tr><th>Reservation</th><th>Order</th><th>SKU</th><th>Qty</th><th>State</th><th>When</th></tr>
          </thead>
          <tbody>
            {RES.map((r) => (
              <tr key={r.id}>
                <td><code>{r.id}</code></td>
                <td><code>{r.order}</code></td>
                <td>{r.sku}</td>
                <td>{r.qty}</td>
                <td><span className={`badge ${BADGE[r.state]}`}>{r.state}</span></td>
                <td className="muted">{r.at}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}
