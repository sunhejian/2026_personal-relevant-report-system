'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import Link from 'next/link';

export default function YearSelectPage() {
  const [selectedYear, setSelectedYear] = useState('2025');
  const [selectedRole, setSelectedRole] = useState('user');
  const router = useRouter();

  useEffect(() => {
    if (selectedRole === 'admin') {
      router.push('/admin/report-management');
    }
  }, [selectedRole, router]);

  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-white border-b sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-14">
            <div>
              <h1 className="text-base font-semibold">领导干部个人有关事项报告系统</h1>
            </div>
            <div className="flex items-center gap-4">
              <span className="text-sm text-gray-600">张三-辽宁分行</span>
              <div className="flex items-center gap-2">
                <Label htmlFor="role-select" className="text-sm">
                  角色
                </Label>
                <Select value={selectedRole} onValueChange={setSelectedRole}>
                  <SelectTrigger id="role-select" className="h-9 w-32">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="user">用户</SelectItem>
                    <SelectItem value="admin">管理员</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="max-w-2xl mx-auto">
          <div className="border border-gray-300 bg-white p-12">
            <div className="text-center mb-10">
              <h1 className="text-2xl font-bold mb-3">选择填报年度</h1>
              <p className="text-sm text-gray-600">请选择您要填报的年度</p>
            </div>

            <div className="space-y-6">
              <div className="space-y-3">
                <Label htmlFor="year-select" className="text-lg font-semibold">
                  选择年度
                </Label>
                <Select value={selectedYear} onValueChange={setSelectedYear}>
                  <SelectTrigger id="year-select" className="h-14 text-base">
                    <SelectValue placeholder="请选择年度" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="2026">2026年</SelectItem>
                    <SelectItem value="2025">2025年</SelectItem>
                    <SelectItem value="2024">2024年</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="pt-6">
                <Link href="/notice" className="block">
                  <Button className="w-full h-14 text-lg" disabled={!selectedYear}>
                    确认进入填报
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
