import ButtonAppBar from "../../components/Navbar/index.js";
import DividendBlockCard from "../../components/Blocks/DividendBlock/index.js";
import ItBlockCard from "../../components/Blocks/ItBlock/index.js";
import UserEstimation from "../../components/EstimationForm/index.js";
import BasicTabs from "../../components/TabPanel/index.js";
import "./index.css";
import BrokerDataTable from "../../components/Charges/BrokerData.js";
import Paper from "@mui/material/Paper";

export default function Discover() {
  return (
    <div>
      <div className="Navbar">
        <ButtonAppBar />
      </div>

      <div className="TabsPanel">
        <BasicTabs />
      </div>

      <div className="AdviceMessage">
        <Paper className="block1-it">
          <div className="block1-it-container">
            <p className="text-14 card-title">
              It's a good day to start investing
            </p>
            <h2 className="make-first-invest-text text-18">
              Start to make your first investment
            </h2>
          </div>
        </Paper>
      </div>

      <div className="BlockCards">
        <div className="ItBlocks">
          <Paper>
            <ItBlockCard />
          </Paper>
        </div>

        <div className="DividendBlocks">
          <Paper>
            <DividendBlockCard />
          </Paper>
        </div>
      </div>

      <div className="EstimationForm">
        <UserEstimation />
      </div>

      <div className="BrokerTable">
        <BrokerDataTable />
      </div>
    </div>
  );
}
