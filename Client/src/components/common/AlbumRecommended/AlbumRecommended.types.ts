export interface Track {
  id: number;
  name: string;
  imageUrl: string;
}

export interface AlbumRecommendedProps {
  albumTitle: string;
  artistName: string;
  albumCoverUrl: string;
  tracks: Track[];
  playIconUrl: string;
}
