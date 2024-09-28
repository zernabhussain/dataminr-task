import React from "react";
import SwitchComponent from "../components/SwitchComponent";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { ItemType } from "../types/common";

interface CommonSettingsContainerProps {
  title: string;
  settings: ItemType[];
}

export default function CommonSettingsContainer({
  title,
  settings,
}: CommonSettingsContainerProps) {
  return (
    <div className="common-container" data-testid="common-container">
      <Typography variant="h5">{title}</Typography>
      <Grid container columnSpacing={1} direction="column">
        {settings.map((item) => (
          <Grid item key={item.id}>
            <SwitchComponent
              title={item.title}
              component={item.component}
              subList={item.children}
              onSwitchChange={(event) => {
                console.log(
                  "Switch change:",
                  event.target.name,
                  event.target.checked
                );
              }}
            />
          </Grid>
        ))}
      </Grid>
    </div>
  );
}
