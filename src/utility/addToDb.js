const getStoredBook = () =>{

    const stroedBookSTR = localStorage.getItem("readList")
    if (stroedBookSTR) {
        const storedBookData = JSON.parse(stroedBookSTR)
        return storedBookData;
    }
    else {
        return []
    }
}


const addToStoreDB = (id) =>{

    const storedBookData = getStoredBook()

    if (storedBookData.includes(id)) {
        alert("id already exist")
    }
    else{
        storedBookData.push(id)
        const data = JSON.stringify(storedBookData)
        localStorage.setItem("readList",data)
    }
}

export { addToStoreDB }
