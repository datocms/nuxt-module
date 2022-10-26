import {
  UseSiteSearchConfig,
  UseSiteSearchResult,
  QueryListenerOptions,
  GenericClient,
  useSiteSearch as usePristineSiteSearch,
  useQuerySubscription as usePristineQuerySubscription
} from 'vue-datocms'

import { buildClient } from '@datocms/cma-client-browser'

import { useFetch, useRuntimeConfig } from '#app'
import { ref } from 'vue';

type Optional<T, K extends keyof T> = Pick<Partial<T>, K> & Omit<T, K>;

export function useSiteSearch<Client extends GenericClient> (
  config: Optional<UseSiteSearchConfig<Client>, 'client'>
): UseSiteSearchResult {
  const { client: passedClient, ...rest } = config

  const runtimeConfig = useRuntimeConfig()

  const client =
    passedClient ||
    buildClient({
      apiToken: runtimeConfig.public.datocms.token
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

  const token = passedToken || runtimeConfig.public.datocms.token

  const useQuerySubscriptionOptions = { token, ...rest } as QueryListenerOptions<
    QueryResult,
    QueryVariables
  >

  return usePristineQuerySubscription(useQuerySubscriptionOptions)
}

export async function useGraphqlQuery (
  { query, variables = {}, preview = false }:
  { query: any, variables?: Record<string, any>, preview?: boolean }
) {
  const runtimeConfig = useRuntimeConfig()

  let endpoint = runtimeConfig.public.datocms.endpoint

  if (runtimeConfig.public.datocms.environment) {
    endpoint += `/environments/${runtimeConfig.public.datocms.environment}`
  }

  if (preview) {
    endpoint += '/preview'
  }

  const data = ref<any>(null)

  const { data: fetchedData, pending, error, refresh } = await useFetch<{ data?: any; errors?: any }>(endpoint, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${runtimeConfig.public.datocms.token}`
    },
    body: {
      query,
      variables
    },
  })

  if (fetchedData.value.errors) {
    throw JSON.stringify(fetchedData.value.errors)
  }

  data.value = fetchedData.value.data

  return { data, pending, error, refresh }
}
