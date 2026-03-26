import { Route } from '../routes/matches/detail'
import matches from '../data/matches.json'
import teams from '../data/teams.json'

function MatchDetailPage() {
  const { date, team, opponent } = Route.useSearch()
  const match = matches.find(m => m.date === date && m.team === team && m.opponent === opponent)

  if (!match) return <div className="min-h-screen flex items-center justify-center text-white text-2xl">Match not found</div>

  const homeTeam = teams.find(t => t.team === match.team)!
  const awayTeam = teams.find(t => t.team === match.opponent)!

  return (
    <div className="min-h-screen bg-base-200 flex flex-col items-center justify-center text-primary gap-4">
      <div className="flex items-center gap-8 text-4xl font-bold">
        <div className="flex items-center gap-3">
          <img src={homeTeam.flag} alt={homeTeam.team} className="w-12 h-12 rounded-full object-cover" />
          <span>{homeTeam.team}</span>
        </div>
        <span>{match.goals_for} - {match.goals_against}</span>
        <div className="flex items-center gap-3">
          <span>{awayTeam.team}</span>
          <img src={awayTeam.flag} alt={awayTeam.team} className="w-12 h-12 rounded-full object-cover" />
        </div>
      </div>
      <span className="text-white/50">{new Date(match.date).toLocaleDateString('pt-BR', { day: '2-digit', month: 'long', year: 'numeric' })}</span>
    </div>
  )
}

export default MatchDetailPage
