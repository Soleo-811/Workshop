interface Section {
  day: string
  title: string
  color: string
  highlight?: boolean
  session1?: {
    title: string
    content: string
  }
  session2?: {
    title: string
    content: string
  }
}

interface ExpandedAgendaViewProps {
  section: Section
}

export default function ExpandedAgendaView({ section }: ExpandedAgendaViewProps) {
  // 1) Lấy số ngày từ section.day (ví dụ "NGÀY 1" -> 1)
  const getDayIndex = (): number => {
    if (!section?.day) return 1
    const match = section.day.match(/\d+/) // tìm chữ số trong "NGÀY 1"
    return match ? Number(match[0]) : 1
  }

  const dayIndex = getDayIndex()

  // 2) Map ảnh theo index ngày (mỗi ngày 2 ảnh)
  const imageMap: Record<number, string[]> = {
    1: ["/Image_module/anh1.jpg", "/Image_module/anh2.jpg"],
    2: ["/Image_module/anh3.jpg", "/Image_module/anh4.jpg"],
    3: ["/Image_module/anh5.jpg", "/Image_module/anh6.jpg"],
    // nếu có thêm ngày, mở rộng ở đây
  }

  // 3) Lấy ảnh cho ngày hiện tại, hoặc fallback nếu không có
  const images = imageMap[dayIndex] ?? imageMap[1] ?? []

  return (
    <div className="mt-0 mb-6 rounded-b-2xl shadow-lg overflow-hidden bg-white">
      <div className="p-8">

        {/* TEXT — 2 COLUMNS */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">
              {section.session1?.title}
            </h3>
            <p className="text-gray-700 leading-relaxed">
              {section.session1?.content}
            </p>
          </div>

          <div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">
              {section.session2?.title}
            </h3>
            <p className="text-gray-700 leading-relaxed">
              {section.session2?.content}
            </p>
          </div>
        </div>

        {/* DIVIDER */}
        <div className="w-full h-px bg-gray-300 mb-12"></div>

        {/* IMAGES — 2 images side-by-side */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {images.map((src, idx) => (
            <div key={idx} className="rounded-xl overflow-hidden">
              <div className="w-full aspect-video bg-gray-200">
                <img
                  src={src}
                  alt=""
                  className="w-full h-full object-cover block"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
