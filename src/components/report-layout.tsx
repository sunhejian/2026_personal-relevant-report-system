'use client';

import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import Link from 'next/link';

interface Module {
  id: number;
  name: string;
  status: 'pending' | 'completed' | 'current';
}

interface ReportLayoutProps {
  currentModule: number;
  moduleName: string;
  moduleDescription: string;
  children: React.ReactNode;
  previousModule?: number;
  nextModule?: number;
  onSave?: () => void;
  onNext?: () => void;
  progress: number;
}

export function ReportLayout({
  currentModule,
  moduleName,
  moduleDescription,
  children,
  previousModule,
  nextModule,
  onSave,
  progress,
}: ReportLayoutProps) {
  const modules: Module[] = [
    { id: 1, name: '报告人基本情况', status: currentModule > 1 ? 'completed' : currentModule === 1 ? 'current' : 'pending' },
    { id: 2, name: '个人核心情况', status: currentModule > 2 ? 'completed' : currentModule === 2 ? 'current' : 'pending' },
    { id: 3, name: '亲属关联信息', status: currentModule > 3 ? 'completed' : currentModule === 3 ? 'current' : 'pending' },
    { id: 4, name: '亲属境外情况', status: currentModule > 4 ? 'completed' : currentModule === 4 ? 'current' : 'pending' },
    { id: 5, name: '房产信息', status: currentModule > 5 ? 'completed' : currentModule === 5 ? 'current' : 'pending' },
    { id: 6, name: '投资情况', status: currentModule > 6 ? 'completed' : currentModule === 6 ? 'current' : 'pending' },
    { id: 7, name: '持有股票基金情况', status: currentModule > 7 ? 'completed' : currentModule === 7 ? 'current' : 'pending' },
    { id: 8, name: '配偶子女从业情况', status: currentModule > 8 ? 'completed' : currentModule === 8 ? 'current' : 'pending' },
    { id: 9, name: '其他事项', status: currentModule > 9 ? 'completed' : currentModule === 9 ? 'current' : 'pending' },
  ];

  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-white border-b sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-14">
            <div>
              <h1 className="text-base font-semibold">2025年度个人有关事项报告</h1>
              <p className="text-xs text-gray-600">模块 {currentModule}/9</p>
            </div>
            {onSave && (
              <Button
                variant="outline"
                size="sm"
                onClick={onSave}
                className="bg-blue-600 text-white hover:bg-blue-700 border-blue-600"
              >
                保存草稿
              </Button>
            )}
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="border border-gray-300 bg-white p-4 mb-6">
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-sm font-medium">总体进度</span>
              <span className="text-sm font-semibold">{progress}%</span>
            </div>
            <Progress value={progress} className="h-2" />
          </div>

          <div className="mt-6 grid grid-cols-3 md:grid-cols-9 gap-2">
            {modules.map((module) => (
              <Link
                key={module.id}
                href={`/report/module-${module.id}`}
                className={`
                  flex flex-col items-center p-2
                  ${module.status === 'current'
                    ? 'bg-blue-50 border-2 border-blue-500'
                    : 'hover:bg-gray-100 border-2 border-transparent'
                  }
                `}
              >
                <div className={`
                  w-6 h-6 flex items-center justify-center mb-1
                  ${module.status === 'completed'
                    ? 'bg-green-500 text-white'
                    : module.status === 'current'
                    ? 'bg-blue-600 text-white'
                    : 'bg-gray-200 text-gray-600'
                  }`}>
                  {module.status === 'completed' ? (
                    <span>✓</span>
                  ) : (
                    <span className="text-xs font-semibold">{module.id}</span>
                  )}
                </div>
                <span className={`text-xs font-medium ${
                  module.status === 'current' ? 'text-blue-600' : ''
                }`}>
                  {module.name}
                </span>
              </Link>
            ))}
          </div>
        </div>

        <div className="border border-gray-300 bg-white p-4">
          <div className="mb-4">
            <h2 className="flex items-center gap-2 text-lg font-semibold">
              <span className="w-6 h-6 bg-blue-600 flex items-center justify-center text-white text-sm">
                {currentModule}
              </span>
              {moduleName}
            </h2>
            <p className="text-sm text-gray-600 mt-1">{moduleDescription}</p>
          </div>
          {children}
        </div>

        <div className="mt-6 flex items-center justify-between">
          {previousModule ? (
            <Link href={`/report/module-${previousModule}`}>
              <Button variant="outline" size="lg">
                上一模块
              </Button>
            </Link>
          ) : (
            <div />
          )}

          <div>
            {nextModule ? (
              <Link href={`/report/module-${nextModule}`}>
                <Button size="lg">
                  下一模块
                </Button>
              </Link>
            ) : (
              <Link href="/report/preview">
                <Button size="lg">
                  提交报告
                </Button>
              </Link>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
