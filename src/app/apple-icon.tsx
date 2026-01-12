import { ImageResponse } from 'next/og';

export const runtime = 'edge';

export const size = {
  width: 180,
  height: 180,
};
export const contentType = 'image/png';

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          fontSize: 24,
          background: 'linear-gradient(135deg, #1a3a5c 0%, #2d9cca 100%)',
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          borderRadius: '36px',
        }}
      >
        <svg
          width="100"
          height="130"
          viewBox="0 0 40 60"
          fill="none"
        >
          <defs>
            <linearGradient id="arrowGrad" x1="20" y1="0" x2="20" y2="60" gradientUnits="userSpaceOnUse">
              <stop stopColor="#7dd3e8" />
              <stop offset="0.5" stopColor="#5fbcd3" />
              <stop offset="1" stopColor="white" />
            </linearGradient>
          </defs>
          <path d="M20 0L40 45L20 35L0 45L20 0Z" fill="url(#arrowGrad)" />
        </svg>
      </div>
    ),
    {
      ...size,
    }
  );
}
