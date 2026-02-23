import type { Metadata } from 'next'
import './globals.css'
import ChatWidget from '@/components/ChatWidget'

export const metadata: Metadata = {
  title: 'Karma Forge - AI 驱动的企业解决方案',
  description: '专业的 AI 客服系统和企业智能化解决方案提供商',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="zh-CN">
      <body>
        {children}
        <ChatWidget />
      </body>
    </html>
  )
}
