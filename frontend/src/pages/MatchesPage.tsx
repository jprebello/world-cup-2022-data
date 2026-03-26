import { Link } from '@tanstack/react-router'
import MatchCard from '../components/MatchCardComponent'
import matches from '../data/matches.json'

const uniqueMatches = matches.filter((match, index, self) =>
  index === self.findIndex(m =>
    m.date === match.date &&
    ((m.team === match.team && m.opponent === match.opponent) ||
     (m.team === match.opponent && m.opponent === match.team))
  )
)

function MatchesPage() {
  return (
    <div className="min-h-screen bg-base-200">
        <div className="flex flex-col items-center max-w-200 w-full mx-auto py-5 gap-4">
          {uniqueMatches.map((match, i) => (
            <Link key={i} to="/matches/detail" search={{ date: match.date, team: match.team, opponent: match.opponent }} className="w-full">
              <MatchCard match={match} alternateColor={i % 2 === 1} />
            </Link>
          ))}
      </div>
    </div>
  )
}

export default MatchesPage