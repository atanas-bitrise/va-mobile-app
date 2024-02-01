import { useQuery } from '@tanstack/react-query'

import { ClaimData, ClaimGetData, get } from 'store/api'
import { claimsAndAppealsKeys } from './queryKeys'

/**
 * Fetch user Claim
 */
export const getClaim = async (id: string): Promise<ClaimData | undefined> => {
  const newAbortController = new AbortController()
  const signal = newAbortController.signal
  const response = await get<ClaimGetData>(`/v0/claim/${id}`, {}, signal)
  return response?.data
}

/**
 * Returns a query for user Claim
 */
export const useClaim = (id: string, options?: { enabled?: boolean }) => {
  return useQuery({
    ...options,
    queryKey: [claimsAndAppealsKeys.claim, id],
    queryFn: () => getClaim(id),
    meta: {
      errorName: 'getClaim: Service error',
    },
  })
}
