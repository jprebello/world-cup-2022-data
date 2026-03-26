import type { StatCardProps } from '../types'

function StatCard({title, value, subtitle}: StatCardProps) {
    return (
        <div className="rounded-lg bg-linear-to-br from-[#871433] to-[#21050C] border-1 border-t-3 border-base-300 p-4 pr-8 w-full h-fit">
            <h2 className="text-xs tracking-widest uppercase text-base-content">{title}</h2>
            <p className="text-4xl font-bold text-base-300 leading-none mt-2">{value}</p>
            <p className="text-xs text-base-content mt-1">{subtitle}</p>
        </div>
    )
}

export default StatCard;