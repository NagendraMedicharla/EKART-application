import axios from 'axios';

const token = localStorage.getItem('token');

// const config = {
//     header:{
//         'Authorization':`Bearer ${token}`,
//         'Content-Type':'application/json'
//     }
// }

export function addItemsToWishList(data){
    console.log("the data is",data)
    
    const    headers ={
            'Authorization':`Bearer ${token}`,
            'Content-Type':'application/json'
        }

    console.log("config is ",  headers)
    axios.post(`http://localhost:8083/addToWishList`, data, {headers})
    .then(response =>{
        console.log('Response :', response.data);
    })
    .catch(error=>{
        console.error('Error', error);
        console.log("error is comming")
    });
}

// export const addItemsToWishList = createAsyncThunk(
//     "register/registerUser",
//     async (payload, { rejectWithValue }) => {
//       const response = await fetch(`http://localhost:8083/adduser`, {
//         method: "POST",
//         headers: {
//             "Authorization":`Bearer ${token}`,
//             "content-Type": "application/json",
//         },
//         body: JSON.stringify(payload),
//       });
//       if (response.status < 200 || response.status >= 300) {
//         return rejectWithValue(response);
//       }
//       return response;
//     }
//   );