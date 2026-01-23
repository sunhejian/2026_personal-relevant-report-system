'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Checkbox } from '@/components/ui/checkbox';
import { Separator } from '@/components/ui/separator';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Progress } from '@/components/ui/progress';
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { FileText, Download, CheckCircle2, ArrowLeft, Eye, Printer, Share2, AlertCircle } from 'lucide-react';
import Link from 'next/link';

export default function PreviewPage() {
  const router = useRouter();
  const [showSubmitDialog, setShowSubmitDialog] = useState(false);
  const [agreed, setAgreed] = useState(false);
  const [completionTime, setCompletionTime] = useState<string>('');

  // 获取当前真实时间
  useEffect(() => {
    const now = new Date();
    const formattedTime = now.toLocaleString('zh-CN', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
    setCompletionTime(formattedTime);
  }, []);

  const handleConfirmSubmit = () => {
    setShowSubmitDialog(false);
    router.push('/report/submit-success');
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* 顶部导航栏 */}
      <header className="bg-white dark:bg-gray-800 border-b shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-4">
              <Link href="/report/module-9">
                <Button variant="ghost" size="sm" className="gap-2">
                  <ArrowLeft className="w-4 h-4" />
                  返回
                </Button>
              </Link>
              <div>
                <h1 className="text-lg font-semibold">2025年度个人有关事项报告 - 预览与提交</h1>
                <p className="text-sm text-muted-foreground">报告编号：GS2025-000456</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <Badge className="bg-green-600 gap-1">
                <CheckCircle2 className="w-3 h-3" />
                全部完成
              </Badge>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        {/* 总体进度 */}
        <Card className="mb-6">
          <CardContent className="pt-6">
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium">填报完成度</span>
                <span className="text-sm font-semibold">100%</span>
              </div>
              <Progress value={100} className="h-2" />
            </div>

            <div className="mt-4 grid grid-cols-9 gap-2">
              {[
                { id: 1, name: '报告人基本情况', completed: true },
                { id: 2, name: '个人核心情况', completed: true },
                { id: 3, name: '亲属关联信息', completed: true },
                { id: 4, name: '亲属境外情况', completed: true },
                { id: 5, name: '个人收入情况', completed: true },
                { id: 6, name: '房产情况', completed: true },
                { id: 7, name: '投资情况', completed: true },
                { id: 8, name: '配偶、子女从业情况', completed: true },
                { id: 9, name: '其他有关事项', completed: true },
              ].map((module) => (
                <div
                  key={module.id}
                  className="flex items-center gap-2 p-2 rounded-lg bg-green-50 dark:bg-green-950 border border-green-200 dark:border-green-800"
                >
                  <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center text-white">
                    <CheckCircle2 className="w-4 h-4" />
                  </div>
                  <span className="text-xs font-medium text-green-700 dark:text-green-300 truncate">
                    模块{module.id}
                  </span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* 左侧：报告预览 */}
          <div className="lg:col-span-2">
            <Card>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div>
                    <CardTitle className="flex items-center gap-2">
                      <FileText className="w-5 h-5" />
                      报告预览
                    </CardTitle>
                    <CardDescription>
                      请仔细核对以下信息，确认无误后提交
                    </CardDescription>
                  </div>
                  <div className="flex gap-2">
                    <Button variant="outline" size="sm" className="gap-2">
                      <Printer className="w-4 h-4" />
                      打印
                    </Button>
                    <Button variant="outline" size="sm" className="gap-2">
                      <Download className="w-4 h-4" />
                      下载PDF
                    </Button>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <ScrollArea className="h-[600px] pr-4">
                  <div className="space-y-6">
                    {/* 报告人基本情况 */}
                    <div className="border rounded-lg p-4 bg-white">
                      <h3 className="font-semibold text-lg mb-4 pb-2 border-b">一、报告人基本情况</h3>
                      <div className="grid grid-cols-2 gap-4 text-sm">
                        <div>
                          <span className="text-muted-foreground">姓名：</span>
                          <span className="font-medium">张三</span>
                        </div>
                        <div>
                          <span className="text-muted-foreground">性别：</span>
                          <span>男</span>
                        </div>
                        <div>
                          <span className="text-muted-foreground">民族：</span>
                          <span>汉族</span>
                        </div>
                        <div>
                          <span className="text-muted-foreground">政治面貌：</span>
                          <span>中共党员</span>
                        </div>
                        <div className="col-span-2">
                          <span className="text-muted-foreground">工作单位：</span>
                          <span className="font-medium">辽宁省工商银行</span>
                        </div>
                        <div className="col-span-2">
                          <span className="text-muted-foreground">现任职务：</span>
                          <span>XXXXX</span>
                        </div>
                        <div>
                          <span className="text-muted-foreground">职级：</span>
                          <span>XXXX</span>
                        </div>
                        <div>
                          <span className="text-muted-foreground">身份证号：</span>
                          <span>110************1234</span>
                        </div>
                      </div>
                    </div>

                    {/* 个人核心情况 */}
                    <div className="border rounded-lg p-4 bg-white">
                      <h3 className="font-semibold text-lg mb-4 pb-2 border-b">二、个人核心情况</h3>
                      <div className="space-y-4 text-sm">
                        <div>
                          <span className="text-muted-foreground">婚姻现状：</span>
                          <span className="font-medium">已婚</span>
                        </div>
                        <div>
                          <span className="text-muted-foreground">婚姻变化情况：</span>
                          <span>无变化</span>
                        </div>
                        <div>
                          <span className="text-muted-foreground">健康状况：</span>
                          <span>否</span>
                        </div>
                        <div>
                          <span className="text-muted-foreground">持有普通护照：</span>
                          <span className="font-medium">是（1本）</span>
                        </div>
                      </div>
                    </div>

                    {/* 亲属关联信息 */}
                    <div className="border rounded-lg p-4 bg-white">
                      <h3 className="font-semibold text-lg mb-4 pb-2 border-b">三、亲属关联信息</h3>
                      <div className="space-y-4 text-sm">
                        <div>
                          <span className="text-muted-foreground">配偶：</span>
                          <span className="font-medium">李四</span>
                          <span className="text-muted-foreground ml-2">（中共党员，XX公司高级工程师）</span>
                        </div>
                        <div>
                          <span className="text-muted-foreground">子女一：</span>
                          <span className="font-medium">张小明</span>
                          <span className="text-muted-foreground ml-2">（儿子，未共同生活，研究生在读）</span>
                        </div>
                      </div>
                    </div>

                    {/* 其他模块（简化展示） */}
                    {['四、亲属境外情况', '五、个人收入情况', '六、房产情况', '七、投资情况', '八、配偶、子女从业情况', '九、其他有关事项'].map((title) => (
                      <div key={title} className="border rounded-lg p-4 bg-white">
                        <h3 className="font-semibold text-lg mb-4 pb-2 border-b">{title}</h3>
                        <p className="text-sm text-muted-foreground">无此类情况需要填报</p>
                      </div>
                    ))}
                  </div>
                </ScrollArea>
              </CardContent>
            </Card>
          </div>

          {/* 右侧：提交操作 */}
          <div className="space-y-6">
            {/* 提交须知 */}
            <Card>
              <CardHeader>
                <CardTitle className="text-base flex items-center gap-2">
                  <AlertCircle className="w-5 h-5 text-amber-500" />
                  提交须知
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3 text-sm">
                <div className="flex gap-2 items-start">
                  <span className="text-amber-600 font-bold">1.</span>
                  <span>提交后报告将无法直接修改</span>
                </div>
                <div className="flex gap-2 items-start">
                  <span className="text-amber-600 font-bold">2.</span>
                  <span>如需修改，需等待报告退回后重新提交</span>
                </div>
                <div className="flex gap-2 items-start">
                  <span className="text-amber-600 font-bold">3.</span>
                  <span>请确保所有信息真实、准确、完整</span>
                </div>
              </CardContent>
            </Card>

            {/* 电子承诺 */}
            <Card>
              <CardHeader>
                <CardTitle className="text-base">电子承诺</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <p className="text-sm text-muted-foreground">
                    本人郑重承诺：以上所填内容真实、准确、完整，如有不实，愿承担相应责任。
                  </p>

                  <div className="flex items-start gap-2">
                    <Checkbox
                      id="agree"
                      checked={agreed}
                      onCheckedChange={(checked) => setAgreed(checked as boolean)}
                    />
                    <label
                      htmlFor="agree"
                      className="text-sm cursor-pointer peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                      我已仔细阅读并确认以上信息真实准确，同意提交
                    </label>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* 提交按钮 */}
            <Button
              className="w-full h-14 text-base font-semibold"
              size="lg"
              disabled={!agreed}
              onClick={() => setShowSubmitDialog(true)}
            >
              提交报告
            </Button>
          </div>
        </div>
      </main>

      {/* 提交确认对话框 */}
      <Dialog open={showSubmitDialog} onOpenChange={setShowSubmitDialog}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>确认提交报告</DialogTitle>
            <DialogDescription>
              您即将提交2025年度个人有关事项报告，提交后将进入确认流程。
            </DialogDescription>
          </DialogHeader>

          <div className="space-y-4 py-4">
            <div className="bg-blue-50 dark:bg-blue-950 border border-blue-200 dark:border-blue-800 rounded-lg p-4">
              <p className="text-sm text-blue-900 dark:text-blue-100">
                <strong>提交信息：</strong>
              </p>
              <ul className="text-sm text-blue-800 dark:text-blue-200 mt-2 space-y-1">
                <li>• 报告年度：2025年</li>
                <li>• 报告编号：GS2025-000456</li>
                <li>• 填报人：张三</li>
                <li>• 完成时间：{completionTime}</li>
              </ul>
            </div>

          </div>

          <DialogFooter>
            <Button variant="outline" onClick={() => setShowSubmitDialog(false)}>
              取消
            </Button>
            <Button onClick={handleConfirmSubmit}>
              确认提交
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
}
