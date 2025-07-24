"user server";
import { prisma } from "@/lib/prisma";

export const createTicket = async (title: string, content: string) => {
  await prisma.ticket.create({
    data: {
      title,
      content,
    },
  });
};
