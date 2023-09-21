import { Params as APIParams, EditResponseData, post, put } from 'store/api'
import { AddressData } from 'api/types'
import { UserAnalytics } from 'constants/analytics'
import { contactInformationKeys } from './queryKeys'
import { isErrorObject } from 'utils/common'
import { logNonFatalErrorToFirebase, setAnalyticsUserProperty } from 'utils/analytics'
import { useMutation, useQueryClient } from '@tanstack/react-query'

/**
 * Creates or updates a user's address depending on whether an `id` field is present
 */
export const updateAddress = async (addressData: AddressData) => {
  try {
    const endpoint = '/v0/user/addresses'

    if (!addressData.id) {
      return post<EditResponseData>(endpoint, addressData as unknown as APIParams)
    }

    return put<EditResponseData>(endpoint, addressData as unknown as APIParams)
  } catch (error) {
    throw error
  }
}

/**
 * Returns a mutation for updating an address
 */
export const useUpdateAddress = () => {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: updateAddress,
    mutationKey: ['updateAddress'],
    onSuccess: async () => {
      await setAnalyticsUserProperty(UserAnalytics.vama_uses_profile())
      queryClient.invalidateQueries({ queryKey: contactInformationKeys.contactInformation })
    },
    onError: async (error) => {
      if (isErrorObject(error)) {
        logNonFatalErrorToFirebase(error, 'updateAddress: Service error')
      }
    },
  })
}
