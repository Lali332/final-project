import { configureStore } from '@reduxjs/toolkit'
import ordersSlice from '../features/orders/ordersSlice'
import productsSlice from '../features/products/productsSlice'
import usrsSlice from '../features/users/usrsSlice'

export const store = configureStore({
  reducer: {
       product:productsSlice,
       user:usrsSlice,
       order:ordersSlice
  },
})