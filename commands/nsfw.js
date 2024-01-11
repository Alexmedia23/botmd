const { amd,sck,sck1,hentai, getBuffer ,sendGImages , botpic,lang , getAdmin, tlang, prefix } = require('../lib')
const Config = require('../config')

async function sendGImage(msg , query = 'Hot Girls HD Pics' , caption = Config.caption )
{
  try {     
     let zerogroup = (await sck.findOne({	id: msg.chat,	})) || (await new sck({ id: msg.chat,	}).save());
     if (zerogroup.nsfw === "false") return await msg.reply("NSFW is not active.");
     return await sendGImages(msg ,query, caption = caption , addbody  = "NSFW" )     
 } catch (e) { return console.log(e)  }
}

//==================================================================================
amd({ pattern: "cosplay", desc: "NSFW cosplay.", category: "nsfw",},async(Jovia, msg,text) => {return await sendGImages(msg , text+"Cosplay Porn HD PICS" ,`*----「 Cosplay 」----*`, addbody  = "NSFW")});
//---------------------------------------------------------------------------
amd({pattern: "ecchi",desc: "NSFW ecchi.",category: "nsfw", },async(Jovia, msg , text ) => { return await sendGImages(msg , text+"Ecchi Porn HD PICS" , `*----「 Ecchi 」----*`, addbody  = "NSFW" )});
//---------------------------------------------------------------------------
amd({pattern: "hentai", category: "nsfw",desc: "NSFW hentai." },async(Jovia, msg,text) => { return await sendGImages(msg , text+"Hentai Porn HD PICS" ,`*----「 Hentai 」----*`, addbody  = "NSFW",)});
//-------------------------------------------------------------------------
amd({pattern: "hentaivid",desc: "hentai video.", category: "nsfw",},async(Jovia, msg) => {let h = await hentai(); let thmb =await getBuffer( await botpic() );let buttonMessage = {video: { url: h[0].video_1 },caption: `*_Now I can see your future._* \n${Config.caption}` ,contextInfo: { externalAdReply: {title: lang().title,	body: `NSFW`,thumbnail: thmb,	mediaType: 2,mediaUrl: ``, sourceUrl: `https://wa.me/923184474176?text=_hey,+Joshua+Bro+big+fan+of+Your+work_`,	},},};return await Jovia.client.sendMessage(msg.chat, buttonMessage, {quoted: msg});});        
//---------------------------------------------------------------------------
amd({pattern: "ranal",category: "nsfw",desc: "NSFW ranal."},async(Jovia, msg,text) => {await sendGImages(msg , text+"Anal Porn HD PICS" ,`*----「 Real Anal 」----*`, addbody  = "NSFW",)});
//---------------------------------------------------------------------------
amd({pattern: "rpussy",category: "nsfw",desc: "NSFW rpussy."},async(Jovia, msg,text) => { await sendGImages(msg ,text+ "Pussy Porn HD PICS" ,`*----「 Real PUSSY 」----*`, addbody  = "NSFW")});
//---------------------------------------------------------------------------
amd({pattern: "solo",category: "nsfw",desc: "NSFW solo." },async(Jovia, msg,text) => {await sendGImages(msg ,text+ "Solo Porn HD PICS" , `*----「 Solo 」----*`, addbody  = "NSFW",)});
//---------------------------------------------------------------------------
amd({pattern: "vixen",category: "nsfw",desc: "NSFW vixen."},async(Jovia, msg,text) => { await sendGImages(msg ,text+ "Vixen Porn HD PICS" ,`*----「 Vixen 」----*`, addbody  = "NSFW",)});