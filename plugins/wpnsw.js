let fetch = require('node-fetch')
let handler = async (m, { conn, args }) => {
   response = args.join(' ')
  if (!args) throw 'Masukkan Parameter'
  m.reply('Sedang Diproses...')
  let res = `https://api.xteam.xyz/randomimage/wpnsfwmobile?apikey=MIMINETBOT`
  conn.sendFile(m.chat, res, 'wpnsfwmobile.jpg', `wangy wangy wangy`, m, false)
}
handler.help = ['wpnsfwmobile'].map(v => v + ' ')
handler.tags = ['anime']

handler.command = /^(wpnsfwmobile)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = true

handler.admin = false
handler.botAdmin = false

handler.fail = null
handler.limit = 2

module.exports = handler

