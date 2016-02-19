import {EventEmitter} from 'events';

export const ENTER = 0;
export const UP = 1;
export const DOWN = 2;

/**
 * Abstract class representing a editor target.
 *
 * @abstract
 * @extends EventEmitter
 */
export default class Editor extends EventEmitter {
  /**
   * It is called when a search result is selected by a user.
   *
   * @param {SearchResult} _searchResult
   */
  applySearchResult(_searchResult) {
    throw new Error('Not implemented.');
  }

  /**
   * The input cursor's absolute coordinates from the window's left
   * top corner. It is intended to be overridden by sub classes and
   * returns `{top: number, left: number}` object.
   */
  get cursorOffset() {
    throw new Error('Not implemented.');
  }
}