/**
 * Code taken from https://github.com/commercetools/nodejs/blob/master/packages/sync-actions/src/utils/diffpatcher.js
 * You can use the same functionality with sync-actions
 * The problem is that they don't export the utils folder
 * So it's been copied here
 */

// jsondiffpatch does not yet handle minified UMD builds
// with es6 modules so we use require instead below
// TODO create an issue here https://github.com/benjamine/jsondiffpatch/issues/new
import { DiffPatcher } from 'jsondiffpatch';

export function objectHash(obj: any, index: number) {
  const objIndex = `$$index:${index}`;
  return typeof obj === 'object' && obj !== null
    ? obj.id || obj.name || obj.url || objIndex
    : objIndex;
}

const diffpatcher = new DiffPatcher({
  objectHash,
  arrays: {
    // detect items moved inside the array
    detectMove: true,

    // value of items moved is not included in deltas
    includeValueOnMove: false,
  },
  textDiff: {
    // If the value to diff has a bigger length,
    // a text diffing algorithm is used
    // See https://github.com/benjamine/jsondiffpatch/
    // blob/master/docs/deltas.md#text-diffs
    minLength: 300,
  },
});

export function diff<T>(oldObj: T, newObj: T) {
  return diffpatcher.diff(oldObj, newObj);
}

export function patch<T>(obj: T, delta: T) {
  return diffpatcher.patch(obj, delta);
}

export function getDeltaValue(arr: any[], originalObject: any) {
  if (!Array.isArray(arr)) throw new Error('Expected array to extract delta value');

  if (arr.length === 1) return arr[0]; // new

  if (arr.length === 2) return arr[1]; // update

  if (arr.length === 3 && arr[2] === 0) return undefined; // delete

  if (arr.length === 3 && arr[2] === 2) {
    // text diff
    if (!originalObject)
      throw new Error('Cannot apply patch to long text diff. Missing original object.');
    // try to apply patch to given object based on delta value
    return patch(originalObject, arr);
  }

  if (arr.length === 3 && arr[2] === 3)
    // array move
    throw new Error(
      'Detected an array move, it should not happen as ' +
        '`includeValueOnMove` should be set to false',
    );

  throw new Error(`Got unsupported number ${arr[2]} in delta value`);
}
