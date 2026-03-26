import type { TeamCardProps } from '../types'

function TeamCard({ team, side = 'home' }: TeamCardProps) {
  return (
    <div className={`flex items-center gap-3 ${side === 'away' ? 'flex-row-reverse' : ''}`}>
      <img src={team.flag} className="h-10 w-10 rounded-full object-cover" alt={`${team.team} flag`} />
      <span className="text-xl font-semibold">{team.team}</span>
    </div>
  )
}

export default TeamCard
