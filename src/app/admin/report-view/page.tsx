'use client';

import { useState } from 'react';
import { useSearchParams } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Textarea } from '@/components/ui/textarea';
import { ArrowLeft, Download, FileText, User, Calendar, Building2 } from 'lucide-react';
import Link from 'next/link';
import { Suspense } from 'react';

function ReportViewContent() {
  const searchParams = useSearchParams();
  const reportId = searchParams.get('id');
  const [showApproveDialog, setShowApproveDialog] = useState(false);
  const [showRejectDialog, setShowRejectDialog] = useState(false);
  const [rejectReason, setRejectReason] = useState('');
  const [reportStatus, setReportStatus] = useState('待确认');

  const mockReport = {
    id: reportId || '1',
    reportNo: 'GS2025-000001',
    name: '张三',
    unit: '辽宁省工商银行',
    position: 'XXXXX',
    rank: 'XXXXX',
    submitTime: '2025-03-15 14:30',
    status: reportStatus,
    reviewer: reportStatus === '已确认' ? '李四' : '',
    reviewTime: reportStatus === '已确认' ? '2025-03-16 10:30' : '',
  };

  const handleApprove = () => {
    setReportStatus('已确认');
    setShowApproveDialog(false);
    alert('确认成功');
  };

  const handleReject = () => {
    if (!rejectReason.trim()) {
      alert('请填写退回原因');
      return;
    }
    setReportStatus('已退回');
    setShowRejectDialog(false);
    alert('已退回报告');
  };

  const handleDownload = () => {
    alert('下载报告');
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-white border-b sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-14">
            <div className="flex items-center gap-4">
              <Link href="/admin/report-management">
                <Button variant="ghost" size="sm" className="gap-2">
                  <ArrowLeft className="w-4 h-4" />
                  返回
                </Button>
              </Link>
              <div>
                <h1 className="text-base font-semibold">报告详情</h1>
                <p className="text-sm text-gray-600">报告编号：{mockReport.reportNo}</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <Badge
                className={
                  reportStatus === '待确认'
                    ? 'bg-yellow-100 text-yellow-800'
                    : reportStatus === '已确认'
                    ? 'bg-green-100 text-green-800'
                    : 'bg-red-100 text-red-800'
                }
              >
                {reportStatus}
              </Badge>
              <Button variant="outline" size="sm" onClick={handleDownload}>
                <Download className="w-4 h-4 mr-1" />
                下载
              </Button>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="space-y-6">
          <Card className="border border-gray-300">
            <CardHeader>
              <CardTitle className="text-lg">基本信息</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 gap-6">
                <div className="flex items-center gap-3">
                  <FileText className="w-5 h-5 text-gray-600" />
                  <div>
                    <p className="text-sm text-gray-600">报告编号</p>
                    <p className="font-semibold">{mockReport.reportNo}</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <User className="w-5 h-5 text-gray-600" />
                  <div>
                    <p className="text-sm text-gray-600">姓名</p>
                    <p className="font-semibold">{mockReport.name}</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Building2 className="w-5 h-5 text-gray-600" />
                  <div>
                    <p className="text-sm text-gray-600">单位</p>
                    <p className="font-semibold">{mockReport.unit}</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <User className="w-5 h-5 text-gray-600" />
                  <div>
                    <p className="text-sm text-gray-600">职务</p>
                    <p className="font-semibold">{mockReport.position}</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <User className="w-5 h-5 text-gray-600" />
                  <div>
                    <p className="text-sm text-gray-600">职级</p>
                    <p className="font-semibold">{mockReport.rank}</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Calendar className="w-5 h-5 text-gray-600" />
                  <div>
                    <p className="text-sm text-gray-600">提交时间</p>
                    <p className="font-semibold">{mockReport.submitTime}</p>
                  </div>
                </div>
                {mockReport.reviewer && (
                  <>
                    <div className="flex items-center gap-3">
                      <User className="w-5 h-5 text-gray-600" />
                      <div>
                        <p className="text-sm text-gray-600">确认人</p>
                        <p className="font-semibold">{mockReport.reviewer}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <Calendar className="w-5 h-5 text-gray-600" />
                      <div>
                        <p className="text-sm text-gray-600">确认时间</p>
                        <p className="font-semibold">{mockReport.reviewTime}</p>
                      </div>
                    </div>
                  </>
                )}
              </div>
            </CardContent>
          </Card>

          <Card className="border border-gray-300">
            <CardHeader>
              <CardTitle className="text-lg">报告内容</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h3 className="font-semibold mb-2">第一部分：基本情况</h3>
                <div className="p-4 border border-gray-300 bg-gray-50">
                  <p className="text-sm">
                    姓名：张三<br />
                    性别：男<br />
                    出生日期：1980年1月1日<br />
                    民族：汉族<br />
                    政治面貌：中共党员<br />
                    健康状况：健康<br />
                    工作单位：辽宁省工商银行<br />
                    现任职务：XXXXX<br />
                    任职时间：2020年1月<br />
                    户籍地：辽宁省沈阳市<br />
                    通讯地址：辽宁省沈阳市和平区XX路XX号<br />
                    联系电话：13800138000
                  </p>
                </div>
              </div>

              <div>
                <h3 className="font-semibold mb-2">第二部分：婚姻情况</h3>
                <div className="p-4 border border-gray-300 bg-gray-50">
                  <p className="text-sm">
                    婚姻状况：已婚<br />
                    配偶姓名：李四<br />
                    配偶工作单位：XXXXX<br />
                    配偶职务：XXXXX
                  </p>
                </div>
              </div>

              <div>
                <h3 className="font-semibold mb-2">第三部分：子女情况</h3>
                <div className="p-4 border border-gray-300 bg-gray-50">
                  <p className="text-sm">
                    子女姓名：王五<br />
                    子女身份证件号码：210XXXXXXXXXXXXXXX<br />
                    子女工作单位：XXXXX<br />
                    子女职务：XXXXX
                  </p>
                </div>
              </div>

              <div>
                <h3 className="font-semibold mb-2">第四部分：因私出国情况</h3>
                <div className="p-4 border border-gray-300 bg-gray-50">
                  <p className="text-sm">
                    有此类情况<br />
                    起止日期：2025年1月1日 - 2025年1月15日<br />
                    所到国家：日本<br />
                    事由：旅游<br />
                    审批机构：辽宁省工商银行<br />
                    所用护照号：E12345678
                  </p>
                </div>
              </div>

              <div>
                <h3 className="font-semibold mb-2">承诺</h3>
                <div className="p-4 border border-gray-300 bg-gray-50">
                  <p className="text-sm">
                    本人郑重承诺：以上填报内容真实、准确、完整。如有不实，愿意承担相应责任。
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {reportStatus === '待确认' && (
            <div className="flex justify-end gap-4">
              <Button
                variant="outline"
                onClick={() => setShowRejectDialog(true)}
                className="border-red-300 text-red-600 hover:bg-red-50"
              >
                退回
              </Button>
              <Button
                onClick={() => setShowApproveDialog(true)}
                className="bg-blue-600 hover:bg-blue-700"
              >
                确认
              </Button>
            </div>
          )}
        </div>
      </div>

      <Dialog open={showApproveDialog} onOpenChange={setShowApproveDialog}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>确认</DialogTitle>
            <DialogDescription>
              确认此报告吗？确认后报告将进入已完成状态。
            </DialogDescription>
          </DialogHeader>
          <DialogFooter>
            <Button variant="outline" onClick={() => setShowApproveDialog(false)}>
              取消
            </Button>
            <Button onClick={handleApprove} className="bg-blue-600 hover:bg-blue-700">
              确认
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      <Dialog open={showRejectDialog} onOpenChange={setShowRejectDialog}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>退回报告</DialogTitle>
            <DialogDescription>
              请填写退回原因，填报人将根据原因修改后重新提交。
            </DialogDescription>
          </DialogHeader>
          <Textarea
            placeholder="请输入退回原因"
            value={rejectReason}
            onChange={(e) => setRejectReason(e.target.value)}
            rows={4}
          />
          <DialogFooter>
            <Button variant="outline" onClick={() => setShowRejectDialog(false)}>
              取消
            </Button>
            <Button
              onClick={handleReject}
              className="border-red-300 text-red-600 hover:bg-red-50"
            >
              确认退回
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
}

export default function AdminReportViewPage() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <p className="text-gray-600">加载中...</p>
    </div>}>
      <ReportViewContent />
    </Suspense>
  );
}
