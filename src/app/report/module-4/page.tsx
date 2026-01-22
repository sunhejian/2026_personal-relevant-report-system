'use client';

import { ReportLayout } from '@/components/report-layout';

export default function Module4Page() {
  const handleSave = () => {
    console.log('保存草稿');
  };

  return (
    <ReportLayout
      currentModule={4}
      moduleName="亲属境外情况"
      moduleDescription="配偶、子女及其配偶在国（境）外的学习、工作、生活情况"
      progress={44}
      previousModule={3}
      nextModule={5}
      onSave={handleSave}
    >
      <div className="space-y-4">
        <div className="border border-gray-300 bg-white p-4">
          <div className="text-center py-20">
            <p className="text-lg text-gray-700">此模块暂未开放</p>
          </div>
        </div>
      </div>
    </ReportLayout>
  );
}
