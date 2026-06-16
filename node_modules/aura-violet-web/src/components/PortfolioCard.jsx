export default function PortfolioCard({ title, image, category }) {
  return (
    <div className="group relative overflow-hidden rounded-lg shadow-lg">
      <div className="absolute inset-0 bg-purple-600 opacity-0 group-hover:opacity-70 transition-opacity"></div>
      <div className="absolute bottom-0 left-0 right-0 p-4 text-white transform translate-y-full group-hover:translate-y-0 transition-transform">
        <h3 className="text-lg font-bold">{title}</h3>
        <p className="text-sm">{category}</p>
      </div>
    </div>
  )
}
