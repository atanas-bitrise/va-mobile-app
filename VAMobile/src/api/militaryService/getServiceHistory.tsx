import { QueryClient, useQuery, useQueryClient } from '@tanstack/react-query'
import _ from 'lodash'
import { has, max } from 'underscore'

import { useAuthorizedServices } from 'api/authorizedServices/getAuthorizedServices'
import { errorKeys } from 'api/errors'
import {
  ErrorData,
  MilitaryServiceHistoryData,
  ServiceData,
  ServiceHistoryAttributes,
  ServiceHistoryData,
} from 'api/types'
import { ACTIVITY_STALE_TIME } from 'constants/common'
import { get } from 'store/api'
import { DowntimeFeatureTypeConstants } from 'store/api/types'
import { getDateFromString } from 'utils/formattingUtils'
import { useDowntime } from 'utils/hooks'

import { militaryServiceHistoryKeys } from './queryKeys'

/**
 * Fetch user service history
 */
const getServiceHistory = async (queryClient: QueryClient): Promise<ServiceHistoryAttributes | undefined> => {
  const data = queryClient.getQueryData(errorKeys.errorOverrides) as ErrorData
  if (data) {
    _.forEach(data.overrideErrors, (error) => {
      if (error.queryKey[0] === militaryServiceHistoryKeys.serviceHistory[0]) {
        throw error.error
      }
    })
  }
  const response = await get<MilitaryServiceHistoryData>('/v0/military-service-history')
  const serviceHistoryAttributes = response?.data.attributes
  const serviceHistoryData = serviceHistoryAttributes?.serviceHistory || ([] as ServiceHistoryData)
  const latestHistory = max(serviceHistoryData, (historyItem) => {
    return getDateFromString(historyItem.endDate)
  }) as ServiceData
  if (serviceHistoryAttributes) {
    return {
      ...serviceHistoryAttributes,
      mostRecentBranch: latestHistory?.branchOfService,
    }
  }
}

/**
 * Returns a query for user service history
 */
export const useServiceHistory = (options?: { enabled?: boolean }) => {
  const { data: authorizedServices } = useAuthorizedServices()
  const serviceHistoryInDowntime = useDowntime(DowntimeFeatureTypeConstants.militaryServiceHistory)
  const queryEnabled = options && has(options, 'enabled') ? options.enabled : true
  const queryClient = useQueryClient()

  return useQuery({
    ...options,
    enabled: !!(authorizedServices?.militaryServiceHistory && !serviceHistoryInDowntime && queryEnabled),
    queryKey: militaryServiceHistoryKeys.serviceHistory,
    queryFn: () => getServiceHistory(queryClient),
    meta: {
      errorName: 'getServiceHistory: Service error',
    },
    staleTime: ACTIVITY_STALE_TIME,
  })
}
