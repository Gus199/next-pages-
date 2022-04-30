
import {getFeaturedEvents} from '../dummy-data'

import EventList from '../components/events/event-list'
import EventsSearch from '../components/events/events-search';
import { Fragment } from 'react';


function Homepage() {
  const FeaturedEvents = getFeaturedEvents();
  return (
    <Fragment >
      <EventsSearch />
    <EventList  items={FeaturedEvents}/>
    </Fragment>
  )
}


export default Homepage