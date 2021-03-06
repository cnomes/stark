import { ActionReducerMap, createFeatureSelector, createSelector, MemoizedSelector } from "@ngrx/store";
import { StarkMessageCollection } from "../entities";
import { StarkMessagePaneActions } from "../actions";
import { messagesReducer } from "./messages-pane.reducer";

/**
 * We define part of the state assigned to the session module
 */
export interface StarkMessageState {
	/**
	 * The session property
	 * @link StarkMessageCollection
	 */
	messages: StarkMessageCollection;
}

/**
 * We assign a reducer to our messages property
 */
export const starkMessagesReducers: ActionReducerMap<StarkMessageState, StarkMessagePaneActions> = {
	/**
	 * the reducer is assigned to our property
	 */
	messages: messagesReducer
};

/**
 * The selector will return the part of the state assigned to the logging when called
 */
export const selectStarkMessages: MemoizedSelector<object, StarkMessageCollection> = createSelector(
	createFeatureSelector<StarkMessageState>("StarkMessages"),
	(state: StarkMessageState) => state.messages
);
