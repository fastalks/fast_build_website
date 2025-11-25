import Link from 'next/link';

export default function CTA() {
  return (
    <section className="bg-gradient-to-r from-purple-600 to-pink-600 py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-4xl font-bold text-white sm:text-5xl">
            准备好开始创作了吗?
          </h2>
          <p className="mt-4 text-xl text-purple-100">
            立即加入 AnimeGen,让 AI 助力你的创意之旅
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              href="/generate"
              className="rounded-full bg-white px-8 py-4 text-lg font-semibold text-purple-600 shadow-lg transition hover:bg-gray-100"
            >
              免费开始创作
            </Link>
            <Link
              href="#pricing"
              className="rounded-full border-2 border-white px-8 py-4 text-lg font-semibold text-white transition hover:bg-white/10"
            >
              查看价格方案
            </Link>
          </div>
          <div className="mt-8 flex items-center justify-center gap-8 text-purple-100">
            <div className="flex items-center gap-2">
              <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              <span>无需信用卡</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              <span>随时取消</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
