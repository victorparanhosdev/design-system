import type { Meta, StoryObj } from '@storybook/react'
import {Tooltip, TooltipProps} from '@system-ignite-ui/react'

export default {
    title: 'Data display/Tooltip',
    component: Tooltip,
    args: {
        title: 'Hover Tooltip',
        subtitle: 'Exemplo subtitulo'
    },
    decorators: [
        (Story) => {
          return (
            <div style={{minHeight: '20vh', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
              {Story()}
            </div>
          )
        },
      ],
    
}as Meta<TooltipProps>

export const Primary: StoryObj<TooltipProps> = {

}
