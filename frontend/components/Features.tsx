export default function Features() {
  const features = [
    {
      icon: '🎨',
      title: 'AI 智能生成',
      description: '基于最新的 AI 模型,根据文字描述生成高质量动漫风格插画'
    },
    {
      icon: '⚡',
      title: '快速生成',
      description: '仅需几秒钟,即可完成从文字到图像的转换'
    },
    {
      icon: '🎭',
      title: '多种风格',
      description: '支持多种动漫风格,包括日系、韩系、欧美等不同画风'
    },
    {
      icon: '✨',
      title: '高清输出',
      description: '支持高分辨率输出,满足商业使用和打印需求'
    },
    {
      icon: '🔧',
      title: '参数调节',
      description: '灵活调整生成参数,精确控制画面效果'
    },
    {
      icon: '💾',
      title: '云端存储',
      description: '自动保存所有创作,随时随地访问你的作品库'
    }
  ];

  return (
    <section id="features" className="bg-white py-24 dark:bg-black">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white">
            强大的功能特性
          </h2>
          <p className="mt-4 text-xl text-gray-600 dark:text-gray-400">
            为创作者打造的专业级 AI 漫画生成工具
          </p>
        </div>

        <div className="mt-20 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => (
            <div
              key={index}
              className="rounded-2xl border border-gray-200 bg-white p-8 transition hover:shadow-lg dark:border-gray-800 dark:bg-gray-900"
            >
              <div className="text-5xl">{feature.icon}</div>
              <h3 className="mt-4 text-xl font-semibold text-gray-900 dark:text-white">
                {feature.title}
              </h3>
              <p className="mt-2 text-gray-600 dark:text-gray-400">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
