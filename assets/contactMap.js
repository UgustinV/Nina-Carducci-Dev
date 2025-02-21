const map = L.map('map').setView([44.8465743,-0.6065365], 12);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

const popup = L.popup([44.8465743,-0.6065365], {
    content: `<ul>
		<li><h1>Informations de contact</h1></li>
		<li><span>Téléphone :</span><p>+33 5 56 67 78 89</p></li>
		<li><span>Adresse :</span><p><a href="https://maps.app.goo.gl/i1vVoqTwm5fPUwQU8" target="_blank">68 Av. Alsace Lorraine, 332000 Bordeaux</a></p></li>
		<li><h1>Horaires :</h1></li>
		<ul>
			<li><span>Lundi-samedi :</span><p>08:00-18:00</p></li>
			<li><span>Dimanche :</span><p>Fermé</p></li>
		</ul>
	</ul>`,
    className: 'popup'
});

L.marker([44.8465743,-0.6065365])
    .addTo(map)
    .bindPopup(popup)