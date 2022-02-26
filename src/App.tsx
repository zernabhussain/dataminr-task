import React from "react";
import GeneralContainer from "./containers/GeneralContainer";
import CommonSettingsContainer from "./containers/CommonSettingsContainer";
import "./App.css";
import { Grid } from "@mui/material";
import {
    alartsSettings,
    generalSettings,
    settingsList,
} from "./data/common-data";

function App() {
    return (
        <div className='App'>
            <GeneralContainer list={generalSettings} />
            <Grid container sx={{ width: "70%" }} columnSpacing={2.5}>
                <Grid item>
                    <CommonSettingsContainer
                        title='SETTINGS'
                        list={settingsList}
                    />
                </Grid>
                <Grid item>
                    <CommonSettingsContainer
                        title='SETTINGS'
                        list={settingsList}
                    />
                </Grid>
                <Grid item>
                    <CommonSettingsContainer
                        title='ALERT'
                        list={alartsSettings}
                    />
                </Grid>
            </Grid>
        </div>
    );
}

export default App;
