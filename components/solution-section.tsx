export default function SolutionSection() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 text-white relative overflow-hidden">
      <div className="max-w-6xl mx-auto relative z-10">
        <h2 className="text-4xl font-extrabold text-center mb-12 text-cyan-300">
          CHÚNG TA MONG CHỜ GÌ SAU 3 NGÀY?
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Business Benefits */}
          <div className="p-8 rounded-2xl bg-white/10 border border-cyan-400/30 backdrop-blur-sm">
            <h3 className="text-2xl font-bold mb-6 text-cyan-300 flex items-center gap-3">
              <span className="text-3xl">📈</span> DOANH NGHIỆP
            </h3>
            <ul className="space-y-4">
              {[
                'Kích hoạt được từ 1-3 dự án "có dùng AI" trong doanh nghiệp và tạo hiệu quả nhìn thấy được',
                "Giảm 30-50% thời gian thực tế cho các công việc hiện tại",
                "Biến ý tưởng thành demo chạy được hoặc quy trình mẫu để về nhân rộng ngay",
                "Kế hoạch 90 ngày để triển khai rõ ràng, cụ thể",
              ].map((item, idx) => (
                <li key={idx} className="flex gap-3 items-start">
                  <span className="text-red-400 font-bold text-xl flex-shrink-0">✔</span>
                  <p className="text-gray-100">{item}</p>
                </li>
              ))}
            </ul>
          </div>

          {/* Team Benefits */}
          <div className="p-8 rounded-2xl bg-white/10 border border-purple-400/30 backdrop-blur-sm">
            <h3 className="text-2xl font-bold mb-6 text-purple-300 flex items-center gap-3">
              <span className="text-3xl">🧠</span> LÃNH ĐẠO & ĐỘI NGŨ
            </h3>
            <ul className="space-y-4">
              {[
                'Tư duy đồng bộ: Lãnh đạo và team nói "chung ngôn ngữ" AI',
                "Xây dựng đội ngũ tiên phong có tư duy AI-First và AI-Ready",
                "Làm chủ công cụ: Nắm vững bộ công cụ AI thực chiến nhất",
                "Tự tin triển khai và ứng dụng vào thực tế ngay",
              ].map((item, idx) => (
                <li key={idx} className="flex gap-3 items-start">
                  <span className="text-red-400 font-bold text-xl flex-shrink-0">✔</span>
                  <p className="text-gray-100">{item}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
