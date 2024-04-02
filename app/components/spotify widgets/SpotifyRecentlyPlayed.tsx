'use client'

import querystring from "querystring"
import { useState, useEffect } from "react"

const client_id = process.env.SPOTIFY_CLIENT_ID
const client_secret = process.env.SPOTIFY_CLIENT_SECRET
const refresh_token = process.env.RECENTLY_PLAYED_SPOTIFY_REFRESH_TOKEN
const basic = process.env.SPOTIFY_BASE64_STRING

const RECENTLY_PLAYED_ENDPOINT = 'https://api.spotify.com/v1/me/player/recently-played'
const TOKEN_ENDPOINT = 'https://accounts.spotify.com/api/token'

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

export const getRecentlyPlayed = async () => {
  try {
    const { access_token } = await getAccessToken(client_id, client_secret, refresh_token)

    const response = await fetch(RECENTLY_PLAYED_ENDPOINT, {
      headers: {
        Authorization: `Bearer ${access_token}`,
      },
    })

    if (response.status > 400) {
      throw new Error('Unable to Fetch Song')
    }

    const song = await response.json();
    const artist = song.items[0].track.artists.map((_artist: any) => _artist.name).join(', ')
    const songUrl = song.items[0].track.external_urls.spotify;
    const title = song.items[0].track.name;

    return {
      artist,
      songUrl,
      title
    }
  } catch (error: any) {
    console.error('Error fetching recently played song: ', error)
    return error.message.toString()
  }
};

export default function RecentlyPlayed() {
  const [recentlyPlayed, setRecentlyPlayed] = useState<any| null>(null)

  useEffect(() => {
    const fetchRecentlyPlayed = async () => {
      const data = await getRecentlyPlayed();
      setRecentlyPlayed(data)
    };

    setInterval(() => {
      fetchRecentlyPlayed()
    }, 1000)
  }, [])

  let title = ''
  let artist = ''

  if (recentlyPlayed != null && recentlyPlayed.title) {
    title = recentlyPlayed.title
    artist = recentlyPlayed.artist
  } else {
    title = 'Failed to'
    artist = 'fetch song'
  }

  return (
    <div>
      <p className="text-sm on-repeat">Recently listened to</p>
      <div className="text-sm font-bold songs">
        {recentlyPlayed != null ? <a href={recentlyPlayed.songUrl}>{title} by {artist}</a> : <p>{title} {artist}</p>}
      </div>
    </div>
  )
}