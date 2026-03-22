import TeamCard from '../components/TeamCardComponent'
import teams from '../data/teams.json'
function TeamsPage() {
  return (
    <div className="grid grid-cols-2 gap-2 max-w-200 w-full mx-auto my-5">
      {teams.map((team) => (
        <div key={team.team} className="flex items-center w-full h-16 rounded-full px-4 bg-primary text-white">
          <TeamCard team={team} side="home" />
        </div>
      ))}
    </div>
  )
}

export default TeamsPage