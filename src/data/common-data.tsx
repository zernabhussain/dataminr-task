import { itemTypes } from "../types/common";
import NumericDropdown from "../components/NumericDropdown";

export const generalSettings: itemTypes[] = [
    { id: 0, title: "CASE MANAGEMENT" },
    { id: 1, title: "MAP TIMELINE" },
    { id: 2, title: "VIEWS & BRIEFINGS" },
    { id: 3, title: "NOTIFICATIOS" },
    { id: 4, title: "MASS COMMUNICATIONS" },
    { id: 5, title: "TRAFFIC CAMERAS" },
];

export const settingsList: itemTypes[] = [
    { id: 0, title: "AUDIT LOGS" },
    {
        id: 1,
        title: "USERS",
        children: [
            { id: 0, title: "USER ADD" },
            { id: 1, title: "USER DELETE" },
            { id: 2, title: "USER EDIT" },
            {
                id: 3,
                title: "MAX USER",
                component: () => <NumericDropdown maxUsers={10} />,
            },
        ],
    },
];

export const alartsSettings: itemTypes[] = [
    { id: 0, title: "ALERT MANAGER" },
    {
        id: 1,
        title: "ALERT RULES",
        component: () => <NumericDropdown maxUsers={10} />,
    },
];
