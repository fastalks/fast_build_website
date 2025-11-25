'use client';

import { useState } from 'react';

export default function Gallery() {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    { id: 'all', name: '全部' },
    { id: 'character', name: '角色' },
    { id: 'scene', name: '场景' },
    { id: 'fantasy', name: '奇幻' },
  ];

  const galleryItems = [
    { id: 1, category: 'character', color: 'from-blue-400 to-purple-400' },
    { id: 2, category: 'scene', color: 'from-pink-400 to-red-400' },
    { id: 3, category: 'fantasy', color: 'from-green-400 to-cyan-400' },
    { id: 4, category: 'character', color: 'from-yellow-400 to-orange-400' },
    { id: 5, category: 'scene', color: 'from-purple-400 to-pink-400' },
    { id: 6, category: 'fantasy', color: 'from-cyan-400 to-blue-400' },
  ];

  const filteredItems = selectedCategory === 'all' 
    ? galleryItems 
    : galleryItems.filter(item => item.category === selectedCategory);

  return (
    <section id="gallery" className="bg-white py-24 dark:bg-black">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white">
            作品展示
          </h2>
          <p className="mt-4 text-xl text-gray-600 dark:text-gray-400">
            探索由 AI 创作的精美漫画作品
          </p>
        </div>

        <div className="mt-12 flex flex-wrap justify-center gap-4">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`rounded-full px-6 py-2 font-medium transition ${
                selectedCategory === category.id
                  ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200 dark:bg-gray-800 dark:text-gray-300 dark:hover:bg-gray-700'
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              className="group relative aspect-square overflow-hidden rounded-2xl"
            >
              <div className={`h-full w-full bg-gradient-to-br ${item.color} transition-transform duration-300 group-hover:scale-110`} />
              <div className="absolute inset-0 bg-black/0 transition-all duration-300 group-hover:bg-black/20" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
