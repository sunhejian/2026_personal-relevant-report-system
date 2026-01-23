'use client';

import { useState, useMemo, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Input } from '@/components/ui/input';
import Link from 'next/link';

export default function AdminReportManagementPage() {
  const [selectedYear, setSelectedYear] = useState('2025');
  const [selectedMonth, setSelectedMonth] = useState('all');
  const [selectedUnit, setSelectedUnit] = useState('all');
  const [selectedStatus, setSelectedStatus] = useState('all');
  const [searchKeyword, setSearchKeyword] = useState('');
  const [selectedReports, setSelectedReports] = useState<number[]>([]);
  const [selectAll, setSelectAll] = useState(false);
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 10;

  const mockReports = [
    { id: 1, reportNo: 'GS2025-000001', name: '张三', unit: '辽宁省工商银行', position: 'XXXXX', rank: 'XXXXX', submitTime: '2025-03-15 14:30', status: '待确认' },
    { id: 2, reportNo: 'GS2025-000002', name: '李四', unit: '沈阳分行', position: 'XXXXX', rank: 'XXXXX', submitTime: '2025-03-14 10:20', status: '已确认' },
    { id: 3, reportNo: 'GS2025-000003', name: '王五', unit: '大连分行', position: 'XXXXX', rank: 'XXXXX', submitTime: '2025-03-13 16:45', status: '已退回' },
    { id: 4, reportNo: 'GS2025-000004', name: '赵六', unit: '鞍山分行', position: 'XXXXX', rank: 'XXXXX', submitTime: '2025-03-12 09:30', status: '待确认' },
    { id: 5, reportNo: 'GS2025-000005', name: '钱七', unit: '抚顺分行', position: 'XXXXX', rank: 'XXXXX', submitTime: '2025-03-11 15:20', status: '已确认' },
    { id: 6, reportNo: 'GS2025-000006', name: '孙八', unit: '辽宁省工商银行', position: 'XXXXX', rank: 'XXXXX', submitTime: '2025-03-10 11:30', status: '待确认' },
    { id: 7, reportNo: 'GS2025-000007', name: '周九', unit: '沈阳分行', position: 'XXXXX', rank: 'XXXXX', submitTime: '2025-03-09 08:45', status: '已确认' },
    { id: 8, reportNo: 'GS2025-000008', name: '吴十', unit: '大连分行', position: 'XXXXX', rank: 'XXXXX', submitTime: '2025-03-08 13:20', status: '待确认' },
    { id: 9, reportNo: 'GS2025-000009', name: '郑十一', unit: '鞍山分行', position: 'XXXXX', rank: 'XXXXX', submitTime: '2025-03-07 10:15', status: '已退回' },
    { id: 10, reportNo: 'GS2025-000010', name: '王十二', unit: '抚顺分行', position: 'XXXXX', rank: 'XXXXX', submitTime: '2025-03-06 16:40', status: '已确认' },
    { id: 11, reportNo: 'GS2025-000011', name: '冯十三', unit: '辽宁省工商银行', position: 'XXXXX', rank: 'XXXXX', submitTime: '2025-03-05 09:25', status: '待确认' },
    { id: 12, reportNo: 'GS2025-000012', name: '陈十四', unit: '沈阳分行', position: 'XXXXX', rank: 'XXXXX', submitTime: '2025-03-04 14:50', status: '已确认' },
    { id: 13, reportNo: 'GS2025-000013', name: '楚十五', unit: '大连分行', position: 'XXXXX', rank: 'XXXXX', submitTime: '2025-03-03 11:35', status: '待确认' },
    { id: 14, reportNo: 'GS2025-000014', name: '卫十六', unit: '鞍山分行', position: 'XXXXX', rank: 'XXXXX', submitTime: '2025-03-02 15:10', status: '已确认' },
    { id: 15, reportNo: 'GS2025-000015', name: '蒋十七', unit: '抚顺分行', position: 'XXXXX', rank: 'XXXXX', submitTime: '2025-03-01 08:55', status: '已退回' },
    { id: 16, reportNo: 'GS2025-000016', name: '沈十八', unit: '辽宁省工商银行', position: 'XXXXX', rank: 'XXXXX', submitTime: '2025-02-28 13:30', status: '已确认' },
    { id: 17, reportNo: 'GS2025-000017', name: '韩十九', unit: '沈阳分行', position: 'XXXXX', rank: 'XXXXX', submitTime: '2025-02-27 10:45', status: '待确认' },
    { id: 18, reportNo: 'GS2025-000018', name: '杨二十', unit: '大连分行', position: 'XXXXX', rank: 'XXXXX', submitTime: '2025-02-26 16:20', status: '已确认' },
    { id: 19, reportNo: 'GS2025-000019', name: '朱二十一', unit: '鞍山分行', position: 'XXXXX', rank: 'XXXXX', submitTime: '2025-02-25 09:15', status: '待确认' },
    { id: 20, reportNo: 'GS2025-000020', name: '秦二十二', unit: '抚顺分行', position: 'XXXXX', rank: 'XXXXX', submitTime: '2025-02-24 14:40', status: '已确认' },
    { id: 21, reportNo: 'GS2025-000021', name: '尤二十三', unit: '辽宁省工商银行', position: 'XXXXX', rank: 'XXXXX', submitTime: '2025-02-23 11:25', status: '已退回' },
    { id: 22, reportNo: 'GS2025-000022', name: '许二十四', unit: '沈阳分行', position: 'XXXXX', rank: 'XXXXX', submitTime: '2025-02-22 15:50', status: '已确认' },
    { id: 23, reportNo: 'GS2025-000023', name: '何二十五', unit: '大连分行', position: 'XXXXX', rank: 'XXXXX', submitTime: '2025-02-21 08:35', status: '待确认' },
    { id: 24, reportNo: 'GS2025-000024', name: '吕二十六', unit: '鞍山分行', position: 'XXXXX', rank: 'XXXXX', submitTime: '2025-02-20 13:10', status: '已确认' },
    { id: 25, reportNo: 'GS2025-000025', name: '施二十七', unit: '抚顺分行', position: 'XXXXX', rank: 'XXXXX', submitTime: '2025-02-19 10:55', status: '待确认' },
  ];

  const filteredReports = useMemo(() => {
    return mockReports.filter(report => {
      const keyword = searchKeyword.toLowerCase().trim();
      const matchesKeyword = !keyword || 
        report.reportNo.toLowerCase().includes(keyword) ||
        report.name.toLowerCase().includes(keyword);
      
      const matchesUnit = selectedUnit === 'all' || 
        (selectedUnit === 'lnicbc' && report.unit === '辽宁省工商银行') ||
        (selectedUnit === 'sy' && report.unit === '沈阳分行') ||
        (selectedUnit === 'dl' && report.unit === '大连分行') ||
        (selectedUnit === 'as' && report.unit === '鞍山分行') ||
        (selectedUnit === 'fs' && report.unit === '抚顺分行');
      
      const matchesStatus = selectedStatus === 'all' ||
        (selectedStatus === 'pending' && report.status === '待确认') ||
        (selectedStatus === 'approved' && report.status === '已确认') ||
        (selectedStatus === 'rejected' && report.status === '已退回');
      
      const matchesStartDate = !startDate || report.submitTime >= startDate;
      const matchesEndDate = !endDate || report.submitTime <= endDate + ' 23:59:59';
      
      const reportMonth = report.submitTime.substring(5, 7);
      const matchesMonth = selectedMonth === 'all' || selectedMonth === reportMonth;
      
      return matchesKeyword && matchesUnit && matchesStatus && matchesStartDate && matchesEndDate && matchesMonth;
    });
  }, [selectedUnit, selectedStatus, searchKeyword, startDate, endDate, selectedMonth]);

  const totalPages = Math.ceil(filteredReports.length / pageSize);

  const paginatedReports = useMemo(() => {
    const startIndex = (currentPage - 1) * pageSize;
    const endIndex = startIndex + pageSize;
    return filteredReports.slice(startIndex, endIndex);
  }, [filteredReports, currentPage, pageSize]);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  const handleSelectAll = (checked: boolean) => {
    setSelectAll(checked);
    setSelectedReports(checked ? paginatedReports.map(r => r.id) : []);
  };

  const handleSelectReport = (id: number, checked: boolean) => {
    if (checked) {
      setSelectedReports([...selectedReports, id]);
    } else {
      setSelectedReports(selectedReports.filter(r => r !== id));
    }
  };

  const handleBatchDownload = () => {
    console.log('批量下载报告:', selectedReports);
    alert(`批量下载 ${selectedReports.length} 份报告`);
  };

  const handleSearch = () => {
    console.log('搜索关键词:', searchKeyword);
  };

  // 当筛选条件变化时，重置到第一页
  useEffect(() => {
    setCurrentPage(1);
  }, [selectedUnit, selectedStatus, selectedMonth, searchKeyword, startDate, endDate]);

  const handleResetFilters = () => {
    setSelectedUnit('all');
    setSelectedStatus('all');
    setSelectedMonth('all');
    setSearchKeyword('');
    setStartDate('');
    setEndDate('');
  };

  const hasActiveFilters = selectedUnit !== 'all' || selectedStatus !== 'all' || selectedMonth !== 'all' ||
    searchKeyword.trim() !== '' || startDate || endDate;

  const getStatusStyle = (status: string) => {
    switch (status) {
      case '待确认':
        return 'bg-yellow-100 text-yellow-800';
      case '已确认':
        return 'bg-green-100 text-green-800';
      case '已退回':
        return 'bg-red-100 text-red-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-white border-b sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-14">
            <div>
              <h1 className="text-base font-semibold">领导干部个人有关事项报告系统 - 管理员</h1>
            </div>
            <div className="flex items-center gap-4">
              <span className="text-sm text-gray-600">管理员</span>
              <Link href="/year-select">
                <Button variant="outline" size="sm">
                  返回
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <h1 className="text-lg font-bold mb-4">报告管理</h1>

        <div className="border border-gray-300 bg-white mb-4 p-4">
          <div className="grid grid-cols-6 gap-3">
            <div className="space-y-1">
              <Label htmlFor="filter-year" className="text-xs">年度</Label>
              <Select value={selectedYear} onValueChange={setSelectedYear}>
                <SelectTrigger id="filter-year" className="h-9 text-sm">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="2026">2026年</SelectItem>
                  <SelectItem value="2025">2025年</SelectItem>
                  <SelectItem value="2024">2024年</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-1">
              <Label htmlFor="filter-month" className="text-xs">月份</Label>
              <Select value={selectedMonth} onValueChange={setSelectedMonth}>
                <SelectTrigger id="filter-month" className="h-9 text-sm">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">全部</SelectItem>
                  <SelectItem value="01">1月</SelectItem>
                  <SelectItem value="02">2月</SelectItem>
                  <SelectItem value="03">3月</SelectItem>
                  <SelectItem value="04">4月</SelectItem>
                  <SelectItem value="05">5月</SelectItem>
                  <SelectItem value="06">6月</SelectItem>
                  <SelectItem value="07">7月</SelectItem>
                  <SelectItem value="08">8月</SelectItem>
                  <SelectItem value="09">9月</SelectItem>
                  <SelectItem value="10">10月</SelectItem>
                  <SelectItem value="11">11月</SelectItem>
                  <SelectItem value="12">12月</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-1">
              <Label htmlFor="filter-unit" className="text-xs">单位</Label>
              <Select value={selectedUnit} onValueChange={setSelectedUnit}>
                <SelectTrigger id="filter-unit" className="h-9 text-sm">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">全部</SelectItem>
                  <SelectItem value="lnicbc">辽宁省工商银行</SelectItem>
                  <SelectItem value="sy">沈阳分行</SelectItem>
                  <SelectItem value="dl">大连分行</SelectItem>
                  <SelectItem value="as">鞍山分行</SelectItem>
                  <SelectItem value="fs">抚顺分行</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-1">
              <Label htmlFor="filter-status" className="text-xs">状态</Label>
              <Select value={selectedStatus} onValueChange={setSelectedStatus}>
                <SelectTrigger id="filter-status" className="h-9 text-sm">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">全部</SelectItem>
                  <SelectItem value="pending">待确认</SelectItem>
                  <SelectItem value="approved">已确认</SelectItem>
                  <SelectItem value="rejected">已退回</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="col-span-2 space-y-1">
              <Label htmlFor="filter-keyword" className="text-xs">关键词</Label>
              <div className="flex gap-2">
                <Input
                  id="filter-keyword"
                  placeholder="编号或姓名"
                  className="h-9 text-sm flex-1"
                  value={searchKeyword}
                  onChange={(e) => setSearchKeyword(e.target.value)}
                />
                <Button variant="outline" size="sm" className="h-9" onClick={handleSearch}>
                  搜索
                </Button>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-6 gap-3 mt-3">
            <div className="space-y-1">
              <Label htmlFor="filter-start-date" className="text-xs">起始日期</Label>
              <Input
                id="filter-start-date"
                type="date"
                className="h-9 text-sm"
                value={startDate}
                onChange={(e) => setStartDate(e.target.value)}
              />
            </div>

            <div className="space-y-1">
              <Label htmlFor="filter-end-date" className="text-xs">结束日期</Label>
              <Input
                id="filter-end-date"
                type="date"
                className="h-9 text-sm"
                value={endDate}
                onChange={(e) => setEndDate(e.target.value)}
              />
            </div>

            <div className="col-span-3 flex items-center">
              {hasActiveFilters && (
                <span className="text-sm text-blue-600">
                  共找到 {filteredReports.length} 条记录
                </span>
              )}
            </div>

            <div className="flex items-center justify-end gap-2">
              <Button variant="outline" size="sm" className="h-9 text-sm" onClick={handleSearch}>
                筛选
              </Button>
              {hasActiveFilters && (
                <Button variant="outline" size="sm" className="h-9 text-sm" onClick={handleResetFilters}>
                  重置
                </Button>
              )}
            </div>
          </div>
        </div>

        <div className="border border-gray-300 bg-white">
          <div className="p-2 border-b border-gray-300 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Checkbox
                id="select-all"
                checked={selectAll}
                onCheckedChange={handleSelectAll}
              />
              <Label htmlFor="select-all" className="text-xs">
                全选
              </Label>
              <span className="text-xs text-gray-600">
                已选 {selectedReports.length} 项 / 共 {filteredReports.length} 项
              </span>
            </div>
            <Button
              onClick={handleBatchDownload}
              disabled={selectedReports.length === 0}
              className="bg-blue-600 hover:bg-blue-700 h-7 px-3 text-xs"
            >
              批量下载
            </Button>
          </div>

          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-gray-300">
                <th className="p-2 text-left w-12"></th>
                <th className="p-2 text-left">报告编号</th>
                <th className="p-2 text-left">姓名</th>
                <th className="p-2 text-left">单位</th>
                <th className="p-2 text-left">职务</th>
                <th className="p-2 text-left">职级</th>
                <th className="p-2 text-left">提交时间</th>
                <th className="p-2 text-left">状态</th>
                <th className="p-2 text-left">操作</th>
              </tr>
            </thead>
            <tbody>
              {paginatedReports.length > 0 ? (
                paginatedReports.map((report, index) => (
                  <tr key={report.id} className={`border-b border-gray-300 ${index % 2 === 1 ? '' : ''}`} style={index % 2 === 1 ? { backgroundColor: 'rgba(219, 234, 254, 0.3)' } : {}}>
                    <td className="p-2">
                      <Checkbox
                        checked={selectedReports.includes(report.id)}
                        onCheckedChange={(checked) =>
                          handleSelectReport(report.id, checked as boolean)
                        }
                      />
                    </td>
                    <td className="p-2">{report.reportNo}</td>
                    <td className="p-2">{report.name}</td>
                    <td className="p-2">{report.unit}</td>
                    <td className="p-2">{report.position}</td>
                    <td className="p-2">{report.rank}</td>
                    <td className="p-2">{report.submitTime}</td>
                    <td className="p-2">
                      <span className={`inline-block px-2 py-1 text-xs ${getStatusStyle(report.status)}`}>
                        {report.status}
                      </span>
                    </td>
                    <td className="p-2">
                      <div className="flex gap-2">
                        <Link href={`/admin/report-view?id=${report.id}`}>
                          <Button variant="outline" size="sm" className="h-7 px-2 text-xs">
                            查看详情
                          </Button>
                        </Link>
                        <Button variant="outline" size="sm" className="h-7 px-2 text-xs">
                          单条下载
                        </Button>
                      </div>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan={9} className="p-8 text-center text-gray-500">
                    未找到符合条件的报告
                  </td>
                </tr>
              )}
            </tbody>
          </table>

          <div className="p-2 border-t border-gray-300 flex items-center justify-between">
            <span className="text-xs text-gray-600">
              显示 {(currentPage - 1) * pageSize + 1} - {Math.min(currentPage * pageSize, filteredReports.length)} / 共 {filteredReports.length} 条记录
            </span>

            {totalPages > 1 && (
              <div className="flex items-center gap-1">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => handlePageChange(currentPage - 1)}
                  disabled={currentPage === 1}
                  className="h-7 px-2 text-xs"
                >
                  上一页
                </Button>
                
                <div className="flex items-center gap-1">
                  {Array.from({ length: totalPages }, (_, i) => i + 1).map(page => (
                    <Button
                      key={page}
                      variant={currentPage === page ? "default" : "outline"}
                      size="sm"
                      onClick={() => handlePageChange(page)}
                      className="h-7 w-7 px-0 text-xs"
                    >
                      {page}
                    </Button>
                  ))}
                </div>

                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => handlePageChange(currentPage + 1)}
                  disabled={currentPage === totalPages}
                  className="h-7 px-2 text-xs"
                >
                  下一页
                </Button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
