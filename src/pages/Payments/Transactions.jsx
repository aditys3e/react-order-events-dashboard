import PageHeader from '../../components/PageHeader';

const TX = [
  { id: 'tx_991', order: 'ord_8af2', amount: '$129.40', method: 'Card · 4242', state: 'Captured', at: '1 min ago'  },
  { id: 'tx_990', order: 'ord_8ae9', amount: '$48.00',  method: 'Card · 0019', state: 'Pending',  at: '3 min ago'  },
  { id: 'tx_98f', order: 'ord_8ac0', amount: '$22.10',  method: 'Card · 7711', state: 'Failed',   at: '11 min ago' },
  { id: 'tx_98e', order: 'ord_8aa7', amount: '$87.65',  method: 'Card · 4242', state: 'Captured', at: '18 min ago' },
];

const BADGE = { Captured: 'badge-success', Pending: 'badge-warning', Failed: 'badge-danger' };

export default function Transactions() {
  return (
    <>
      <PageHeader
        breadcrumbs={['Payments', 'Transactions']}
        title="Transactions"
        subtitle="Every charge, success or failure. Failures emit PaymentFailed and trigger compensating events."
      />
      <div className="card">
        <table className="table">
          <thead>
            <tr><th>Tx</th><th>Order</th><th>Amount</th><th>Method</th><th>State</th><th>When</th></tr>
          </thead>
          <tbody>
            {TX.map((t) => (
              <tr key={t.id}>
                <td><code>{t.id}</code></td>
                <td><code>{t.order}</code></td>
                <td>{t.amount}</td>
                <td>{t.method}</td>
                <td><span className={`badge ${BADGE[t.state]}`}>{t.state}</span></td>
                <td className="muted">{t.at}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}
