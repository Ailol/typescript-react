import React, { useState } from "react";
import "./assets/App.css";
import "./assets/Form.css";
import { Button } from "@mui/material";
import BusTable from "./components/BusTable";
import RegisterForm from "./components/RegisterForm";

const App: React.FC = () => {
    const [tabBus, setBusTab] = useState<boolean>(false);

    return (
        <div className="container">
            <Button onClick={() => setBusTab(false)}> Registrèr</Button>
            <Button onClick={() => setBusTab(true)}> Bus tavla</Button>

            {!tabBus ? <RegisterForm /> : <BusTable />}
        </div>
    );
};

export default App;
