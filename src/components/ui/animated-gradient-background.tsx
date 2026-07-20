import React from 'react';

interface BlobConfig {
  size: number;
  className: string;
  style?: React.CSSProperties;
}

const defaultBlobs: BlobConfig[] = [
  {
    size: 700,
    className: 'animated-blob animated-blob-1',
    style: {
      top: '-12%',
      right: '-8%',
      background: 'radial-gradient(circle, rgba(37,99,235,0.35), transparent 65%)',
      filter: 'blur(80px)',
    },
  },
  {
    size: 600,
    className: 'animated-blob animated-blob-2',
    style: {
      bottom: '-10%',
      left: '-6%',
      background: 'radial-gradient(circle, rgba(56,189,248,0.3), transparent 65%)',
      filter: 'blur(90px)',
    },
  },
  {
    size: 500,
    className: 'animated-blob animated-blob-3',
    style: {
      top: '30%',
      left: '20%',
      background: 'radial-gradient(circle, rgba(30,58,138,0.2), transparent 60%)',
      filter: 'blur(70px)',
    },
  },
];

interface AnimatedGradientBackgroundProps {
  className?: string;
  blobs?: BlobConfig[];
}

export default function AnimatedGradientBackground({
  className = '',
  blobs = defaultBlobs,
}: AnimatedGradientBackgroundProps) {
  return (
    <div
      className={`absolute inset-0 z-0 overflow-hidden pointer-events-none ${className}`}
      aria-hidden="true"
    >
      <div
        className="absolute inset-0"
        style={{
          background:
            'linear-gradient(135deg, rgba(37,99,235,0.06) 0%, rgba(248,250,252,1) 40%, rgba(56,189,248,0.05) 70%, rgba(248,250,252,1) 100%)',
        }}
      />
      {blobs.map((blob, i) => (
        <div
          key={i}
          className={blob.className}
          style={{
            position: 'absolute',
            width: `${blob.size}px`,
            height: `${blob.size}px`,
            willChange: 'transform',
            ...blob.style,
          }}
        />
      ))}
    </div>
  );
}
