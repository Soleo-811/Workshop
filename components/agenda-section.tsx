"use client"

import { useState } from "react"
import AgendaCard from "./agenda-card"
import ExpandedAgendaView from "./expanded-agenda-view"

export default function AgendaSection() {
  const [expandedDay, setExpandedDay] = useState<string | null>(null)

  const agenda = [
    {
      day: "NGÀY 1",
      title: "AI NỀN TẢNG - TƯ DUY VÀ KĨ NĂNG SỬ DỤNG AI MASTER",
      items: [
        "Hiểu bản chất AI và cách tận dụng AI hiệu quả. Nhận diện cơ hội ứng dụng AI trong công việc. Xây dựng tư duy \"AI không phụ thuộc công cụ\". Biết cách viết prompt đúng & đủ để tạo kết quả đúng mục tiêu. Giảm 50% thời gian điều chỉnh đầu ra AI.",
        "AI First - Kỹ năng Prompting - Dùng AI để nâng cấp kỹ năng AI với bộ Công cụ AI thường xuyên nhất.",
      ],
      color: "blue",
      session1: {
        title: "Buổi 1: Tư Duy AI & Prompting",
        content: "Hiểu bản chất AI và cách tận dụng AI hiệu quả. Nhận diện cơ hội ứng dụng AI trong công việc. Xây dựng tư duy \"AI không phụ thuộc công cụ\".",
      },
      session2: {
        title: "Buổi 2: Kỹ Năng Nâng Cao",
        content: "Biết cách viết prompt đúng & đủ để tạo kết quả đúng mục tiêu. Giảm 50% thời gian điều chỉnh đầu ra AI. Dùng AI để nâng cấp kỹ năng với bộ công cụ AI.",
      },
    },
    {
      day: "NGÀY 2",
      title: "AI MARKETING SÁNG TẠO ĐỘT PHÁ VỚI AI",
      items: [
        "Lập kế hoạch & tạo Content truyền thông Digital đa kênh.",
        "Cá nhân hoá & tự động hoá với AI nâng cao hiệu suất.",
      ],
      color: "purple",
      session1: {
        title: "Buổi 3: Content Marketing với AI",
        content: "Lập kế hoạch marketing toàn diện. Tạo content truyền thông digital đa kênh bằng AI. Tối ưu hoá cho từng nền tảng.",
      },
      session2: {
        title: "Buổi 4: Tự Động Hoá Marketing",
        content: "Cá nhân hoá trải nghiệm khách hàng với AI. Tự động hoá quy trình marketing. Nâng cao hiệu suất và ROI.",
      },
    },
    {
      day: "NGÀY 3",
      title: "WORKSHOP COACHING TRIỂN KHAI AI THỰC TIỄN - KẾT QUẢ NGAY",
      items: [
        "Thiết lập mục tiêu rõ ràng và chọn dự án phù hợp với nhu cầu của bạn.",
        "Thực hành cùng Experts và Support team để tạo kết quả thực tế.",
      ],
      color: "blue",
      session1: {
        title: "Buổi 5: Thiết Lập & Lập Kế Hoạch",
        content: "Thiết lập mục tiêu rõ ràng cho dự án AI của bạn. Chọn lựa dự án phù hợp với nhu cầu. Lập kế hoạch chi tiết triển khai.",
      },
      session2: {
        title: "Buổi 6: Thực Hành & Đánh Giá",
        content: "Thực hành cùng Experts và Support team. Tạo kết quả thực tế cho công ty. Đánh giá và đo lường hiệu quả.",
      },
    },
  ]

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-extrabold text-center mb-12 text-blue-700">
          Lộ trình
          <span className="bg-gradient-to-r from-blue-700 via-purple-600 to-pink-600 bg-clip-text text-transparent">
            {" "}
            "3 NGÀY TẬP TRUNG XÂY NỀN TẢNG AI QUAN TRỌNG VÀ TẠO KẾT QUẢ THỰC TẾ CHO ĐỘI NHÓM"
          </span>
        </h2>

        <div className="space-y-6">
          {agenda.map((section) => (
            <div key={section.day}>
              <AgendaCard
                section={section}
                isExpanded={expandedDay === section.day}
                onToggle={() =>
                  setExpandedDay(expandedDay === section.day ? null : section.day)
                }
              />

              {expandedDay === section.day && (
                <ExpandedAgendaView section={section} />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
