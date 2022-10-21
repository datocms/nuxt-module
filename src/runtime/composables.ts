import {
  UseSiteSearchConfig,
  UseSiteSearchResult,
  QueryListenerOptions,
  GenericClient,
  useSiteSearch as usePristineSiteSearch,
  useQuerySubscription as usePristineQuerySubscription
} from 'vue-datocms'

import { buildClient } from '@datocms/cma-client-browser'

import { useRuntimeConfig } from '#app'

type Optional<T, K extends keyof T> = Pick<Partial<T>, K> & Omit<T, K>;

export function useSiteSearch<Client extends GenericClient> (
  config: Optional<UseSiteSearchConfig<Client>, 'client'>
): UseSiteSearchResult {
  const { client: passedClient, ...rest } = config

  const runtimeConfig = useRuntimeConfig()

  const client =
    passedClient ||
    buildClient({
      apiToken: runtimeConfig.public.datocms.datocmsReadOnlyToken
    })

  return usePristineSiteSearch({ client, ...rest })
}

export function useQuerySubscription<
  QueryResult = any,
  QueryVariables = Record<string, any>
> (
  options: Optional<QueryListenerOptions<QueryResult, QueryVariables>, 'token'>
) {
  const { token: passedToken, ...rest } = options

  const runtimeConfig = useRuntimeConfig()

  const token = passedToken || runtimeConfig.public.datocms.datocmsReadOnlyToken

  const useQuerySubscriptionOptions = { token, ...rest } as QueryListenerOptions<
    QueryResult,
    QueryVariables
  >

  return usePristineQuerySubscription(useQuerySubscriptionOptions)
}
