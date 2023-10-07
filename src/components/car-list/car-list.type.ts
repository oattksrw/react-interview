import { Fields, onAddReturnType } from "../../App.type"

export interface CarlistType {
    list: Fields[]
    onAdd: (remain: onAddReturnType) => void
    onMinus: (remain: onAddReturnType) => void
    addButton?: boolean
    changValueButton?: boolean
}