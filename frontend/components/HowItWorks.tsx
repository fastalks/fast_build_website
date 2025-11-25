export default function HowItWorks() {
  const steps = [
    {
      number: '01',
      title: '输入描述',
      description: '用文字详细描述你想要的漫画场景、角色和风格',
      icon: '✍️'
    },
    {
      number: '02',
      title: '选择风格',
      description: '从多种预设风格中选择,或自定义参数以获得独特效果',
      icon: '🎨'
    },
    {
      number: '03',
      title: 'AI 生成',
      description: '强大的 AI 模型将在几秒钟内为你创作精美的漫画插画',
      icon: '🤖'
    },
    {
      number: '04',
      title: '下载使用',
      description: '满意后即可下载高清图片,用于你的创作项目',
      icon: '📥'
    }
  ];

  return (
    <section id="how-it-works" className="bg-gray-50 py-24 dark:bg-gray-900">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white">
            如何使用
          </h2>
          <p className="mt-4 text-xl text-gray-600 dark:text-gray-400">
            四步轻松完成漫画创作
          </p>
        </div>

        <div className="mt-20 grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, index) => (
            <div key={index} className="relative text-center">
              <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-r from-purple-600 to-pink-600 text-4xl">
                {step.icon}
              </div>
              <div className="mb-4 text-sm font-bold text-purple-600 dark:text-purple-400">
                {step.number}
              </div>
              <h3 className="mb-2 text-xl font-semibold text-gray-900 dark:text-white">
                {step.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                {step.description}
              </p>
              {index < steps.length - 1 && (
                <div className="absolute right-0 top-10 hidden lg:block">
                  <svg className="h-6 w-6 text-purple-300 dark:text-purple-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
