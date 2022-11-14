type SessionProps = {
      user: {
            username: string
            avatar: string
            role: number
            is_connected: boolean | null
            liked_songs: string[]
      } | null
}