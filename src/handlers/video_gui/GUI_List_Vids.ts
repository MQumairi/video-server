import { Request, Response } from "express";
import { DirectoryManager } from "../../models/directory_manager";

const GUI_List_Vids = async (req: Request, res: Response): Promise<void> => {
  let dirname = req.params.dirname;
  let directory_path = DirectoryManager.getDataPath() + "/" + dirname;
  let directory_manager = new DirectoryManager();
  let video_files = await directory_manager.listVideos(directory_path);
  res.render("videos.ejs", { vids: video_files });
};

export default GUI_List_Vids;