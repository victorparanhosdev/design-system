import { ComponentProps, useState, useRef, useEffect } from "react";
import { Button } from "../Button";
import {
  ToastProvider,

  ToastViewport,
  ToastRoot,
  ToastClose,
  ToastDescription,
  ToastTitle,
} from "./styles";

import {X} from 'phosphor-react'

export interface ToastProps extends ComponentProps<typeof ToastRoot> {
  title: string,
  nameButton: string,
  description?: string
}

function oneWeekAway() {
  const now = new Date();
  const inOneWeek = now.setDate(now.getDate() + 7);
  return new Date(inOneWeek);
}

function prettyDate(date: number | Date | undefined) {
  return new Intl.DateTimeFormat('pt-BR', { dateStyle: 'full', timeStyle: 'short' }).format(date);
}

export function Toast({title, nameButton, description, ...props}: ToastProps) {
  const [open, setOpen] = useState(false);
  const eventDateRef = useRef(new Date());
  const timerRef = useRef(0);

  
  useEffect(() => {
    return () => clearTimeout(timerRef.current);
  }, []);
  return (
    <ToastProvider >
      <Button variant={"secondary"}
        onClick={() => {
          setOpen(false);
          window.clearTimeout(timerRef.current);
          timerRef.current = window.setTimeout(() => {
            eventDateRef.current = oneWeekAway();
            setOpen(true);
          }, 100);
        }}
      >
        {nameButton}
      </Button>
      <ToastRoot open={open} onOpenChange={setOpen} {...props}>
          <ToastTitle>{title}</ToastTitle>
          <ToastDescription>
          {prettyDate(eventDateRef.current)}
          </ToastDescription>
          <ToastClose asChild>
          <X weight="light" style={{color: '#A9A9B2'}} size={20}/>
          </ToastClose>

      </ToastRoot>

      <ToastViewport />
    </ToastProvider>
  );
}

Toast.displayName = 'Toast'