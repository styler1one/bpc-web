import { ImageResponse } from 'next/og';

export const runtime = 'edge';

export const alt = 'Best Practice Company - AI die werkt';
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = 'image/png';

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          height: '100%',
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          background: 'linear-gradient(135deg, #1a3a5c 0%, #132e40 50%, #1a3a5c 100%)',
          fontFamily: 'system-ui, sans-serif',
        }}
      >
        {/* Decorative elements */}
        <div
          style={{
            position: 'absolute',
            top: '-100px',
            right: '-100px',
            width: '400px',
            height: '400px',
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(45,156,202,0.3) 0%, transparent 70%)',
          }}
        />
        <div
          style={{
            position: 'absolute',
            bottom: '-50px',
            left: '-50px',
            width: '300px',
            height: '300px',
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(95,188,211,0.2) 0%, transparent 70%)',
          }}
        />

        {/* Logo area - Arrow shape */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            marginBottom: '40px',
          }}
        >
          <svg
            width="80"
            height="100"
            viewBox="0 0 40 60"
            fill="none"
          >
            <defs>
              <linearGradient id="arrowGrad" x1="20" y1="0" x2="20" y2="60" gradientUnits="userSpaceOnUse">
                <stop stopColor="#7dd3e8" />
                <stop offset="0.5" stopColor="#2d9cca" />
                <stop offset="1" stopColor="#1a3a5c" />
              </linearGradient>
            </defs>
            <path d="M20 0L40 45L20 35L0 45L20 0Z" fill="url(#arrowGrad)" />
          </svg>
        </div>

        {/* Company name */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '16px',
          }}
        >
          <span
            style={{
              fontSize: '64px',
              fontWeight: 700,
              color: 'white',
              letterSpacing: '-0.02em',
            }}
          >
            Best Practice Company
          </span>
          
          {/* Tagline */}
          <span
            style={{
              fontSize: '36px',
              fontWeight: 600,
              background: 'linear-gradient(90deg, #7dd3e8, #2d9cca)',
              backgroundClip: 'text',
              color: 'transparent',
            }}
          >
            AI die werkt.
          </span>

          {/* Subtitle */}
          <span
            style={{
              fontSize: '24px',
              color: 'rgba(255,255,255,0.7)',
              marginTop: '20px',
            }}
          >
            Van AI-ambitie naar productie in 8-12 weken
          </span>
        </div>

        {/* Bottom decorative line */}
        <div
          style={{
            position: 'absolute',
            bottom: '60px',
            left: '50%',
            transform: 'translateX(-50%)',
            width: '200px',
            height: '4px',
            background: 'linear-gradient(90deg, transparent, #2d9cca, transparent)',
            borderRadius: '2px',
          }}
        />
      </div>
    ),
    {
      ...size,
    }
  );
}
