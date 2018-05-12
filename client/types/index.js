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
