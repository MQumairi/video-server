import { Request, Response } from "express";
import { getRepository } from "typeorm";
import { Playlist } from "../../models/playlist";
import Shuffler from "../../models/shuffler";

const GUI_edit = async (req: Request, res: Response): Promise<void> => {
    const id = +req.params.id;
    let playlist = await getRepository(Playlist).findOne(id);
    if (playlist === undefined) {
      playlist = new Playlist();
      playlist.id = id;
      playlist.name = "Unfound";
      playlist.videos = [];
    }
    let random_vid_url = "/playlists/" + id + (await new Shuffler().playlist_shuffle(id));
    res.render("playlists/playlist_edit.ejs", { PLAYLIST: playlist, RANDOM_VID: random_vid_url });
};

export default GUI_edit;