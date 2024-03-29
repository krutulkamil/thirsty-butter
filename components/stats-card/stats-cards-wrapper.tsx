import { getFormStats } from '@/actions/form';
import { StatsCards } from '@/components/stats-card/stats-cards';

export async function StatsCardsWrapper() {
  const stats = await getFormStats();
  return <StatsCards data={stats} loading={false} />;
}
