export type RootStackParamList = {
  Root: undefined
  Comments: undefined
  NotFound: undefined
}

export type BottomTabParamList = {
  Feed: undefined
  Notification: undefined
  Cart: undefined
  Profile: undefined
}

export type FeedTabParamList = {
  FeedScreen: undefined
  ProfileScreen: { userId: string }
}

export type NotificationTabParamList = {
  NotificationScreen: undefined
}

export type ProfileTabParamList = {
  ProfileScreen: undefined
}

export type CartTabParamList = {
  CartScreen: undefined
}
