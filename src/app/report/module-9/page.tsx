'use client';

import { useState } from 'react';
import { ReportLayout } from '@/components/report-layout';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Button } from '@/components/ui/button';

export default function Module9Page() {
  const [hasOtherItems, setHasOtherItems] = useState('no');
  const [otherItems, setOtherItems] = useState('');
  const [commitmentText, setCommitmentText] = useState('');

  const handleSave = () => {
    console.log('保存草稿');
  };

  const handleSubmit = () => {
    console.log('提交报告', { hasOtherItems, otherItems, commitmentText });
  };

  return (
    <ReportLayout
      currentModule={9}
      moduleName="其他事项"
      moduleDescription="其他需要向组织报告的重要事项"
      progress={100}
      previousModule={8}
      nextModule={undefined}
      onSave={handleSave}
    >
      <div className="space-y-4">
        <div className="border border-gray-300 bg-white p-4">
          <h3 className="text-base font-semibold mb-4">9.1 其他需要报告的事项</h3>
          <div className="space-y-4">
            <div className="space-y-2">
              <Label>是否有其他需要报告的事项</Label>
              <RadioGroup value={hasOtherItems} onValueChange={setHasOtherItems}>
                <div className="flex gap-6">
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="yes" id="other-yes" />
                    <Label htmlFor="other-yes" className="cursor-pointer">是</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="no" id="other-no" />
                    <Label htmlFor="other-no" className="cursor-pointer">否</Label>
                  </div>
                </div>
              </RadioGroup>
            </div>

            {hasOtherItems === 'yes' && (
              <div className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="otherItems">请详细说明</Label>
                  <textarea
                    id="otherItems"
                    placeholder="请详细说明需要报告的事项内容、发生时间、具体情况等"
                    value={otherItems}
                    onChange={(e) => setOtherItems(e.target.value)}
                    className="w-full min-h-[200px] p-3 border text-sm"
                  />
                </div>
              </div>
            )}

            <div className="p-3 bg-yellow-50 border border-yellow-200">
              <p className="text-sm text-gray-700">
                <strong>说明：</strong>其他需要报告的事项包括但不限于：个人、配偶、共同生活的子女及其配偶受到司法机关、纪检监察机关调查处理的情况；受到诫勉谈话、组织函询、问责等情况；个人及家庭成员发生重大变故的情况等。
              </p>
            </div>
          </div>
        </div>

        <div className="border border-gray-300 bg-white p-4">
          <h3 className="text-base font-semibold mb-4">9.2 确认与承诺</h3>
          <div className="space-y-4">
            <div className="space-y-2">
              <p className="text-sm">
                本人已认真阅读并理解领导干部个人有关事项报告的各项要求，承诺所填写的内容真实、准确、完整。
              </p>
              <p className="text-sm">
                本人知悉，对隐瞒不报、弄虚作假的，将视情节轻重，给予批评教育、组织处理或者纪律处分。
              </p>
            </div>

            <div className="space-y-2">
              <Label htmlFor="commitmentInput" className="text-red-600">请手动输入以上承诺内容</Label>
              <textarea
                id="commitmentInput"
                placeholder="本人已认真阅读并理解领导干部个人有关事项报告的各项要求，承诺所填写的内容真实、准确、完整。本人知悉，对隐瞒不报、弄虚作假的，将视情节轻重，给予批评教育、组织处理或者纪律处分。"
                value={commitmentText}
                onChange={(e) => setCommitmentText(e.target.value)}
                className="w-full min-h-[120px] p-3 border text-sm"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="confirmDate">填报日期</Label>
              <Input
                id="confirmDate"
                type="date"
                className="max-w-xs"
              />
            </div>
          </div>
        </div>
      </div>
    </ReportLayout>
  );
}
