// import React, { useState } from 'react'

// function ItemCount() {
//     let min = 1
//     let max = 10

//     const [isAdd, setAdd] = useState(min)

//     function addition ()  {
//         const newValue = isAdd + 1
//         if (newValue < max) {
//             setAdd(newValue)
//         }
//     }


// function substraction() {
//     const newValue = isAdd - 1
//     if (newValue > min) {
//         setAdd(newValue)
//     }
// }

// function onAdd() {
//     alert('Compraste' + isAdd + 'items')
// }

// return (
//         <div className='cart'>
//             <button onClick={substraction}>-</button>
//             <span>{isAdd}</span>
//             <button onClick={addition}>+</button>
//             <button onClick={onAdd}>Agregar al carrito</button>
//         </div>
// )
// }

// export default ItemCount

import React, { useState } from 'react'
// import './ItemCount.scss'

function ItemCount() {
    let min = 1
    let max = 10

    const [isAdd, setAdd] = useState(min)

    function addition ()  {
        const newValue = isAdd + 1
        if (newValue <= max) {
            setAdd(newValue)
        }
    }


    function substraction() {
        const newValue = isAdd - 1
        if (newValue > min) {
            setAdd(newValue)
        }
    }

    function onAdd() {
        alert('Compraste' + isAdd + 'items')
    }

    return (
            <div className='cart'>
                <button onClick={substraction}>-</button>
                <span>{isAdd}</span>
                <button onClick={addition}>+</button>
                <button onClick={onAdd}>Agregar al carrito</button>
            </div>
    )
}

export default ItemCount