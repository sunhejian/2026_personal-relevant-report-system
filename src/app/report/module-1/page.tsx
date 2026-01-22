'use client';

import { useState } from 'react';
import { ReportLayout } from '@/components/report-layout';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Button } from '@/components/ui/button';

export default function Module1Page() {
  const [formData, setFormData] = useState({
    name: '',
    gender: '',
    ethnicity: '',
    politicalStatus: '',
    workStatus: '',
    workUnit: '',
    currentPosition: '',
    rank: '',
    idCard: '',
    residence: '',
  });

  const handleSave = () => {
    console.log('保存草稿', formData);
  };

  return (
    <ReportLayout
      currentModule={1}
      moduleName="报告人基本情况"
      moduleDescription="请填写您的基本个人信息"
      progress={11}
      previousModule={undefined}
      nextModule={2}
      onSave={handleSave}
    >
      <div className="space-y-6">
        {/* 第一行：姓名、性别、民族 */}
        <div className="grid grid-cols-3 gap-6">
          <div className="space-y-1">
            <Label htmlFor="name">姓名</Label>
            <Input
              id="name"
              placeholder="请填写与身份证一致的姓名"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            />
          </div>

          <div className="space-y-1">
            <Label>性别</Label>
            <RadioGroup value={formData.gender} onValueChange={(value) => setFormData({ ...formData, gender: value })}>
              <div className="flex gap-6">
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="male" id="male" />
                  <Label htmlFor="male" className="cursor-pointer">男</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="female" id="female" />
                  <Label htmlFor="female" className="cursor-pointer">女</Label>
                </div>
              </div>
            </RadioGroup>
          </div>

          <div className="space-y-1">
            <Label htmlFor="ethnicity">民族</Label>
            <Select value={formData.ethnicity} onValueChange={(value) => setFormData({ ...formData, ethnicity: value })}>
              <SelectTrigger>
                <SelectValue placeholder="请选择民族" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="han">汉族</SelectItem>
                <SelectItem value="zhuang">壮族</SelectItem>
                <SelectItem value="hui">回族</SelectItem>
                <SelectItem value="manchu">满族</SelectItem>
                <SelectItem value="uyghur">维吾尔族</SelectItem>
                <SelectItem value="miao">苗族</SelectItem>
                <SelectItem value="yi">彝族</SelectItem>
                <SelectItem value="tujia">土家族</SelectItem>
                <SelectItem value="tibetan">藏族</SelectItem>
                <SelectItem value="mongol">蒙古族</SelectItem>
                <SelectItem value="dong">侗族</SelectItem>
                <SelectItem value="buyi">布依族</SelectItem>
                <SelectItem value="yao">瑶族</SelectItem>
                <SelectItem value="bai">白族</SelectItem>
                <SelectItem value="korean">朝鲜族</SelectItem>
                <SelectItem value="hani">哈尼族</SelectItem>
                <SelectItem value="li">黎族</SelectItem>
                <SelectItem value="kazak">哈萨克族</SelectItem>
                <SelectItem value="dai">傣族</SelectItem>
                <SelectItem value="other">其他</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        {/* 第二行：政治面貌、在职状态、身份证号码 */}
        <div className="grid grid-cols-3 gap-6">
          <div className="space-y-1">
            <Label htmlFor="political">政治面貌</Label>
            <Select value={formData.politicalStatus} onValueChange={(value) => setFormData({ ...formData, politicalStatus: value })}>
              <SelectTrigger>
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

          <div className="space-y-1">
            <Label>在职状态</Label>
            <RadioGroup value={formData.workStatus} onValueChange={(value) => setFormData({ ...formData, workStatus: value })}>
              <div className="flex gap-6">
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="active" id="active" />
                  <Label htmlFor="active" className="cursor-pointer">现职</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="retired" id="retired" />
                  <Label htmlFor="retired" className="cursor-pointer">退出现职尚未办理退休手续</Label>
                </div>
              </div>
            </RadioGroup>
          </div>

          <div className="space-y-1">
            <Label htmlFor="idCard">身份证号码</Label>
            <Input
              id="idCard"
              placeholder="请填写18位有效身份证号"
              value={formData.idCard}
              onChange={(e) => setFormData({ ...formData, idCard: e.target.value })}
            />
          </div>
        </div>

        {/* 第三行：工作单位 */}
        <div className="space-y-1">
          <Label htmlFor="workUnit">工作单位</Label>
          <Input
            id="workUnit"
            placeholder="请填写全称或规范简称（支持搜索）"
            value={formData.workUnit}
            onChange={(e) => setFormData({ ...formData, workUnit: e.target.value })}
          />
        </div>

        {/* 第四行：现任职务 */}
        <div className="space-y-1">
          <Label htmlFor="position">现任职务</Label>
          <Input
            id="position"
            placeholder="请填写职务（多职务分行填写）"
            value={formData.currentPosition}
            onChange={(e) => setFormData({ ...formData, currentPosition: e.target.value })}
            className="min-h-[80px]"
          />
        </div>

        {/* 第五行：职级、户籍地 */}
        <div className="grid grid-cols-2 gap-6">
          <div className="space-y-1">
            <div className="flex items-center gap-2">
              <Label htmlFor="rank">职级</Label>
              <span className="text-xs px-2 py-0.5 bg-gray-100">仅列入/参照公务员法管理人员必填</span>
            </div>
            <Select value={formData.rank} onValueChange={(value) => setFormData({ ...formData, rank: value })}>
              <SelectTrigger>
                <SelectValue placeholder="请选择职级" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="national-level-1">国家级正职</SelectItem>
                <SelectItem value="national-level-2">国家级副职</SelectItem>
                <SelectItem value="provincial-level-1">省部级正职</SelectItem>
                <SelectItem value="provincial-level-2">省部级副职</SelectItem>
                <SelectItem value="departmental-level-1">厅局级正职</SelectItem>
                <SelectItem value="departmental-level-2">厅局级副职</SelectItem>
                <SelectItem value="divisional-level-1">县处级正职</SelectItem>
                <SelectItem value="divisional-level-2">县处级副职</SelectItem>
                <SelectItem value="sectional-level-1">乡科级正职</SelectItem>
                <SelectItem value="sectional-level-2">乡科级副职</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-1">
            <Label htmlFor="residence">户籍地</Label>
            <div className="grid grid-cols-3 gap-3">
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="省/直辖市/自治区" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="beijing">北京市</SelectItem>
                  <SelectItem value="tianjin">天津市</SelectItem>
                  <SelectItem value="hebei">河北省</SelectItem>
                  <SelectItem value="shanxi">山西省</SelectItem>
                  <SelectItem value="neimenggu">内蒙古自治区</SelectItem>
                  <SelectItem value="liaoning">辽宁省</SelectItem>
                  <SelectItem value="jilin">吉林省</SelectItem>
                  <SelectItem value="heilongjiang">黑龙江省</SelectItem>
                  <SelectItem value="shanghai">上海市</SelectItem>
                  <SelectItem value="jiangsu">江苏省</SelectItem>
                  <SelectItem value="zhejiang">浙江省</SelectItem>
                  <SelectItem value="anhui">安徽省</SelectItem>
                  <SelectItem value="fujian">福建省</SelectItem>
                  <SelectItem value="jiangxi">江西省</SelectItem>
                  <SelectItem value="shandong">山东省</SelectItem>
                  <SelectItem value="henan">河南省</SelectItem>
                  <SelectItem value="hubei">湖北省</SelectItem>
                  <SelectItem value="hunan">湖南省</SelectItem>
                  <SelectItem value="guangdong">广东省</SelectItem>
                  <SelectItem value="guangxi">广西壮族自治区</SelectItem>
                  <SelectItem value="hainan">海南省</SelectItem>
                  <SelectItem value="chongqing">重庆市</SelectItem>
                  <SelectItem value="sichuan">四川省</SelectItem>
                  <SelectItem value="guizhou">贵州省</SelectItem>
                  <SelectItem value="yunnan">云南省</SelectItem>
                  <SelectItem value="xizang">西藏自治区</SelectItem>
                  <SelectItem value="shaanxi">陕西省</SelectItem>
                  <SelectItem value="gansu">甘肃省</SelectItem>
                  <SelectItem value="qinghai">青海省</SelectItem>
                  <SelectItem value="ningxia">宁夏回族自治区</SelectItem>
                  <SelectItem value="xinjiang">新疆维吾尔自治区</SelectItem>
                </SelectContent>
              </Select>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="市" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="city-1">市辖区</SelectItem>
                </SelectContent>
              </Select>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="县/区/旗" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="district-1">区</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </div>
      </div>
    </ReportLayout>
  );
}
