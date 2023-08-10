import { createSelector } from "@ngrx/store";
import { appstateinterface } from "src/app/appstate";

export const selectorFeature = (state:appstateinterface)=>state.studentState;
export const erroSelector = createSelector(
    selectorFeature,
    (state)=>state.error
)

export const dataSelector = createSelector(
    selectorFeature,
    (state)=>state.user
)