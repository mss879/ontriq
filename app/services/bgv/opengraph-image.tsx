import { ImageResponse } from 'next/server';

export const alt = 'Background Verification Services in Sri Lanka — Ontriq';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

const checks = ['Employment', 'Education', 'Criminal Record', 'Identity & Address', 'References'];

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          padding: '64px 72px',
          background: '#0b1733',
          color: '#ffffff',
          fontFamily: 'sans-serif',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: 16, fontSize: 28, letterSpacing: 6, color: '#94a3b8' }}>
          <div style={{ width: 48, height: 6, borderRadius: 3, background: '#F75834' }} />
          ONTRIQ · BGV
        </div>

        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <div style={{ fontSize: 76, fontWeight: 700, lineHeight: 1.05, letterSpacing: -2 }}>
            Background Verification
          </div>
          <div style={{ fontSize: 76, fontWeight: 700, lineHeight: 1.05, letterSpacing: -2, color: '#F75834' }}>
            Services in Sri Lanka
          </div>
          <div style={{ marginTop: 28, fontSize: 32, color: '#cbd5e1' }}>
            Complete employee screening in 7 working days
          </div>
        </div>

        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 12 }}>
          {checks.map((check) => (
            <div
              key={check}
              style={{
                display: 'flex',
                padding: '10px 20px',
                borderRadius: 999,
                border: '2px solid rgba(255,255,255,0.18)',
                fontSize: 24,
                color: '#e2e8f0',
              }}
            >
              {check}
            </div>
          ))}
        </div>
      </div>
    ),
    size
  );
}
