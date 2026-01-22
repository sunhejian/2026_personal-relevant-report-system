'use client';

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { ArrowLeft, Calendar, Search, Filter, Eye, Edit, Download, MoreHorizontal } from 'lucide-react';
import Link from 'next/link';

export default function HistoryPage() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* 顶部导航栏 */}
      <header className="bg-white dark:bg-gray-800 border-b shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-4">
              <Link href="/dashboard">
                <Button variant="ghost" size="sm" className="gap-2">
                  <ArrowLeft className="w-4 h-4" />
                  返回首页
                </Button>
              </Link>
              <div>
                <h1 className="text-lg font-semibold">历史年度记录</h1>
                <p className="text-sm text-muted-foreground">查看和管理您的历史填报记录</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <Link href="/year-select">
                <Button>
                  <Calendar className="w-4 h-4 mr-2" />
                  新增年度填报
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        {/* 筛选区域 */}
        <Card className="mb-6">
          <CardHeader>
            <CardTitle className="text-base flex items-center gap-2">
              <Filter className="w-4 h-4" />
              筛选条件
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <div className="space-y-2">
                <label className="text-sm font-medium">搜索</label>
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                  <Input
                    placeholder="搜索报告编号、年度"
                    className="pl-10"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium">年度</label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="全部年度" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">全部年度</SelectItem>
                    <SelectItem value="2025">2025年</SelectItem>
                    <SelectItem value="2024">2024年</SelectItem>
                    <SelectItem value="2023">2023年</SelectItem>
                    <SelectItem value="2022">2022年</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium">填报状态</label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="全部状态" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">全部状态</SelectItem>
                    <SelectItem value="draft">草稿</SelectItem>
                    <SelectItem value="submitted">已提交</SelectItem>
                    <SelectItem value="reviewed">已确认</SelectItem>
                    <SelectItem value="returned">已退回</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="flex items-end">
                <Button variant="outline" className="w-full">
                  重置
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* 历史记录列表 */}
        <Card>
          <CardHeader>
            <CardTitle>年度报告列表</CardTitle>
            <CardDescription>
              共找到 3 条记录
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="rounded-md border">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>年度</TableHead>
                    <TableHead>报告编号</TableHead>
                    <TableHead>填报状态</TableHead>
                    <TableHead>提交时间</TableHead>
                    <TableHead>确认人</TableHead>
                    <TableHead>确认时间</TableHead>
                    <TableHead>完成度</TableHead>
                    <TableHead className="text-right">操作</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {/* 2025年 - 草稿 */}
                  <TableRow>
                    <TableCell className="font-medium">2025年</TableCell>
                    <TableCell className="font-mono text-sm">GS2025-000456</TableCell>
                    <TableCell>
                      <Badge variant="secondary" className="gap-1">
                        <div className="w-2 h-2 bg-gray-500 rounded-full" />
                        草稿
                      </Badge>
                    </TableCell>
                    <TableCell className="text-muted-foreground">未提交</TableCell>
                    <TableCell className="text-muted-foreground">-</TableCell>
                    <TableCell className="text-muted-foreground">-</TableCell>
                    <TableCell>
                      <div className="flex items-center gap-2">
                        <div className="w-24 h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                          <div className="w-[55%] h-full bg-blue-500" />
                        </div>
                        <span className="text-xs text-muted-foreground">55%</span>
                      </div>
                    </TableCell>
                    <TableCell className="text-right">
                      <div className="flex justify-end gap-2">
                        <Link href="/report/module-1">
                          <Button variant="ghost" size="sm" className="gap-1">
                            <Edit className="w-4 h-4" />
                            编辑
                          </Button>
                        </Link>
                        <Button variant="ghost" size="sm" className="gap-1">
                          <MoreHorizontal className="w-4 h-4" />
                        </Button>
                      </div>
                    </TableCell>
                  </TableRow>

                  {/* 2024年 - 已确认 */}
                  <TableRow>
                    <TableCell className="font-medium">2024年</TableCell>
                    <TableCell className="font-mono text-sm">GS2024-000123</TableCell>
                    <TableCell>
                      <Badge className="bg-green-600 gap-1">
                        <div className="w-2 h-2 bg-white rounded-full" />
                        已确认
                      </Badge>
                    </TableCell>
                    <TableCell>2024-01-15 14:30</TableCell>
                    <TableCell>王某某</TableCell>
                    <TableCell>2024-01-18 10:15</TableCell>
                    <TableCell>
                      <div className="flex items-center gap-2">
                        <div className="w-24 h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                          <div className="w-full h-full bg-green-500" />
                        </div>
                        <span className="text-xs text-green-600">100%</span>
                      </div>
                    </TableCell>
                    <TableCell className="text-right">
                      <div className="flex justify-end gap-2">
                        <Button variant="ghost" size="sm" className="gap-1">
                          <Eye className="w-4 h-4" />
                          查看
                        </Button>
                        <Button variant="ghost" size="sm" className="gap-1">
                          <Download className="w-4 h-4" />
                          PDF
                        </Button>
                        <Button variant="ghost" size="sm">
                          <MoreHorizontal className="w-4 h-4" />
                        </Button>
                      </div>
                    </TableCell>
                  </TableRow>

                  {/* 2023年 - 已阅签 */}
                  <TableRow>
                    <TableCell className="font-medium">2023年</TableCell>
                    <TableCell className="font-mono text-sm">GS2023-000089</TableCell>
                    <TableCell>
                      <Badge className="bg-green-600 gap-1">
                        <div className="w-2 h-2 bg-white rounded-full" />
                        已确认
                      </Badge>
                    </TableCell>
                    <TableCell>2023-01-20 09:45</TableCell>
                    <TableCell>李某某</TableCell>
                    <TableCell>2023-01-23 16:30</TableCell>
                    <TableCell>
                      <div className="flex items-center gap-2">
                        <div className="w-24 h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                          <div className="w-full h-full bg-green-500" />
                        </div>
                        <span className="text-xs text-green-600">100%</span>
                      </div>
                    </TableCell>
                    <TableCell className="text-right">
                      <div className="flex justify-end gap-2">
                        <Button variant="ghost" size="sm" className="gap-1">
                          <Eye className="w-4 h-4" />
                          查看
                        </Button>
                        <Button variant="ghost" size="sm" className="gap-1">
                          <Download className="w-4 h-4" />
                          PDF
                        </Button>
                        <Button variant="ghost" size="sm">
                          <MoreHorizontal className="w-4 h-4" />
                        </Button>
                      </div>
                    </TableCell>
                  </TableRow>

                  {/* 2022年 - 已退回（示例） */}
                  <TableRow>
                    <TableCell className="font-medium">2022年</TableCell>
                    <TableCell className="font-mono text-sm">GS2022-000056</TableCell>
                    <TableCell>
                      <Badge variant="destructive" className="gap-1">
                        <div className="w-2 h-2 bg-white rounded-full" />
                        已退回
                      </Badge>
                    </TableCell>
                    <TableCell>2022-03-10 11:20</TableCell>
                    <TableCell>赵某某</TableCell>
                    <TableCell>2022-03-12 14:45</TableCell>
                    <TableCell>
                      <div className="flex items-center gap-2">
                        <div className="w-24 h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                          <div className="w-[100%] h-full bg-red-500" />
                        </div>
                        <span className="text-xs text-red-600">100%</span>
                      </div>
                    </TableCell>
                    <TableCell className="text-right">
                      <div className="flex justify-end gap-2">
                        <Link href="/report/module-1">
                          <Button variant="ghost" size="sm" className="gap-1">
                            <Edit className="w-4 h-4" />
                            修改
                          </Button>
                        </Link>
                        <Button variant="ghost" size="sm" className="gap-1">
                          <Eye className="w-4 h-4" />
                          查看
                        </Button>
                        <Button variant="ghost" size="sm">
                          <MoreHorizontal className="w-4 h-4" />
                        </Button>
                      </div>
                    </TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </div>

            {/* 分页 */}
            <div className="flex items-center justify-between mt-4">
              <p className="text-sm text-muted-foreground">
                显示 1-4 条，共 4 条记录
              </p>
              <div className="flex gap-2">
                <Button variant="outline" size="sm" disabled>
                  上一页
                </Button>
                <Button variant="outline" size="sm" disabled>
                  下一页
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* 状态说明 */}
        <Card className="mt-6">
          <CardHeader>
            <CardTitle className="text-base">状态说明</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 text-sm">
              <div className="flex items-center gap-2">
                <Badge variant="secondary">草稿</Badge>
                <span className="text-muted-foreground">未提交，可继续编辑</span>
              </div>
              <div className="flex items-center gap-2">
                <Badge variant="outline">已提交</Badge>
                <span className="text-muted-foreground">已提交，等待确认</span>
              </div>
              <div className="flex items-center gap-2">
                <Badge className="bg-green-600">已确认</Badge>
                <span className="text-muted-foreground">确认通过，已归档</span>
              </div>
              <div className="flex items-center gap-2">
                <Badge variant="destructive">已退回</Badge>
                <span className="text-muted-foreground">确认不通过，需修改</span>
              </div>
            </div>
          </CardContent>
        </Card>
      </main>
    </div>
  );
}
