const reducer=(state,action)=>{

  switch (action.type) {
    case 'CLEAR-CART':
      return{...state,cart:[]}
      break;
      case 'REMOVE-ITEM':
        return{...state,cart:state.cart.filter((item)=>{return item.id!=action.payload})}
        break;
        case 'INCREASE':
          let cartitem=state.cart.map((item)=>{
            if (item.id==action.payload) {
              return{...item,amount:item.amount+1}
            }
            return item
          })
        
        return{...state,cart:cartitem}
          break;

          case 'DECREASE':
           let mycartitem=state.cart.map((item)=>{
            if (item.id==action.payload) {
              return{...item,amount:item.amount-1}
            }
            return item
          }).filter((item)=>item.amount!=0)
        
        return{...state,cart:mycartitem}
          break;
         case'GET-TOTALS':
        let {amount,total}=state.cart.reduce((carttotal,cartitem)=>{
           const{amount,price}=cartitem
           const totalitem=amount*price
          carttotal.total += totalitem
          carttotal.amount += amount
           return carttotal
        },{total:0,amount:0})
            total=parseFloat(total.toFixed(2))      
        return{...state,amount,total}
         break;
    default:
      break;
  }
  return state
}
export default reducer