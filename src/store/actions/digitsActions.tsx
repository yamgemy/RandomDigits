import { GEN_DIGITS,DigitsSet } from "../stateTypes";
import {ActionCreator} from "redux"
import { TypesGenerateDigits } from "../actionTypes";

export const generateDigitsAction: ActionCreator<TypesGenerateDigits> = (digits: DigitsSet) => {
    return {
        type: GEN_DIGITS, 
        payload: digits
    }
}