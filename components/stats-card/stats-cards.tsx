import React from 'react';
import { LuView } from 'react-icons/lu';
import { FaWpforms } from 'react-icons/fa';
import { HiCursorClick } from 'react-icons/hi';
import { TbArrowBounce } from 'react-icons/tb';

import {
  StatsCard,
  type StatsCardProps,
} from '@/components/stats-card/stats-card';
import { getFormStats } from '@/actions/form';

interface StatsCardsProps {
  data?: Awaited<ReturnType<typeof getFormStats>>;
  loading: boolean;
}

export function StatsCards({ data, loading }: Readonly<StatsCardsProps>) {
  const statsCardsConfig: StatsCardProps[] = [
    {
      title: 'Total visits',
      icon: <LuView className="text-blue-600" />,
      helperText: 'All time form-card visits',
      value: data?.visits.toLocaleString() ?? '',
      loading,
      className: 'shadow-md shadow-blue-600',
    },
    {
      title: 'Total submissions',
      icon: <FaWpforms className="text-yellow-600" />,
      helperText: 'All time form-card submissions',
      value: data?.submissions.toLocaleString() ?? '',
      loading,
      className: 'shadow-md shadow-yellow-600',
    },
    {
      title: 'Submission rate',
      icon: <HiCursorClick className="text-green-600" />,
      helperText: 'Visits that result in form-card submission',
      value: data?.submissionRate.toLocaleString() + '%' || '',
      loading,
      className: 'shadow-md shadow-green-600',
    },
    {
      title: 'Bounce rate',
      icon: <TbArrowBounce className="text-red-600" />,
      helperText: 'Visits that leaves without interacting',
      value: data?.bounceRate.toLocaleString() + '%' || '',
      loading,
      className: 'shadow-md shadow-red-600',
    },
  ];

  return (
    <div className="w-full pt-8 gap-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
      {statsCardsConfig.map((card) => (
        <StatsCard key={card.title} {...card} />
      ))}
    </div>
  );
}
