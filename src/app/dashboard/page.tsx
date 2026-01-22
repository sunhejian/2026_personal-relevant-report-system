'use client';

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Calendar, Clock, AlertTriangle, CheckCircle2, History, FileText } from 'lucide-react';
import Link from 'next/link';

export default function DashboardPage() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* 顶部导航栏 */}
      <header className="bg-white dark:bg-gray-800 border-b shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                <FileText className="w-5 h-5 text-white" />
              </div>
              <span className="text-lg font-semibold">领导干部个人有关事项报告系统</span>
            </div>
            <div className="flex items-center space-x-4">
              <span className="text-sm text-muted-foreground">欢迎，张三</span>
              <Badge variant="outline">厅级正职</Badge>
              <Button variant="ghost" size="sm">
                退出登录
              </Button>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* 核心操作卡片 */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
          <Card className="bg-gradient-to-br from-primary to-blue-700 text-white border-none shadow-lg">
            <CardHeader>
              <div className="flex items-start justify-between">
                <div>
                  <CardTitle className="text-2xl mb-2">开始填报</CardTitle>
                  <CardDescription className="text-red-100">
                    选择年度开始个人有关事项报告填报
                  </CardDescription>
                </div>
                <Calendar className="w-12 h-12 opacity-80" />
              </div>
            </CardHeader>
            <CardContent>
              <Link href="/year-select">
                <Button size="lg" className="w-full bg-white text-primary hover:bg-blue-50 h-14 text-base font-semibold">
                  选择填报年度
                </Button>
              </Link>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-gray-700 to-gray-800 text-white border-none shadow-lg">
            <CardHeader>
              <div className="flex items-start justify-between">
                <div>
                  <CardTitle className="text-2xl mb-2">历史记录</CardTitle>
                  <CardDescription className="text-gray-300">
                    查看历史年度填报记录
                  </CardDescription>
                </div>
                <History className="w-12 h-12 opacity-80" />
              </div>
            </CardHeader>
            <CardContent>
              <Link href="/history">
                <Button size="lg" className="w-full bg-white text-gray-700 hover:bg-gray-50 h-14 text-base font-semibold">
                  查看历史年度记录
                </Button>
              </Link>
            </CardContent>
          </Card>
        </div>

        {/* 通知提醒区 */}
        <Card className="mb-8 border-amber-200 dark:border-amber-800">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <AlertTriangle className="w-5 h-5 text-amber-500" />
              提醒事项
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-start gap-3 p-4 bg-amber-50 dark:bg-amber-950 rounded-lg">
              <Clock className="w-5 h-5 text-amber-600 mt-0.5 flex-shrink-0" />
              <div className="flex-1">
                <p className="font-semibold text-amber-900 dark:text-amber-100">
                  2024年度报告截止倒计时
                </p>
                <p className="text-sm text-amber-700 dark:text-amber-300 mt-1">
                  距离截止日期还有 <strong className="text-lg mx-1">15天</strong>（2024年3月31日截止）
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3 p-4 bg-blue-50 dark:bg-blue-950 rounded-lg">
              <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
              <div className="flex-1">
                <p className="font-semibold text-blue-900 dark:text-blue-100">
                  2023年度报告已确认
                </p>
                <p className="text-sm text-blue-700 dark:text-blue-300 mt-1">
                  您的2023年度报告已于2024年1月15日通过确认，报告编号：GS2023-000123
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* 填报指南 */}
        <Card>
          <CardHeader>
            <CardTitle>填报指南</CardTitle>
            <CardDescription>快速获取帮助和指导</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <Button variant="outline" className="h-24 flex-col gap-2">
                <FileText className="w-8 h-8" />
                <span>填报须知</span>
              </Button>
              <Button variant="outline" className="h-24 flex-col gap-2">
                <AlertTriangle className="w-8 h-8" />
                <span>常见问题</span>
              </Button>
              <Button variant="outline" className="h-24 flex-col gap-2">
                <History className="w-8 h-8" />
                <span>操作视频教程</span>
              </Button>
            </div>
          </CardContent>
        </Card>
      </main>
    </div>
  );
}
