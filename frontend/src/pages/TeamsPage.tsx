import TeamCard from '../components/TeamCardComponent'
import teams from '../data/teams.json'

function TeamsPage() {
  return (
    <div className="min-h-screen bg-base-200">
      <div className="flex flex-col items-center max-w-200 w-full mx-auto py-5 gap-4">
        {teams.map((team, i) => (
          <div key={team.team} className={`flex items-center w-full h-16 rounded-full px-4 card-hover-animation ${i % 2 === 1 ? 'card-primary-gradient' : 'card-light'}`}>
            <TeamCard team={team} side="home" />
          </div>
        ))}
      </div>
    </div>
  )
}

export default TeamsPage
