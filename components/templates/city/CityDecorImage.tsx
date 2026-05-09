"use client";

import Image, { type ImageProps } from "next/image";
import { useState } from "react";

type Props = ImageProps & {
  fallbackStyle?: React.CSSProperties;
};

export default function CityDecorImage({
  style,
  className,
  fallbackStyle,
  ...props
}: Props) {
  const [errored, setErrored] = useState(false);

  if (errored) {
    return (
      <div
        style={{ ...style, ...fallbackStyle }}
        className={className}
        aria-hidden="true"
      />
    );
  }

  return (
    <Image
      {...props}
      style={style}
      className={className}
      onError={() => setErrored(true)}
    />
  );
}
