import { TypesGenerateDigits } from "../actionTypes";
import { DigitsSet, GEN_DIGITS} from "../stateTypes";

const initDigitsState : DigitsSet = {
    digits: []
}

export function digitsReducer
    (
    state: DigitsSet = initDigitsState, 
    action: TypesGenerateDigits 
    ) 
    : DigitsSet {
    switch (action.type) {
        case GEN_DIGITS: {
            return {
                ...state,
                digits: action.payload
            }
        }
        default: 
            return state
    }
}