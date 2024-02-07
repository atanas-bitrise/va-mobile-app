import { useQuery } from '@tanstack/react-query'

import { AppealData, AppealGetData } from 'api/types/ClaimsAndAppealsData'
import { claimsAndAppealsKeys } from './queryKeys'
import { get } from 'store/api'

/**
 * Fetch user Appeal
 */
export const getAppeal = async (id: string): Promise<AppealData | undefined> => {
  const newAbortController = new AbortController()
  const signal = newAbortController.signal
  const response = await get<AppealGetData>(`/v0/appeal/${id}`, {}, signal)
  return response?.data
}

/**
 * Returns a query for user Appeal
 */
export const useAppeal = (id: string, options?: { enabled?: boolean }) => {
  return useQuery({
    ...options,
    queryKey: [claimsAndAppealsKeys.appeal, id],
    queryFn: () => getAppeal(id),
    meta: {
      errorName: 'getAppeal: Service error',
    },
  })
}
