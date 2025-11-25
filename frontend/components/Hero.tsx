import Link from 'next/link';

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-purple-50 to-white pt-24 dark:from-purple-950/20 dark:to-black">
      <div className="mx-auto max-w-7xl px-4 pb-20 pt-16 sm:px-6 lg:px-8 lg:pt-24">
        <div className="text-center">
          <h1 className="text-5xl font-extrabold tracking-tight text-gray-900 dark:text-white sm:text-6xl md:text-7xl">
            <span className="block">AI 驱动的</span>
            <span className="block bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              漫画创作平台
            </span>
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-xl text-gray-600 dark:text-gray-400">
            只需输入文字描述,即可生成精美的动漫风格插画。让创意触手可及,让每个人都能成为漫画家。
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              href="/generate"
              className="rounded-full bg-gradient-to-r from-purple-600 to-pink-600 px-8 py-4 text-lg font-semibold text-white shadow-lg transition hover:shadow-xl"
            >
              免费开始创作
            </Link>
            <Link
              href="#how-it-works"
              className="rounded-full border-2 border-gray-300 px-8 py-4 text-lg font-semibold text-gray-900 transition hover:border-gray-400 dark:border-gray-700 dark:text-white dark:hover:border-gray-600"
            >
              了解更多
            </Link>
          </div>
        </div>

        <div className="mt-16">
          <div className="relative mx-auto max-w-5xl rounded-2xl bg-gradient-to-r from-purple-200 to-pink-200 p-1 dark:from-purple-900 dark:to-pink-900">
            <div className="rounded-xl bg-white p-8 dark:bg-gray-900">
              <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="aspect-square rounded-lg bg-gradient-to-br from-purple-100 to-pink-100 dark:from-purple-900/50 dark:to-pink-900/50" />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
