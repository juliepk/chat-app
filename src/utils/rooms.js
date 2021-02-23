const rooms = [];

const addRoom = (room) => {
	// Clean the data
	room = room.trim().toLowerCase();

	// Check for existing userl
	const existingRoomIndex = rooms.findIndex((r) => r.name === room);

	// Validate username
	if (existingRoomIndex >= 0) {
		return rooms[existingRoomIndex].count++;
	}

	// Store user
	const newRoom = {
		count: 1,
		name: room,
	};
	rooms.push(newRoom);
	return { newRoom };
};

const removeRoom = (room) => {
	// Check for existing userl
	const existingRoomIndex = rooms.findIndex((r) => r.name === room);

	if (existingRoomIndex !== -1 && rooms[existingRoomIndex].count - 1 === 0) {
		return rooms.splice(existingRoomIndex, 1);
	}

	rooms[existingRoomIndex].count--;
};

const getRooms = () => {
	return rooms;
};

module.exports = {
	addRoom,
	removeRoom,
	getRooms,
};
