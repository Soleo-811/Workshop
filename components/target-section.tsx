export default function TargetSection() {
  const forWho = [
    "Doanh nghiệp đã tự học, tự thử AI nhưng kết quả rời rạc, chưa tạo được hệ thống rõ ràng",
    "CEO coi AI là trụ cột chiến lược, muốn dùng AI để tạo tăng trưởng mạnh và bền vững, không chỉ tối ưu chi phí lặt vặt",
    "Ban lãnh đạo nghiêm túc, sẵn sàng điều chỉnh quy trình, dành thời gian và nguồn lực",
    "Doanh nghiệp cần khuôn mẫu & workflow AI chuẩn để đồng bộ tư duy cho toàn bộ đội ngũ"
  ];

  const notForWho = [
    "Doanh nghiệp chưa xác định AI sẽ giải quyết vấn đề gì",
    "Lãnh đạo giao cho nhân sự đi học, không trực tiếp dẫn dắt",
    "Chỉ muốn biết vài công cụ AI lẻ tẻ, không chạm vào mô hình vận hành",
    "Không sẵn sàng thay đổi quy trình, không có case thực tế để triển khai",
    "Ngại cam kết, ưu tiên 'an toàn, làm cho có' hơn là kết quả đo lường được"
  ];

  return (
    <section className="relative py-20 text-white">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-center text-4xl md:text-5xl font-extrabold mb-16">
          Khóa học này là dành cho ai?
        </h2>

        <div className="grid md:grid-cols-2 gap-4 px-0">
          {/* For Who Section */}
          <div className="p-3 bg-green-500/10 border-2 border-green-500/50 rounded-xl">
            <div className="flex justify-center items-center gap-3 mb-8">
              <h3 className=" text-2xl md:text-3xl font-extrabold">
                <span className="text-green-400">CHỈ DÀNH CHO </span>
              </h3>
            </div>
            <div className="space-y-4">
              {forWho.map((item, index) => (
                <div key={index} className="flex gap-4 p-4 bg-white/5 rounded-lg hover:bg-white/10 transition-colors">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-green-500 text-white flex items-center justify-center text-lg font-bold mt-1">
                    ✔
                  </div>
                  <p className="text-gray-200 leading-relaxed">
                    {item}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Not For Who Section - CHANGE: Added missing closing div tag */}
          <div className="p-3 bg-red-500/10 border-2 border-red-500/50 rounded-xl">
            <div className="flex justify-center items-center gap-3 mb-8">
              <h3 className="text-2xl md:text-3xl font-extrabold">
                <span className="text-center text-red-400">KHÔNG DÀNH CHO</span>
              </h3>
            </div>
            <div className="space-y-4">
              {notForWho.map((item, index) => (
                <div key={index} className="flex gap-4 p-4 bg-white/5 rounded-lg hover:bg-white/10 transition-colors">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-red-500 text-white flex items-center justify-center text-lg font-bold mt-1">
                    ✕
                  </div>
                  <p className="text-gray-200 leading-relaxed">
                    {item}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <p className="text-center text-2xl font-extrabold mt-6">
          Khóa học này không dành cho tất cả mọi người.
          <br />
          Nhưng nếu bạn muốn doanh nghiệp mình ứng dụng AI thật trong 2026
          <br />
          Đây là lúc bắt đầu!
        </p>
      </div>
    </section>
  );
}
