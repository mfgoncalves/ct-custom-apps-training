/**
 * Code taken from https://github.com/commercetools/nodejs/blob/master/packages/sync-actions/src/utils/common-actions.js
 * You can use the same functionality with sync-actions
 * The problem is that they don't export the utils folder
 * So it's been copied here
 */

import clone from 'lodash/cloneDeep';
import isNil from 'lodash/isNil';
import { diffpatcher } from '.';
import { Action } from '../types/Action';

export const buildBaseAttributesActions = (
  actions: Action[],
  diff: Record<string, unknown>,
  oldObj: any,
  newObj: any,
  shouldOmitEmptyString = false,
) => {
  const isEmptyValue = createIsEmptyValue(
    shouldOmitEmptyString ? [undefined, null, ''] : [undefined, null],
  );
  return actions
    .map(({ action, key }) => {
      const delta = diff[key];
      const before = oldObj[key];
      const now = newObj[key];
      const isNotDefinedBefore = isEmptyValue(oldObj[key]);
      const isNotDefinedNow = isEmptyValue(newObj[key]);

      if (!delta) {
        return undefined;
      }

      if (isNotDefinedNow && isNotDefinedBefore) return undefined;

      if (!isNotDefinedNow && isNotDefinedBefore)
        // no value previously set
        return { action, [key]: now };

      /* no new value */
      if (isNotDefinedNow && !{}.hasOwnProperty.call(newObj, key)) return undefined;

      if (isNotDefinedNow && {}.hasOwnProperty.call(newObj, key))
        // value unset
        return { action };

      // We need to clone `before` as `patch` will mutate it
      const patched = diffpatcher.patch(clone(before), delta);
      return { action, [key]: patched };
    })
    .filter((action) => !isNil(action));
};

const createIsEmptyValue = (emptyValues: any[]) => (value: any) => {
  return emptyValues.some((emptyValue) => emptyValue === normalizeValue(value));
};

const normalizeValue = (value: any) => (typeof value === 'string' ? value.trim() : value);
