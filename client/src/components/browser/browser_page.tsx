import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { Directory } from "../../api/agent";
import IDirectory from "../../models/directory";
import { PathConverter } from "../../util/path_converter";
import { DirectoryVideos } from "./directory_videos";
import { SubDirectoryList } from "./sub_directory_list";
import { Box } from "@mui/system";
import { BackButton } from "./back_button";

const BrowserPage = () => {
  let dir_path = useParams().dir_path ?? "videos";
  const [directory, set_directory] = useState<IDirectory | null>(null);

  const fetch_directory = async (query: string) => {
    const api_query = PathConverter.to_query(query);
    const responded_directory: IDirectory = (await Directory.get(api_query)).data;
    set_directory(responded_directory);
  };

  useEffect(() => {
    fetch_directory(dir_path);
  }, []);

  const box_style = {
    backgroundColor: "#000f17",
    width: "80%",
    margin: "auto",
    marginTop: "50px",
    borderRadius: "10px",
    padding: "25px",
  };

  return (
    <Box component="div" sx={box_style}>
      <div className="browser-container">
        <h1>{directory?.name}</h1>
        <BackButton href={(directory && PathConverter.to_query(directory.parent_path)) ?? "data"} />
        {directory && <SubDirectoryList fetch_directory={fetch_directory} directory_paths={directory.directory_paths} />}
        {directory && <DirectoryVideos video_paths={directory.video_paths} />}
      </div>
    </Box>
  );
};

export default BrowserPage;