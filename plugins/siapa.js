let { MessageType } = require('@adiwajshing/baileys')
let handler = async (m, { conn, text, participants }) => {
    try {
        let member = participants.map(u => u.jid)
        let siapa = member[Math.floor(Math.random() * member.length)] 
        let jawab = `
*@${siapa.replace(/@.+/, '')}*
 `.trim()
        conn.reply(m.chat, jawab, m, { contextInfo: { mentionedJid : [siapa]}}) 
      } catch (e) {
              console.log(e)
              m.reply('Error')
              conn.sendMessage('6281390658325@s.whatsapp.net', 'Use error\nNo: *' + m.sender.split`@`[0] + '*\nCommand: *' + m.text + '*\n\n*' + e + '*', MessageType.text)
      }
}
handler.help = ['siapa']
handler.tags = ['kerang']
handler.customPrefix = /(\?$)/
handler.command = /^siapa?$/i
handler.group = true

handler.fail = null
 
module.exports = handler