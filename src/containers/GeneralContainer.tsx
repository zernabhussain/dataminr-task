import React from "react";
import SwitchComponent from "../components/SwitchComponent";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { itemTypes } from "../types/common";

type propTypes = {
    list: itemTypes[];
};

export default function GeneralContainer(props: propTypes) {
    const { list } = props;
    return (
        <div className='genaral-container'>
            <Typography variant='h5'>GENERAL</Typography>
            <Grid
                container
                columnSpacing={2}
                sx={{
                  
                    padding: "0px 10px",
                    borderRadius: "5px",
                }}
            >
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
