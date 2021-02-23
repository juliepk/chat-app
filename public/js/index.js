const socket = io();

const $selectRoom = document.querySelector('#selectRoom');

const roomsTemplate = document.querySelector('#rooms-template').innerHTML;

socket.on('rooms', (rooms) => {
	console.log(rooms);
	const html = Mustache.render(roomsTemplate, {
		rooms,
	});
	$selectRoom.innerHTML = html;
});
