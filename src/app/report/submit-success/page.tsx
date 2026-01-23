'use client';

import { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { CheckCircle2 } from 'lucide-react';

export default function SubmitSuccessPage() {
  const [completionTime, setCompletionTime] = useState<string>('');

  useEffect(() => {
    // 获取当前真实时间
    const now = new Date();
    // 格式化为本地时间
    const formattedTime = now.toLocaleString('zh-CN', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
      hour12: false
    });
    setCompletionTime(formattedTime);
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-8">
      <Card className="max-w-6xl w-full">
        <CardHeader className="text-center pb-4">
          <div className="mx-auto mb-3 w-16 h-16 bg-green-100 rounded-full flex items-center justify-center">
            <CheckCircle2 className="w-10 h-10 text-green-600" />
          </div>
          <CardTitle className="text-2xl">提交成功</CardTitle>
          <p className="text-base text-gray-600 mt-1">您的个人有关事项报告已成功提交</p>
          <p className="text-sm text-gray-500 mt-2">
            完成时间：{completionTime}
          </p>
        </CardHeader>
      </Card>
    </div>
  );
}
