
import { PlusIcon } from '@radix-ui/react-icons';

import {IconButton, TooltipArrow, TooltipContent, TooltipProvider, TooltipRoot,TooltipPortal, TooltipTrigger} from './styles'
import { ComponentProps } from 'react';

export interface TooltipProps extends ComponentProps<typeof TooltipRoot>{}

export function Tooltip(props: TooltipProps) {
  return (
    <TooltipProvider>
      <TooltipRoot {...props}>
        <TooltipTrigger asChild>
          <IconButton>
            <PlusIcon />
          </IconButton>
        </TooltipTrigger>
        <TooltipPortal>
          <TooltipContent sideOffset={5}>
            Add to library
            <TooltipArrow />
          </TooltipContent>
        </TooltipPortal>
      </TooltipRoot>
    </TooltipProvider>
  );
};