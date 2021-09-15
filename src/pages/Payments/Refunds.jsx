import PageHeader from '../../components/PageHeader';

export default function Refunds() {
  return (
    <>
      <PageHeader
        breadcrumbs={['Payments', 'Refunds']}
        title="Refunds"
        subtitle="Compensating transactions issued when a downstream step in a saga fails."
      />
      <div className="card">
        <table className="table">
          <thead>
            <tr><th>Refund</th><th>Order</th><th>Amount</th><th>Reason</th><th>State</th><th>When</th></tr>
          </thead>
          <tbody>
            <tr>
              <td><code>rf_022</code></td>
              <td><code>ord_8ac0</code></td>
              <td>$22.10</td>
              <td>InventoryFailed</td>
              <td><span className="badge badge-success">Issued</span></td>
              <td className="muted">11 min ago</td>
            </tr>
            <tr>
              <td><code>rf_021</code></td>
              <td><code>ord_89f4</code></td>
              <td>$54.00</td>
              <td>Customer requested</td>
              <td><span className="badge badge-success">Issued</span></td>
              <td className="muted">2 hr ago</td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
}
