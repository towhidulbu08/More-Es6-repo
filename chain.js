const data={
    count:5000,
    data:[
        {
            id:1,name:'Abul',job:'leader'
        },
        {
            id:2,name:'kholil',
            job:'leader'
        }
    ]
}
const findId=data.data[1].id
// console.log(findId);

const user={
    id:5001,
    name:'Tamim molla',
    address:{
        street:{
            first:'35/A kochukhet',
            second:'third floor',
            third:'right side'
        },
        post:'Kafrul',
        city:'Dhaka'
    }
}

const findSide=user.address.stret?.third;
console.log(findSide);