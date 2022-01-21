export type Child = {
  age: number;
};

export type Room = {
  adultsCount: number;
  children: Child[];
};

export type GuestRooms = {
  rooms: Room[];
};

export type GuestRoomsValues = {
  updateAdultsCount: () => void;
  updateChild: () => void;

  addChild: () => void;
  removeChild: () => void;

  addRoom: () => void;
  removeRoom: () => void;

  guestRooms: GuestRooms;
};