import { styled, keyframes } from "../../styles";
import * as Toast from '@radix-ui/react-toast'


export const ToastProvider = styled(Toast.Provider, {})

export const Button = styled('button', {})

export const ToastTitle = styled(Toast.Title, {
    gridArea: 'title',
    fontSize: '$xl',
    fontWeight: '$bold',
    fontFamily: '$default',
    lineHeight: '32px',
    color: '$white'
})

export const ToastDescription  = styled(Toast.Description , {
  gridArea: 'description',
  color: '$gray200',
  fontSize: '$sm',
  lineHeight:'$base',
  fontFamily:'$default',
  marginTop: '$1'
})


export const ToastClose = styled(Toast.Close, {
  gridArea: 'close',
  cursor: 'pointer',
  margin: 'auto'

})

export const ToastViewport = styled(Toast.Viewport, {
    position: 'fixed',
    bottom: 0,
    right: 0,
    margin: 0,
    padding: '$8',
    listStyle: 'none',
    zIndex: 2147483647,
})


const VIEWPORT_PADDING = 25;

const hide = keyframes({
      '0%': { opacity: 1 },
      '100%': { opacity: 0 },
    });
    
const slideIn = keyframes({
      from: { transform: `translateX(calc(100% + ${VIEWPORT_PADDING}px))` },
      to: { transform: 'translateX(0)' },
    });
    
const swipeOut = keyframes({
      from: { transform: 'translateX(var(--radix-toast-swipe-end-x))' },
      to: { transform: `translateX(calc(100% + ${VIEWPORT_PADDING}px))` },
    });
  



export const ToastRoot = styled(Toast.Root, {
      backgroundColor: '$gray800',
      width: '360px',
      padding: '$3 $5',
      border: '1px solid $colors$gray600',
      borderRadius: '6px',
      display: 'grid',
      gridTemplateAreas: "'title close''description description'",
      justifyContent: 'space-between',
      alignItems: 'center',

      '&[data-state="open"]': {
        animation: `${slideIn} 150ms cubic-bezier(0.16, 1, 0.3, 1)`,
      },
      '&[data-state="closed"]': {
        animation: `${hide} 100ms ease-in`,
      },
      '&[data-swipe="move"]': {
        transform: 'translateX(var(--radix-toast-swipe-move-x))',
      },
      '&[data-swipe="end"]': {
        animation: `${swipeOut} 100ms ease-out`,
      },
  })
  