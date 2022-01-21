import { GuestRooms } from '../types/';

const ROOM_SEPARATOR = '|';
const ADULT_CHILDREN_SEPARATOR = ':';
const CHILDREN_SEPARATOR = ',';

function parseChildren(children: string) {
  return children
    .split(CHILDREN_SEPARATOR)
    .map((age: string) => ({ age: Number(age) }));
}

function parseGuestRooms(guestRooms: GuestRooms, room: string) {
  const [adultsCount, childrenString] = room.split(ADULT_CHILDREN_SEPARATOR);
  const children = childrenString ? parseChildren(childrenString) : [];

  guestRooms.rooms.push({
    adultsCount: Number(adultsCount),
    children
  });

  return guestRooms;
}

// This is a transformer, transforming the string format into a GuestRooms data structure object.
export function toGuestRooms(guestRooms: string) {
  const rooms = guestRooms.split(ROOM_SEPARATOR);
  const guestRoomsInitialValue = { rooms: [] }
  
  return rooms.reduce<GuestRooms>(parseGuestRooms, guestRoomsInitialValue)
}
