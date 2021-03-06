import { Box } from "@mui/material";
import SubDirectoryItem from "./sub_directory_item";
import { observer } from "mobx-react-lite";

const SubDirectoryList = (props: any) => {
  const box_style = {
    background: "#01141f",
    display: "flex",
    flexWrap: "wrap",
    padding: "15px",
    marginTop: "20px",
  };
  return (
    <Box component="div" sx={box_style}>
      {props.directory_paths.map((dir: string) => {
        return <SubDirectoryItem dir={dir} key={dir} />;
      })}
    </Box>
  );
};

export default observer(SubDirectoryList);
