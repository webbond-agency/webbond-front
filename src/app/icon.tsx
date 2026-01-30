import { ImageResponse } from 'next/og';

export const size = {
  width: 62,
  height: 62,
};

export const contentType = 'image/png';

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          fontSize: 19,
          background: 'linear-gradient(to bottom, #434343, #000000)',
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: '#e6533c',
          borderRadius: '50%',
          border: '5px solid #254f43',
          padding: 10,
          fontWeight: 'bold',
        }}
      >
        WB
      </div>
    ),
    {
      ...size,
    },
  );
}
