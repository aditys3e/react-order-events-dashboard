import PageHeader from '../../components/PageHeader';

const ORDERS = [
  { id: 'ord_8af2', customer: 'Alicia Reyes',  total: '$129.40', items: 3, status: 'Paid',     at: '2 min ago' },
  { id: 'ord_8ae9', customer: 'Marcus Chen',   total: '$48.00',  items: 1, status: 'Reserved', at: '4 min ago' },
  { id: 'ord_8ad5', customer: 'Priya Patel',   total: '$312.55', items: 5, status: 'Pending',  at: '7 min ago' },
  { id: 'ord_8ac0', customer: 'David Okafor',  total: '$22.10',  items: 1, status: 'Failed',   at: '12 min ago' },
  { id: 'ord_8aa7', customer: 'Yuki Tanaka',   total: '$87.65',  items: 2, status: 'Paid',     at: '18 min ago' },
  { id: 'ord_8a91', customer: 'Sara Lindgren', total: '$199.00', items: 4, status: 'Paid',     at: '24 min ago' },
];

const BADGE = { Paid: 'badge-success', Reserved: 'badge-info', Pending: 'badge-warning', Failed: 'badge-danger' };

export default function AllOrders() {
  return (
    <>
      <PageHeader
        breadcrumbs={['Orders', 'All Orders']}
        title="All Orders"
        subtitle="Every order recorded by the order-service, with current saga state."
        actions={<button className="btn btn-primary">+ New Order</button>}
      />
      <div className="card">
        <table className="table">
          <thead>
            <tr><th>Order</th><th>Customer</th><th>Items</th><th>Total</th><th>Status</th><th>When</th></tr>
          </thead>
          <tbody>
            {ORDERS.map((o) => (
              <tr key={o.id}>
                <td><code>{o.id}</code></td>
                <td>{o.customer}</td>
                <td>{o.items}</td>
                <td>{o.total}</td>
                <td><span className={`badge ${BADGE[o.status]}`}>{o.status}</span></td>
                <td className="muted">{o.at}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}
