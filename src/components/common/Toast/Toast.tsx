import colors from '@constants/colors'
import _toast, {
  Renderable,
  Toast,
  ToastOptions,
  ValueOrFunction,
} from '@modules/react-hot-toast'

// eslint-disable-next-line no-undef
export const toast = (
  message: ValueOrFunction<Renderable, Toast>,
  options?: ToastOptions
) =>
  _toast(message, {
    ...options,
  })

export const toastSuccess = (
  message: string,
  options: ToastOptions = {
    duration: 3000,
    style: {
      border: `1px solid ${colors.LINE_GREEN}`,
      color: `${colors.MID_NIGHT_BLUE}`,
    },
    iconTheme: {
      primary: `${colors.LINE_GREEN}`,
      secondary: `${colors.WHITE}`,
    },
  }
) =>
  _toast.success(message, {
    ...options,
  })

export const toastError = (
  message: string,
  options: ToastOptions = {
    style: {
      border: `1px solid ${colors.MAXIMUM_RED}`,
      color: `${colors.MID_NIGHT_BLUE}`,
    },
    iconTheme: {
      primary: `${colors.MAXIMUM_RED}`,
      secondary: `${colors.WHITE}`,
    },
  }
) =>
  _toast.error(message, {
    ...options,
  })

export const toastClose = (toastId: string) => _toast.dismiss(toastId)
export const toastCloseAll = () => _toast.dismiss()

// ** Example usage -> https://react-hot-toast.com/docs/toast ** //
