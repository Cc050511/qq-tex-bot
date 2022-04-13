const message = require('../message')
const config = require('../config')
const { am, tex } = require('./math')
const rotateImage = require('./rotate')
const oneATwoB = require('./one-a-two-b')
const savePic = require('./save-pic')

const commands = [
  {
    reg: /^\/tex/i,
    method: tex,
  },
  {
    reg: /^\/am/i,
    method: am,
  },
  // {
  //   reg: /^\/rotate/i,
  //   method: rotateImage,
  // },
  {
    reg: /^\/1a2b/i,
    method: oneATwoB,
  },
  { 
    reg: /^\/savepic/i,
    method: savePic.savePic,
    // whiteList: [config.server.admin],
  },
  {
    reg: savePic.extReg,
    method: savePic.sendPic,
    trim: false,
    // whiteList: [config.server.admin],
  }
]

module.exports = function command (text, sender, chain) {
  // 寻找第一个匹配的命令, 并执行
  for (let i = 0; i < commands.length; ++i) {
    const { reg, method, whiteList, blackList, trim = true } = commands[i]
    if (!reg.test(text)) continue

    // 白名单过滤
    if (whiteList && !whiteList.includes(sender.id)) return

    // 黑名单过滤
    if (blackList && blackList.includes(sender.id)) return

    if (trim) {
      text = text.replace(reg, '').trim()
    }
    console.log(sender.id, reg, text)

    // 构造响应体
    const isFormula = i < 2
    return {
      isFormula,
      message: method(text, sender, chain).catch(e => {
        console.error(e);
        return [message.error]
      })
    }
  }
}
