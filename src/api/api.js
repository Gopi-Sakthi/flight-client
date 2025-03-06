const [obj,setObj] = useState ({
    firstName : "Praveen" , age : 24
})

setObj((prev) => ({...prev, age : 25}))

const [arr,setArr] = useState ([
    {
        firstName : "Praveen" , age : 24
    },
    {
        firstName : "Gopi" , age : 24
    }
])

const index=0;

setArr((prev)=>(prev.map((item ,idx) => {
    if(idx===index){
        return {...prev,age:25}
    }
    return item;
})))