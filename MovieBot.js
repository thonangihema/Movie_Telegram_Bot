const request = require('request');
var TelegramBot = require('node-telegram-bot-api');
const token = '5501224606:AAEVTAPdcVUm3SKz7uQu5rDfXOIiGkrDBZw';
const bot = new TelegramBot(token, {polling: true});
bot.onText(/\/start/, (msg) => {

  bot.sendMessage(msg.chat.id, "Welcome Enter The Name of Movie You Want To Make Skit, You Will Get Details Like Below ");
 
      
  });
  
    bot.on('message', function(mg){

    request('http://www.omdbapi.com/?t='+mg.text+'&apikey=6de31b7c', function(error, response,body) 
    {
      if(JSON.parse(body).Response=="True"){
        bot.sendMessage(mg.chat.id,"You choosen "+JSON.parse(body).Title+" like skit ALL THE BEST prepare Well");
        bot.sendMessage(mg.chat.id, "Title "+JSON.parse(body).Title)
        bot.sendMessage(mg.chat.id, "Release Date "+JSON.parse(body).Released)
        bot.sendMessage(mg.chat.id, "Actors "+JSON.parse(body).Actors)
        bot.sendMessage(mg.chat.id, "Rating "+JSON.parse(body).Ratings[0].Value)
        
      

      }
      else{
        bot.sendMessage(mg.chat.id, "Movie not found")
    }
  });
})
  


