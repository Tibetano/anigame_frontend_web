import Sponsors from '../sponsors/Sponsors';
import MainBanner from '../banner/MainBanner';
import EventSchedule from '../eventSchedule/EventSchedule';

const Home = () => {
    return (
        <>
            <MainBanner />

            <EventSchedule />

            <Sponsors />
        </>
    );
}

export default Home;