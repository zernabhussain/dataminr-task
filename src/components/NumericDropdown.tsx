import React, { useState } from "react";

interface NumericDropdownProps {
  maxUsers: number;
}

export default function NumericDropdown({ maxUsers }: NumericDropdownProps) {
  const [selectedUserCount, setSelectedUserCount] = useState<number | "">("");

  const handleUserCountChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedUserCount(Number(event.target.value));
  };

  return (
    <select className="numeric-dropdown" value={selectedUserCount} onChange={handleUserCountChange}>
      {Array.from({ length: maxUsers }).map((_, index) => (
        <option key={index} value={index}>
          {index}
        </option>
      ))}
    </select>
  );
}
