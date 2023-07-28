let time = 10
var a
let yourScoreEl = document.getElementById("yourScore")
let inputEl = document.getElementById("2")
let gb2 = document.getElementById("gb2")
var secund
let timeEl = document.getElementById("time")
let sc = document.getElementById("count-down")
let ok = document.getElementById("ok")
let tAgain = document.getElementById("tAgain")
let lose = document.getElementById("lose")
let words = document.getElementById("wo")
let wordsGame = document.getElementById("wr")
let b = 0
let textEl = document.getElementById("txt")
let play = document.getElementById("8")
let firstPage = document.getElementById("first")
let secondPage = document.getElementById("second")
let highScoreEl = document.getElementById("hScore")
var letterId
function first() {
    firstPage.style.display = "none"
    secondPage.style.display = "block"
}

play.addEventListener("click", first)

let keyboard = document.getElementById("keyboard")
let train = document.getElementById("tr")
let fJumping = document.getElementById("figure-jumping")
function kb() {
    second.style.display = "none"
    fJumping.style.display = "none"
    keyboard.style.display = "block"
    keyboardgame()
}
train.addEventListener("click", kb)

let goBack = document.getElementById("gb")
function goback() {
    keyboard.style.display = "none"
    fJumping.style.display = "block"
    secondPage.style.display = "block"
    letterId.classList.remove("selected")
}

goBack.addEventListener("click", goback)

let count = document.getElementById("start-count")


function scc() {
    count.style.display = "block"
    count.innerHTML = "3"
    let id = setInterval(function () {
        count.innerHTML--
        if (count.innerHTML <= 0) {
            clearInterval(id)
            wordsGame.style.display = "block"
            count.style.display = "none"
            game()
        }
    }, 1000)
}

function wrd() {
    secondPage.style.display = "none"
    fJumping.style.display = "none"
    sc.style.display = "block"

    scc()

}

words.addEventListener("click", wrd)

function okwords() {
    wordsGame.style.display = "none"
    secondPage.style.display = "block"
    fJumping.style.display = "block"
    lose.style.display = "none"
    inputEl.value = ""
    yourScore.innerHTML = "0"
    time = 10
}

function tm() {
    game()
}

ok.addEventListener("click", okwords)

tAgain.addEventListener("click", tragain)

function game() {
    let oneWord = randomItem(barer)
    let highScore = 0
    let yourScore = 0

    timeEl.innerHTML = time

    let id1 = setInterval(function () {
        time--
        timeEl.innerHTML = time
        if (time <= 0) {
            wordsGame.style.display = "none"
            lose.style.display = "block"
            clearInterval(id1)
        }
    }, 1000)

    function goBack2() {
        wordsGame.style.display = "none"
        secondPage.style.display = "block"
        fJumping.style.display = "block"
        yourScore.innerHTML = "0"
        clearInterval(id1)
    }

    gb2.addEventListener("click", goBack2)

    time = 10
    if (!localStorage.score) {
        localStorage.score = 0
    }
    else {
        highScore = localStorage.score
    }
    highScoreEl.innerHTML = highScore
    yourScoreEl.innerHTML = yourScore
    textEl.innerHTML = oneWord
    inputEl.addEventListener("keypress", function (q) {
        if (q.code == "Enter" && inputEl.value != "") {
            if (inputEl.value == oneWord) {
                yourScore++
                oneWord = randomItem(barer)
                inputEl.value = ""
                textEl.innerHTML = oneWord
                time += 5
                timeEl.innerHTML = time

                yourScoreEl.innerHTML = yourScore
                if (yourScore >= highScore) {
                    highScore = yourScore
                    localStorage.score = highScore
                    highScoreEl.innerHTML = highScore
                }
            }
            else {
                oneWord = randomItem(barer)
                textEl.innerHTML = oneWord
                if (time <= 2) {
                    time = 0
                    wordsGame.style.display = "none"
                    lose.style.display = "block"
                    clearInterval(id1)
                } else {
                    time -= 2
                }
                timeEl.innerHTML = time
                inputEl.value = ""
            }
        }
    })
}

function keyboardgame() {
    let oneLetter = randomItem(letterArr)
    letterId = document.getElementById(oneLetter)
    letterId.classList.add("selected");
    document.addEventListener("keyup", function (e) {
        if (e.code == letterId.id) {
            letterId.classList.remove("selected")
            oneLetter = randomItem(letterArr)
            letterId = document.getElementById(oneLetter)
            letterId.classList.add("selected");
        }
        else {
            let qwerty = e.code
            let ytrewq = document.getElementById(qwerty)
            ytrewq.classList.add("hit")
            setTimeout(function () {
                ytrewq.classList.remove("hit")
            }, 10)
        }
    })
}

function randomItem(j) {
    let index = Math.floor(Math.random() * j.length)
    return j[index]
}