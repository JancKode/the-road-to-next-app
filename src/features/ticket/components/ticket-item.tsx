import { Ticket } from "@prisma/client";
import clsx from "clsx";
import { LucideSquareArrowOutUpRight, LucideTrash } from "lucide-react";
import Link from "next/link";
import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ticketPath } from "@/paths";
import { deleteTicket } from "../actions/delete-ticket";
import { TICKET_ICONS } from "../constants";

export type TicketItemProps = {
  ticket: Ticket;
  isDetail?: boolean;
};

const TicketItem = ({ ticket, isDetail }: TicketItemProps) => {
  console.log("Where am I displayed TicketItem");
  const detailButton = (
    <Button variant={"outline"} asChild size="icon">
      <Link href={ticketPath(ticket.id)}>
        <LucideSquareArrowOutUpRight />
      </Link>
    </Button>
  );

  // const handleDeleteTicket = async () => {
  //   await deleteTicket(ticket.id);
  // };

  const deleteButton = (
    <form action={deleteTicket.bind(null, ticket.id)}>
      <Button
        variant={"outline"}
        size={"icon"}
        //onClick={handleDeleteTicket}
      >
        <Link href={ticketPath(ticket.id)}>
          <LucideTrash className="h-4 w-4" />
        </Link>
      </Button>
    </form>
  );
  return (
    <div
      className={clsx("w-full flex gap-x-1", {
        "max-w-[580px]": isDetail,
        "max-w-[420px]": !isDetail,
      })}
    >
      <Card className="w-full">
        <CardHeader>
          <CardTitle className="flex gap-x-2">
            <span>{TICKET_ICONS[ticket.status]}</span>
            <span className="truncate text-lg font-bold overflow-hidden">
              {ticket.title}
            </span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <span
            className={clsx("whitespace-break-spaces", {
              "line-clamp-3 ": !isDetail,
            })}
          >
            {ticket.content}
          </span>
        </CardContent>
      </Card>
      <div className="flex flex-col gap-y-1">
        {isDetail ? deleteButton : detailButton}
      </div>
    </div>
  );
};

export default TicketItem;
