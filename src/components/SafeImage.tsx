"use client";

import { useState } from "react";

interface SafeImageProps {
  src: string;
  alt: string;
  className?: string;
  wrapperClassName?: string;
  caption?: string;
}

export default function SafeImage({
  src,
  alt,
  className = "",
  wrapperClassName = "",
  caption,
}: SafeImageProps) {
  const [failed, setFailed] = useState(false);

  if (failed) return null;

  return (
    <div className={wrapperClassName}>
      <img
        src={src}
        alt={alt}
        className={className}
        onError={() => setFailed(true)}
      />
      {caption && (
        <p className="font-mono text-[10px] text-secondary mt-2 text-center">
          {caption}
        </p>
      )}
    </div>
  );
}
