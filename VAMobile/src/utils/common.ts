import { Dimensions, TextInput } from 'react-native'
import { RefObject } from 'react'
import { contains, isEmpty } from 'underscore'

import { DateTime } from 'luxon'
import { ImagePickerResponse } from 'react-native-image-picker'
import RNPickerSelect from 'react-native-picker-select'

import { PhoneData } from 'store/api/types/PhoneData'
import { TextLine } from 'components/types'
import { formatPhoneNumber } from './formattingUtils'

/**
 * Generates testID string for reusable components
 */
export const generateTestID = (value: string, suffix: string): string => {
  // ex. value: 'My title', suffix: 'wide-button' -> 'my-title-wide-button'
  const updatedValue = value.toLowerCase().replace(/\s/g, '-')

  if (suffix !== '') {
    return updatedValue + '-' + suffix
  }

  return updatedValue
}

/**
 * Generate a testID string for the array of text lines passed into TextLines for list item
 */
export const generateTestIDForTextList = (listOfText?: Array<TextLine>): string => {
  const listOfTextID: Array<string> = []

  if (!listOfText) {
    return ''
  }

  listOfText.forEach((listOfTextItem: TextLine) => {
    listOfTextID.push(listOfTextItem.text)
  })

  return generateTestID(listOfTextID.join(' '), '')
}

/**
 * Returns the formatted phone number given the PhoneData object
 */
export const getFormattedPhoneNumber = (phoneData: PhoneData): string => {
  if (phoneData && phoneData.areaCode && phoneData.phoneNumber) {
    return formatPhoneNumber(`${phoneData.areaCode}${phoneData.phoneNumber}`)
  }

  return ''
}

/**
 * Returns an updated list of fields that only contains the values that exist (are not empty strings or undefined)
 *
 * @param fieldsList - array of strings to be filtered
 *
 * @returns array of strings in which all values exist
 */
export const getAllFieldsThatExist = (fieldsList: Array<string>): Array<string> => {
  return fieldsList.filter(Boolean)
}

/**
 * Sets the focus on the given picker ref
 *
 * @param pickerRef - ref for a picker
 */
export const focusPickerRef = (pickerRef: RefObject<RNPickerSelect>): void => {
  return pickerRef?.current?.togglePicker()
}

/**
 * Sets the focus on the given text input ref
 *
 * @param inputRef - ref for text input
 */
export const focusTextInputRef = (inputRef: RefObject<TextInput>): void => {
  return inputRef?.current?.focus()
}

/**
 * Sorts the list of data in descending or ascending order based on date
 *
 * @param dataList - list of data to be sorted
 * @param dateField - field name of the date
 * @param isDescending - optional param that if true sorts the list by date from most recent to least recent
 */
export const sortByDate = (dataList: Array<{ [key: string]: string }>, dateField: string, isDescending?: boolean): void => {
  dataList.sort((a, b) => {
    const aDateField = a[dateField]
    const bDateField = b[dateField]

    const infiniteNum = isDescending ? Number.NEGATIVE_INFINITY : Number.POSITIVE_INFINITY

    const d1 = aDateField && aDateField !== '' ? DateTime.fromISO(aDateField).toMillis() : infiniteNum
    const d2 = bDateField && bDateField !== '' ? DateTime.fromISO(bDateField).toMillis() : infiniteNum
    return isDescending ? d2 - d1 : d1 - d2
  })
}

const invalidStrings = ['not_found', 'undefined', 'null']
/**
 * Takes in a string value and either returns the original value or empty string if its null, undefined, or 'NOT_FOUND'
 * @param val - value to sanitize
 */
export const sanitizeString = (val: string): string => {
  return !!val && !contains(invalidStrings, val.toLowerCase()) ? val : ''
}

/**
 * Converts the given bytes to mb
 *
 * @param bytes - given number to convert to mb
 */
export const bytesToMegabytes = (bytes: number): number => {
  const mb = bytes / (1024 * 1024)
  return Math.round((mb + Number.EPSILON) * 100) / 100
}

export type ImageMaxWidthAndHeight = {
  maxWidth: string
  height: number
}

/**
 * Returns the maxWidth and height for an image, assuming the image can fill the width of the screen and the
 * max height is specified
 *
 * @param image - object with image data
 * @param messagePhotoAttachmentMaxHeight - max height for an image
 */
export const getMaxWidthAndHeightOfImage = (image: ImagePickerResponse, messagePhotoAttachmentMaxHeight: number): ImageMaxWidthAndHeight => {
  const result: ImageMaxWidthAndHeight = { maxWidth: '100%', height: messagePhotoAttachmentMaxHeight }
  if (image && !isEmpty(image)) {
    if (image.width && image.width < Dimensions.get('window').width) {
      result.maxWidth = `${image.width}px`
    }

    if (image.height && image.height < messagePhotoAttachmentMaxHeight) {
      result.height = image.height
    }
  }

  return result
}
