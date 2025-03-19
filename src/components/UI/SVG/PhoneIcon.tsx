import React from 'react';

export const PhoneIcon = ({
  color,
  width,
  height
}: {
  color?: string;
  width?: number;
  height?: number;
}) => {
  return (
    <svg
      width={width || 37}
      height={height || 37}
      viewBox="0 0 37 37"
      fill={color || 'none'}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M11.9161 1.77929C11.3597 0.435204 9.89273 -0.280194 8.49084 0.102797L2.13174 1.8371C0.874376 2.18396 0 3.3257 0 4.62643C0 22.5042 14.4958 37 32.3736 37C33.6743 37 34.816 36.1256 35.1629 34.8683L36.8972 28.5092C37.2802 27.1073 36.5648 25.6403 35.2207 25.0839L28.2835 22.1934C27.1056 21.702 25.7399 22.0417 24.9378 23.0317L22.0184 26.5942C16.9311 24.1879 12.8121 20.0689 10.4058 14.9816L13.9683 12.0695C14.9583 11.2601 15.298 9.90158 14.8066 8.72371L11.9161 1.78651V1.77929Z"
        fill={color || '#292929'}
      />
    </svg>
  );
};
