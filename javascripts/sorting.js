const bars = []
const maxWidth = 1000
const scaleUpVal = 2.5
const padding = 0.5
const N = 100

const barsDiv = document.querySelector('.bars')

const createBars = () => {
    barsDiv.innerHTML = ""
    bars.splice(0, bars.length)

    for (let i = 0; i < N; i++) {
        let randNumber = Math.floor(Math.random() * 100) + 1
        bars.push(randNumber)
    }

    for (let i = 0; i < N; i++) {
        const bar = document.createElement('div')
        bar.style.height = `${bars[i] * scaleUpVal}px`
        bar.style.width = `${maxWidth / bars.length}px`
        bar.style.backgroundColor = 'yellow'
        bar.classList.add('bar')
        barsDiv.appendChild(bar)
    }
}

const swap = (el1, el2) => {
    const style1 = window.getComputedStyle(el1)
    const style2 = window.getComputedStyle(el2)

    const transform1 = style1.getPropertyValue('height')
    const transform2 = style2.getPropertyValue('height')

    el1.style.height = transform2
    el2.style.height = transform1
}

const newArrBtn = document.querySelector('#new-array')
newArrBtn.addEventListener('click', createBars)