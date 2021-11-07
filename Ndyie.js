//Mau Reupload Wa Gue




//Sc No Enc Sans
//Jangan Ganti Nomer Gue
//Jangan Ganti Nama Gue



// Buy Sc Om
// wa.me/6283818744065
// Jan Jual Sc
// Buy Sc Om
// wa.me/6283818744065
// Jan Jual Sc
// Buy Sc Om
// wa.me/6283818744065
// Jan Jual Sc
// Buy Sc Om
// wa.me/6283818744065
// Jan Jual Sc
// Buy Sc Om
// wa.me/6283818744065
// Jan Jual Sc
// Buy Sc Om
// wa.me/6283818744065
// Jan Jual Sc
// Buy Sc Om
// wa.me/6283818744065
// Jan Jual Sc
// Buy Sc Om
// wa.me/6283818744065
// Jan Jual Sc
// Buy Sc Om
// wa.me/6283818744065
// Jan Jual Sc
// Buy Sc Om
// wa.me/6283818744065
// Jan Jual Sc
// Buy Sc Om
// wa.me/6283818744065
// Jan Jual Sc
// Buy Sc Om
// wa.me/6283818744065
// Jan Jual Sc
// Buy Sc Om
// wa.me/6283818744065
// Jan Jual Sc
// Buy Sc Om
// wa.me/6283818744065
// Jan Jual Sc
// Buy Sc Om
// wa.me/6283818744065
// Jan Jual Sc
// Buy Sc Om
// wa.me/6283818744065
// Jan Jual Sc
// Buy Sc Om
// wa.me/6283818744065
// Jan Jual Sc
// Buy Sc Om
// wa.me/6283818744065
// Jan Jual Sc
// Buy Sc Om
// wa.me/6283818744065
// Jan Jual Sc
// Buy Sc Om
// wa.me/6283818744065
// Jan Jual Sc
// Buy Sc Om
// wa.me/6283818744065
// Jan Jual Sc
// Buy Sc Om
// wa.me/6283818744065
// Jan Jual Sc
// Buy Sc Om
// wa.me/6283818744065
// Jan Jual Sc
// Buy Sc Om
// wa.me/6283818744065
// Jan Jual Sc
// Buy Sc Om
// wa.me/6283818744065
// Jan Jual Sc
// Buy Sc Om
// wa.me/6283818744065
// Jan Jual Sc
// Buy Sc Om
// wa.me/6283818744065
// Jan Jual Sc
// Buy Sc Om
// wa.me/6283818744065
// Jan Jual Sc
// Buy Sc Om
// wa.me/6283818744065
// Jan Jual Sc
// Buy Sc Om
// wa.me/6283818744065
// Jan Jual Sc
const { fetchJosn, fetchText } = require('./lib/fetcher')
const { color, bgcolor } = require('./lib/color')
const { wait, getBuffer, h2k, generateMessageID, getGroupAdmins, getRandom, start, info, success, close } = require('./lib/functions')

const
	{
		WAConnection,
		MessageType,
		Presence,
		MessageOptions,
		Mimetype,
		WALocationMessage,
		WA_MESSAGE_STUB_TYPES,
		WA_DEFAULT_EPHEMERAL,
		ReconnectMode,
		ProxyAgent,
		GroupSettingChange,
		waChatKey,
		mentionedJid,
		processTime,
	} = require("@adiwajshing/baileys")
const fs = require("fs")
const axios = require('axios')
const speed = require("performance-now")
const util = require('util')
const crypto = require('crypto')
const request = require('request')
const { exec, spawn } = require('child_process')
const fetch = require('node-fetch')
const moment = require('moment-timezone')
const ffmpeg = require('fluent-ffmpeg')
const { removeBackgroundFromImageFile } = require('remove.bg')

//━━━━━━━━━━━━━━━[ DATABASE ]━━━━━━━━━━━━━━━━━//

let _antilink = JSON.parse(fs.readFileSync('./database/antilink.json'))
let _antivirtex = JSON.parse(fs.readFileSync('./database/antivirtex.json'))
let setting = JSON.parse(fs.readFileSync('./setting.json'))
let pendaftar = JSON.parse(fs.readFileSync('./database/user.json'))

//━━━━━━━━━━━━━━━[ SETTING ]━━━━━━━━━━━━━━━━━//

owner = setting.OwnerNumber
botname = setting.BotName
zerokey = setting.ZeroKey
ownername = setting.OwnerName

//━━━━━━━━━━━━━━━[ MODUL EXPORTS ]━━━━━━━━━━━━━━━━━//

