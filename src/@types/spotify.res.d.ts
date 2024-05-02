export interface SpotifyProfileResponse {
  country: string;
  display_name: string;
  email: string;
  explicit_content: {
    filter_enabled: boolean;
    filter_locked: boolean;
  };
  external_urls: {
    spotify: string;
  };
  followers: SpotifyFollowers;
  href: string;
  id: string;
  images: SpotifyImage[];
  product: string;
  type: string;
  uri: string;
}

export interface SpotifyFollowers {
  href: string;
  total: number;
}

export interface SpotifyTopArtistsResponse
  extends SpotifyPagingObject<SpotifyArtist> {}

export interface SpotifyPlaylistResponse
  extends SpotifyPagingObject<SpotifyPlaylist> {}

export interface SpotifyTopTracksResponse
  extends SpotifyPagingObject<SpotifyTrack> {}

export interface SpotifyRecentlyPlayedResponse
  extends SpotifyPagingObject<SpotifyRecentlyPlayedItem> {
  cursors: {
    after: string;
    before: string;
  };
}

export interface SpotifyPagingObject<T> {
  href: string;
  items: T[];
  limit: number;
  next: string | null;
  offset: number;
  previous: string | null;
  total: number;
}

export interface SpotifyImage {
  url: string;
  height: number | null;
  width: number | null;
}

export interface SpotifyArtist {
  external_urls: {
    spotify: string;
  };
  followers: SpotifyFollowers;
  genres: string[];
  href: string;
  id: string;
  images: SpotifyImage[];
  name: string;
  popularity: number;
  type: string;
  uri: string;
}

export interface SpotifyPlaylist {
  collaborative: boolean;
  description: string | null;
  external_urls: {
    spotify: string;
  };
  href: string;
  id: string;
  images: SpotifyImage[];
  name: string;
  owner: SpotifyOwner;
  public: boolean | null;
  snapshot_id: string;
  tracks: {
    href: string;
    total: number;
  } | null;
  type: string;
  uri: string;
}

export interface SpotifyOwner {
  external_urls: {
    spotify: string;
  };
  followers: SpotifyFollowers | undefined;
  href: string;
  id: string;
  type: string;
  uri: string;
  display_name: string;
}

export interface SpotifyTrack {
  album: SpotifyAlbum;
  artists: SpotifyArtist[];
  available_markets: string[];
  disc_number: number;
  duration_ms: number;
  explicit: boolean;
  external_ids: {
    isrc: string;
    ean: string;
    upc: string;
  };
  external_urls: {
    spotify: string;
  };
  href: string;
  id: string;
  is_playable: boolean;
  linked_from: { [key: string]: string };
  restrictions: {
    reason: string;
  };
  name: string;
  popularity: number;
  preview_url: string | null;
  track_number: number;
  type: string;
  uri: string;
  is_local: boolean;
}

export interface SpotifyAlbum {
  album_type: string;
  total_tracks: number;
  available_markets: string[];
  external_urls: {
    spotify: string;
  };
  href: string;
  id: string;
  images: SpotifyImage[];
  name: string;
  release_date: string;
  release_date_precision: string;
  restrictions: {
    reason: string;
  };
  type: string;
  uri: string;
}

export interface SpotifyRecentlyPlayedItem {
  track: SpotifyTrack;
  played_at: string;
  context: {
    type: string;
    href: string;
    external_urls: {
      spotify: string;
    };
    uri: string;
  };
}
