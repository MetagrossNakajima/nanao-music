import { songById, songs } from "."

export function resolveSong(songId: string) {
  const song = songById.get(songId)

  if (!song) {
    throw new Error(`Unknown songId: ${songId}`)
  }

  return song
}

export function resolveCallGuide(songId: string) {
  const song = resolveSong(songId)

  if (song.callGuide) {
    return song.callGuide
  }

  throw new Error(`Unknown call guide: ${songId}`)
}

export function listCallGuideIds() {
  return songs.filter((song) => song.callGuide).map((song) => song.id)
}
