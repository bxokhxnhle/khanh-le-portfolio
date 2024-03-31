'use client'

import querystring from "querystring"
import { useState, useEffect } from "react"

const client_id = process.env.SPOTIFY_CLIENT_ID
const client_secret = process.env.SPOTIFY_CLIENT_SECRET
// const refresh_token = 'AQDnYEeog1vWgxDYjmYRZDjynLNMoUwAK8RXKbjQUZEBLh7FdB33Kl9F7tjFPP5XAUAQvmtfziCzRVRk4kap7wO8Rl81D59sxePPrOJHio-cF6k8dcrDixdr8o4tNwwZxsU'
const refresh_token = process.env.NOW_PLAYING_SPOTIFY_REFRESH_TOKEN
// const basic = 'N2ViNDJmNWUyYmFhNDViN2E0YjdlN2FlMDA5MGM0MGQ6YWY1ZGQ2ZmI5OWM4NGNiNTkxYzRmNzkwMmI3MTQxMzI='
const basic = process.env.SPOTIFY_BASE64_STRING

const NOW_PLAYING_ENDPOINT = 'https://api.spotify.com/v1/me/player/currently-playing'
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

export const getNowPlaying = async () => {
  try {
    const { access_token } = await getAccessToken(client_id, client_secret, refresh_token)

    const response = await fetch(NOW_PLAYING_ENDPOINT, {
      headers: {
        Authorization: `Bearer ${access_token}`,
      },
    })

    if (response.status > 400) {
      throw new Error('Unable to Fetch Song')
    } else if (response.status === 204) {
      throw new Error('Currently Not Playing')
    }

    const song = await response.json()
    const artist = song.item.artists.map((_artist: any) => _artist.name).join(', ')
    const isPlaying = song.is_playing
    const songUrl = song.item.external_urls.spotify
    const title = song.item.name

    return {
      artist,
      isPlaying,
      songUrl,
      title
    }
  } catch (error: any) {
    console.error('Error fetching currently playing song: ', error)
    return error.message.toString()
  }
}

const NowPlaying = () => {
  const [nowPlaying, setNowPlaying] = useState<any| null>(null)

  useEffect(() => {
    const fetchNowPlaying = async () => {
      const data = await getNowPlaying()
      setNowPlaying(data)
    }

    setInterval(() => {
      fetchNowPlaying()
    }, 1000)
  }, [])

  let playerState = ''
  let title = ''
  let artist = ''

  if (nowPlaying != null && nowPlaying.title) {
    nowPlaying.isPlaying ? playerState = 'PLAY' : playerState = 'PAUSE'
    title = nowPlaying.title
    artist = nowPlaying.artist
  } else if (nowPlaying === 'Currently Not Playing') {
    playerState = 'OFFLINE'
    title = 'User is'
    artist = 'currently offline'
  } else {
    title = 'Failed to'
    artist = 'fetch song'
  }

  return (
    <div>
      <p className="text-sm on-repeat">Currently listening to</p>
      <div className="text-sm font-bold songs">
        {playerState === 'PLAY' || playerState === 'PAUSE' ? <a href={nowPlaying.songUrl}>{title} by {artist}</a> : <p>{title} {artist}</p>}
      </div>
    </div>
  )
}

export default NowPlaying