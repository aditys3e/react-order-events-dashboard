import PageHeader from '../../components/PageHeader';

const STOCK = [
  { sku: 'SKU-001', name: 'Roasted Coffee 250g', available: 142, reserved: 18, threshold: 50 },
  { sku: 'SKU-002', name: 'Ceramic Mug',         available: 31,  reserved: 5,  threshold: 25 },
  { sku: 'SKU-003', name: 'Frother',             available: 12,  reserved: 4,  threshold: 20 },
  { sku: 'SKU-004', name: 'Milk Jug',            available: 240, reserved: 22, threshold: 50 },
];

export default function Stock() {
  return (
    <>
      <PageHeader
        breadcrumbs={['Inventory', 'Stock Levels']}
        title="Stock Levels"
        subtitle="Live inventory state, updated by InventoryReserved / InventoryReleased events."
      />
      <div className="card">
        <table className="table">
          <thead>
            <tr><th>SKU</th><th>Product</th><th>Available</th><th>Reserved</th><th>Status</th></tr>
          </thead>
          <tbody>
            {STOCK.map((s) => {
              const low = s.available <= s.threshold;
              return (
                <tr key={s.sku}>
                  <td><code>{s.sku}</code></td>
                  <td>{s.name}</td>
                  <td>{s.available}</td>
                  <td>{s.reserved}</td>
                  <td>
                    <span className={`badge ${low ? 'badge-warning' : 'badge-success'}`}>
                      {low ? 'Low stock' : 'Healthy'}
                    </span>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
}
