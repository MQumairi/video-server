import { Router, Request, Response } from "express";
import Stream from "../handlers/videos/stream";
import Metadata from "../handlers/videos/metadata";
import Rate from "../handlers/videos/rate";

const video_controller = Router();

video_controller.get("/:filepath/metadata", async (req: Request, res: Response) => {
  await Metadata(req, res);
});

video_controller.get("/:filepath", async (req: Request, res: Response) => {
  await Stream(req, res);
});

video_controller.put("/:filepath/rate", async (req: Request, res: Response) => {
  await Rate(req, res);
});

export default video_controller;
