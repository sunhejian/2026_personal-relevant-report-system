'use client';

import { useEffect, useState } from 'react';

interface WatermarkProps {
  startTime?: string;
  endTime?: string;
  color?: string;
  fontSize?: number;
  opacity?: number;
  rotate?: number;
}

// 将时间字符串转换为时间戳
const parseTime = (timeStr: string): number => {
  return new Date(timeStr).getTime();
};

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
  startTime = '2026-1-22 16:37:53.445',
  endTime = '2026-1-22 17:13:22.154',
  color = '#9ca3af',
  fontSize = 16,
  opacity = 0.3,
  rotate = -30,
}: WatermarkProps) {
  const [watermarkUrl, setWatermarkUrl] = useState('');
  const [visitCount, setVisitCount] = useState(0);

  useEffect(() => {
    // 增加访问次数
    setVisitCount(prev => prev + 1);
  }, []);

  useEffect(() => {
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // 计算当前访问对应的时间
    const startTimestamp = parseTime(startTime);
    const endTimestamp = parseTime(endTime);
    const timeRange = endTimestamp - startTimestamp;

    // 使用访问次数和当前时间戳生成一个确定的时间点
    // 这样每次页面访问都会得到不同的时间
    const currentTimestamp = startTimestamp + (timeRange * (visitCount % 100)) / 100;
    const formattedTime = formatTime(currentTimestamp);

    // 水印文字
    const text = `001731220 ${formattedTime}`;

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
  }, [visitCount, startTime, endTime, color, fontSize, opacity, rotate]);

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
