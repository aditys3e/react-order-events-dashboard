import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Layout from './components/Layout';
import Dashboard from './pages/Dashboard';
import AllOrders from './pages/Orders/AllOrders';
import NewOrder from './pages/Orders/NewOrder';
import OrderTracking from './pages/Orders/OrderTracking';
import Stock from './pages/Inventory/Stock';
import Reservations from './pages/Inventory/Reservations';
import Transactions from './pages/Payments/Transactions';
import Refunds from './pages/Payments/Refunds';
import EventStream from './pages/Events/EventStream';
import DeadLetterQueue from './pages/Events/DeadLetterQueue';
import Settings from './pages/Settings';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Navigate to="/dashboard" replace />} />
          <Route path="dashboard" element={<Dashboard />} />

          <Route path="orders">
            <Route index element={<Navigate to="all" replace />} />
            <Route path="all" element={<AllOrders />} />
            <Route path="new" element={<NewOrder />} />
            <Route path="tracking" element={<OrderTracking />} />
          </Route>

          <Route path="inventory">
            <Route index element={<Navigate to="stock" replace />} />
            <Route path="stock" element={<Stock />} />
            <Route path="reservations" element={<Reservations />} />
          </Route>

          <Route path="payments">
            <Route index element={<Navigate to="transactions" replace />} />
            <Route path="transactions" element={<Transactions />} />
            <Route path="refunds" element={<Refunds />} />
          </Route>

          <Route path="events">
            <Route index element={<Navigate to="stream" replace />} />
            <Route path="stream" element={<EventStream />} />
            <Route path="dlq" element={<DeadLetterQueue />} />
          </Route>

          <Route path="settings" element={<Settings />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
