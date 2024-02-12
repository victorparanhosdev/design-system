import type { Meta, StoryObj } from '@storybook/react'
import { Toast, ToastProps} from '@system-ignite-ui/react'

export default {
    title: 'Data display/Toast',
    component: Toast,
    args: {
        title: 'Agendamento realizado',
        nameButton: 'Agendar'
    },
    decorators: [
        (Story) => {
          return (
            <div style={{minHeight: '30vh'}}>
              {Story()}
            </div>
          )
        },
      ],
    
}as Meta<ToastProps>

export const Primary: StoryObj<ToastProps> = {

}
