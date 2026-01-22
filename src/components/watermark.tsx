'use client';

import { useEffect, useState } from 'react';

interface WatermarkProps {
  text?: string;
  color?: string;
  fontSize?: number;
  opacity?: number;
  rotate?: number;
}

export default function Watermark({
  text = '001731220  2026-1-22 16:37:53.445',
  color = '#9ca3af',
  fontSize = 16,
  opacity = 0.3,
  rotate = -30,
}: WatermarkProps) {
  const [watermarkUrl, setWatermarkUrl] = useState('');

  useEffect(() => {
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // 设置 canvas 尺寸
    canvas.width = 200;
    canvas.height = 100;

    // 设置样式
    ctx.font = `${fontSize}px sans-serif`;
    ctx.fillStyle = color;
    ctx.globalAlpha = opacity;
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';

    // 绘制水印文字
    ctx.save();
    ctx.translate(canvas.width / 2, canvas.height / 2);
    ctx.rotate((rotate * Math.PI) / 180);
    ctx.fillText(text, 0, 0);
    ctx.restore();

    // 转换为 data URL
    const dataUrl = canvas.toDataURL('image/png');
    setWatermarkUrl(dataUrl);
  }, [text, color, fontSize, opacity, rotate]);

  return (
    <div
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        pointerEvents: 'none',
        zIndex: 9999,
        backgroundImage: `url(${watermarkUrl})`,
        backgroundRepeat: 'repeat',
        backgroundSize: '200px 100px',
      }}
    />
  );
}
