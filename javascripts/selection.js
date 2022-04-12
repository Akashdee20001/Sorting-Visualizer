const selectionSort = async() => {
    let n = bars.length
    for (let i = 0; i < n - 1; i++) {
        let minIndex = i
        for (let j = i + 1; j < n; j++) {
            if (bars[j] < bars[minIndex]) {
                minIndex = j
            }

            const el1 = document.querySelector(`.bar:nth-child(${i + 1})`)
            const el2 = document.querySelector(`.bar:nth-child(${minIndex + 1})`)

            //Change Color to red
            el1.style.backgroundColor = 'red'
            el2.style.backgroundColor = 'red'

            //Add a delay
            await new Promise(resolve => setTimeout(resolve, 2));

            let temp = bars[i]
            bars[i] = bars[minIndex]
            bars[minIndex] = temp

            //Swap DOM elements
            swap(el1, el2)

            //Change color back to original
            el1.style.backgroundColor = 'yellow'
            el2.style.backgroundColor = 'yellow'
        }

        document.querySelector(`.bar:nth-child(${i + 1})`).style.backgroundColor = 'green'
    }
    document.querySelector(`.bar:nth-child(${n})`).style.backgroundColor = 'green'
}


const selectionSortBtn = document.querySelector('#selection-sort')
selectionSortBtn.addEventListener('click', selectionSort)