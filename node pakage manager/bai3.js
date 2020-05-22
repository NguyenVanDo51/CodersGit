/**
 * https://github.com/sindresorhus/awesome-nodejs
 * Đây là một trang tổng hợp nhiều node module rất hay (không phải là tất cả)
 * Hãy thử học cách dùng 1 module mà bạn hiểu, tạo 1 ví dụ và giải thích về nó.
 * Sau này bạn sẽ cần phải google rất nhiều, học cách đọc tài liệu sẽ giúp cho công việc của bạn trong tương lai.
 */

const log = require('why-is-node-running') // should be your first require
const net = require('net')

function createServer () {
  const server = net.createServer()
  setInterval(function () {}, 1000)
  server.listen(0)
}

createServer()
createServer()

setTimeout(function () {
  log() // logs out active handles that are keeping node running
}, 100)