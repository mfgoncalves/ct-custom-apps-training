import { diffpatcher } from '../../helpers';
import { buildActions } from '../../helpers/actions';
import flatten from 'lodash/flatten';

const actions = [
  { action: 'changeName', key: 'name' },
  { action: 'setKey', key: 'key' },
];

export const getShoppingListActions = (original: any, updated: any) => {
  const diff = diffpatcher.diff(original, updated);
  console.log({ diff });
  if (!diff) {
    return [];
  }
  const aa = buildActions(actions, diff, original, updated, false);
  const bb = flatten(aa);
  console.log({ bb });
  return bb;
};
