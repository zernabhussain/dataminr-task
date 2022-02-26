import React from "react";
import SwitchComponent from "../components/SwitchComponent";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { itemTypes } from "../types/common";

type propTypes = {
    title: String;
    list: itemTypes[];
};

export default function CommonSettingsContainer(props: propTypes) {
    const { title, list } = props;
    return (
        <div className='common-container'>
            <Typography variant='h5'>{title}</Typography>
            <Grid container columnSpacing={1} direction='column'>
                {list.map((item) => (
                    <Grid item key={item.id}>
                        <SwitchComponent
                            title={item.title}
                            component={item.component}
                            subList={item.children}
                            onChange={(event) => {
                                console.log(
                                    "event",
                                    event.target.name,
                                    event.target.checked,
                                );
                            }}
                        />
                    </Grid>
                ))}
            </Grid>
        </div>
    );
}
