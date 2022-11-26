import ButtonAppBar from "../../components/Navbar/index.js";
import BlockCard from "../../components/Blocks/index.js";
import UserEstimation from "../../components/EstimationForm/index.js";
import BasicTabs from "../../components/TabPanel/index.js";
import "./index.css";
import BrokerDataTable from "../../components/Charges/BrokerData.js";

export default function Discover() {
  return (
    <div>
      <div className="Navbar">
        <ButtonAppBar />
      </div>

      <div className="TabsPanel">
        <BasicTabs />
      </div>

      <div className="Blocks">
        <BlockCard />
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
