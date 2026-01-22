'use client';

import { useState } from 'react';
import { ReportLayout } from '@/components/report-layout';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Checkbox } from '@/components/ui/checkbox';
import { Button } from '@/components/ui/button';

export default function Module2Page() {
  const [hasChange, setHasChange] = useState('no');
  const [hasDisease, setHasDisease] = useState('no');
  const [hasPassport, setHasPassport] = useState('no');
  const [hasAbroad, setHasAbroad] = useState('no');
  const [hasPass, setHasPass] = useState('no');
  const [hasVisit, setHasVisit] = useState('no');

  const handleSave = () => {
    console.log('保存草稿');
  };

  return (
    <ReportLayout
      currentModule={2}
      moduleName="个人核心情况"
      moduleDescription="包括婚姻、健康状况、证件持有情况等"
      progress={22}
      previousModule={1}
      nextModule={3}
      onSave={handleSave}
    >
      <div className="space-y-6">
        <div className="border border-gray-300 bg-white p-4">
          <h3 className="text-base font-semibold mb-4">2.1 本人的婚姻情况</h3>
          <div className="space-y-4">
            <div className="space-y-2">
              <Label>婚姻现状</Label>
              <RadioGroup defaultValue="married">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="unmarried" id="unmarried" />
                    <Label htmlFor="unmarried" className="cursor-pointer">未婚</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="married" id="married" />
                    <Label htmlFor="married" className="cursor-pointer">已婚</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="divorced" id="divorced" />
                    <Label htmlFor="divorced" className="cursor-pointer">离异</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="widowed" id="widowed" />
                    <Label htmlFor="widowed" className="cursor-pointer">丧偶</Label>
                  </div>
                </div>
              </RadioGroup>
            </div>

            <div className="space-y-2">
              <Label>婚姻变化情况</Label>
              <RadioGroup value={hasChange} onValueChange={setHasChange}>
                <div className="flex gap-6">
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="no" id="no-change" />
                    <Label htmlFor="no-change" className="cursor-pointer">无变化</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="yes" id="has-change" />
                    <Label htmlFor="has-change" className="cursor-pointer">有变化</Label>
                  </div>
                </div>
              </RadioGroup>
            </div>

            <div className="p-3 bg-yellow-50 border border-yellow-200">
              <p className="text-sm text-gray-700">
                <strong>说明：</strong>上一年 1 月 1 日以来截至填报日婚姻无变化的，勾选"无变化"；有变化的需填写变化时间。
              </p>
            </div>

            {hasChange === 'yes' && (
              <div className="space-y-4 p-4 bg-gray-100">
                <div className="space-y-2">
                  <Label>变化类型</Label>
                  <div className="flex flex-wrap gap-4">
                    {['结婚', '离婚', '丧偶', '再婚'].map((type) => (
                      <div key={type} className="flex items-center space-x-2">
                        <Checkbox id={`type-${type}`} />
                        <Label htmlFor={`type-${type}`} className="cursor-pointer">{type}</Label>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="changeDate">变化时间</Label>
                  <Input
                    id="changeDate"
                    type="date"
                    className="max-w-xs"
                  />
                </div>
              </div>
            )}
          </div>
        </div>

        <div className="border border-gray-300 bg-white p-4">
          <h3 className="text-base font-semibold mb-4">2.2 本人的健康状况</h3>
          <div className="space-y-4">
            <div className="space-y-2">
              <Label>是否身患重大疾病</Label>
              <RadioGroup value={hasDisease} onValueChange={setHasDisease}>
                <div className="flex gap-6">
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="yes" id="disease-yes" />
                    <Label htmlFor="disease-yes" className="cursor-pointer">是</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="no" id="disease-no" />
                    <Label htmlFor="disease-no" className="cursor-pointer">否</Label>
                  </div>
                </div>
              </RadioGroup>
            </div>

            {hasDisease === 'yes' && (
              <div className="space-y-4 p-4 bg-gray-100">
                <div className="space-y-2">
                  <Label>疾病类型</Label>
                  <div className="flex flex-wrap gap-4">
                    {['恶性肿瘤', '严重心脑血管疾病', '终末期肾病', '重性精神疾病', '其他'].map((type) => (
                      <div key={type} className="flex items-center space-x-2">
                        <Checkbox id={`disease-${type}`} />
                        <Label htmlFor={`disease-${type}`} className="cursor-pointer">{type}</Label>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="diseaseDetail">具体情况</Label>
                  <textarea
                    id="diseaseDetail"
                    placeholder="请填写疾病名称、确诊时间、诊断医疗机构、治疗康复情况及需组织帮助解决的困难"
                    className="w-full min-h-[120px] p-3 border text-sm"
                  />
                </div>

                <div className="space-y-2">
                  <Label>是否影响正常履职</Label>
                  <RadioGroup>
                    <div className="flex gap-6">
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="yes" id="affect-yes" />
                        <Label htmlFor="affect-yes" className="cursor-pointer">是</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="no" id="affect-no" />
                        <Label htmlFor="affect-no" className="cursor-pointer">否</Label>
                      </div>
                    </div>
                  </RadioGroup>
                </div>
              </div>
            )}
          </div>
        </div>

        <div className="border border-gray-300 bg-white p-4">
          <h3 className="text-base font-semibold mb-4">2.3 本人持有普通护照的情况</h3>
          <div className="space-y-4">
            <div className="space-y-2">
              <Label>有此类情况</Label>
              <RadioGroup value={hasPassport} onValueChange={setHasPassport}>
                <div className="flex gap-6">
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="yes" id="passport-yes" />
                    <Label htmlFor="passport-yes" className="cursor-pointer">是</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="no" id="passport-no" />
                    <Label htmlFor="passport-no" className="cursor-pointer">否</Label>
                  </div>
                </div>
              </RadioGroup>
            </div>


            {hasPassport === 'yes' && (
              <div className="space-y-4">
                <div className="border overflow-hidden">
                  <table className="w-full text-sm">
                    <thead className="bg-gray-100">
                      <tr>
                        <th className="text-left p-3 font-medium">护照号</th>
                        <th className="text-left p-3 font-medium">签发日期</th>
                        <th className="text-left p-3 font-medium">有效期至</th>
                        <th className="text-left p-3 font-medium">保管机构</th>
                        <th className="text-left p-3 font-medium">备注</th>
                        <th className="text-left p-3 font-medium">操作</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-t">
                        <td className="p-3">
                          <Input placeholder="护照号" className="h-9" />
                        </td>
                        <td className="p-3">
                          <Input type="date" className="h-9" />
                        </td>
                        <td className="p-3">
                          <Input type="date" className="h-9" />
                        </td>
                        <td className="p-3">
                          <Input placeholder="可选" className="h-9" />
                        </td>
                        <td className="p-3">
                          <Input placeholder="备注" className="h-9" />
                        </td>
                        <td className="p-3">
                          <div className="flex gap-1">
                            <Button variant="ghost" size="icon" className="h-8 w-8">
                              复制
                            </Button>
                            <Button variant="ghost" size="icon" className="h-8 w-8">
                              删除
                            </Button>
                          </div>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <Button variant="outline" className="gap-2">
                  新增护照记录
                </Button>
              </div>
            )}

            <div className="p-4 bg-yellow-50 border border-yellow-200">
              <p className="text-sm text-gray-700">
                <strong>说明：</strong>普通护照指因私护照，不含公务普通护照。应填写填报时的有效普通护照，以及上一年 1 月 1 日以来截至填报日失效的普通护照。
              </p>
            </div>
          </div>
        </div>

        <div className="border border-gray-300 bg-white p-4">
          <h3 className="text-base font-semibold mb-4">2.4 因私出国的情况</h3>
          <div className="space-y-4">
            <div className="space-y-2">
              <Label>有此类情况</Label>
              <RadioGroup value={hasAbroad} onValueChange={setHasAbroad}>
                <div className="flex gap-6">
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="yes" id="abroad-yes" />
                    <Label htmlFor="abroad-yes" className="cursor-pointer">是</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="no" id="abroad-no" />
                    <Label htmlFor="abroad-no" className="cursor-pointer">否</Label>
                  </div>
                </div>
              </RadioGroup>
            </div>

            {hasAbroad === 'yes' && (
              <div className="space-y-4">
                <div className="border overflow-hidden">
                  <table className="w-full text-sm">
                    <thead className="bg-gray-100">
                      <tr>
                        <th className="text-left p-3 font-medium">起止日期</th>
                        <th className="text-left p-3 font-medium">所到国家</th>
                        <th className="text-left p-3 font-medium">事由</th>
                        <th className="text-left p-3 font-medium">审批机构</th>
                        <th className="text-left p-3 font-medium">所用护照号</th>
                        <th className="text-left p-3 font-medium">操作</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-t">
                        <td className="p-3">
                          <div className="flex gap-2">
                            <Input type="date" placeholder="起始日期" className="h-9" />
                            <span className="self-center text-gray-500">至</span>
                            <Input type="date" placeholder="结束日期" className="h-9" />
                          </div>
                        </td>
                        <td className="p-3">
                          <Input placeholder="所到国家" className="h-9" />
                        </td>
                        <td className="p-3">
                          <Input placeholder="事由" className="h-9" />
                        </td>
                        <td className="p-3">
                          <Input placeholder="审批机构" className="h-9" />
                        </td>
                        <td className="p-3">
                          <Input placeholder="所用护照号" className="h-9" />
                        </td>
                        <td className="p-3">
                          <div className="flex gap-1">
                            <Button variant="ghost" size="icon" className="h-8 w-8">
                              删除
                            </Button>
                          </div>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <Button variant="outline" className="gap-2">
                  新增因私出国记录
                </Button>
              </div>
            )}

            <div className="border p-4 bg-gray-100">
              <p className="text-sm text-gray-600 text-center">填写"否"时无需填写因私出国记录</p>
            </div>

            <div className="p-4 bg-yellow-50 border border-yellow-200">
              <p className="text-sm text-gray-700">
                <strong>说明：</strong>因私出国应填写上一年 1 月 1 日以来截至填报日的情况。持出入境通行证因私出国情况需要填报。所到国家填写从出国至回国期间到过的所有国家，含过境签国家。事由主要包括探亲、访友、学术交流、就医、旅游以及继承、接受和处理财产等。
              </p>
            </div>
          </div>
        </div>

        <div className="border border-gray-300 bg-white p-4">
          <h3 className="text-base font-semibold mb-4">2.5 持有往来港澳通行证、台湾通行证的情况</h3>
          <div className="space-y-4">
            <div className="space-y-2">
              <Label>有此类情况</Label>
              <RadioGroup value={hasPass} onValueChange={setHasPass}>
                <div className="flex gap-6">
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="yes" id="pass-yes" />
                    <Label htmlFor="pass-yes" className="cursor-pointer">是</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="no" id="pass-no" />
                    <Label htmlFor="pass-no" className="cursor-pointer">否</Label>
                  </div>
                </div>
              </RadioGroup>
            </div>

            {hasPass === 'yes' && (
              <>
                <div className="border overflow-hidden">
                  <table className="w-full text-sm">
                    <thead className="bg-gray-100">
                      <tr>
                        <th className="text-left p-3 font-medium">证件名称</th>
                        <th className="text-left p-3 font-medium">证件号码</th>
                        <th className="text-left p-3 font-medium">有效期限</th>
                        <th className="text-left p-3 font-medium">保管机构</th>
                        <th className="text-left p-3 font-medium">备注</th>
                        <th className="text-left p-3 font-medium">操作</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-t">
                        <td className="p-3">
                          <Input placeholder="证件名称" className="h-9" />
                        </td>
                        <td className="p-3">
                          <Input placeholder="证件号码" className="h-9" />
                        </td>
                        <td className="p-3">
                          <Input type="date" className="h-9" />
                        </td>
                        <td className="p-3">
                          <Input placeholder="保管机构" className="h-9" />
                        </td>
                        <td className="p-3">
                          <Input placeholder="备注" className="h-9" />
                        </td>
                        <td className="p-3">
                          <div className="flex gap-1">
                            <Button variant="ghost" size="icon" className="h-8 w-8">
                              删除
                            </Button>
                          </div>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <Button variant="outline" className="gap-2">
                  新增证件记录
                </Button>
              </>
            )}

            <div className="p-4 bg-yellow-50 border border-yellow-200">
              <p className="text-sm text-gray-700">
                <strong>说明：</strong>应填写填报时的有效因私证件，以及上一年 1 月 1 日以来截至填报日失效的因私证件。
              </p>
            </div>
          </div>
        </div>

        <div className="border border-gray-300 bg-white p-4">
          <h3 className="text-base font-semibold mb-4">2.6 因私往来港澳、台湾的情况</h3>
          <div className="space-y-4">
            <div className="space-y-2">
              <Label>有此类情况</Label>
              <RadioGroup value={hasVisit} onValueChange={setHasVisit}>
                <div className="flex gap-6">
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="yes" id="visit-yes" />
                    <Label htmlFor="visit-yes" className="cursor-pointer">是</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="no" id="visit-no" />
                    <Label htmlFor="visit-no" className="cursor-pointer">否</Label>
                  </div>
                </div>
              </RadioGroup>
            </div>

            {hasVisit === 'yes' && (
              <>
                <div className="border overflow-hidden">
                  <table className="w-full text-sm">
                    <thead className="bg-gray-100">
                      <tr>
                        <th className="text-left p-3 font-medium">起止日期</th>
                        <th className="text-left p-3 font-medium">所到地区</th>
                        <th className="text-left p-3 font-medium">事由</th>
                        <th className="text-left p-3 font-medium">审批机构</th>
                        <th className="text-left p-3 font-medium">所用证件号码</th>
                        <th className="text-left p-3 font-medium">操作</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-t">
                        <td className="p-3">
                          <div className="flex gap-2">
                            <Input type="date" placeholder="起始日期" className="h-9" />
                            <span className="self-center text-gray-500">至</span>
                            <Input type="date" placeholder="结束日期" className="h-9" />
                          </div>
                        </td>
                        <td className="p-3">
                          <Input placeholder="所到地区" className="h-9" />
                        </td>
                        <td className="p-3">
                          <Input placeholder="事由" className="h-9" />
                        </td>
                        <td className="p-3">
                          <Input placeholder="审批机构" className="h-9" />
                        </td>
                        <td className="p-3">
                          <Input placeholder="所用证件号码" className="h-9" />
                        </td>
                        <td className="p-3">
                          <div className="flex gap-1">
                            <Button variant="ghost" size="icon" className="h-8 w-8">
                              删除
                            </Button>
                          </div>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <Button variant="outline" className="gap-2">
                  新增往来记录
                </Button>
              </>
            )}

            <div className="p-4 bg-yellow-50 border border-yellow-200">
              <p className="text-sm text-gray-700">
                <strong>说明：</strong>应填写上一年 1 月 1 日以来截至填报日因私往来港澳、台湾的情况。事由主要包括探亲、访友、学术交流、就医、旅游以及继承、接受和处理财产等。
              </p>
            </div>
          </div>
        </div>
      </div>
    </ReportLayout>
  );
}
