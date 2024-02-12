import { ComponentProps } from "react";
import React from "react";
import {
  ToastProvider,
  Button,
  ToastViewport,
  ToastRoot,
  ToastAction,
  ToastClose,
  ToastDescription,
  ToastTitle,
} from "./styles";
import { Box} from "../Box";
import { Text } from "../Text";
export interface ToastProps extends ComponentProps<typeof ToastRoot> {}

function oneWeekAway() {
  const now = new Date();
  const inOneWeek = now.setDate(now.getDate() + 7);
  return new Date(inOneWeek);
}

function prettyDate() {
  return new Intl.DateTimeFormat("en-US", {
    dateStyle: "full",
    timeStyle: "short",
  }).format();
}

export function Toast(props: ToastProps) {
  const [open, setOpen] = React.useState(false);
  const eventDateRef = React.useRef(new Date());
  const timerRef = React.useRef(0);

  React.useEffect(() => {
    return () => clearTimeout(timerRef.current);
  }, []);
  return (
    <ToastProvider>
      <Button
        onClick={() => {
          setOpen(false);
          window.clearTimeout(timerRef.current);
          timerRef.current = window.setTimeout(() => {
            eventDateRef.current = oneWeekAway();
            setOpen(true);
          }, 100);
        }}
      >
        Add to calendar
      </Button>
      <ToastRoot open={open} onOpenChange={setOpen} {...props}>
        <Box>
          <Text>Agendamento realizado</Text>
          <ToastDescription>
            Monday, February 19, 2024 at 12:41 PM
          </ToastDescription>

          <ToastAction asChild altText="Botao para fechar">
            <Button>FECHAR</Button>
          </ToastAction>
        </Box>
      </ToastRoot>

      <ToastViewport />
    </ToastProvider>
  );
}
