'use client';

import { useEffect, useState } from 'react';

interface WatermarkProps {
  userId?: string;
  color?: string;
  fontSize?: number;
  opacity?: number;
  rotate?: number;
}

// 格式化时间为指定格式
const formatTime = (timestamp: number): string => {
  const date = new Date(timestamp);
  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const day = date.getDate();
  const hours = date.getHours();
  const minutes = date.getMinutes();
  const seconds = date.getSeconds();
  const ms = date.getMilliseconds();

  return `${year}-${month}-${day} ${hours}:${minutes}:${seconds}.${ms}`;
};

export default function Watermark({
  userId = '001731220',
  color = '#9ca3af',
  fontSize = 16,
  opacity = 0.3,
  rotate = -30,
}: WatermarkProps) {
  const [watermarkUrl, setWatermarkUrl] = useState('');
  const [currentTime, setCurrentTime] = useState(Date.now());

  useEffect(() => {
    // 每秒更新一次时间
    const timer = setInterval(() => {
      setCurrentTime(Date.now());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // 水印文字：用户ID + 当前时间
    const formattedTime = formatTime(currentTime);
    const text = `${userId} ${formattedTime}`;

    // 设置 canvas 尺寸（增大以增加间距）
    canvas.width = 400;
    canvas.height = 200;

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
  }, [currentTime, userId, color, fontSize, opacity, rotate]);

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
        backgroundSize: '400px 200px',
      }}
    />
  );
}
