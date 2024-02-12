
import {TooltipArrow, TooltipContent} from './styles'
import { ComponentProps } from 'react';
import { Button } from '../Button';
import * as TooltipPrimitive from '@radix-ui/react-tooltip';
export interface TooltipProps extends ComponentProps<typeof TooltipPrimitive.Root>{
  title: string,
  subtitle: string
}

export function Tooltip(props: TooltipProps) {
  return (
    <TooltipPrimitive.Provider>
      <TooltipPrimitive.Root {...props}>
        <TooltipPrimitive.Trigger asChild>
        <Button variant={"secondary"}>{props.title}</Button>
        </TooltipPrimitive.Trigger>
        <TooltipPrimitive.Portal>
          <TooltipContent sideOffset={5}>
            {props.subtitle}
            <TooltipArrow/>
          </TooltipContent>
        </TooltipPrimitive.Portal>
      </TooltipPrimitive.Root>
    </TooltipPrimitive.Provider>
  );
};

Tooltip.displayName = 'Tooltip'