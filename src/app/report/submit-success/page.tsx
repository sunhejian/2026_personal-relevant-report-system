'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { CheckCircle2 } from 'lucide-react';

export default function SubmitSuccessPage() {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-8">
      <Card className="max-w-6xl w-full">
        <CardHeader className="text-center pb-4">
          <div className="mx-auto mb-3 w-16 h-16 bg-green-100 rounded-full flex items-center justify-center">
            <CheckCircle2 className="w-10 h-10 text-green-600" />
          </div>
          <CardTitle className="text-2xl">提交成功</CardTitle>
          <p className="text-base text-gray-600 mt-1">您的个人有关事项报告已成功提交</p>
        </CardHeader>
      </Card>
    </div>
  );
}
