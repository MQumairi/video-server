import { Request, Response } from "express";
import { getRepository } from "typeorm";
import { Playlist } from "../../models/playlist";

const Delete = async (req: Request, res: Response): Promise<void> => {
  const id = +req.params.id;
  const playlist_repo = getRepository(Playlist);
  const playlist = await playlist_repo.findOne(id);
  if (!playlist) {
    res.status(404).send("Not found");
    return;
  }
  await playlist_repo.remove(playlist);
  res.status(201);
};

export default Delete;
