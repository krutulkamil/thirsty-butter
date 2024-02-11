import React from 'react';
import { LuView } from 'react-icons/lu';

import { getFormStats } from '@/actions/form';
import { StatsCard } from '@/components/cards/stats-card';

interface StatsCardProps {
  data?: Awaited<ReturnType<typeof getFormStats>>;
  loading: boolean;
}

export function StatsCards({ data, loading }: Readonly<StatsCardProps>) {
  return (
    <div className="w-full pt-8 gap-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
      <StatsCard
        title="Total visits"
        icon={<LuView className="text-blue-600" />}
        helperText="All time form visits"
        value={data?.visits.toLocaleString() ?? ''}
        loading={loading}
        className="shadow-md shadow-blue-600"
      />
    </div>
  );
}
