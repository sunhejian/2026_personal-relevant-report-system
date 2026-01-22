'use client';

import { ReportLayout } from '@/components/report-layout';

export default function Module7Page() {
  return (
    <ReportLayout
      currentModule={7}
      moduleName="持有股票基金情况"
      moduleDescription="本人、配偶、共同生活的子女持有股票、基金的情况"
      progress={77}
      previousModule={6}
      nextModule={8}
      onSave={() => console.log('保存草稿')}
    >
      <div className="p-8 text-center border border-gray-300 bg-white">
        <p className="text-lg font-medium">此模块暂未开放</p>
      </div>
    </ReportLayout>
  );
}
