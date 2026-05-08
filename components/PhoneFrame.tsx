import React from "react";

interface PhoneFrameProps {
  width?: number;
  className?: string;
  style?: React.CSSProperties;
  children?: React.ReactNode;
}

export default function PhoneFrame({
  width = 240,
  className = "",
  style,
  children,
}: PhoneFrameProps) {
  const height = Math.round(width * 2.05);
  return (
    <div
      className={`phone-frame ${className}`}
      style={{ width, height, ...style }}
    >
      <div className="phone-screen">{children}</div>
    </div>
  );
}
