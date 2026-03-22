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
    <div className="flex flex-col items-center max-w-200 w-full mx-auto my-5 gap-2">
      {uniqueMatches.map((match, i) => (
        <MatchCard
          key={i}
          match={match}
          alternateColor={i % 2 === 1}
        />
      ))}
    </div>
  )
}

export default MatchesPage