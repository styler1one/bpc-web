import { ImageResponse } from 'next/og';

export const runtime = 'edge';

export const size = {
  width: 32,
  height: 32,
};
export const contentType = 'image/png';

export default function Icon() {
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
          borderRadius: '6px',
        }}
      >
        <svg
          width="20"
          height="26"
          viewBox="0 0 40 60"
          fill="none"
        >
          <path d="M20 0L40 45L20 35L0 45L20 0Z" fill="white" />
        </svg>
      </div>
    ),
    {
      ...size,
    }
  );
}
