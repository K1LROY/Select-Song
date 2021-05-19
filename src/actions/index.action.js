import { SONG_SELECTED } from "../constants";

export const selectSong = (song) => ({
  type: SONG_SELECTED,
  payload: song,
});
