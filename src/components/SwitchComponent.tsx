import * as React from "react";
import Typography from "@mui/material/Typography";
import Switch from "@mui/material/Switch";
import { itemTypes } from "../types/common";
import List from "@mui/material/List";
import Collapse from "@mui/material/Collapse";
import { styled } from "@mui/material/styles";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";

type propTypes = {
    title: string;
    component?: any;
    subList?: itemTypes[];
    showExpend?: Boolean;
    isOpen?: Boolean;
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

const AntSwitch = styled(Switch)(({ theme }) => ({
    width: 28,
    height: 16,
    padding: 0,
    display: "flex",
    "&:active": {
        "& .MuiSwitch-thumb": {
            width: 15,
        },
        "& .MuiSwitch-switchBase.Mui-checked": {
            transform: "translateX(9px)",
        },
    },
    "& .MuiSwitch-switchBase": {
        padding: 2,
        "&.Mui-checked": {
            transform: "translateX(12px)",
            color: "#fff",
            "& + .MuiSwitch-track": {
                opacity: 1,
                backgroundColor:
                    theme.palette.mode === "dark" ? "#177ddc" : "#1890ff",
            },
        },
    },
    "& .MuiSwitch-thumb": {
        boxShadow: "0 2px 4px 0 rgb(0 35 11 / 20%)",
        width: 12,
        height: 12,
        borderRadius: 6,
        transition: theme.transitions.create(["width"], {
            duration: 200,
        }),
    },
    "& .MuiSwitch-track": {
        borderRadius: 16 / 2,
        opacity: 1,
        backgroundColor:
            theme.palette.mode === "dark"
                ? "rgba(255,255,255,.35)"
                : "rgba(0,0,0,.25)",
        boxSizing: "border-box",
    },
}));

export function CustomSwitch(props: propTypes) {
    const { title, component, showExpend, isOpen, onChange } = props;
    return (
        <div className='custom-switch'>
            <Typography sx={{ flexGrow: 1 }}>{title}</Typography>
            {component && component()}
            <AntSwitch defaultChecked name={title} onChange={onChange} />
            {showExpend ? isOpen ? <ExpandLess /> : <ExpandMore /> : null}
        </div>
    );
}

export default function SwitchComponent(props: propTypes) {
    const { title, component, subList, onChange } = props;
    const [open, setOpen] = React.useState(true);
    const handleClick = () => {
        setOpen(!open);
    };
    const handleChange = (event: any) => {
        onChange(event);
        if (subList && subList.length > 0) {
            handleClick();
        }
    };

    return (
        <List className='switch-container'>
            <CustomSwitch
                title={title}
                component={component}
                onChange={handleChange}
                showExpend={subList && subList.length > 0}
                isOpen={open}
            />
            <Collapse in={open} timeout='auto' unmountOnExit>
                <List component='div' disablePadding>
                    {subList &&
                        subList.map((item) => (
                            <CustomSwitch
                                key={item.id + "child"}
                                title={item.title}
                                component={item.component}
                                onChange={onChange}
                            />
                        ))}
                </List>
            </Collapse>
        </List>
    );
}
