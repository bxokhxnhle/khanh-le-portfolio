'use client'

import querystring from "querystring"
import { useState, useEffect } from "react"

const client_id = process.env.SPOTIFY_CLIENT_ID
const client_secret = process.env.SPOTIFY_CLIENT_SECRET
const refresh_token = process.env.ON_REPEAT_SPOTIFY_REFRESH_TOKEN
const basic = process.env.SPOTIFY_BASE64_STRING

const ON_REPEAT_ENDPOINT = 'https://api.spotify.com/v1/playlists/37i9dQZF1Epx8aW9o8k1wA/tracks'
const TOKEN_ENDPOINT = 'https://accounts.spotify.com/api/token'

const getRandom = () => {
  return Math.floor(Math.random() * 30)
}

export const getAccessToken = async(client_id: any, client_secret: any, refresh_token: any) => {
  const response = await fetch(TOKEN_ENDPOINT, {
    method: 'POST',
    headers: {
      Authorization: `Basic ${basic}`,
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: querystring.stringify({
      grant_type: 'refresh_token',
      refresh_token,
    }),
  })

  return response.json()
}

export const getOnRepeat = async () => {
  try {
    const { access_token } = await getAccessToken(client_id, client_secret, refresh_token)

    const response = await fetch(ON_REPEAT_ENDPOINT, {
      headers: {
        Authorization: `Bearer ${access_token}`,
      },
    })

    if (response.status > 400) {
      throw new Error('Unable to Fetch Song')
    }

    const song = await response.json()
    const index = getRandom()
    const artist = song.items[index].track.artists.map((_artist: any) => _artist.name).join(', ')
    const songUrl = song.items[index].track.external_urls.spotify
    const title = song.items[index].track.name

    return {
      artist,
      songUrl,
      title
    }
  } catch (error: any) {
    console.error('Error fetching on repeat song: ', error)
    return error.message.toString()
  }
}

const OnRepeat = () => {
  const [onRepeat, setOnRepeat] = useState<any| null>(null)

  useEffect(() => {
    const fetchOnRepeat = async () => {
      const data = await getOnRepeat()
      setOnRepeat(data)
    }

    fetchOnRepeat()
  }, [])

  let title = ''
  let artist = ''

  if (onRepeat != null && onRepeat.title) {
    title = onRepeat.title
    artist = onRepeat.artist
  } else {
    title = 'Failed to'
    artist = 'fetch song'
  }

  return (
    <div>
      <p className="text-sm on-repeat">On repeat</p>
      <div className="text-sm font-bold songs">
        {onRepeat != null ? <a href={onRepeat.songUrl}>{title} by {artist}</a> : <p>{title} {artist}</p>}
      </div>
    </div>
  )
}

export default OnRepeat