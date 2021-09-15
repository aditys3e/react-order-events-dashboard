import PageHeader from '../../components/PageHeader';

const EVENTS = [
  { ts: '12:42:18', topic: 'orders.events',     type: 'OrderCreated',      key: 'ord_8af2', partition: 2 },
  { ts: '12:42:18', topic: 'inventory.events',  type: 'InventoryReserved', key: 'ord_8af2', partition: 0 },
  { ts: '12:42:19', topic: 'payments.events',   type: 'PaymentProcessed',  key: 'ord_8af2', partition: 1 },
  { ts: '12:40:02', topic: 'orders.events',     type: 'OrderCreated',      key: 'ord_8ae9', partition: 0 },
  { ts: '12:40:02', topic: 'inventory.events',  type: 'InventoryReserved', key: 'ord_8ae9', partition: 1 },
  { ts: '12:36:51', topic: 'inventory.events',  type: 'InventoryFailed',   key: 'ord_8ac0', partition: 2 },
  { ts: '12:36:51', topic: 'payments.events',   type: 'PaymentRefunded',   key: 'ord_8ac0', partition: 0 },
];

export default function EventStream() {
  return (
    <>
      <PageHeader
        breadcrumbs={['Events', 'Event Stream']}
        title="Event Stream"
        subtitle="Live tail of every event flowing through Kafka, across all topics."
        actions={<><button className="btn">Pause</button><button className="btn btn-primary">Filters</button></>}
      />
      <div className="card">
        <table className="table">
          <thead>
            <tr><th>Time</th><th>Topic</th><th>Event Type</th><th>Key</th><th>Partition</th></tr>
          </thead>
          <tbody>
            {EVENTS.map((e, i) => (
              <tr key={i}>
                <td className="muted"><code>{e.ts}</code></td>
                <td><code>{e.topic}</code></td>
                <td><span className="badge badge-info">{e.type}</span></td>
                <td><code>{e.key}</code></td>
                <td>{e.partition}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}
