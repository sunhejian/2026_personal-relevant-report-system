'use client';

import { ReportLayout } from '@/components/report-layout';

export default function Module5Page() {
  return (
    <ReportLayout
      currentModule={5}
      moduleName="房产信息"
      moduleDescription="本人、配偶、共同生活的子女为所有权人或者共有人的房产情况"
      progress={55}
      previousModule={4}
      nextModule={6}
      onSave={() => console.log('保存草稿')}
    >
      <div className="p-8 text-center border border-gray-300 bg-white">
        <p className="text-lg font-medium">此模块暂未开放</p>
      </div>
    </ReportLayout>
  );
}
