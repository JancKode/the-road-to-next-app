import { PrismaClient } from "../src/generated/prisma";
// ... rest of the file stays the same

const prisma = new PrismaClient();

const tickets = [
  {
    id: "1",
    title: "Ticket 1",
    content: "This is the first from the database",
    status: "OPEN" as const,
  },
  {
    id: "2",
    title: "Ticket 2",
    content: "This is the second from the database",
    status: "DONE" as const,
  },
  {
    id: "3",
    title: "Ticket 3",
    content: "This is the third from the database",
    status: "IN_PROGRESS" as const,
  },
];

const seed = async () => {
  console.log("Seeding database...");

  // Delete existing tickets
  await prisma.ticket.deleteMany();

  // Create new tickets
  //   for (const ticket of tickets) {
  //     await prisma.ticket.create({
  //       data: ticket,
  //     });
  //   }

  //   const promises = tickets.map((ticket) =>
  //     prisma.ticket.create({
  //       data: ticket,
  //     })
  //   );

  //   await Promise.all(promises);

  await prisma.ticket.createMany({
    data: tickets,
  });

  console.log("Database seeded successfully!");
};

seed();
