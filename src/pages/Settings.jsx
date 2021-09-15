import PageHeader from '../components/PageHeader';

export default function Settings() {
  return (
    <>
      <PageHeader
        breadcrumbs={['Settings']}
        title="Settings"
        subtitle="Cluster connections, topic conventions, and feature flags."
      />
      <div className="card" style={{ maxWidth: 640 }}>
        <div className="card-header">
          <div className="card-title">Kafka cluster</div>
          <span className="badge badge-success">connected</span>
        </div>
        <div className="muted" style={{ fontSize: '0.85rem', lineHeight: 1.7 }}>
          <div>Bootstrap: <code>localhost:9092</code></div>
          <div>Schema registry: <code>localhost:8081</code></div>
          <div>Cluster ID: <code>4L6g3nShT-eMCtK--X86sw</code></div>
        </div>
      </div>
    </>
  );
}
