export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-900 to-black text-white">
      {/* Hero Section */}
      <section className="relative px-6 py-24 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <h1 className="text-5xl font-bold tracking-tight sm:text-7xl bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600">
            Karma Forge
          </h1>
          <p className="mt-6 text-xl leading-8 text-gray-300">
            AI 驱动的企业智能化解决方案
          </p>
          <p className="mt-4 text-lg text-gray-400">
            让人工智能为您的业务赋能，提升客户体验，优化运营效率
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <a
              href="#contact"
              className="rounded-md bg-blue-600 px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 transition-all"
            >
              开始使用
            </a>
            <a
              href="#features"
              className="text-sm font-semibold leading-6 text-gray-300 hover:text-white transition-colors"
            >
              了解更多 <span aria-hidden="true">→</span>
            </a>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="px-6 py-24 lg:px-8 bg-gray-900/50">
        <div className="mx-auto max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">核心功能</h2>
            <p className="mt-4 text-lg text-gray-400">强大的 AI 能力，满足您的各种业务需求</p>
          </div>
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {/* Feature 1 */}
            <div className="relative rounded-2xl border border-gray-800 bg-gray-900/50 p-8 hover:border-blue-500 transition-all">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-blue-600 mb-4">
                <svg className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M8.625 12a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 01-2.555-.337A5.972 5.972 0 015.41 20.97a5.969 5.969 0 01-.474-.065 4.48 4.48 0 00.978-2.025c.09-.457-.133-.901-.467-1.226C3.93 16.178 3 14.189 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">智能客服</h3>
              <p className="text-gray-400">7x24 小时在线，基于 Claude AI 的智能对话系统，准确理解用户意图</p>
            </div>

            {/* Feature 2 */}
            <div className="relative rounded-2xl border border-gray-800 bg-gray-900/50 p-8 hover:border-blue-500 transition-all">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-purple-600 mb-4">
                <svg className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">快速响应</h3>
              <p className="text-gray-400">毫秒级响应速度，流式输出，提供流畅的用户体验</p>
            </div>

            {/* Feature 3 */}
            <div className="relative rounded-2xl border border-gray-800 bg-gray-900/50 p-8 hover:border-blue-500 transition-all">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-green-600 mb-4">
                <svg className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">安全可靠</h3>
              <p className="text-gray-400">企业级安全保障，数据加密传输，保护用户隐私</p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="px-6 py-24 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">价格方案</h2>
            <p className="mt-4 text-lg text-gray-400">灵活的定价，满足不同规模企业的需求</p>
          </div>
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {/* Basic Plan */}
            <div className="rounded-2xl border border-gray-800 bg-gray-900/50 p-8">
              <h3 className="text-2xl font-semibold mb-2">基础版</h3>
              <p className="text-gray-400 mb-6">适合小型团队和初创企业</p>
              <p className="text-4xl font-bold mb-6">¥999<span className="text-lg font-normal text-gray-400">/月</span></p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center text-gray-300">
                  <svg className="h-5 w-5 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  1000 次对话/月
                </li>
                <li className="flex items-center text-gray-300">
                  <svg className="h-5 w-5 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  基础 AI 模型
                </li>
                <li className="flex items-center text-gray-300">
                  <svg className="h-5 w-5 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  邮件支持
                </li>
              </ul>
              <a href="#contact" className="block w-full rounded-md bg-gray-800 px-4 py-3 text-center text-sm font-semibold text-white hover:bg-gray-700 transition-all">
                选择方案
              </a>
            </div>

            {/* Pro Plan */}
            <div className="rounded-2xl border-2 border-blue-500 bg-gray-900/50 p-8 relative">
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 rounded-full bg-blue-600 px-4 py-1 text-sm font-semibold">
                推荐
              </div>
              <h3 className="text-2xl font-semibold mb-2">专业版</h3>
              <p className="text-gray-400 mb-6">适合成长型企业</p>
              <p className="text-4xl font-bold mb-6">¥2999<span className="text-lg font-normal text-gray-400">/月</span></p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center text-gray-300">
                  <svg className="h-5 w-5 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  10000 次对话/月
                </li>
                <li className="flex items-center text-gray-300">
                  <svg className="h-5 w-5 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  高级 AI 模型
                </li>
                <li className="flex items-center text-gray-300">
                  <svg className="h-5 w-5 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  自定义训练
                </li>
                <li className="flex items-center text-gray-300">
                  <svg className="h-5 w-5 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  优先技术支持
                </li>
              </ul>
              <a href="#contact" className="block w-full rounded-md bg-blue-600 px-4 py-3 text-center text-sm font-semibold text-white hover:bg-blue-500 transition-all">
                选择方案
              </a>
            </div>

            {/* Enterprise Plan */}
            <div className="rounded-2xl border border-gray-800 bg-gray-900/50 p-8">
              <h3 className="text-2xl font-semibold mb-2">企业版</h3>
              <p className="text-gray-400 mb-6">适合大型企业和组织</p>
              <p className="text-4xl font-bold mb-6">定制<span className="text-lg font-normal text-gray-400"></span></p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center text-gray-300">
                  <svg className="h-5 w-5 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  无限对话
                </li>
                <li className="flex items-center text-gray-300">
                  <svg className="h-5 w-5 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  私有化部署
                </li>
                <li className="flex items-center text-gray-300">
                  <svg className="h-5 w-5 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  专属客户经理
                </li>
                <li className="flex items-center text-gray-300">
                  <svg className="h-5 w-5 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  SLA 保障
                </li>
              </ul>
              <a href="#contact" className="block w-full rounded-md bg-gray-800 px-4 py-3 text-center text-sm font-semibold text-white hover:bg-gray-700 transition-all">
                联系我们
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="px-6 py-24 lg:px-8 bg-gray-900/50">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">联系我们</h2>
          <p className="text-lg text-gray-400 mb-12">有任何问题或需求？我们随时为您服务</p>
          <div className="space-y-6">
            <div className="flex items-center justify-center gap-4 text-gray-300">
              <svg className="h-6 w-6 text-blue-500" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
              </svg>
              <span>contact@karma-forge.com</span>
            </div>
            <div className="flex items-center justify-center gap-4 text-gray-300">
              <svg className="h-6 w-6 text-blue-500" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
              </svg>
              <span>400-888-8888</span>
            </div>
            <p className="text-sm text-gray-500 mt-8">或者点击右下角的客服按钮，立即与我们的 AI 助手对话</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="px-6 py-12 lg:px-8 border-t border-gray-800">
        <div className="mx-auto max-w-7xl text-center text-gray-500">
          <p>&copy; 2024 Karma Forge. All rights reserved.</p>
        </div>
      </footer>
    </main>
  )
}
