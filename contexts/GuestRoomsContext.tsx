import { createContext, FC, useState } from 'react';
import { GuestRooms, GuestRoomsValues } from '../types/';
import { toGuestRooms } from '../transformers/toGuestRooms';

export const GuestRoomsContext = createContext(null);

// Data structure
const GUEST_ROOMS_DEFAULT = {
  rooms: [
    {
      adultsCount: 2,
      children: [],
    },
  ],
};

type GuestRoomsProviderPropTypes = {
  guestRoomsString?: string;
};

// React Provider Component to be placed at root
export const GuestRoomsProvider: FC<GuestRoomsProviderPropTypes> = ({
  children,
  guestRoomsString,
}) => {
  const defaultGuestRooms = guestRoomsString
    ? toGuestRooms(guestRoomsString)
    : GUEST_ROOMS_DEFAULT;

  const [guestRooms, setGuestRooms] = useState<GuestRooms>(defaultGuestRooms);

  function updateAdultsCount(roomIndex: number, count: number) {
    guestRooms.rooms[roomIndex] = {
      ...guestRooms.rooms[roomIndex],
      adultsCount: count,
    };
    setGuestRooms({
      rooms: guestRooms.rooms,
    });
  }

  function updateChild(roomIndex, childIndex, childAge) {
    const children = guestRooms.rooms[roomIndex].children;

    children[childIndex] = {
      age: childAge,
    };

    guestRooms.rooms[roomIndex] = {
      ...guestRooms.rooms[roomIndex],
      children,
    };

    setGuestRooms({
      rooms: guestRooms.rooms,
    });
  }

  function addChild(roomIndex: number) {
    const children = guestRooms.rooms[roomIndex].children;

    children.push({
      ...children,
      age: 8,
    });

    setGuestRooms({
      rooms: guestRooms.rooms,
    });
  }

  function removeChild(roomIndex: number, childIndex: number = -1) {
    const children = guestRooms.rooms[roomIndex].children;

    children.splice(childIndex, 1);

    setGuestRooms({
      rooms: guestRooms.rooms,
    });
  }

  function addRoom() {
    setGuestRooms({
      rooms: [
        ...guestRooms.rooms,
        {
          adultsCount: 2,
          children: [],
        },
      ],
    });
  }

  function removeRoom(roomIndex: number) {
    guestRooms.rooms.splice(roomIndex, 1);

    setGuestRooms({
      rooms: guestRooms.rooms,
    });
  }

  // make all these functions available to child Components
  const providerValue = {
    updateAdultsCount,
    updateChild,
    addChild,
    removeChild,
    addRoom,
    removeRoom,
    guestRooms,
  };

  return (
    <GuestRoomsContext.Provider value={providerValue}>
      {children}
    </GuestRoomsContext.Provider>
  );
};
