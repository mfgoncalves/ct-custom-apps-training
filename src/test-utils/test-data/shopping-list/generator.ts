import { ClientLogging, LocalizedString } from '@commercetools-test-data/commons';
import { fake, Generator, sequence } from '@commercetools-test-data/core';
import { createRelatedDates } from '@commercetools-test-data/utils';
import type { ShoppingList } from '@commercetools/platform-sdk';

const [getOlderDate, getNewerDate] = createRelatedDates();

const generator = Generator<ShoppingList>({
  fields: {
    id: fake((f) => f.datatype.uuid()),
    key: fake((f) => f.lorem.slug(2)),
    version: sequence(),
    createdAt: fake(getOlderDate),
    lastModifiedAt: fake(getNewerDate),
    createdBy: fake(() => ClientLogging.random()),
    lastModifiedBy: fake(() => ClientLogging.random()),
    lineItems: [],
    textLineItems: [],
    name: fake(() => LocalizedString.random()),
    slug: fake(() => LocalizedString.random()),
  },
});

export default generator;
