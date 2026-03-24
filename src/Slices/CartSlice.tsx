import { createSlice, type PayloadAction} from "@reduxjs/toolkit";

export interface CartItem {
    id:number,
    img:string,
    des:string,
    price:number,
    qantity: number,
    size: string,
  color: string

}
export const initialState:CartItem[ ]= [];

const CartSlice = createSlice({
    name :"cart",
    initialState,
    reducers:{
        addtocart:(state, action:PayloadAction<CartItem>)=>{
          const check = state.find(item=> item.id === action.payload.id
             &&
            item.size === action.payload.size &&
            item.color === action.payload.color
          )
          if (check) {
            check.qantity +=1;
            
          }else{
            state.push({...action.payload, qantity:1})
          }

        },
          decreaseQantity:(state , action:PayloadAction<CartItem>)=>{
            const checkquatity = state.find(item=>item.id === action.payload.id &&
            item.size === action.payload.size &&
            item.color === action.payload.color
            )
           if (checkquatity) {
            if (checkquatity.qantity > 1) {
              checkquatity.qantity -=1
              
            }
            else{
              return state.filter(item=> item.id !== action.payload.id)
            }
            
           }

          },
          increaseQuantity:(state, action:PayloadAction<CartItem>)=>{
            const check = state.find(item => item.id === action.payload.id &&
            item.size === action.payload.size &&
            item.color === action.payload.color
            )
            if (check) {
              check.qantity +=1
              
            }


          },
          deleteitem:(state, action:PayloadAction<CartItem>) =>{
            return state.filter(item => item.id !==action.payload.id ||
            item.size !== action.payload.size ||
            item.color !== action.payload.color
            )
            

          },
          emptycart:()=>{
            return []

          }
       
      


    }


})
export const {addtocart, decreaseQantity, increaseQuantity,deleteitem,emptycart} =CartSlice.actions
export default CartSlice.reducer
   