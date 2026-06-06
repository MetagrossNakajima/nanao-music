import { resolveSong } from "../songs/resolver"

export function resolveCallPagePath(songId: string) {
  const song = resolveSong(songId)

  if (song.callGuide) {
    return `/calls/${songId}/`
  }

  return undefined
}
