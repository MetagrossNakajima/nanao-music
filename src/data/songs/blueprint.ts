import type { Song } from "../types"

export const blueprint = {
  id: "blueprint",
  title: "ブループリント",
  audio: {
    appleMusic: {
      previewUrl:
        "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview211/v4/2b/bd/e6/2bbde632-ef61-eb7c-5309-eaa682d39136/mzaf_16011506754346722153.plus.aac.p.m4a",
      trackUrl:
        "https://music.apple.com/jp/album/%E3%83%96%E3%83%AB%E3%83%BC%E3%83%97%E3%83%AA%E3%83%B3%E3%83%88/1754289186?i=1754289187&uo=4",
    },
  },
} satisfies Song
