import { PrismaClient } from "@prisma/client";
// ... rest of the file stays the same

const prisma = new PrismaClient();

const tickets = [
  {
    title: "Ticket 1",
    content: "This is the fourth from the database",
    status: "OPEN" as const,
  },
  {
    title: "Ticket 2",
    content: "This is the fifth from the database",
    status: "DONE" as const,
  },
  {
    title: "Ticket 3",
    content: "This is the sixth from the database",
    status: "IN_PROGRESS" as const,
  },
];

const seed = async () => {
  console.log("Seeding database...");
  const t0 = performance.now();

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
  const t1 = performance.now();
  console.log(`Time taken: ${t1 - t0} ms`);

  console.log("Database seeded successfully!");
};

seed();
