import React from "react";
import SwitchComponent from "../components/SwitchComponent";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { ItemType } from "../types/common";

interface GeneralContainerProps {
  settings: ItemType[];
}

export default function GeneralContainer({ settings }: GeneralContainerProps) {
  return (
    <div className="general-container" data-testid="general-container">
      <Typography variant="h5">GENERAL</Typography>
      <Grid container columnSpacing={2} sx={{ padding: "0px 10px", borderRadius: "5px" }}>
        {settings.map((item) => (
          <Grid item key={item.id}>
            <SwitchComponent
              title={item.title}
              component={item.component}
              subList={item.children}
              onSwitchChange={(event) => {
                console.log("Switch change:", event.target.name, event.target.checked);
              }}
            />
          </Grid>
        ))}
      </Grid>
    </div>
  );
}
