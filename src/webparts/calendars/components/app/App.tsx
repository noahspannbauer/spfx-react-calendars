import * as React from 'react';
import { useAppContext } from '../../hooks/useAppContext/UseAppContext';
import Calendar from '../calendar/Calendar';
import FilterPanel from '../filterPanel/FilterPanel';
import EventModal from '../eventModal/EventModal';
import { PrimaryButton } from 'office-ui-fabric-react/lib/Button';

const App: React.FC<{}> = () => {
  const appContext = useAppContext();

  const onFilterButtonClick = () => {
    appContext.setFilterPanel();
  };

  return (
    <div>
      <PrimaryButton onClick={onFilterButtonClick}>Filter</PrimaryButton>
      <Calendar />
      <FilterPanel />
      <EventModal />
    </div>
  );
};

export default App;
