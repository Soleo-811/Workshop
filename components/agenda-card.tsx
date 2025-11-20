interface Section {
  day: string
  title: string
  items: string[]
  color: string
  highlight?: boolean
}

interface AgendaCardProps {
  section: Section
  isExpanded: boolean
  onToggle: () => void
}

export default function AgendaCard({
  section,
  isExpanded,
  onToggle,
}: AgendaCardProps) {
  return (
    <button
      onClick={onToggle}
      className={`w-full text-left p-8 rounded-2xl shadow-lg transition-all duration-300 hover:shadow-xl ${
        isExpanded ? "ring-2 ring-offset-2" : ""
      } ${
        section.highlight
          ? `bg-red-500 text-white ${
              isExpanded ? "ring-red-500" : ""
            }`
          : section.color === "blue"
            ? `bg-blue-50 ${
                isExpanded ? "ring-blue-600" : ""
              }`
            : section.color === "purple"
              ? `bg-purple-50 ${
                  isExpanded ? "ring-purple-600" : ""
                }`
              : "bg-gray-50"
      }`}
    >
      <div className="flex items-start justify-between gap-4">
        <div className="flex-1">
          <h3
  className={`text-3xl font-bold mb-4 leading-snug 
  flex flex-col lg:flex-row items-start gap-1 lg:gap-3
  ${section.highlight ? "text-white" : "text-blue-900"}`}
>
  <span
    className={`text-4xl font-extrabold whitespace-nowrap ${
      section.highlight
        ? "text-white"
        : "bg-gradient-to-r from-blue-700 via-purple-600 to-pink-600 bg-clip-text text-transparent"
    }`}
  >
    {section.day}
  </span>

  <span className="flex-1">{section.title}</span>
</h3>

          <ul
            className={`space-y-2 ml-16 ${
              section.highlight ? "text-white" : "text-gray-700"
            }`}
          >
            {section.items.map((item, idx) => (
              <li key={idx} className="flex items-start gap-2 font-medium text-sm">
                <span className="text-lg">•</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        <div
          className={`flex-shrink-0 transition-transform duration-300 ${
            isExpanded ? "rotate-180" : ""
          }`}
        >
          <svg
            className={`w-6 h-6 ${section.highlight ? "text-white" : "text-gray-600"}`}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </div>
      </div>
    </button>
  )
}
