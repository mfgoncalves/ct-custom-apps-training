import { useApplicationContext } from '@commercetools-frontend/application-shell-connectors';

export const useLocale = () => {
  const { dataLocale, projectLanguages } = useApplicationContext((context) => ({
    dataLocale: context.dataLocale,
    projectLanguages: context.project?.languages,
  }));

  return {
    dataLocale: dataLocale ? dataLocale : 'en',
    projectLanguages: projectLanguages ? projectLanguages : ['en'],
  };
};
