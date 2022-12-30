import React, { useState } from "react";
import "./assets/App.css";
import "./assets/Form.css";
import { Button } from "@mui/material";
import BusTable from "./components/Bus/BusTable";
import Profile from "./components/Form/Profile";
// import Form from "./components/Form/Form";

const App: React.FC = () => {
    const [tabBus, setBusTab] = useState<boolean>(false);

    return (
        <div className="container">
            <Button onClick={() => setBusTab(false)}> Registrèr</Button>
            <Button onClick={() => setBusTab(true)}> Bus tavla</Button>

            {!tabBus ? <Profile /> : <BusTable />}

            {/* <Form /> */}
        </div>
    );
};

export default App;
