import React, { useState } from "react";
import "./assets/App.css";
import "./assets/Form.css";
import { Button } from "@mui/material";
import BusTable from "./components/Bus/BusTable";
import RegisterForm from "./components/Form/RegisterForm";
import Register from "./components/Form/Register";

const App: React.FC = () => {
    const [tabBus, setBusTab] = useState<boolean>(false);

    return (
        <div className="container">
            <Button onClick={() => setBusTab(false)}> Registrèr</Button>
            <Button onClick={() => setBusTab(true)}> Bus tavla</Button>
            <Register />
            {!tabBus ? <RegisterForm /> : <BusTable />}
        </div>
    );
};

export default App;
