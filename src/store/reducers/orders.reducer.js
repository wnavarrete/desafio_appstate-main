
import { Switch } from 'react-native';
import { ORDERS } from '../../constants/data/index';
import { ordersTypes } from '../types';

const initialState = {
  orders: ORDERS,
  selected:null,
};

const orderReducer = (state = initialState, action) => {
  switch(action.type){
    case 'SELECT_ORDER':
      const indexOrder = state.orders.findIndex((order) => order.id === action.orderId);
      if(indexOrder === -1) return state;
      return {
        ...state, selected: state.orders[indexOrder],
      }
  default:
    return state;
  }
};

export default orderReducer;