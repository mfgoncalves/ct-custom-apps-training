import { diffpatcher } from '../../helpers';
import { buildBaseAttributesActions } from '../../helpers/actions';

const actions = [
  { action: 'changeName', key: 'name' },
  { action: 'setKey', key: 'key' },
];

export const getShoppingListActions = (original: any, updated: any) => {
  const diff = diffpatcher.diff(original, updated);

  return diff ? buildBaseAttributesActions(actions, diff, original, updated, false) : [];
};
