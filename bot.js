let bot = new RiveScript()

let user = Math.random() * 100 + " user"
let body = document.getElementById("body")
let form = document.getElementById("form")
let txtField = document.getElementById("txtField")

let files = [
  "./brain/brain.rive",
  "./brain/helloworld.rive"
]

bot.loadFile(files).then(load_done).catch(err => console.log(err))

function load_done() {

  bot.sortReplies()

}

function botReply(msg) {  

  let botMsg = `<div class="flex l">
    <div class="bot message">
      <p>Bot</p>
      ${msg} 
    </div>
  </div>`

  body.innerHTML += botMsg
  window.location.href = "#edge"

}

function youReply(msg) {

  let youMsg = `<div class="flex r">
    <div class="you message">
      <p>Me</p>
      ${msg} 
    </div>
  </div>`

  body.innerHTML += youMsg

  bot.reply(user, msg).then(res => {
    setTimeout(() => {
      botReply(res)
      window.scrollTo(0,document.body.scrollHeight)
      txtField.focus()
    }, 300) 
  })

}

form.addEventListener("submit", async (e) => {

  e.preventDefault()
  await youReply(txtField.value)
  txtField.value = ""
  window.scrollTo(0,document.body.scrollHeight);
  txtField.focus()

})