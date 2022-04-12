const insertionSort = async() => {
    let n = bars.length;
    let i, j, key
    for (i = 1; i < n; i++) {
        key = bars[i]
        j = i - 1
        while (j >= 0 && bars[j] > key) {
            const el = document.querySelector(`.bar:nth-child(${j + 2})`)
            el.style.backgroundColor = 'red'

            //Add a delay
            await new Promise(resolve => setTimeout(resolve, 2));
            el.style.height = `${bars[j] * scaleUpVal}px`
            bars[j + 1] = bars[j]
            j--

            el.style.backgroundColor = 'yellow'
        }
        bars[j + 1] = key
        document.querySelector(`.bar:nth-child(${j + 2})`).style.height = `${key * scaleUpVal}px`
    }

    makeGreen()

}

const makeGreen = async() => {
    let n = bars.length
    for (let i = n - 1; i >= 0; i--) {
        await new Promise(resolve => setTimeout(resolve, 2));
        document.querySelector(`.bar:nth-child(${i + 1})`).style.backgroundColor = 'green'
    }
}

const insertionSortBtn = document.querySelector('#insertion-sort')
insertionSortBtn.addEventListener('click', insertionSort)