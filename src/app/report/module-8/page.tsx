'use client';

import { ReportLayout } from '@/components/report-layout';

export default function Module8Page() {
  return (
    <ReportLayout
      currentModule={8}
      moduleName="配偶子女从业情况"
      moduleDescription="配偶、子女及其配偶在私营企业、外资企业担任重要职务的情况"
      progress={88}
      previousModule={7}
      nextModule={9}
      onSave={() => console.log('保存草稿')}
    >
      <div className="p-8 text-center border border-gray-300 bg-white">
        <p className="text-lg font-medium">此模块暂未开放</p>
      </div>
    </ReportLayout>
  );
}
