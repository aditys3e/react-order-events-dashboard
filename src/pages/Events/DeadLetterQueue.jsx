import PageHeader from '../../components/PageHeader';

const DLQ = [
  { id: 'dlq_77', topic: 'inventory.events.DLT', type: 'OrderCreated', key: 'ord_88c1', reason: 'NumberFormatException', retries: 3 },
  { id: 'dlq_76', topic: 'payments.events.DLT',  type: 'OrderCreated', key: 'ord_8862', reason: 'Connection refused',     retries: 3 },
];

export default function DeadLetterQueue() {
  return (
    <>
      <PageHeader
        breadcrumbs={['Events', 'Dead Letter Queue']}
        title="Dead Letter Queue"
        subtitle="Messages that exhausted retries. Triage, fix, and replay."
        actions={<button className="btn btn-primary">Replay all</button>}
      />
      <div className="card">
        <table className="table">
          <thead>
            <tr><th>ID</th><th>DLT Topic</th><th>Event Type</th><th>Key</th><th>Reason</th><th>Retries</th><th></th></tr>
          </thead>
          <tbody>
            {DLQ.map((d) => (
              <tr key={d.id}>
                <td><code>{d.id}</code></td>
                <td><code>{d.topic}</code></td>
                <td>{d.type}</td>
                <td><code>{d.key}</code></td>
                <td><span className="badge badge-danger">{d.reason}</span></td>
                <td>{d.retries}</td>
                <td><button className="btn">Replay</button></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}
