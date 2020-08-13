const Discord = require('discord.js');
const client = new Discord.Client();
const express = require('express');
const app = express();
var bodyParser = require('body-parser');
require('dotenv').config();

var port = process.env.PORT || 8080;

client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);
});

client.login(process.env.DISCORD_TOKEN);


app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.post('/out', function (req, res) {
    let outaHere = client.guilds.cache.get('289942941693247488').channels.cache.get('743324094874910783');

    let channel = client.guilds.cache.get('289942941693247488').members.cache.get(req.body.you).voice.channel;
    let listOfMembers = [...channel.members.keys()];

    listOfMembers.splice(listOfMembers.indexOf(req.body.you), 1);
    let random = listOfMembers[Math.floor(Math.random() * listOfMembers.length)];

    client.guilds.cache.get('289942941693247488').members.cache.get(random).voice.setChannel(outaHere);

    res.send('Aight Bet');
});

app.listen(port);

