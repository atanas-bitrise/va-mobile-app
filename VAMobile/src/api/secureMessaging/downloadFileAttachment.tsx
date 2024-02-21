import FileViewer from 'react-native-file-viewer'

import { useQuery } from '@tanstack/react-query'

import { SecureMessagingAttachment } from 'api/types'
import { downloadFile, unlinkFile } from 'utils/filesystem'

import { secureMessagingKeys } from './queryKeys'

/**
 * Fetch user message signature
 */
const downloadFileAttachment = async (file: SecureMessagingAttachment): Promise<void | undefined> => {
  const filePath = await downloadFile('GET', file.link, file.filename)
  if (filePath) {
    return await FileViewer.open(filePath, {
      onDismiss: async (): Promise<void> => {
        await unlinkFile(filePath)
      },
    })
  }
}

/**
 * Returns a query for a user message signature
 */
export const useDownloadFileAttachment = (file: SecureMessagingAttachment, options?: { enabled?: boolean }) => {
  return useQuery({
    ...options,
    queryKey: [secureMessagingKeys.downloadFileAttachment, file.link, file.filename],
    queryFn: () => downloadFileAttachment(file),
    meta: {
      errorName: 'downloadFileAttachment: Service error',
    },
  })
}
