export type SongTag = "medley"

export type SongEntry = {
  position: number
  songId: string
  tags: SongTag[]
}

export type EventDate = {
  year: number
  month: number
  day: number
}

export type Setlist = {
  id: number
  date: EventDate
  area: string
  title: string
  venue: string
  songs: SongEntry[]
}
