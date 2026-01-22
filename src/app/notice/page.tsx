'use client';

import { Button } from '@/components/ui/button';
import Link from 'next/link';

export default function NoticePage() {
  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-white border-b sticky top-0 z-50">
        <div className="max-w-4xl mx-auto px-4">
          <div className="flex items-center h-14">
            <Link href="/year-select">
              <Button variant="ghost" size="sm">
                返回
              </Button>
            </Link>
            <div className="flex-1 text-center">
              <h1 className="text-base font-semibold">填报须知 - 2025年度</h1>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-4 py-6 space-y-4">
        <div className="border border-gray-300 bg-white p-6">
          <h2 className="text-lg font-semibold mb-2">填报须知</h2>
          <p className="text-sm text-gray-600 mb-4">请仔细阅读以下内容后再开始填报</p>

          <div className="space-y-6 max-h-[600px] overflow-y-auto">
            <div>
              <h3 className="font-semibold mb-2">一、总体说明</h3>
              <p className="text-sm">
                本报告表依据《领导干部报告个人有关事项规定》制定，报告人应本着对党忠诚、实事求是的原则，
                如实、准确、完整地填报个人有关事项。
              </p>
            </div>

            <div>
              <h3 className="font-semibold mb-3">二、填表说明</h3>
              <ol className="space-y-2 text-sm list-decimal list-inside">
                <li>本表须由领导干部本人亲笔填写。填写前请认真学习《领导干部报告个人有关事项规定》，仔细阅读本须知和填写说明。</li>
                <li>按首次报告要求填报。本表所列有关事项已经作过及时报告的，还应当按要求继续填报。</li>
                <li>本表中所称"子女"，包括领导干部的婚生子女、非婚生子女、养子女和有抚养关系的继子女。所称"共同生活的子女"，是指领导干部的未成年子女和由其抚养的不能独立生活的成年子女。未成年子女是指不满18周岁的子女；不能独立生活的成年子女，是指不能辨认自己行为或者不能完全辨认自己行为的无民事行为能力人或者限制民事行为能力人，以及无劳动能力或者无稳定收入，不能独立生活的成年子女。</li>
                <li>本表中需要填报金额的事项，境内的均以"万元"为单位，国（境）外的均以"万"为单位，小数点后保留两位。国（境）外的存款、投资等应注明币种。国（境）外相关事项内容需有中文表述。</li>
                <li>属于上一级党委（党组）管理的领导干部的报告材料，由所在地方或者部门、单位主要负责人阅签。属于本部门、本单位管理的领导干部的报告材料，不需要阅签。</li>
              </ol>
            </div>

            <div>
              <h3 className="font-semibold mb-3">三、填报流程</h3>
              <div className="grid grid-cols-5 gap-2">
                <div className="text-center">
                  <div className="w-8 h-8 mx-auto bg-blue-600 flex items-center justify-center text-white font-semibold mb-1">
                    1
                  </div>
                  <p className="text-xs">选择年度</p>
                </div>
                <div className="text-center">
                  <div className="w-8 h-8 mx-auto bg-blue-600 flex items-center justify-center text-white font-semibold mb-1">
                    2
                  </div>
                  <p className="text-xs">阅读须知</p>
                </div>
                <div className="text-center">
                  <div className="w-8 h-8 mx-auto bg-blue-600 flex items-center justify-center text-white font-semibold mb-1">
                    3
                  </div>
                  <p className="text-xs">分步填报</p>
                </div>
                <div className="text-center">
                  <div className="w-8 h-8 mx-auto bg-blue-600 flex items-center justify-center text-white font-semibold mb-1">
                    4
                  </div>
                  <p className="text-xs">预览提交</p>
                </div>
                <div className="text-center">
                  <div className="w-8 h-8 mx-auto bg-blue-600 flex items-center justify-center text-white font-semibold mb-1">
                    5
                  </div>
                  <p className="text-xs">等待阅签</p>
                </div>
              </div>
            </div>

            <div>
              <h3 className="font-semibold mb-3">四、注意事项</h3>
              <ul className="space-y-2 text-sm list-disc list-inside">
                <li>填报过程中可随时点击"保存草稿"按钮保存进度</li>
                <li>所有模块填写完成后需预览并确认无误后才能提交</li>
                <li>每个填报字段旁有"？"图标，点击可查看填写说明</li>
              </ul>
            </div>
          </div>
        </div>

        <Link href="/report/module-1" className="block">
          <Button className="w-full h-10 text-base">
            开始填报
          </Button>
        </Link>
      </main>
    </div>
  );
}
