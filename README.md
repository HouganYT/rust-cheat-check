# Rust Cheat Check API

Light-weight node js wrapper for [private RustCC API](https://rustcheatcheck.ru "API").

## Simple usage
``You can also provide apiUrl in constructor options to provide different url``

```javascript
const API = require('rust-cheat-check');

const api = new API({
	apiKey: 'YOUR_API_KEY'
});

api.getUserData('POTENTIAL_STEAM_ID')
	.then(v => console.log(v))
	.catch(err => console.log(err))
```

## Response
Example of good response

```json
{
	"success": true,
	"data": {
		"steamid": "76561111111111111", // Requested steamID
		"rcc_checks": 2, // Check's amount
		"last_check": [ // Last checks
			{
				"moderSteamID": "76561111111111112",
				"serverName": "Rust Server #1",
				"time": 1550493540 // timestamp дата
			},
			{
				"moderSteamID": "76561111111111113",
				"serverName": "Rust Server #2",
				"time": 1550434169
			}
		],
		"last_ip": [ // User ips on checks
			"192.168.0.1"
		],
		"last_nick": "Хонор", // Last user name
		"bans": [ // Ban list
			{
				"banID": 53485,
				"reason": "Использование читов",
				"serverName": "#FUNRUST | MINI-GAMES",
				"OVHserverID": 86,
				"banDate": 1551019213,
				"unbanDate": 0 // если 0 - бан навсегда
			},
			{
				"banID": 34603,
				"reason": "читы",
				"serverName": "Grand Rust #3 Max 2",
				"OVHserverID": 23,
				"banDate": 1524159497,
				"unbanDate": 1524159498
			},
			{
				"banID": 34596,
				"reason": "Cheat(ENOT)",
				"serverName": "FURY RUST #1 MAX 2",
				"OVHserverID": 179,
				"banDate": 1524156950,
				"unbanDate": 1524156951
			},
			{
				"banID": 53486,
				"reason": "читер",
				"serverName": "TRAVELER RUST",
				"OVHserverID": 1417,
				"banDate": 1551019449,
				"unbanDate": 1551019450
			},
			{
				"banID": 53484,
				"reason": "cheat(ren)",
				"serverName": "Ultimate #7 [Barren]",
				"OVHserverID": 1601,
				"banDate": 1551019172,
				"unbanDate": 1551019173
			},
			{
				"banID": 1,
				"reason": "chear ",
				"serverName": "MAGIC RUST #1",
				"OVHserverID": 1655,
				"banDate": 1524240500,
				"unbanDate": 1524240501
			}
		],
		"proofs": [ // List of proofs for ban
			"https:\/\/i.imgur.com\/3oJ90me.png"
		]
	}
}
```

# Warnings

For some reason, the API will return a "user not found" error, even if in fact he was blocked (and this displays the panel), but there was no validation
