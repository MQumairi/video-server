import axios from "axios";
import ITag from "../models/tag";
import IVideoMeta from "../models/video_meta";

export const base_url = "http://localhost:5000/api";

axios.defaults.baseURL = base_url;

export const Directory = {
  get: async (dir_path: string) => axios.get(`directories/${dir_path}`),
};

export const Video = {
  // /:filepath/metadata
  get: async (vid_path: string) => axios.get(`videos/${vid_path}/metadata`),
};

export const Tag = {
  get: async () => axios.get(`tags`),
  post: async (video_meta: IVideoMeta) => axios.post(`tags`, video_meta),
  add_video: async (updated_tag: ITag) => axios.put(`tags/${updated_tag.id}/video/add`, updated_tag),
};
