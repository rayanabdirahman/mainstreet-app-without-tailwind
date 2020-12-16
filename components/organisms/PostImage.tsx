import React from 'react'
import { Image as DefaultImage, TouchableOpacity } from 'react-native'
import { View as DefaultView } from 'react-native'
import styled from 'styled-components/native'

type Props = DefaultImage['props'] & {}

export function PostImage(props: Props) {
  return (
    <TouchableOpacity
      style={{ marginBottom: 8 }}
      onPress={() => alert('add double tap for like')}>
      <DefaultImage 
        style={{ aspectRatio: 3/1.6, borderRadius: 8 }}
       {...props} />
    </TouchableOpacity>
  )
}
