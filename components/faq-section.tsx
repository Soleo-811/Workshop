export default function FAQSection() {
  const faqs = [
    {
      q: "Tôi và nhân sự không thạo về kỹ thuật hoặc AI, có học được không?",
      a: "AICI khẳng định chương trình Bootcamp X10 AI Thực Chiến được thiết kế đặc biệt dành riêng cho CEO và Leader, tập trung vào Tư duy Chiến lược & Ứng dụng, hoàn toàn không yêu cầu code hay các kỹ thuật cao cấp. Đặc biệt trong Ngày 3, đội ngũ Kỹ thuật AI của AICI sẽ trực tiếp hỗ trợ để đảm bảo người học xây dựng bản demo thành công.",
    },
    {
      q: "Sự khác biệt của họat động 3 ngày và 2 ngày là gì?",
      a: 'Sự khác biệt cốt lõi của Hoạt động 3 ngày chính là Ngày 3 – ngày Workshop Coaching bởi chuyên gia và  "Làm Thật - Kết quả thật.". Đây là lúc người học sẽ được coaching 1:1 để giải quyết "bài toán riêng" của doanh nghiệp, và ra về với một sản phẩm "demo chạy được" cụ thể, kèm theo Kế hoạch 90 ngày chi tiết có tính thực thi cao.',
    },
    {
      q: "Tôi nên đi một mình hay đi cùng team?",
      a: 'Để tối ưu hiệu quả, AICI khuyến khích bạn tham dự cùng 1-2 nhân sự lõi (Key Persons). Đây là yếu tố then chốt để lãnh đạo và team nhanh chóng đạt được "ngôn ngữ chung", giúp việc triển khai sau này đồng bộ và hiệu quả hơn.',
    },
    {
      q: "Tại sao nên cần 3 ngày tập trung cao độ?",
      a: '3 ngày là thời gian tối thiểu được thiết kế để hoàn thành trọn vẹn lộ trình: 2 ngày làm chủ công cụ và 1 ngày tập trung biến "Ý tưởng" thành "Demo" thực tế dưới sự giám sát của chuyên gia. Đây là lộ trình cao cấp được thiết kế và minh chứng thành công',
    },
  ]

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-4xl font-extrabold text-center mb-12 text-blue-700">
          Câu Hỏi Thường Gặp (
          <span className="bg-gradient-to-r from-blue-700 via-purple-600 to-pink-600 bg-clip-text text-transparent">
            FAQ
          </span>
          )
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {faqs.map((faq, idx) => (
            <div
              key={idx}
              className="p-6 bg-gray-50 rounded-xl shadow-md border-l-4 border-blue-900/50 hover:shadow-lg transition-shadow"
            >
              <h3 className="font-bold text-lg text-blue-800 mb-3">Q: {faq.q}</h3>
              <p className="text-blue-500 leading-relaxed text-justify">A: {faq.a}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
