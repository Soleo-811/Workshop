'use client';

import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import Image from 'next/image';

export default function MethodSection() {
  const [expandedMethod, setExpandedMethod] = useState<number | null>(null);

  const contents = [
    {
      title: "HỌC QUA CASE STUDIES THỰC TIỄN",
      image: "/images/hinh_1.png",
    },
    {
      title: "CẦM TAY CHỈ VIỆC - THỰC HÀNH ĐƯỢC NGAY",
      image: "/images/hinh_2.png",
    },
    {
      title: "CHUYÊN GIA AI THỰC CHIẾN KINH NGHIỆM VẬN HÀNH & COACHING",
      image: "/images/hinh_3.png",
    },
    {
      title: "THẢO LUẬN - LÀM VIỆC NHÓM (MÔ PHỎNG DỰ ÁN THỰC TẾ)",
      image: "/images/hinh_4.png",
    },
    {
      title: "PROJECT-BASED LEARNING WORKSHOP (Làm thật - Ra kết quả thật)",
      image: "/images/hinh_5.png",
    },
  ];

  return (
    <section className="relative py-20 text-white">
      <div className="max-w-5xl mx-auto px-6">
        <h2 className="text-center text-4xl md:text-5xl font-extrabold mb-16">
          PHƯƠNG PHÁP <span className="bg-gradient-to-r from-blue-700 via-purple-600 to-pink-600 bg-clip-text text-transparent">HUẤN LUYỆN</span>
        </h2>

        <div className="flex flex-col gap-4">
          {contents.map((item, index) => (
            <div key={index} className="border border-white/20 rounded-2xl overflow-hidden bg-white/5 backdrop-blur-sm shadow-lg">
              <button
                onClick={() => setExpandedMethod(expandedMethod === index ? null : index)}
                className="group relative w-full p-6 text-left transition-all duration-300 hover:bg-white/10 flex items-center justify-between"
              >
                <div className="absolute -left-2 top-1/2 -translate-y-1/2 w-1 h-16 bg-gradient-to-b from-pink-500 to-blue-500 rounded-full opacity-80 group-hover:opacity-100 transition-opacity" />
                <h3 className="text-xl md:text-2xl font-bold leading-snug pl-6 flex-1">
                  {item.title}
                </h3>
                <ChevronDown
                  size={24}
                  className={`transition-transform duration-300 flex-shrink-0 ${
                    expandedMethod === index ? 'rotate-180' : ''
                  }`}
                />
              </button>

              {expandedMethod === index && (
                <div className="px-6 pb-6 pt-4 border-t border-white/10 bg-white/5 flex items-center justify-center">
                  <img
                    src={item.image || "/placeholder.svg"}
                    alt={item.title}
                    className="w-full max-w-4xl h-auto rounded-lg object-cover"
                  />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
