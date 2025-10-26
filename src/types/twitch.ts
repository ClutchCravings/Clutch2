export interface TwitchUser {
  id: string;
  login: string;
  display_name: string;
  profile_image_url: string;
}

export interface TwitchStream {
  id: string;
  user_id: string;
  user_login: string;
  user_name: string;
  game_id: string;
  game_name: string;
  title: string;
  viewer_count: number;
  started_at: string;
  thumbnail_url: string;
}

export interface StreamSlot {
  id: number;
  stream: TwitchStream | null;
  isActive: boolean;
  isMuted: boolean;
  volume: number;
  chatVisible: boolean;
}

export interface AuthState {
  isAuthenticated: boolean;
  user: TwitchUser | null;
  accessToken: string | null;
}