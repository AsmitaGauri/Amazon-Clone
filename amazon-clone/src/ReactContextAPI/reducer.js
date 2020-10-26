
export const getBasketTotal=(basket)=> basket?.reduce((amount,item)=>item.price+amount,0);


export const initialState={
    basket:[
        // {
        //     id:"1",
        //     title:" Cadbury Dairy Milk Silk Chocolate Bar" ,
        //     price:320 ,
        //     rating:5,
        //      image:"https://images-eu.ssl-images-amazon.com/images/I/410dwX6xrbL._AC_SX184_.jpg"
        // }
       
    ],
    user:null,
    err:null,
    loading:false
}

export const reducer=(state,action)=>{
    
    switch(action.type){
        case "ERROR":
            return{...state,err:action.err}
        case "SET_USER":
            return {...state,user:action.user}
        case "ADD_TO_BASKET":
            // some logic
            return {...state,basket:[...state.basket,action.item]};
            break;
        case "REMOVE_FROM_BASKET":
            // some logic
            let newBasket=[...state.basket];
            const index=state.basket.findIndex((item)=>item.id===action.id)
            if(index>=0){
                newBasket.splice(index,1)
            }
            else{
                alert("Cant remove!");
            }
            return {...state,basket:newBasket};
            break;
        case "LOADING":
            return{...state,loading:action.payload}
        default:
            return state;
    }
}