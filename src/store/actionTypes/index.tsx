import { GEN_DIGITS ,DigitsSet} from "../stateTypes";

export interface generateDigitsAction {
    type: typeof GEN_DIGITS,
    payload: DigitsSet
}

export type TypesGenerateDigits = generateDigitsAction