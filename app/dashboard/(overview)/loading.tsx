import { NextPage } from 'next';
import DashboardSkeleton from '../../ui/skeletons';

interface Props {}

const Loading: NextPage<Props> = ({}) => {
  return <DashboardSkeleton />;
};

export default Loading;
