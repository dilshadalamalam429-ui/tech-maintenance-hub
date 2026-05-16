export default function App() {
  return (
    <div style={{
      fontFamily: 'Arial',
      padding: '20px',
      background: '#f4f4f4',
      minHeight: '100vh'
    }}>
      <h1 style={{ color: '#0a66c2' }}>
        Tech Maintenance Hub
      </h1>

      <p>
        Electrical, Instrument & Fire Alarm Maintenance App
      </p>

      <div style={{
        background: 'white',
        padding: '15px',
        borderRadius: '10px',
        marginTop: '20px'
      }}>
        <h2>PM Checklist</h2>
        <ul>
          <li>Fire Alarm Panel Check</li>
          <li>Smoke Detector Testing</li>
          <li>MCC Panel Inspection</li>
          <li>Instrument Calibration</li>
        </ul>
      </div>

      <div style={{
        background: 'white',
        padding: '15px',
        borderRadius: '10px',
        marginTop: '20px'
      }}>
        <h2>CM Work</h2>
        <p>Technician corrective maintenance tracking system.</p>
      </div>
    </div>
  )
}
