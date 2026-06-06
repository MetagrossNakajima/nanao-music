export type Song = {
  id: string
  title: string
  audio?: SongAudio
  videos?: SongVideo[]
  callGuide?: CallGuide
}

export type SongAudio = {
  appleMusic?: {
    previewUrl?: string
    trackUrl?: string
  }
  spotify?: {
    trackUrl?: string
  }
}

export type SongVideo = {
  provider: "youtube" | "niconico"
  providerVideoId: string
  type: "musicVideo" | "live" | "lyricVideo" | "dance" | "short" | "other"
  isOfficial?: boolean
}

export type CallGuide = {
  sections: CallSection[]
}

export type CallSection = {
  label: string
  items: CallItem[]
}

export type CallItem = {
  text: string
  timing?: string
  kind?: "call" | "clap" | "jump" | "dance" | "note"
}
