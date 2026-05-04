import { useState } from 'react'
import './App.css'

function App() {
  return (
    <div className="app-container">
      <header className="hero-section">
        <h1>EventHub</h1>
        <p className="subtitle">
          Nền tảng kết nối cộng đồng, quản lý và khám phá các sự kiện tại địa phương của bạn một cách dễ dàng.
        </p>
        <div className="cta-group">
          <button className="btn-primary">Bắt đầu ngay</button>
        </div>
      </header>

      <section className="features-grid">
        <div className="feature-card">
          <h3>Khám phá Sự kiện</h3>
          <p>Tìm kiếm các buổi workshop, hội thảo và hoạt động cộng đồng quanh bạn.</p>
        </div>
        <div className="feature-card">
          <h3>Quản lý Dễ dàng</h3>
          <p>Dành cho nhà tổ chức: tạo và quản lý người tham gia chỉ trong vài cú click.</p>
        </div>
        <div className="feature-card">
          <h3>Kết nối Cộng đồng</h3>
          <p>Tham gia thảo luận, đánh giá và xây dựng mạng lưới cộng đồng vững mạnh.</p>
        </div>
      </section>

      <footer style={{ padding: '2rem', color: '#64748b' }}>
        <p>&copy; 2026 EventHub Team. Advanced Web Development Course.</p>
      </footer>
    </div>
  )
}

export default App
