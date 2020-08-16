export interface Context {
  accessToken: string | null;
}

export interface Success {
  action: string;
  success: boolean;
  message: string;
}

export interface LoginPayload {
  accessToken: string;
}

export interface User {
  id: string;
  name: string | null;
  email: string | null;
  password: string | null;
  createdAt: string | null;
  updatedAt: string | null;
}
