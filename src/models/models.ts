export interface AdminUserModels {
  avatar?: string | undefined;
  email?: string;
  id?: number;
  login_time?: string;
  nickname: string;
  password?: string;
  reg_time?: string;
  state: number;
  username: string;
}

export interface MemberUserModels {
  id: number;
  avatar: string | undefined;
  nickname: string;
  reg_time: string;
  login_time: string;
  state: number;
}
