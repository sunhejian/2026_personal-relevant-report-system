'use client';

import { useState } from 'react';
import { ReportLayout } from '@/components/report-layout';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Checkbox } from '@/components/ui/checkbox';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

export default function Module3Page() {
  const [hasSpouse, setHasSpouse] = useState(true);
  const [spouseName, setSpouseName] = useState('');

  const handleSave = () => {
    console.log('保存草稿');
  };

  return (
    <ReportLayout
      currentModule={3}
      moduleName="亲属关联信息"
      moduleDescription="配偶、子女及其配偶的从业、职务等信息"
      progress={33}
      previousModule={2}
      nextModule={4}
      onSave={handleSave}
    >
      <div className="space-y-4">
        <div className="p-3 bg-yellow-50 border border-yellow-200">
          <p className="text-sm text-gray-700">
            <strong>说明：</strong>①应填写填报时配偶、子女及其配偶的从业情况和职务情况。无配偶、无子女或者子女无配偶的，在相应"姓名"框内写"无"。②在多个单位任职（兼职）的逐一填报。在私营企业等担任高级职务的，在后面经商办企业相关表格中详细填报；未从业人员填写就读情况、学龄前或者待业等；退休人员填写退休前工作单位及原任职务，退休后再就业的，再就业情况一并填写。③如没有身份证，填写持有的移居证件、外国护照、外国人永久居留身份证、港澳居民居住证、台湾居民居住证等其他证件名称及号码。
          </p>
        </div>

        <div className="border border-gray-300 bg-white p-4">
          <h3 className="text-base font-semibold mb-4">3.1 配偶信息</h3>
          <div className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="spouseName">配偶姓名</Label>
                <Input
                  id="spouseName"
                  placeholder="请填写姓名，无配偶请写无"
                  value={spouseName}
                  onChange={(e) => {
                    setSpouseName(e.target.value);
                    if (e.target.value === '无') {
                      setHasSpouse(false);
                    } else {
                      setHasSpouse(true);
                    }
                  }}
                  className="max-w-md"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="spouseIdCard">身份证号码</Label>
                <Input
                  id="spouseIdCard"
                  placeholder="请填写18位有效身份证号或其他有效证件"
                  disabled={!hasSpouse}
                  className="max-w-md"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="spousePolitical">政治面貌</Label>
                <Select disabled={!hasSpouse}>
                  <SelectTrigger className="max-w-md">
                    <SelectValue placeholder="请选择政治面貌" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="communist">中共党员</SelectItem>
                    <SelectItem value="candidate">中共预备党员</SelectItem>
                    <SelectItem value="youth">共青团员</SelectItem>
                    <SelectItem value="masses">群众</SelectItem>
                    <SelectItem value="democratic">民主党派成员</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="spousePosition">现任职务</Label>
                <Input
                  id="spousePosition"
                  placeholder="请填写职务"
                  disabled={!hasSpouse}
                  className="max-w-md min-h-[80px]"
                />
              </div>
            </div>

            {hasSpouse && (
              <div className="space-y-2 pt-4 border-t">
                <Label>单位性质</Label>
                <div className="grid grid-cols-2 md:grid-cols-5 gap-3">
                  {['党政机关', '事业单位', '国有企业', '军队', '个体工商户', '私营企业', '外资企业', '国（境）外机构', '学生', '其他'].map((type) => (
                    <div key={type} className="flex items-center space-x-2">
                      <Checkbox id={`spouse-unit-${type}`} />
                      <Label htmlFor={`spouse-unit-${type}`} className="cursor-pointer text-sm">{type}</Label>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>

        <div className="border border-gray-300 bg-white p-4">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-base font-semibold">3.2 子女及其配偶信息</h3>
            <Button variant="outline" size="sm">
              新增子女
            </Button>
          </div>
          <Tabs defaultValue="child1" className="w-full">
            <TabsList className="grid w-full grid-cols-3 mb-4">
              <TabsTrigger value="child1">子女一</TabsTrigger>
              <TabsTrigger value="child2">子女二</TabsTrigger>
              <TabsTrigger value="child3" disabled>+ 新增</TabsTrigger>
            </TabsList>

            <TabsContent value="child1" className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="child1-name">姓名</Label>
                  <Input id="child1-name" placeholder="请填写姓名，无子女请写无" className="max-w-md" />
                </div>

                <div className="space-y-2">
                  <Label>性别</Label>
                  <RadioGroup defaultValue="male">
                    <div className="flex gap-4">
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="male" id="child1-male" />
                        <Label htmlFor="child1-male" className="cursor-pointer">儿子</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="female" id="child1-female" />
                        <Label htmlFor="child1-female" className="cursor-pointer">女儿</Label>
                      </div>
                    </div>
                  </RadioGroup>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="child1-live">是否为共同生活的子女</Label>
                  <RadioGroup defaultValue="no">
                    <div className="flex gap-4">
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="yes" id="child1-live-yes" />
                        <Label htmlFor="child1-live-yes" className="cursor-pointer">是</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="no" id="child1-live-no" />
                        <Label htmlFor="child1-live-no" className="cursor-pointer">否</Label>
                      </div>
                    </div>
                  </RadioGroup>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="child1-idcard">身份证号码</Label>
                  <Input id="child1-idcard" placeholder="请填写18位有效身份证号或其他有效证件" className="max-w-md" />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="child1-political">政治面貌</Label>
                  <Select>
                    <SelectTrigger className="max-w-md">
                      <SelectValue placeholder="请选择政治面貌" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="communist">中共党员</SelectItem>
                      <SelectItem value="candidate">中共预备党员</SelectItem>
                      <SelectItem value="youth">共青团员</SelectItem>
                      <SelectItem value="masses">群众</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="child1-position">现任职务</Label>
                  <Input id="child1-position" placeholder="请填写职务（多职务分行填写）" className="max-w-md min-h-[80px]" />
                </div>
              </div>

              <div className="space-y-2 pt-4 border-t">
                <Label>单位性质</Label>
                <div className="grid grid-cols-2 md:grid-cols-5 gap-3">
                  {['党政机关', '事业单位', '国有企业', '私营企业', '学生', '待业', '其他'].map((type) => (
                    <div key={type} className="flex items-center space-x-2">
                      <Checkbox id={`child1-unit-${type}`} />
                      <Label htmlFor={`child1-unit-${type}`} className="cursor-pointer text-sm">{type}</Label>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-4 border-t space-y-4">
                <h4 className="font-semibold">子女配偶信息</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="spouse1-name">配偶姓名</Label>
                    <Input id="spouse1-name" placeholder="请填写姓名，无子女配偶请写无" className="max-w-md" />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="spouse1-idcard">身份证号码</Label>
                    <Input id="spouse1-idcard" placeholder="请填写18位有效身份证号或其他有效证件" className="max-w-md" />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="spouse1-political">政治面貌</Label>
                    <Select>
                      <SelectTrigger className="max-w-md">
                        <SelectValue placeholder="请选择政治面貌" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="communist">中共党员</SelectItem>
                        <SelectItem value="masses">群众</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="spouse1-position">现任职务</Label>
                    <Input id="spouse1-position" placeholder="请填写职务" className="max-w-md" />
                  </div>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="child2">
              <div className="text-center py-12 text-gray-600">
                <p>点击上方"新增子女"按钮添加子女信息</p>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </ReportLayout>
  );
}
