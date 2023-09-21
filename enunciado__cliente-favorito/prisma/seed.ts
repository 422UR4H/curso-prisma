import prisma from "../src/database";

async function main() {
    await createUser();
}

async function createUser() {
    await prisma.customer.upsert({
        create: {
            firstName: "Geraldo",
            lastName: "Luiz Datena",
            document: "133.245.497-60"
        },
        update: {},
        where: {
            document: "133.245.497-60"
        }
    });
}

main().then(async () => {
    await prisma.$disconnect();
}).catch(async (err) => {
    console.log(err);
    await prisma.$disconnect();
    process.exit(1);
});