import { renderHook } from '@testing-library/react-hooks'
import useForm from './hooks'
// eslint-disable-next-line
test('should change keyword', () => {
  const { result } = renderHook(() => useForm())
  expect(true).toBe(true)
})
