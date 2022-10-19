const commentsNodeList = document.querySelectorAll('.comment')
const comments = Array.from(commentsNodeList)

const commentsListNodeList = document.querySelectorAll('.comments-list')

const commentTitle = document.querySelectorAll('.comment-title')

const allSign = document.querySelectorAll('.sign')

const counter = document.getElementById('counter')

console.log(commentsListNodeList)
// console.log(commentTitle)

function createElement(element) {
    return document.createElement(`${element}`)
}

function AllRead() {
    comments.forEach((comment) => {
        comment.setAttribute("id", "readed")
    })

    allSign.forEach((sign) => {
        sign.setAttribute("class", "hide-item")
    })

    counter.innerHTML = 0
}



function RenderPage() {
    comments.forEach((comment) => {
        comment.addEventListener("click", () => {
            comment.setAttribute("id", "readed")

            const individualSign = comment.getElementsByClassName('sign')[0]

            individualSign.setAttribute("class", "hide-item")

            let counterValueForEach = Number(counter.innerHTML) - 1
            counter.innerHTML = counterValueForEach
        })
    })

    const counterValue = comments.length 

    counter.innerHTML = counterValue
}


