import { ActionType } from './../action-type/index';
import {Action} from "../actions"

export interface cryptoType {
    searchText: string;
    collapsed: boolean;
    coinsList: coin[],
    selectedCoin: coin | null
}
export interface coin {
        "id": string,
        "icon": string,
        "name": string,
        "symbol": string,
        "rank": number,
        "price": number,
        "priceBtc": number,
        "volume": number,
        "marketCap": number,
        "availableSupply": number,
        "totalSupply": number,
        "priceChange1h": number,
        "priceChange1d": number,
        "priceChange1w": number,
        "websiteUrl": string,
        "twitterUrl": string,
        "exp": string[],
        "selected": boolean
}
const initialState: cryptoType = {
    searchText: '',
    collapsed: false,
    coinsList :[],
    selectedCoin: null
};

const cryptoReducer = (state = initialState, action: Action) => {
    switch(action.type) {
        case ActionType.SET_COINS_LIST: {
            console.log(action.payload);
            return {
                ...state,
                coinsList: [...action.payload]
            }
        }
        case ActionType.SET_SEARCH_TEXT: {
            return {
                ...state,
                searchText: action.payload
            }
        }
        case ActionType.TOGGLE_LIST: {
            return {
                ...state,
                collapsed: action.payload
            }
        }
        case ActionType.SET_SELECTED_COIN: {
            return {
                ...state,
                selectedCoin: action.payload
            }
        }
        default:
            return state;
        
    }
}
export default cryptoReducer;