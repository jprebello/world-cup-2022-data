import StatCard from "../components/StatCardComponent"
import competition from '../data/competition.json'

const data = competition[0]

const general = {
  totalMatches: data.total_matches,
  totalGoals: data.total_goals,
  goalsAvg: data.goals_avg,
}

const stats = [
  { title: 'Best goal conversion rate', value: data.best_goal_conversion_rate_team, subtitle: `${data.best_goal_conversion_rate}% conversion rate` },
  { title: 'Most cards received', value: data.most_cards_received_team, subtitle: `${data.most_cards_received} cards received` },
  { title: 'Best attack', value: data.best_attack_team, subtitle: `${data.best_attack_goals} total goals scored` },
  { title: 'Best defense', value: data.best_defense_team, subtitle: `${data.best_defense_goals_against} goals conceded` },
  { title: 'Most assisted goals', value: data.assisted_goals_team, subtitle: `${data.assisted_goals_value} assisted goals` },
  { title: 'Most possession', value: data.most_possession_avg_team, subtitle: `${data.most_possession_avg_value}% average possession` },
  { title: 'Best passes accuracy', value: data.best_passes_accuracy_pct_team, subtitle: `${data.best_passes_accuracy_pct_value}% accuracy` },
  { title: 'Most fouls committed', value: data.most_fouls_committed_team, subtitle: `${data.most_fouls_committed_value} fouls committed` },
  { title: 'Most clean sheets', value: data.clean_sheets_team, subtitle: `${data.clean_sheets_value} clean sheets` },
]

function StatsPage() {
  return (
    <div className="min-h-screen bg-base-200 flex flex-col items-center gap-4 p-10">
      <div className="grid grid-cols-3 gap-2 w-full">
        <StatCard title={'Total games'} value={general.totalMatches} />
        <StatCard title={'Total goals'} value={general.totalGoals} />
        <StatCard title={'Goals Average'} value={general.goalsAvg} />
      </div>
      <div className="grid grid-cols-3 gap-2 w-full">
        {stats.map((s, i) => <StatCard key={i} {...s} />)}
      </div>
    </div>
  )
}

export default StatsPage