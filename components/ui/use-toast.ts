import { toast as sonnerToast, type ToastT } from "sonner"

type ToastProps = {
  title?: string
  description?: string
  action?: {
    label: string
    onClick: () => void
  }
}

export function toast(props: ToastProps) {
  sonnerToast(props.title, {
    description: props.description,
    action: props.action
      ? {
          label: props.action.label,
          onClick: props.action.onClick,
        }
      : undefined,
  })
}