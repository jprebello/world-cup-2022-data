import type { MatchCardProps } from '../types'
import TeamCard from '../components/TeamCardComponent'
import teams from '../data/teams.json'

function MatchCard({ match, alternateColor = false }: MatchCardProps) {
  const bg = alternateColor ? 'card-primary-gradient' : 'card-light'
  
  const homeTeam = teams.find(t => t.team === match.team)!
  const awayTeam = teams.find(t => t.team === match.opponent)!

  const formattedDate = new Date(match.date).toLocaleDateString('pt-BR', {
    day: '2-digit', month: '2-digit', year: 'numeric',
  })

  return (
    <div className={`relative flex items-center justify-between w-full h-16 rounded-full px-4 ${bg} shadow-md card-hover-animation`}>
      <TeamCard team={homeTeam} side="home" />
      <div className="absolute left-1/2 -translate-x-1/2 flex flex-col items-center">
        <span className="text-xl font-bold">{match.goals_for} - {match.goals_against}</span>
        <span className={`text-xs text-base-200`}>{formattedDate}</span>
      </div>
      <TeamCard team={awayTeam} side="away" />
    </div>
  )
}

export default MatchCard