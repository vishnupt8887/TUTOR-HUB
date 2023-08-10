import { createSelector } from "@ngrx/store";
import { appstateinterface } from "src/app/appstate";

export const selectorFeature = (state:appstateinterface)=>state.adminState;
export const erroSelector = createSelector(
    selectorFeature,
    (state)=>state.error
)

export const studentList = createSelector(
    selectorFeature,
    (state) => state.studentList
)

export const tutorList = createSelector(
    selectorFeature,
    (state)=>state.tutorList
)