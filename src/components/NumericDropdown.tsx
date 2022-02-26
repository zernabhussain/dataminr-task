import * as React from "react";

export default function NumericDropdown({ maxUsers }: any) {
    const [maxUser, setMaxUser] = React.useState("");

    const handleChange = (event: any) => {
        setMaxUser(event.target.value);
    };

    return (
        <select className="numeric-dropdown" value={maxUser} onChange={handleChange}>
            {Array.from(Array(maxUsers)).map((_, index) => (
                <option key={index} value={index}>
                    {index}
                </option>
            ))}
        </select>
    );
}
