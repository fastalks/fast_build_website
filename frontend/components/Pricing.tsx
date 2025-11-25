import Link from 'next/link';

export default function Pricing() {
  const plans = [
    {
      name: '免费版',
      price: '¥0',
      period: '永久免费',
      features: [
        '每日 5 次生成',
        '标准画质输出',
        '基础风格选择',
        '社区支持',
      ],
      cta: '开始使用',
      highlighted: false,
    },
    {
      name: '专业版',
      price: '¥99',
      period: '每月',
      features: [
        '每日 100 次生成',
        '高清画质输出',
        '所有风格解锁',
        '优先生成队列',
        '高级参数调节',
        '专属客服支持',
      ],
      cta: '立即订阅',
      highlighted: true,
    },
    {
      name: '企业版',
      price: '定制',
      period: '联系销售',
      features: [
        '无限次生成',
        '超高清输出',
        '私有化部署选项',
        'API 接口访问',
        '定制模型训练',
        '专属技术支持',
      ],
      cta: '联系我们',
      highlighted: false,
    },
  ];

  return (
    <section id="pricing" className="bg-gray-50 py-24 dark:bg-gray-900">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white">
            选择适合你的方案
          </h2>
          <p className="mt-4 text-xl text-gray-600 dark:text-gray-400">
            无论是个人创作还是商业项目,都有合适的选择
          </p>
        </div>

        <div className="mt-20 grid gap-8 lg:grid-cols-3">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative rounded-3xl p-8 ${
                plan.highlighted
                  ? 'border-2 border-purple-600 bg-white shadow-2xl dark:bg-gray-800'
                  : 'border border-gray-200 bg-white dark:border-gray-700 dark:bg-gray-800'
              }`}
            >
              {plan.highlighted && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 px-4 py-1 text-sm font-semibold text-white">
                  最受欢迎
                </div>
              )}
              <div className="text-center">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                  {plan.name}
                </h3>
                <div className="mt-4 flex items-baseline justify-center">
                  <span className="text-5xl font-extrabold text-gray-900 dark:text-white">
                    {plan.price}
                  </span>
                </div>
                <p className="mt-2 text-gray-600 dark:text-gray-400">
                  {plan.period}
                </p>
              </div>

              <ul className="mt-8 space-y-4">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start">
                    <svg
                      className="mr-3 h-6 w-6 flex-shrink-0 text-green-500"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    <span className="text-gray-700 dark:text-gray-300">
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              <div className="mt-8">
                <Link
                  href="/generate"
                  className={`block w-full rounded-full py-3 text-center font-semibold transition ${
                    plan.highlighted
                      ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white hover:shadow-lg'
                      : 'border-2 border-gray-300 text-gray-900 hover:border-gray-400 dark:border-gray-600 dark:text-white dark:hover:border-gray-500'
                  }`}
                >
                  {plan.cta}
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
