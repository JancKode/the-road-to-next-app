"use server";
import { prisma } from "@/lib/prisma";

export const deleteTicket = async (id: string) => {
  // TODO: Implement delete ticket
  console.log("Delete ticket", id);
  await prisma.ticket.delete({
    where: {
      id: id,
    },
  });
};
