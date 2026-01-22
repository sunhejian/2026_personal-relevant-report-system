'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Shield, Lock, User } from 'lucide-react';

export default function LoginPage() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [verifyCode, setVerifyCode] = useState('');

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800 p-4">
      <Card className="w-full max-w-lg shadow-2xl">
        <CardHeader className="space-y-4 pb-6">
          <div className="flex items-center justify-center space-x-3">
            <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center">
              <Shield className="w-7 h-7 text-white" />
            </div>
            <div>
              <CardTitle className="text-2xl font-bold">领导干部个人有关事项报告系统</CardTitle>
              <CardDescription className="text-base">数字化填报平台 V2.0</CardDescription>
            </div>
          </div>
        </CardHeader>

        <CardContent>
          <Tabs defaultValue="sso" className="w-full">
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="sso">单位统一身份认证</TabsTrigger>
              <TabsTrigger value="account">账号密码登录</TabsTrigger>
            </TabsList>

            <TabsContent value="sso" className="mt-6 space-y-4">
              <div className="p-6 bg-blue-50 dark:bg-blue-950 rounded-lg border-2 border-dashed border-blue-200 dark:border-blue-800">
                <div className="text-center space-y-3">
                  <div className="w-16 h-16 mx-auto bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center">
                    <User className="w-8 h-8 text-blue-600 dark:text-blue-400" />
                  </div>
                  <div>
                    <p className="font-semibold text-lg">政务内网账号 / OA账号</p>
                    <p className="text-sm text-muted-foreground mt-1">
                      使用单位统一身份认证系统登录
                    </p>
                  </div>
                </div>
              </div>

              <div className="space-y-3">
                <Label htmlFor="sso-username">账号</Label>
                <Input
                  id="sso-username"
                  placeholder="请输入政务内网账号或OA账号"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  className="h-12"
                />

                <Label htmlFor="verify-code">验证码</Label>
                <div className="flex gap-3">
                  <Input
                    id="verify-code"
                    placeholder="请输入短信验证码"
                    value={verifyCode}
                    onChange={(e) => setVerifyCode(e.target.value)}
                    className="h-12 flex-1"
                  />
                  <Button variant="outline" className="h-12 px-6">
                    获取验证码
                  </Button>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="account" className="mt-6 space-y-4">
              <div className="space-y-3">
                <Label htmlFor="account-username">账号</Label>
                <Input
                  id="account-username"
                  placeholder="请输入账号"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  className="h-12"
                />

                <Label htmlFor="password">密码</Label>
                <Input
                  id="password"
                  type="password"
                  placeholder="请输入密码"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="h-12"
                />

                <div className="flex items-center justify-between text-sm">
                  <label className="flex items-center space-x-2 cursor-pointer">
                    <input type="checkbox" className="rounded" />
                    <span>记住账号</span>
                  </label>
                  <Button variant="link" className="p-0 h-auto text-sm">
                    忘记密码？
                  </Button>
                </div>
              </div>

              <div className="bg-amber-50 dark:bg-amber-950 border border-amber-200 dark:border-amber-800 rounded-lg p-4">
                <p className="text-sm text-amber-800 dark:text-amber-200">
                  <strong>安全提示：</strong>连续5次密码错误将锁定账号1小时，如需解锁请联系系统管理员。
                </p>
              </div>
            </TabsContent>
          </Tabs>
        </CardContent>

        <CardFooter className="flex flex-col gap-4 pt-6">
          <Button className="w-full h-12 text-base font-semibold">
            登录系统
          </Button>

          <div className="text-center space-y-2 text-sm text-muted-foreground">
            <p>首次使用请阅读《填报须知》和《领导干部报告个人有关事项规定》</p>
            <div className="flex items-center justify-center gap-4">
              <Button variant="link" className="p-0 h-auto text-sm">
                填报须知
              </Button>
              <span>|</span>
              <Button variant="link" className="p-0 h-auto text-sm">
                操作视频教程
              </Button>
              <span>|</span>
              <Button variant="link" className="p-0 h-auto text-sm">
                常见问题
              </Button>
            </div>
          </div>
        </CardFooter>
      </Card>
    </div>
  );
}
