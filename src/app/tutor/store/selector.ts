import { state } from "@angular/animations";
import { createSelector } from "@ngrx/store";
import { appstateinterface } from "src/app/appstate";

export const selectorFeature = (state:appstateinterface)=> state.tutorState
export const erroSelector = createSelector(
    selectorFeature,
    (state)=> state.error
)