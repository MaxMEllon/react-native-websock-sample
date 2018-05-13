// @flow

export type Room = {
  _id: number,
  name: string,
  key: number,
  time: string,
  leatestMessage: string,
}

export type Rooms = {
  rooms: Array<Room>,
}

export type User = {
  _id: number,
  name: string,
  avatar?: string,
}

export type Message = {
  _id: number,
  text: string,
  createdAt: number,
  user: User,
}
