import React from "react";

import { Box, Text } from "grommet";

function PageFormField({ label, children }) {
  return (
    <Box direction={"column"} align={"start"}>
      <Box gap={"small"} flex={false}>
        <Text weight={500} margin={{ top: "medium" }}>
          {label}
        </Text>
      </Box>
      <Box width={"100%"}>{children}</Box>
    </Box>
  );
}

export default PageFormField;