module.exports = Ndyie = async (Ndyie, mek, _welkom) => {
	try {
        if (!mek.hasNewMessage) return
        mek = mek.messages.all()[0]
		if (!mek.message) return
		if (mek.key && mek.key.remoteJid == 'status@broadcast') return
		global.blocked
        	mek.message = (Object.keys(mek.message)[0] === 'ephemeralMessage') ? mek.message.ephemeralMessage.message : mek.message
        const content = JSON.stringify(mek.message)
		const from = mek.key.remoteJid
		const { text, extendedText, contact, contactsArray, groupInviteMessage, listMessage, buttonsMessage, location, liveLocation, image, video, sticker, document, audio, product, quotedMsg } = MessageType
		const time = moment.tz('Asia/Jakarta').format('DD/MM HH:mm:ss')
        const type = Object.keys(mek.message)[0]        
        const cmd = (type === 'conversation' && mek.message.conversation) ? mek.message.conversation : (type == 'imageMessage') && mek.message.imageMessage.caption ? mek.message.imageMessage.caption : (type == 'videoMessage') && mek.message.videoMessage.caption ? mek.message.videoMessage.caption : (type == 'extendedTextMessage') && mek.message.extendedTextMessage.text ? mek.message.extendedTextMessage.text : ''.slice(1).trim().split(/ +/).shift().toLowerCase()
        const prefix = /^[°•π÷×¶∆£¢€¥®™=|~!#$%^&.?/\\©^z+*@,;]/.test(cmd) ? cmd.match(/^[°•π÷×¶∆£¢€¥®™=|~!#$%^&.?/\\©^z+*,;]/gi) : '-'          	
        body = (type === 'conversation' && mek.message.conversation.startsWith(prefix)) ? mek.message.conversation : (type == 'imageMessage') && mek.message[type].caption.startsWith(prefix) ? mek.message[type].caption : (type == 'videoMessage') && mek.message[type].caption.startsWith(prefix) ? mek.message[type].caption : (type == 'extendedTextMessage') && mek.message[type].text.startsWith(prefix) ? mek.message[type].text : (type == 'listResponseMessage') && mek.message[type].singleSelectReply.selectedRowId ? mek.message[type].singleSelectReply.selectedRowId : (type == 'buttonsResponseMessage') && mek.message[type].selectedButtonId ? mek.message[type].selectedButtonId : ''
		budy = (type === 'conversation') ? mek.message.conversation : (type === 'extendedTextMessage') ? mek.message.extendedTextMessage.text : ''
		const command = body.slice(1).trim().split(/ +/).shift().toLowerCase()		
		const args = body.trim().split(/ +/).slice(1)
		const isCmd = body.startsWith(prefix)
		const q = args.join(' ')
		const Verived = "0@s.whatsapp.net"
		const txt = mek.message.conversation
		const botNumber = Ndyie.user.jid
		const ownerNumber = [`${owner}@s.whatsapp.net`, `6283818744065@s.whatsapp.net`]
		const isGroup = from.endsWith('@g.us')
		let sender = isGroup ? mek.participant : mek.key.remoteJid
		const totalchat = await Ndyie.chats.all()
		const groupMetadata = isGroup ? await Ndyie.groupMetadata(from) : ''
		const groupName = isGroup ? groupMetadata.subject : ''
		const groupId = isGroup ? groupMetadata.jid : ''
		const groupMembers = isGroup ? groupMetadata.participants : ''
		const groupDesc = isGroup ? groupMetadata.desc : ''
		const groupOwner = isGroup ? groupMetadata.owner : ''
		const groupAdmins = isGroup ? getGroupAdmins(groupMembers) : ''
		const isBotGroupAdmins = groupAdmins.includes(botNumber) || false
		const isGroupAdmins = groupAdmins.includes(sender) || false
		const conts = mek.key.fromMe ? Ndyie.user.jid : Ndyie.contacts[sender] || { notify: jid.replace(/@.+/, '') }
        const pushname = mek.key.fromMe ? Ndyie.user.name : conts.notify || conts.vname || conts.name || '-'
        
		const isAntiLink = isGroup ? _antilink.includes(from) : false
		const isWelkom = isGroup ? _welkom.includes(from) : false
		const isAntiVirtex = isGroup ? _antivirtex.includes(from) : false
		const isOwner = ownerNumber.includes(sender)
		const isUser = pendaftar.includes(sender)
		const isMybot = isOwner || mek.key.fromMe
		
//━━━━━━━━━━━━━━━[ CONNECTION 1 ]━━━━━━━━━━━━━━━━━//

		mess = {
			wait: 'Sabar Lagi Proses...!',
			success: 'Done Jangan Lupa Subscribe Ndyie BOWO GAMING',
			error: {
				stick: 'Gagal Convert Gambar To Sticker...Coba Lagi !',
				Iv: 'Linknya Error !'
			},
			only: {
				admin: 'Kusus Admin !',
				group: 'Khusus Group !'
			}
		}
		faketeks = 'Assasin-Bot'
		const isUrl = (url) => {
        return url.match(new RegExp(/https?:\/\/(www\.)?[-a-zA-Z0-9@:%.+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%+.~#?&/=]*)/, 'gi'))
        }
        const reply = (teks) => {
            Ndyie.sendMessage(from, teks, text, {quoted:mek})
        }
        const sendMess = (hehe, teks) => {
            Ndyie.sendMessage(hehe, teks, text)
        }
        const mentions = (teks, memberr, id) => {
            (id == null || id == undefined || id == false) ? Ndyie.sendMessage(from, teks.trim(), extendedText, { contextInfo: { "mentionedJid": memberr } }) : Ndyie.sendMessage(from, teks.trim(), extendedText, { quoted: ftrol, contextInfo: { "mentionedJid": memberr } })
        }
        const zero = fs.readFileSync ('./Ndyie/Ndyi.jpg')
        const costum = (pesan, tipe, target, target2) => {
			Ndyie.sendMessage(from, pesan, tipe, { quoted: { key: { fromMe: false, participant: `${target}`, ...(from ? { remoteJid: from } : {}) }, message: { conversation: `${target2}` } } })
		}
		const runtime = function (seconds) {
  seconds = Number(seconds);
  var d = Math.floor(seconds / (3600 * 24));
  var h = Math.floor((seconds % (3600 * 24)) / 3600);
  var m = Math.floor((seconds % 3600) / 60);
  var s = Math.floor(seconds % 60);
  var dDisplay = d > 0 ? d + (d == 1 ? " hari, " : " Hari, ") : "";
  var hDisplay = h > 0 ? h + (h == 1 ? " jam, " : " Jam, ") : "";
  var mDisplay = m > 0 ? m + (m == 1 ? " menit, " : " Menit, ") : "";
  var sDisplay = s > 0 ? s + (s == 1 ? " detik" : " Detik") : "";
  return dDisplay + hDisplay + mDisplay + sDisplay;
};
var ase = new Date();
                        var jamss = ase.getHours();
                         switch(jamss){
                case 0: jamss = "Jangan gadang kak"; break;
                case 1: jamss = "Jangan gadang kak"; break;
                case 2: jamss = "Jangan gadang kak"; break;
                case 3: jamss = "Jangan gadang kak"; break;
                case 4: jamss = "Jangan lupa sholat Subuh kak"; break;
                case 5: jamss = "Selamat pagi"; break;
                case 6: jamss = "Selamat pagi"; break;
                case 7: jamss = "Selamat pagi"; break;
                case 8: jamss = "Selamat pagi"; break;
                case 9: jamss = "Selamat pagi"; break;
                case 10: jamss = "Selamat pagi"; break;
                case 11: jamss = "Selamat siang"; break;
                case 12: jamss = "Jangan lupa sholat Zuhur kak"; break;
                case 13: jamss = "Selamat siang"; break;
                case 14: jamss = "Selamat sore"; break;
                case 15: jamss = "Jangan lupa sholat Ashar kak"; break;
                case 16: jamss = "Selamat sore"; break;
                case 17: jamss = "Selamat sore"; break;
                case 18: jamss = "Selamat malam"; break;
                case 19: jamss = "Jangan lupa sholat Isya kak"; break;
                case 20: jamss = "Selamat malam"; break;
                case 21: jamss = "Selamat malam"; break;
                case 22: jamss = "Selamat malam"; break;
                case 23: jamss = "Selamat malam"; break;
            }
            var tampilUcapan = "" + jamss;
        
//━━━━━━━━━━━━━━━[ BUTTON ]━━━━━━━━━━━━━━━━━//

        const sendButton = async (from, context, fortext, but, mek) => {
            buttonMessages = {
                contentText: context,
                footerText: fortext,
                buttons: but,
                headerType: 1
            }
            Ndyie.sendMessage(from, buttonMessages, buttonsMessage, {
                quoted: ftrol
            })
        }
        const sendButImage = async (from, context, fortext, img, but, mek) => {
            jadinya = await Ndyie.prepareMessage(from, img, image)
            buttonMessagesI = {
                imageMessage: jadinya.message.imageMessage,
                contentText: context,
                footerText: fortext,
                buttons: but,
                headerType: 4
            }
            Ndyie.sendMessage(from, buttonMessagesI, buttonsMessage, {
                quoted: ftrol,
            })
        }
        async function sendButLocation(id, text1, desc1, gam1, but = [], options = {}) {
            const buttonMessages = { locationMessage: { jpegThumbnail: gam1 }, contentText: text1, footerText: desc1, buttons: but, headerType: 6 }
            return Ndyie.sendMessage(id, buttonMessages, MessageType.buttonsMessage, options)
        }

//━━━━━━━━━━━━━━━[ FAKE FAKEAN ]━━━━━━━━━━━━━━━━━//
        const fakestatus = (teks) => {
            Ndyie.sendMessage(from, teks, text, {
                quoted: {
                    key: {
                        fromMe: false,
                        participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {})
                    },
                    message: {
                        "imageMessage": {
                            "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc",
                            "mimetype": "image/jpeg",
                            "caption": faketeks,
                            "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=",
                            "fileLength": "28777",
                            "height": 1080,
                            "width": 1079,
                            "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=",
                            "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=",
                            "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69",
                            "mediaKeyTimestamp": "1610993486",
                            "jpegThumbnail": fs.readFileSync('./Ndyie/Ndy.jpg'),
                            "scansSidecar": "1W0XhfaAcDwc7xh1R8lca6Qg/1bB4naFCSngM2LKO2NoP5RI7K+zLw=="
                        }
                    }
                }
            })
        }
        Ndyie.chatRead(from, "read")
        const fakegroup = (teks) => {
            Ndyie.sendMessage(from, teks, text, {
                quoted: {
                    key: {
                        fromMe: false,
                        participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "6289523258649-1604595598@g.us" } : {})
                    },
                    message: {
                        "imageMessage": {
                            "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc",
                            "mimetype": "image/jpeg",
                            "caption": faketeks,
                            "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=",
                            "fileLength": "28777",
                            "height": 1080,
                            "width": 1079,
                            "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=",
                            "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=",
                            "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69",
                            "mediaKeyTimestamp": "1610993486",
                            "jpegThumbnail": fs.readFileSync('./Ndyie/Ndy.jpg'),
                            "scansSidecar": "1W0XhfaAcDwc7xh1R8lca6Qg/1bB4naFCSngM2LKO2NoP5RI7K+zLw=="
                        }
                    }
                }
            })
        }
        const ftrol = {
	key : {
                          participant : '0@s.whatsapp.net'
                        },
       message: {
                    orderMessage: {
                            itemCount : 123,
                            status: 1,
                            surface : 1,
                            message: `SUBSCRIBE Ndyie Botz`, 
                            orderTitle: `SUBSCRIBE Ndyie Botz`,
                            thumbnail: zero, //Gambarnye
                            sellerJid: '0@s.whatsapp.net' 
                          }
                        }
                      }
        
//━━━━━━━━━━━━━━━[ CONNECTION 2 ]━━━━━━━━━━━━━━━━━//

        const sendStickerFromUrl = async(to, url) => {
                var names = Date.now() / 10000;
                var download = function (uri, filename, callback) {
                    request.head(uri, function (err, res, body) {
                        request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
                    });
                };
                download(url, './stik' + names + '.png', async function () {
                    console.log('selesai');
                    let filess = './stik' + names + '.png'
                    let asw = './stik' + names + '.webp'
                    exec(`ffmpeg -i ${filess} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${asw}`, (err) => {
                        let media = fs.readFileSync(asw)
                        Ndyie.sendMessage(to, media, MessageType.sticker,{quoted:mek})
                        fs.unlinkSync(filess)
                        fs.unlinkSync(asw)
                    });
                });
            }
        const sendMediaURL = async(to, url, text="", mids=[]) =>{
                if(mids.length > 0){
                    text = normalizeMention(to, text, mids)
                }
                const fn = Date.now() / 10000;
                const filename = fn.toString()
                let mime = ""
                var download = function (uri, filename, callback) {
                    request.head(uri, function (err, res, body) {
                        mime = res.headers['content-type']
                        request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
                    });
                };
                download(url, filename, async function () {
                    console.log('done');
                    let media = fs.readFileSync(filename)
                    let type = mime.split("/")[0]+"Message"
                    if(mime === "image/gif"){
                        type = MessageType.video
                        mime = Mimetype.gif
                    }
                    if(mime.split("/")[0] === "audio"){
                        mime = Mimetype.mp4Audio
                    }
                    Ndyie.sendMessage(to, media, type, { quoted: ftrol, mimetype: mime, caption: text,contextInfo: {"mentionedJid": mids}})
                    
                    fs.unlinkSync(filename)
                });
            }   
            if (budy.includes("https://chat.whatsapp.com/")) {
if (!isGroup) return
if (!isAntiLink) return
if (isGroupAdmins) return
var kic = `${sender.split("@")[0]}@s.whatsapp.net`
reply(` *「 GROUP LINK DETECTOR 」*\nKamu mengirimkan link grup chat, maaf kamu di kick dari grup :(`)
setTimeout(() => {
Ndyie.groupRemove(from, [kic]).catch((e) => { reply(`BOT HARUS JADI ADMIN`) })
}, 0)
}

		if (budy.length > 3500) {
if (!isGroup) return
if (!isAntiVirtex) return
if (isGroupAdmins) return
reply('Tandai telah dibaca\n'.repeat(300))
reply(`「 *VIRTEX DETECTOR* 」\n\nKamu mengirimkan virtex, maaf kamu di kick dari group :(`)
console.log(color('[KICK]', 'red'), color('Received a virus text!', 'yellow'))
Ndyie.groupRemove(from, [sender])
}     
if (isCmd && !isUser){
          pendaftar.push(sender)
          fs.writeFileSync('./database/user.json', JSON.stringify(pendaftar, null, 2))
        }

//━━━━━━━━━━━━━━━[ CONNECTION 3 ]━━━━━━━━━━━━━━━━━//

		colors = ['red', 'white', 'black', 'blue', 'yellow', 'green']
		const isMedia = (type === 'imageMessage' || type === 'videoMessage')
		const isQuotedImage = type === 'extendedTextMessage' && content.includes('imageMessage')
		const isQuotedVideo = type === 'extendedTextMessage' && content.includes('videoMessage')
		const isQuotedAudio = type === 'extendedTextMessage' && content.includes('audioMessage')
		const isQuotedSticker = type === 'extendedTextMessage' && content.includes('stickerMessage')
      	if (!isGroup && isCmd) console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;32mEXEC\x1b[1;37m]', time, color(command), 'from', color(sender.split('@')[0]), 'args :', color(args.length))
      	//if (!isGroup && !isCmd) console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;31mTEXT\x1b[1;37m]', time, color('Message'), 'from', color(sender.split('@')[0]), 'args :', color(args.length))
     	if (isCmd && isGroup) console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;32mEXEC\x1b[1;37m]', time, color(command), 'from', color(sender.split('@')[0]), 'in', color(groupName), 'args :', color(args.length))
      	//if (!isCmd && isGroup) console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;31mTEXT\x1b[1;37m]', time, color('Message'), 'from', color(sender.split('@')[0]), 'in', color(groupName), 'args :', color(args.length))

//━━━━━━━━━━━━━━━[ MENU ]━━━━━━━━━━━━━━━━━//

switch (command) {
	case 'allmenu':
	gambar = fs.readFileSync('./Ndyie/Ndy.jpg')
                   timestamp = speed();
				latensi = speed() - timestamp
              menunya = 
`Hi ${pushname}, ${tampilUcapan}✨

━━━━━ 𝗔𝗟𝗟 𝗠𝗘𝗡𝗨 ━━━━━

╭─❒ 「 Bot Info 」 ❒
├ Nama Bot : ${botname}
├ Nama Owner : ${ownername}
├ Prefix : Multi Prefix
├ Nomor Owner : ${owner.split('@')[0]}
├ Runtime : ${runtime(process.uptime())}
├ Language : Javascript & Nodejs
├ Totan Pengguna : ${pendaftar.length}
├ Speed : ${latensi.toFixed(4)} second
└❏
╭─❒ 「 User Info 」 ❒
├ Status : ${isOwner ? 'Owner' : 'User'}
├ Nama User : ${pushname}
├ Nomor User : ${sender.split('@')[0]}
└❏

┏━⬣「 Group Menu 」⬣
┃ ⬡ ${prefix}antilink
┃ ⬡ ${prefix}welcome
┃ ⬡ ${prefix}antivirtex
┃ ⬡ ${prefix}adavirtex
┃ ⬡ ${prefix}group
┃ ⬡ ${prefix}linkgrup
┃ ⬡ ${prefix}promote
┃ ⬡ ${prefix}demote
┃ ⬡ ${prefix}add
┃ ⬡ ${prefix}kick
┃ ⬡ ${prefix}setpp
┃ ⬡ ${prefix}setdesc
┃ ⬡ ${prefix}setname
┃ ⬡ ${prefix}hidetag
┃⬡ ${prefix}grupbokep
┗━━━━━━━━⬣

┏━⬣「 Sticker Menu 」⬣
┃ ⬡ ${prefix}attp
┃ ⬡ ${prefix}toimg
┃ ⬡ ${prefix}sticker
┃ ⬡ ${prefix}tomp3
┃ ⬡ ${prefix}tovideo
┃⬡ ${prefix}love
┗━━━━━━━━⬣
	
┏━⬣「 Owner Menu 」⬣
┃ ⬡ ${prefix}owner
┃ ⬡ ${prefix}sewabot
┃ ⬡ ${prefix}bc
┃ ⬡ ${prefix}report
┃⬡ ${prefix}aoa
┃⬡ ${prefix}yt
┗━━━━━━━━⬣

┏━━⬣ Gc Anime ⬣
┃⬡ ${prefix}gcloli
┃⬡ ${prefix}gcwibunime
┃⬡ ${prefix}animenover
┃⬡ ${prefix}animelov
┃⬡ ${prefix}animejapan
┗━━━━━━━━⬣

┏━━⬣ War Menu ⬣
┃⬡ ${prefix}virtex1
┃⬡ ${prefix}virtex2
┃⬡ ${prefix}virtex3
┃⬡ ${prefix}virtex4
┃⬡ ${prefix}virtex5
┃⬡ ${prefix}virtex6
┃⬡ ${prefix}virtex7
┃⬡ ${prefix}virtex8
┃⬡ ${prefix}virtex9
┃⬡ ${prefix}virtex10
┗━━━━━━━━⬣

┏━━⬣ Jb Menu ⬣
┃⬡ ${prefix}rdp
┃⬡ ${prefix}polig
┃⬡ ${prefix}suntiktiktok
┃⬡ ${prefix}logo
┃⬡ ${prefix}harting
┃⬡ ${prefix}jasher
┃⬡ ${prefix}ownertag
┃⬡ ${prefix}buysc
┃⬡ ${prefix}sewa
┃⬡ ${prefix}bot
┗━━━━━━━━⬣`
teks =
`Jan Jual Sc Ini Ngetod`
but = [
          { buttonId: `${prefix}infobot`, buttonText: { displayText: 'INFO' }, type: 1 },
          { buttonId: `${prefix}owner`, buttonText: { displayText: 'OWNER' }, type: 1 }
        ]
        sendButLocation(from, menunya, teks, gambar, but)
break
//━━━━━━━━━━━━━━━[ Simple Menu ]━━━━━━━━━━━━━━━━━//
case 'menu':
timestamp = speed();
latensi = speed() - timestamp
teks = `Hai Kak ${pushname}
┏━  「 Menu 」
┃    ┃
┃ 1 ┃ ${prefix}grupmenu
┃    ┃
┃ 2 ┃ ${prefix}stikermenu
┃    ┃
┃ 3 ┃ ${prefix}ownermenu
┃    ┃
┃ 4 ┃ ${prefix}gcanime
┃    ┃
┃ 5 ┃ ${prefix}warmenu
┃    ┃
┃ 4 ┃ ${prefix}jbmenu
┗━━━━━━━━⬣`
but = [
          { buttonId: `${prefix}allmenu`, buttonText: { displayText: 'AllMenu' }, type: 1 },
          { buttonId: `${prefix}sewabot`, buttonText: { displayText: 'SewaBot' }, type: 1 }
        ]
        sendButton(from, teks, '©Created : Ndyie Botz', but, mek)
break

case 'grupmenu':
timestamp = speed();
latensi = speed() - timestamp
teks = `Hai Kak ${pushname}
┏━⬣「 Group Menu 」⬣
┃ ⬡ ${prefix}antilink
┃ ⬡ ${prefix}welcome
┃ ⬡ ${prefix}antivirtex
┃ ⬡ ${prefix}adavirtex
┃ ⬡ ${prefix}group
┃ ⬡ ${prefix}linkgrup
┃ ⬡ ${prefix}promote
┃ ⬡ ${prefix}demote
┃ ⬡ ${prefix}add
┃ ⬡ ${prefix}kick
┃ ⬡ ${prefix}setpp
┃ ⬡ ${prefix}setdesc
┃ ⬡ ${prefix}setname
┃ ⬡ ${prefix}hidetag
┃⬡ ${prefix}grupbokep
┗━━━━━━━━⬣`
but = [
          { buttonId: `${prefix}allmenu`, buttonText: { displayText: 'AllMenu' }, type: 1 },
          { buttonId: `${prefix}sewabot`, buttonText: { displayText: 'SewaBot' }, type: 1 }
        ]
        sendButton(from, teks, '©Created : Ndyie Botz', but, mek)
break

case 'stikermenu':
timestamp = speed();
latensi = speed() - timestamp
teks = `Hai Kak ${pushname}
┏━⬣「 Sticker Menu 」⬣
┃ ⬡ ${prefix}attp
┃ ⬡ ${prefix}toimg
┃ ⬡ ${prefix}sticker
┃ ⬡ ${prefix}tomp3
┃ ⬡ ${prefix}tovideo
┃⬡ ${prefix}love
┗━━━━━━━━⬣`
but = [
          { buttonId: `${prefix}allmenu`, buttonText: { displayText: 'AllMenu' }, type: 1 },
          { buttonId: `${prefix}sewabot`, buttonText: { displayText: 'SewaBot' }, type: 1 }
        ]
        sendButton(from, teks, '©Created : Ndyie Botz', but, mek)
break

case 'ownermenu':
timestamp = speed();
latensi = speed() - timestamp
teks = `Hai Kak ${pushname}
┏━⬣「 Owner Menu 」⬣
┃ ⬡ ${prefix}owner
┃ ⬡ ${prefix}sewabot
┃ ⬡ ${prefix}bc
┃ ⬡ ${prefix}report
┃⬡ ${prefix}aoa
┃⬡ ${prefix}yt
┗━━━━━━━━⬣`
but = [
          { buttonId: `${prefix}allmenu`, buttonText: { displayText: 'AllMenu' }, type: 1 },
          { buttonId: `${prefix}sewabot`, buttonText: { displayText: 'SewaBot' }, type: 1 }
        ]
        sendButton(from, teks, '©Created : Ndyie Botz', but, mek)
break

case 'gcanime':
timestamp = speed();
latensi = speed() - timestamp
teks = `Hai Kak ${pushname}
┏━━⬣ Gc Anime ⬣
┃⬡ ${prefix}gcloli
┃⬡ ${prefix}gcwibunime
┃⬡ ${prefix}animenover
┃⬡ ${prefix}animelov
┃⬡ ${prefix}animejapan
┗━━━━━━━━⬣`
but = [
          { buttonId: `${prefix}allmenu`, buttonText: { displayText: 'AllMenu' }, type: 1 },
          { buttonId: `${prefix}sewabot`, buttonText: { displayText: 'SewaBot' }, type: 1 }
        ]
        sendButton(from, teks, '©Created : Ndyie Botz', but, mek)
break

case 'warmenu':
timestamp = speed();
latensi = speed() - timestamp
teks = `Hai Kak ${pushname}
┏━━⬣ War Menu ⬣
┃⬡ ${prefix}virtex1
┃⬡ ${prefix}virtex2
┃⬡ ${prefix}virtex3
┃⬡ ${prefix}virtex4
┃⬡ ${prefix}virtex5
┃⬡ ${prefix}virtex6
┃⬡ ${prefix}virtex7
┃⬡ ${prefix}virtex8
┃⬡ ${prefix}virtex9
┃⬡ ${prefix}virtex10
┗━━━━━━━━⬣`
but = [
          { buttonId: `${prefix}allmenu`, buttonText: { displayText: 'AllMenu' }, type: 1 },
          { buttonId: `${prefix}sewabot`, buttonText: { displayText: 'SewaBot' }, type: 1 }
        ]
        sendButton(from, teks, '©Created : Ndyie Botz', but, mek)
break

case 'jbmenu':
timestamp = speed();
latensi = speed() - timestamp
teks = `Hai Kak ${pushname}
┏━━⬣ Jb Menu ⬣
┃⬡ ${prefix}rdp
┃⬡ ${prefix}polig
┃⬡ ${prefix}suntiktiktok
┃⬡ ${prefix}logo
┃⬡ ${prefix}harting
┃⬡ ${prefix}jasher
┃⬡ ${prefix}ownertag
┃⬡ ${prefix}buysc
┃⬡ ${prefix}sewa
┃⬡ ${prefix}bot
┗━━━━━━━━⬣`
but = [
          { buttonId: `${prefix}allmenu`, buttonText: { displayText: 'AllMenu' }, type: 1 },
          { buttonId: `${prefix}sewabot`, buttonText: { displayText: 'SewaBot' }, type: 1 }
        ]
        sendButton(from, teks, '©Created : Ndyie Botz', but, mek)
break
//━━━━━━━━━━━━━━━[ Y ]━━━━━━━━━━━━━━━━━//
case 'infobot':
timestamp = speed();
				latensi = speed() - timestamp
                  	teks =
`┏━➤ *INFO BOT* 
*┃┃* Creator Bot : Ndyie Botz
*┃┃* Nama Owner : ${ownername}
*┃┃* Nama Bot : ${botname}
*┃┃* Prefix : Multi Prefix
*┃┃* Total Pengguna : ${pendaftar.length}
*┃┃* Runtime : ${runtime(process.uptime())}
*┃┃* Speed : ${latensi.toFixed(4)} second
*┃┃* Language : Javascript & Nodejs
*┗━━━━━━━━*`
                  but = [
          { buttonId: `${prefix}owner`, buttonText: { displayText: 'OWNER' }, type: 1 },
          { buttonId: `${prefix}sc`, buttonText: { displayText: 'SCRIPT' }, type: 1 }
        ]
        sendButton(from, teks, '©Created : Ndyie Botz', but, mek)
break
	
//━━━━━━━━━━━━━━━[ FITUR GROUP ]━━━━━━━━━━━━━━━━━//

case 'welcome':
if (!isGroup) return reply(mess.only.group)
if (!isGroupAdmins) return reply(mess.only.admin)
if (!isBotGroupAdmins) return reply("Bot Bukan Admin :)")
but = [
{ buttonId: '!welcomeon', buttonText: { displayText: 'On' }, type: 1 },
{ buttonId: '!welcomeoff', buttonText: { displayText: 'Off' }, type: 1 }
]
sendButton(from, "Silahkan pilih untuk welcome group", faketeks, but, mek)
break
case 'welcomeon':
if (!isGroup) return reply(mess.only.group)
if (!isGroupAdmins) return reply(mess.only.admin)
if (!isBotGroupAdmins) return reply("Bot Bukan Admin :)")
if (isWelkom) return reply('welcome sudah aktif')
_welkom.push(from)
fs.writeFileSync('./database/welcome.json', JSON.stringify(_welkom))
reply(`\`\`\`✓Sukses mengaktifkan fitur welcome di group\`\`\` *${groupMetadata.subject}*`)
break
case 'welcomeoff':
if (!isGroup) return reply(mess.only.group)
if (!isGroupAdmins) return reply(mess.only.admin)
if (!isBotGroupAdmins) return reply("Bot Bukan Admin :)")
if (!isWelkom) return reply('welcome sudah off sebelumnya')
_welkom.splice(from, 1)
fs.writeFileSync('./database/welcome.json', JSON.stringify(_welkom))
reply(`\`\`\`✓Sukses menonaktifkan fitur welcome di group\`\`\` *${groupMetadata.subject}*`)
break
case 'antilink' :
if (!isGroup) return reply(mess.only.group)
if (!isGroupAdmins) return reply(mess.only.admin)
if (!isBotGroupAdmins) return reply("Bot Bukan Admin :)")
but = [
{ buttonId: '!antilinkon', buttonText: { displayText: 'On' }, type: 1 },
{ buttonId: '!antilinkoff', buttonText: { displayText: 'Off' }, type: 1 }
]
sendButton(from, "Silahkan pilih untuk antilink group", faketeks, but, mek)
break
case 'antilinkon' :
if (!isGroup) return reply(mess.only.group)
if (!isGroupAdmins) return reply(mess.only.admin)
if (!isBotGroupAdmins) return reply("Bot Bukan Admin :)")
if (isAntiLink) return reply('anti link sudah on')
_antilink.push(from)
fs.writeFileSync('./database/antilink.json', JSON.stringify(_antilink))
reply(`\`\`\`✓Sukses mengaktifkan fitur anti link di group\`\`\` *${groupMetadata.subject}*`)
break
case 'antilinkoff' :
if (!isGroup) return reply(mess.only.group)
if (!isGroupAdmins) return reply(mess.only.admin)
if (!isBotGroupAdmins) return reply("Bot Bukan Admin :)")
if (!isAntiLink) return reply('anti link sudah off sebelumnya')
_antilink.splice(from, 1)
fs.writeFileSync('./database/antilink.json', JSON.stringify(_antilink))
reply(`\`\`\`✓Sukses menonaktifkan fitur anti link di group\`\`\` *${groupMetadata.subject}*`)
break
case 'antivirtex' :
if (!isGroup) return reply(mess.only.group)
if (!isGroupAdmins) return reply(mess.only.admin)
if (!isBotGroupAdmins) return reply("Bot Bukan Admin :)")
but = [
{ buttonId: '!antivirtexon', buttonText: { displayText: 'On' }, type: 1 },
{ buttonId: '!antivirtexoff', buttonText: { displayText: 'Off' }, type: 1 }
]
sendButton(from, "Silahkan pilih untuk antivirtex group", faketeks, but, mek)
break
case 'antivirtexon' :
if (!isGroup) return reply(mess.only.group)
if (!isGroupAdmins) return reply(mess.only.admin)
if (!isBotGroupAdmins) return reply("Bot Bukan Admin :)")
if (isAntiVirtex) return reply('anti virtex group sudah aktif sebelumnya')
_antivirtex.push(from)
fs.writeFileSync('./database/antivirtex.json', JSON.stringify(_antivirtex))
reply(`\`\`\`Sukses mengaktifkan mode anti virtex di group\`\`\` *${groupMetadata.subject}*`)
break
case 'antivirtexoff' :
if (!isGroup) return reply(mess.only.group)
if (!isGroupAdmins) return reply(mess.only.admin)
if (!isBotGroupAdmins) return reply("Bot Bukan Admin :)")
if (!isAntiVirtex) return reply('Mode anti virtex sudah nonaktif sebelumnya')
_antivirtex.splice(from, 1)
fs.writeFileSync('./database/antivirtex.json', JSON.stringify(_antivirtex))
reply(`\`\`\`✓Sukes menonaktifkan mode anti virtex di group\`\`\` *${groupMetadata.subject}*`)
break
case 'group' :
if (!isGroupAdmins) return reply(mess.only.admin)
if (!isGroup) return reply(mess.only.group)
if (!isBotGroupAdmins) return reply("Bot Bukan Admin :)")
but = [
{ buttonId: '!groupbuka', buttonText: { displayText: 'Buka' }, type: 1 },
{ buttonId: '!geouptutup', buttonText: { displayText: 'Tutup' }, type: 1 }
]
sendButton(from, "Silahkan pilih untuk buka/tutup group", faketeks, but, mek)
break
case 'groupbuka' :
if (!isGroup) return reply(mess.only.group)
if (!isGroupAdmins) return reply(mess.only.admin)
if (!isBotGroupAdmins) return reply("Bot Bukan Admin :)")
reply(`\`\`\`✓Sukses Membuka Group\`\`\` *${groupMetadata.subject}*`)
Ndyie.groupSettingChange(from, GroupSettingChange.messageSend, false)
break
case 'grouptutup' :
if (!isGroup) return reply(mess.only.group)
if (!isGroupAdmins) return reply(mess.only.admin)
if (!isBotGroupAdmins) return reply("Bot Bukan Admin :)")
reply(`\`\`\`✓Sukses Menutup Group\`\`\` *${groupMetadata.subject}*`)
Ndyie.groupSettingChange(from, GroupSettingChange.messageSend, true)
break
case 'linkgrup' :
if (!isGroup) return reply(mess.only.group)
if (!isBotGroupAdmins) return reply("Bot Bukan Admin :)")
linkgc = await Ndyie.groupInviteCode(from)
yeh = `https://chat.whatsapp.com/${linkgc}\n\nlink Group *${groupName}*`
Ndyie.sendMessage(from, yeh, text, { quoted: ftrol })
break
case 'promote' :
if (!isGroup) return reply(mess.only.group)
if (!isGroupAdmins) return reply(mess.only.admin)
if (!isBotGroupAdmins) return reply("Bot Bukan Admin :)")
if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('Tag target yang ingin di jadi admin!')
mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
if (mentioned.length > 1) {
teks = 'Perintah di terima, anda menjdi admin :\n'
for (let _ of mentioned) {
teks += `@${_.split('@')[0]}\n`
}
mentions(teks, mentioned, true)
Ndyie.groupMakeAdmin(from, mentioned)
} else {
mentions(`Perintah di terima, @${mentioned[0].split('@')[0]} Kamu Menjadi Admin Di Group *${groupMetadata.subject}*`, mentioned, true)
Ndyie.groupMakeAdmin(from, mentioned)
}
break
case 'demote' :
if (!isGroup) return reply(mess.only.group)
if (!isGroupAdmins) return reply(mess.only.admin)
if (!isBotGroupAdmins) return reply("Bot Bukan Admin :)")
if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('Tag target yang ingin di tidak jadi admin!')
mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
if (mentioned.length > 1) {
teks = 'Perintah di terima, anda tidak menjadi admin :\n'
for (let _ of mentioned) {
teks += `@${_.split('@')[0]}\n`
}
mentions(teks, mentioned, true)
Ndyie.groupDemoteAdmin(from, mentioned)
} else {
mentions(`Perintah di terima, Menurunkan : @${mentioned[0].split('@')[0]} Menjadi Member`, mentioned, true)
Ndyie.groupDemoteAdmin(from, mentioned)
}
break
case 'add' :
if (!isGroup) return reply(mess.only.group)
if (!isGroupAdmins) return reply(mess.only.admin)
if (!isBotGroupAdmins) return reply("Bot Bukan Admin :)")
if (args.length < 1) return reply('Yang mau di add siapa??')
if (args[0].startsWith('08')) return reply('Gunakan kode negara Gan')
try {
num = `${args[0].replace(/ /g, '')}@s.whatsapp.net`
Ndyie.groupAdd(from, [num])
} catch (e) {
console.log('Error :', e)
reply('Gagal menambahkan target, mungkin karena di private')
}
break
case 'kick' :
if (!isGroup) return reply(mess.only.group)
if (!isGroupAdmins) return reply(mess.only.admin)
if (!isBotGroupAdmins) return reply("Bot Bukan Admin :)")
if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('Tag target yang ingin di tendang!')
mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
if (mentioned.length > 1) {
teks = 'Perintah di terima, mengeluarkan :\n'
for (let _ of mentioned) {
teks += `@${_.split('@')[0]}\n`
}
mentions(teks, mentioned, true)
Ndyie.groupRemove(from, mentioned)
} else {
mentions(`Perintah di terima, mengeluarkan : @${mentioned[0].split('@')[0]}`, mentioned, true)
Ndyie.groupRemove(from, mentioned)
}
break
case 'tagall':
if (!isGroup) return reply(mess.only.group)
if (!isGroupAdmins) return reply(mess.only.admin)
if (!isBotGroupAdmins) return reply(mess.only.Badmin)
members_id = []
teks = (args.length > 1) ? args.join(' ').trim() : ''
teks += '\n\n'
for (let mem of groupMembers) {
teks += `• @${mem.jid.split('@')[0]}\n`
members_id.push(mem.jid)
}
mentions(teks, members_id, true)
break
case 'setname':
if (!isGroup) return reply(mess.only.group)
if (!isGroupAdmins) return reply(mess.only.admin)
if (!isBotGroupAdmins) return reply(mess.only.Badmin)
Ndyie.groupUpdateSubject(from, `${body.slice(9)}`)
Ndyie.sendMessage(from, `\`\`\`✓Sukses Mengganti Nama Group Menjadi\`\`\` *${body.slice(9)}*`, text, { quoted: ftrol })
break
case 'setdesc':
if (!isGroup) return reply(mess.only.group)
if (!isGroupAdmins) return reply(mess.only.admin)
if (!isBotGroupAdmins) return reply(mess.only.Badmin)
Ndyie.groupUpdateDescription(from, `${body.slice(9)}`)
Ndyie.sendMessage(from, `\`\`\`✓Sukses Mengganti Deskripsi Group\`\`\` *${groupMetadata.subject}* Menjadi: *${body.slice(9)}*`, text, { quoted: ftrol })
break
case 'setpp':
if (!isGroup) return reply(mess.only.group)
if (!isGroupAdmins) return reply(mess.only.admin)
if (!isBotGroupAdmins) return reply(mess.only.Badmin)
media = await Ndyie.downloadAndSaveMediaMessage(mek, './database/media_user')
await Ndyie.updateProfilePicture(from, media)
reply(mess.wait)
reply(`\`\`\`✓Sukses Mengganti Profil Group\`\`\` *${groupMetadata.subject}*`)
break
case 'hidetag':
if (!isGroup) return reply(mess.only.group)
if (!isGroupAdmins) return reply(mess.only.admin)
if (!isBotGroupAdmins) return reply(mess.only.Badmin)
var value = body.slice(9)
var group = await Ndyie.groupMetadata(from)
var member = group['participants']
var mem = []
member.map(async adm => {
mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
})
var options = {
text: value,
contextInfo: { mentionedJid: mem },
quoted: ftrol
}
Ndyie.sendMessage(from, options, text)
break

//━━━━━━━━━━━━━━━[ FITUR STICKER ]━━━━━━━━━━━━━━━━━//

case 'attp':
if (args.length == 0) return reply(`Example: ${prefix + command} Hai`)
buffer = await getBuffer(`https://api.xteam.xyz/attp?file&text=${encodeURI(q)}`)
Ndyie.sendMessage(from, buffer, sticker, { quoted: ftrol })
break
case 'sticker':
case 'stiker':
case 's':
if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
const media = await Ndyie.downloadAndSaveMediaMessage(encmedia, './database/media_user')
ran = getRandom('.webp')
await ffmpeg(`./${media}`)
.input(media)
.on('start', function (cmd) {
console.log(`Started : ${cmd}`)
})
.on('error', function (err) {
console.log(`Error : ${err}`)
fs.unlinkSync(media)
reply(mess.error.stick)
})
.on('end', function () {
console.log('Finish')
buffer = fs.readFileSync(ran)
costum(buffer, sticker, Verived, `Jangan Lupa Subscribe Ndyie Botz`)
fs.unlinkSync(media)
fs.unlinkSync(ran)
})
.addOutputOptions([`-vcodec`, `libwebp`, `-vf`, `scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
.toFormat('webp')
.save(ran)
} else if ((isMedia && mek.message.videoMessage.seconds < 11 || isQuotedVideo && mek.message.extendedTextMessage.contextInfo.quotedMessage.videoMessage.seconds < 11) && args.length == 0) {
const encmedia = isQuotedVideo ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
const media = await Ndyie.downloadAndSaveMediaMessage(encmedia, './database/media_user')
ran = getRandom('.webp')
reply(mess.wait)
await ffmpeg(`./${media}`)
.inputFormat(media.split('.')[1])
.on('start', function (cmd) {
console.log(`Started : ${cmd}`)
})
.on('error', function (err) {
console.log(`Error : ${err}`)
fs.unlinkSync(media)
tipe = media.endsWith('.mp4') ? 'video' : 'gif'
reply(`❌ Gagal, pada saat mengkonversi ${tipe} ke stiker. pastikan untuk video yang dikirim tidak lebih dari 9 detik`)
})
.on('end', function () {
console.log('Finish')
costum(fs.readFileSync(ran), sticker, Verived, `~ Nih Dah Jadi Gif Stikernya`)
fs.unlinkSync(media)
fs.unlinkSync(ran)
})
.addOutputOptions([`-vcodec`, `libwebp`, `-vf`, `scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
.toFormat('webp')
.save(ran)
} else if ((isMedia || isQuotedImage) && args[0] == 'nobg') {
const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
const media = await Ndyie.downloadAndSaveMediaMessage(encmedia, './database/media_user')
ranw = getRandom('.webp')
ranp = getRandom('.png')
reply(mess.wait)
keyrmbg = 'bcAvZyjYAjKkp1cmK8ZgQvWH'
await removeBackgroundFromImageFile({ path: media, apiKey: keyrmbg, size: 'auto', type: 'auto', ranp }).then(res => {
fs.unlinkSync(media)
let buffer = Buffer.from(res.base64img, 'base64')
fs.writeFileSync(ranp, buffer, (err) => {
if (err) return reply('Gagal, Terjadi kesalahan, silahkan coba beberapa saat lagi.')
})
exec(`ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${ranw}`, (err) => {
fs.unlinkSync(ranp)
if (err) return reply(mess.error.stick)
Ndyie.sendMessage(from, fs.readFileSync(ranw), sticker, { quoted: ftrol })
fs.unlinkSync(ranw)
})
})
} else {
reply(`Kirim gambar dengan caption ${prefix}sticker atau tag gambar yang sudah dikirim`)
}
break
case 'toimg':
if (!isQuotedSticker) return reply(' reply stickernya gan')
encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
media = await Ndyie.downloadAndSaveMediaMessage(encmedia, './database/media_user')
ran = getRandom('.png')
exec(`ffmpeg -i ${media} ${ran}`, (err) => {
fs.unlinkSync(media)
if (err) return reply(' Gagal, pada saat mengkonversi sticker ke gambar ')
buffer = fs.readFileSync(ran)
costum(buffer, image, Verived, `Jangan Lupa Subscribe Ndyie Botz`)
fs.unlinkSync(ran)
})
break
case 'tomp3':
Ndyie.updatePresence(from, Presence.recording)
if (!isQuotedVideo) return reply('Reply Video nya Tod')
reply(mess.wait)
encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
media = await Ndyie.downloadAndSaveMediaMessage(encmedia, './database/media_user')
ran = getRandom('.mp4')
exec(`ffmpeg -i ${media} ${ran}`, (err) => {
fs.unlinkSync(media)
if (err) return reply('Gagal, pada saat mengkonversi video ke mp3')
bufferlkj = fs.readFileSync(ran)
Ndyie.sendMessage(from, bufferlkj, audio, { mimetype: 'audio/mp4', quoted: ftrol })
fs.unlinkSync(ran)
})
break
case 'tovideo':
if (!isQuotedSticker) return reply('Reply stikernya')
reply(mess.wait)
anumedia = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
anum = await Ndyie.downloadAndSaveMediaMessage(anumedia, './database/media_user')
ran = getRandom('.webp')
exec(`ffmpeg -i ${anum} ${ran}`, (err) => {
fs.unlinkSync(anum)
buffer = fs.readFileSync(ran)
Ndyie.sendMessage(from, buffer, video, { quoted: ftrol, caption: 'Done... Jangan Lupa Subscribe Ndyie Botz' })
fs.unlinkSync(ran)
})
break

//━━━━━━━━━━━━━━━[ FITUR OWNER ]━━━━━━━━━━━━━━━━━//

case 'owner':
let inilist = []
for (let i of ownerNumber) {
const vname = Ndyie.contacts[i] != undefined ? Ndyie.contacts[i].vname || Ndyie.contacts[i].notify : undefined
inilist.push({
"displayName": 'Ndyie',
"vcard": 'BEGIN:VCARD\n'
+ 'VERSION:3.0\n'
+ `FN:${ownername}\n`
+ `ORG: Creator ${ownername} ;\n`
+ `TEL;type=CELL;type=VOICE;waid=${owner}:${owner}\n`
+ 'END:VCARD'.trim()
})
}
hehe = await Ndyie.sendMessage(from, {
"displayName": `${inilist.length} kontak`,
"contacts": inilist 
}, 'contactsArrayMessage', { quoted: ftrol })
button = [
  {buttonId: '.youtube', buttonText: {displayText: 'YOUTUBE'}, type: 1},
  {buttonId: '.instagram', buttonText: {displayText: 'INSTAGRAM'}, type: 1},
  {buttonId: '.tiktok', buttonText: {displayText: 'TIKTOK'}, type: 1}
]
 buttons = {
    contentText: 'Nih Nomer Owner Ku Mau Tau Tentang Apa Ya ?',
    footerText: faketeks,
    buttons: button,
    headerType: 1
}
await Ndyie.sendMessage(from, buttons, MessageType.buttonsMessage, {quoted: ftrol})
break
case 'bc':
if (!isOwner) return reply('LU BUKAN OWNER GBLOK')
if (args.length < 1) return reply('.......')
anu = await Ndyie.chats.all()
if (isMedia && !mek.message.videoMessage || isQuotedImage) {
const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
bc = await Ndyie.downloadMediaMessage(encmedia)
for (let _ of anu) {
Ndyie.sendMessage(_.jid, bc, image, { caption: `[ Izin Broadcast ]\n\n${body.slice(4)}` })
}
reply('Suksess broadcast')
} else {
for (let _ of anu) {
sendMess(_.jid, `[ *BOT BROADCAST* ]\n\n${body.slice(4)}`)
}
reply('Suksess broadcast')
}
break
case 'report':
const pesan = body.slice(8)
if (pesan.length > 300) return pras.sendMessage(from, 'Maaf Teks Terlalu Panjang, Maksimal 300 Teks', text, { quoted: ftrol })
var nomor = mek.participant
const teks1 = `*[REPORT]*\nNomor : @${nomor.split("@s.whatsapp.net")[0]}\nPesan : ${pesan}`
var options = {
text: teks1,
contextInfo: { mentionedJid: [nomor] },
}
Ndyie.sendMessage(`6283818744065@s.whatsapp.net`, options, text, { quoted: ftrol })
reply('Masalah Telah Di Laporkan Ke Owner BOT, Mohon Tunggu Untuk Proses Perbaikan')
break
case 'youtube':
teks =
`Nih Youtube Owner Ku Jangan Lupa Di Subscribe Ya https://youtube.com/Ndyie`
Ndyie.sendMessage(from, teks, text, {quoted: ftrol})
break
case 'instagram':
teks =
`Nih Instagram Owner Ku Jangan Lupa Di Follow Ya https://instagram.com/Zero_YT7`
Ndyie.sendMessage(from, teks, text, {quoted: ftrol})
break
case 'tiktok':
teks =
`Nih Tiktok Owner Ku Jangan Lupa Di Follow Ya https://tiktok.com/@_Ndyie`
Ndyie.sendMessage(from, teks, text, {quoted: ftrol})
break

// SC ORI + CREATOR BASE JANGAN DI HPUS TOD
//HARGAI CREATOR
case 'sourcecode':
case 'script':
case 'sc':
teks = 
`*Bot Ini Mengguna Sourcecode
╭─────────────────────
├ Sc Ori = https://youtu.be/j6uphoSkd20
├ Sc Ini Di Buat Oleh Ndyie Botz
├─────────────────────
https://youtube.com/channel/UC9WgqpVGWW87R3RWjmAxZgg
├─────────────────────
├ Creator Base = Zero Gay
├ Creator Sc = Ndyie Botz
├ Pengguna Sc = ${owner}
└─────────────────────`
Ndyie.sendMessage(from, teks, text, {quoted: ftrol})
break
//━━━━━━━━━━━━━━━[ jb menu ]━━━━━━━━━━━━━━━━━//
case 'sewa':
Ndyie.sendMessage(from, `*[❗] OPEN SEWA BOT By ndyie*
Hai Kak ${pushname} Mau Sewa Bot?
╭───────────────
│ *Harga Sewa MINGGUAN*
│ 1 minggu : Rp 3.000 
│ 2 minggu : Rp 5.000
│ 3 minggu : Rp 10.000
╰────────────────
          │ *Harga Sewa BULANAN*
          │1 Bulan : Rp. 15.000
          │2 Bulan : Rp. 20.000
          ╰───────────────
╭───────────────
│ *NOTE :*
│BOT AKTIF 24 JAM
╰────────────────
*📌 MINAT?*
_CHAT : wa.me/6283818744065_
*════〘 ndyie 〙════*`, MessageType.text, {contextInfo: { forwardingScore: 508, isForwarded: true, externalAdReply:{title: "By ndyie Botz",body:"",previewType:"PHOTO",thumbnail:fs.readFileSync('./ndyie.jpg'),sourceUrl:"OV1876"}}})
break
case 'buysc':
Ndyie.sendMessage(from, `*[❗] Jual Sc Bot*
╭───────────────
│ Fitur 350+
╰────────────────
          │ Free Apikey 
          ╰───────────────
╭───────────────
│ *NOTE :*
│100% Sc Buatan Sendiri 😎
╰────────────────
*📌 MINAT?*
_https://wa.me/p/6253412038066003/62895622598104_
*════〘 ndyie 〙════*`, MessageType.text, {contextInfo: { forwardingScore: 508, isForwarded: true, externalAdReply:{title: "By ndyie Botz",body:"",previewType:"PHOTO",thumbnail:fs.readFileSync('./ndyie.jpg'),sourceUrl:"OV1876"}}})
break
case 'jasher':
Ndyie.sendMessage(from, `*[❗] Jasher Om*
1× Sher = 500
2× Sher = 1000
3× Sher = 1500
4× Sher = 2000
5× Sher = 2500
6× Sher = 3000
7× Sher = 3500
8× Sher = 4000
9× Sher = 4500
10× Sher = 5000
Jan Lupa Order ${pushname}
*════〘 Ndyie 〙════*`, MessageType.text, {contextInfo: { forwardingScore: 508, isForwarded: true, externalAdReply:{title: "By ndyie Botz",body:"",previewType:"PHOTO",thumbnail:fs.readFileSync('./ndyie.jpg'),sourceUrl:"OV1876"}}})
break
case 'harting':
reply (`Jual Gc Jb Ni Bang ${pushname}\nhttps://chat.whatsapp.com/E9WGui8QiA67mVulUQISn7\nKalo Mau Beli Chat Owner`)
break
case 'logo':
Ndyie.sendMessage(from, `*[❗] Jasa Buat Logo*
Logo Vektor 2k
Logo Ft 2k
Logo Ml 3k
Logo Bucin 5k
Bawa Set Sendiri 3k
Logo Sad Boy 1k
Logo Dm 2k
Mau Beli Chat wa.me/${owner}
*════〘 Ndyie 〙════*`, MessageType.text, {contextInfo: { forwardingScore: 508, isForwarded: true, externalAdReply:{title: "By ndyie Botz",body:"",previewType:"PHOTO",thumbnail:fs.readFileSync('./ndyie.jpg'),sourceUrl:"OV1876"}}})
break
case 'suntiktiktok':
Ndyie.sendMessage(from, `*[❗] Jasa Suntik Tiktok Om*
100 View 2k
200 View 4k
300 View 6k
400 View 8k
500 View 10k
600 View 12k
700 View 14k
800 View 16k
900 View 18k
1000 View 20k
Mau Beli Jasa Suntik TikTok
Chat wa.me/${owner}
*════〘 Ndyie 〙════*`, MessageType.text, {contextInfo: { forwardingScore: 508, isForwarded: true, externalAdReply:{title: "By ndyie Botz",body:"",previewType:"PHOTO",thumbnail:fs.readFileSync('./ndyie.jpg'),sourceUrl:"OV1876"}}})
break
case 'polig':
Ndyie.sendMessage(from, `*[❗] Jasa Suntik Ig Om*
200 Polower 5k
400 Polower 10k
600 Polower 15k
800 Polower 20k
1000 Polower 25k
Mau Beli Pol Ig?
Chat wa.me/${owner}
*════〘 Ndyie 〙════*`, MessageType.text, {contextInfo: { forwardingScore: 508, isForwarded: true, externalAdReply:{title: "By ndyie Botz",body:"",previewType:"PHOTO",thumbnail:fs.readFileSync('./ndyie.jpg'),sourceUrl:"OV1876"}}})
break
case 'rdp':
Ndyie.sendMessage(from, `*[❗] Rdp By Faxdil*

*_READY RDP WINDOWS_*

*♂️ RAM 1 CPU 1  : PRICE 10K*

*♂️ RAM 2 CPU 1 : PRICE 15K*

*♂️ RAM 3 CPU 1 : PRICE 25K*

*♂️ RAM 4 CPU 2 : PRICE 35K*

⚡ SERVER ONLY US, AS, EU

💻 WINDOWS 2019, 10, 2016, 2012

🔋EXP 30 HARI

🍁GARANSI 2 MINGGU SETELAH PEMBELIAN

*INFORMATION:*

- SUPPORT BOT ( MIN RAM 2 )

- AWET DAN TAHAN LAMA ( SELAMA TIDAK MELANGGAR TOS/RULES )

- FREE REST API ( https://abdillah-api.herokuapp.com )

*RULES*
- DILARANG DIGUNAKAN UNTUK MINING ( RAWAN BANNED )
- DILARANG MENGGUNAKAN VPN UNTUK LOGIN RDP
- GUNAKAN SEWAJAR NYA AJA ( BIAR AWET )
- JANGAN SAMPAI OVERLOAD ( 99% CPU )

*💵 PAYMENT*
- GOPAY
- OVO
- DANA
- QRIS ALL PAYMENT

📥 BERMINAT ? HUBUNGI :

https://wa.me/628895656884 ( Hafidz )

https://wa.me/6283818744065 (Rendy)

*MATURSUWUN MONGGO DI LARISI*

*════〘 Ndyie 〙════*`, MessageType.text, {contextInfo: { forwardingScore: 508, isForwarded: true, externalAdReply:{title: "By ndyie Botz",body:"",previewType:"PHOTO",thumbnail:fs.readFileSync('./Ndyie/Ndyi.jpg'),sourceUrl:"OV1876"}}})
break
//━━━━━━━━━━━━━━━[ Lupa ]━━━━━━━━━━━━━━━━━//
case 'yt':
reply (`Jan Lupa Subscribe ${pushname}\nhttps://youtube.com/channel/UC9WgqpVGWW87R3RWjmAxZgg`)
break
case 'bot':
reply (`Iya Ada Yang Bisa Aku Bantu ${pushname}\nJika Tidak Ada Ketik #menu`)
break
case 'love':
reply ('Iya Kak Ada Apa Suka Sama Owner Ku?')
Ndyie.sendMessage(from, `@${sender.split("@")[0]}`, text, {contextInfo:{mentionedJid:[sender]}})
break
case 'ownertag':
Ndyie.sendMessage(from, `@${sender.split("@")[0]}`, text, {contextInfo:{mentionedJid:[sender]}})
break
case 'grupbokep':
reply (`Hai Kak ${pushname}\nhttps://chat.whatsapp.com/FHmhV1M88FNJlWfjlH9tqs\nJangan Lupa Join`)
break
case 'aoa':
reply ('Ada Aoa Bang?')
break
//━━━━━━━━━━━━━━━[ War Menu ]━━━━━━━━━━━━━━━━━//
case 'virtex1':
case 'virtex2':
case 'virtex3':
case 'virtex4':
case 'virtex5':
case 'virtex6':
case 'virtex7':
case 'virtex8':
case 'virtex9':
case 'virtex10':
Ndyie.sendMessage(from, `*Mau Pake Fitur Ini?*
Mau Buy Fitur War
Harga Murah Cuma 15k
Sung Aja Wa Yang Buat Sc
wa.me/6283818744065
*════〘 Ndyie 〙════*`, MessageType.text, {contextInfo: { forwardingScore: 508, isForwarded: true, externalAdReply:{title: "By ndyie Botz",body:"",previewType:"PHOTO",thumbnail:fs.readFileSync('./ndyie.jpg'),sourceUrl:"OV1876"}}})
break
//━━━━━━━━━━━━━━━[ Gc Anime By Ndyie Botz ]━━━━━━━━━━━━━━━━━//
case 'gcloli':
reply (`Hai Kak ${pushname}\nhttps://chat.whatsapp.com/Irr1NkyxhsR0FFYJnQxHu9\nJan Lupa Join`)
break
case 'gcwibunime':
reply (`Hai Kak ${pushname}\nhttps://chat.whatsapp.com/BurANyEpAbaHLXvhGbmvGI\nJan Lupa Join`)
break
case 'animenover':
reply (`Hai Kak ${pushname}\nhttps://chat.whatsapp.com/CpmEl6fGTSvCDu45h3OAtJ\nJan Lupa Join`)
break
case 'animelov':
reply (`Hai Kak ${pushname}\nhttps://chat.whatsapp.com/K7jYtK5KrSdANYJo5uUtur\nJan Lupa Join`)
break
case 'animejapan':
reply (`Hai Kak ${pushname}\nhttps://chat.whatsapp.com/KmEaL95J9wgGN5Ac12Eieu\nJan Lupa Join`)
break
case 'adavirtex':
Ndyie.sendMessage(from, `*Lari Ada HeNgKeR*
N̷d̷y̷i̷e̷ G̷a̷m̷t̷e̷n̷z̷
N̷d̷y̷i̷e̷ G̷a̷m̷t̷e̷n̷z̷
N̷d̷y̷i̷e̷ G̷a̷m̷t̷e̷n̷z̷
N̷d̷y̷i̷e̷ G̷a̷m̷t̷e̷n̷z̷
N̷d̷y̷i̷e̷ G̷a̷m̷t̷e̷n̷z̷
N̷d̷y̷i̷e̷ G̷a̷m̷t̷e̷n̷z̷
N̷d̷y̷i̷e̷ G̷a̷m̷t̷e̷n̷z̷
N̷d̷y̷i̷e̷ G̷a̷m̷t̷e̷n̷z̷
N̷d̷y̷i̷e̷ G̷a̷m̷t̷e̷n̷z̷
N̷d̷y̷i̷e̷ G̷a̷m̷t̷e̷n̷z̷
N̷d̷y̷i̷e̷ G̷a̷m̷t̷e̷n̷z̷
N̷d̷y̷i̷e̷ G̷a̷m̷t̷e̷n̷z̷
N̷d̷y̷i̷e̷ G̷a̷m̷t̷e̷n̷z̷
N̷d̷y̷i̷e̷ G̷a̷m̷t̷e̷n̷z̷
N̷d̷y̷i̷e̷ G̷a̷m̷t̷e̷n̷z̷
N̷d̷y̷i̷e̷ G̷a̷m̷t̷e̷n̷z̷
N̷d̷y̷i̷e̷ G̷a̷m̷t̷e̷n̷z̷
N̷d̷y̷i̷e̷ G̷a̷m̷t̷e̷n̷z̷
N̷d̷y̷i̷e̷ G̷a̷m̷t̷e̷n̷z̷
N̷d̷y̷i̷e̷ G̷a̷m̷t̷e̷n̷z̷
N̷d̷y̷i̷e̷ G̷a̷m̷t̷e̷n̷z̷
N̷d̷y̷i̷e̷ G̷a̷m̷t̷e̷n̷z̷
N̷d̷y̷i̷e̷ G̷a̷m̷t̷e̷n̷z̷
N̷d̷y̷i̷e̷ G̷a̷m̷t̷e̷n̷z̷
N̷d̷y̷i̷e̷ G̷a̷m̷t̷e̷n̷z̷
N̷d̷y̷i̷e̷ G̷a̷m̷t̷e̷n̷z̷
N̷d̷y̷i̷e̷ G̷a̷m̷t̷e̷n̷z̷
N̷d̷y̷i̷e̷ G̷a̷m̷t̷e̷n̷z̷
N̷d̷y̷i̷e̷ G̷a̷m̷t̷e̷n̷z̷
N̷d̷y̷i̷e̷ G̷a̷m̷t̷e̷n̷z̷
N̷d̷y̷i̷e̷ G̷a̷m̷t̷e̷n̷z̷
N̷d̷y̷i̷e̷ G̷a̷m̷t̷e̷n̷z̷
N̷d̷y̷i̷e̷ G̷a̷m̷t̷e̷n̷z̷
N̷d̷y̷i̷e̷ G̷a̷m̷t̷e̷n̷z̷
N̷d̷y̷i̷e̷ G̷a̷m̷t̷e̷n̷z̷
N̷d̷y̷i̷e̷ G̷a̷m̷t̷e̷n̷z̷
N̷d̷y̷i̷e̷ G̷a̷m̷t̷e̷n̷z̷
N̷d̷y̷i̷e̷ G̷a̷m̷t̷e̷n̷z̷
N̷d̷y̷i̷e̷ G̷a̷m̷t̷e̷n̷z̷
N̷d̷y̷i̷e̷ G̷a̷m̷t̷e̷n̷z̷
N̷d̷y̷i̷e̷ G̷a̷m̷t̷e̷n̷z̷
N̷d̷y̷i̷e̷ G̷a̷m̷t̷e̷n̷z̷
N̷d̷y̷i̷e̷ G̷a̷m̷t̷e̷n̷z̷
N̷d̷y̷i̷e̷ G̷a̷m̷t̷e̷n̷z̷
N̷d̷y̷i̷e̷ G̷a̷m̷t̷e̷n̷z̷
N̷d̷y̷i̷e̷ G̷a̷m̷t̷e̷n̷z̷
N̷d̷y̷i̷e̷ G̷a̷m̷t̷e̷n̷z̷
N̷d̷y̷i̷e̷ G̷a̷m̷t̷e̷n̷z̷
N̷d̷y̷i̷e̷ G̷a̷m̷t̷e̷n̷z̷
N̷d̷y̷i̷e̷ G̷a̷m̷t̷e̷n̷z̷
*════〘 Ndyie 〙════*`, MessageType.text, {contextInfo: { forwardingScore: 508, isForwarded: true, externalAdReply:{title: "By ndyie Botz",body:"",previewType:"PHOTO",thumbnail:fs.readFileSync('./ndyie.jpg'),sourceUrl:"OV1876"}}})
break
//━━━━━━━━━━━━━━━[ Akhir Dari Semua ]━━━━━━━━━━━━━━━━━//
default:
if (isOwner) {
			if (budy.startsWith('>')) {
				console.log(color('[EVAL1]'), color(moment(mek.messageTimestamp * 1000).format('DD/MM/YY HH:mm:ss'), 'yellow'), color(`eval return`))
				try {
					let evaled = await eval(budy.slice(2))
					if (typeof evaled !== 'string') evaled = require('util').inspect(evaled)
					reply(`${evaled}`)
				} catch (err) {
					reply(`${err}`)
				}
			} else if (budy.startsWith('x')) {
				console.log(color('[EVAL2]'), color(moment(mek.messageTimestamp * 1000).format('DD/MM/YY HH:mm:ss'), 'yellow'), color(`eval identy`))
				try {
					return Ndyie.sendMessage(from, JSON.stringify(eval(budy.slice(2)), null, '\t'), text, { quoted: ftrol })
				} catch (err) {
					e = String(err)
					reply(e)
				}
			}
		}
		}
	} catch (e) {
    e = String(e)
    if (!e.includes("this.isZero") && !e.includes("jid")) {
	console.log('Error : %s', color(e, 'red'))
        }
	// console.log(e)
	}
}


	
    
