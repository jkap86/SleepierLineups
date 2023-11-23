import useFetchLeaguemates from "../../COMMON/services/hooks/useFetchLeaguemates";
import LeaguemateRecords from "./LeaguemateRecords";


const Leaguemates1 = ({ secondaryTable }) => {

    useFetchLeaguemates()

    return <LeaguemateRecords
        secondaryTable={secondaryTable}
    />
}

export default Leaguemates1;