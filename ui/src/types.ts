export interface APIOptions {
  hidden?: boolean;
  method?: 'GET' | 'POST';
  params?: object;
  query?: object;
  action?: string;
}

export interface RootState {
  response: {} | Pages;

  session: Session;

  messages: Array<Message>;
}

export interface Pages {
  messages?: Array<Message>;
}

interface Message {
  id: string;
  name: string;
  message: string;
  color: string;
  userId: string;
}

interface Session {
  user: {} | User;
}

interface User {
  id: string;
  name: string;
  color: string;
  hideMessages: boolean;
}
