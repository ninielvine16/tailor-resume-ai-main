import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Chip from "@mui/material/Chip";
import Stack from "@mui/material/Stack";

export default function AbsolutePositionedChip() {
  const chipContainerStyle = {
    position: "fixed",
    bottom: "12px",
    left: "16px",
    zIndex: 500,
    cursor: "pointer",
  };

  return (
    <div style={chipContainerStyle}>
      <Stack direction="row" spacing={1}>
        <Chip
          avatar={<Avatar alt="AvatarJobConnect" src="https://i.ibb.co/3z8L9vN/profile-pic.jpg" />}
          label="Made with ❤️ Tankeu & Tamo"
          component="a"
          variant="filled"
        />
      </Stack>
    </div>
  );
}
