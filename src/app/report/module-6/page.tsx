'use client';

import { ReportLayout } from '@/components/report-layout';

export default function Module6Page() {
  return (
    <ReportLayout
      currentModule={6}
      moduleName="投资情况"
      moduleDescription="本人、配偶、共同生活的子女投资非上市公司、企业的情况"
      progress={66}
      previousModule={5}
      nextModule={7}
      onSave={() => console.log('保存草稿')}
    >
      <div className="p-8 text-center border border-gray-300 bg-white">
        <p className="text-lg font-medium">此模块暂未开放</p>
      </div>
    </ReportLayout>
  );
}
