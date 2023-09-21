import prisma from "./database";
import { Student } from "@prisma/client";

(async () => {
  // SELECT COUNT(id), "class" FROM students s
  // GROUP BY "class"
  // ORDER BY COUNT(id) desc;

  // const students = await prisma.student.groupBy({
  //   by: ["class"],
  //   _count: true,
  //   orderBy: {
  //     _count: { id: "desc" }
  //   }
  // });

  // SELECT COUNT(*), s."class" FROM students s
  // WHERE s."jobId" is null
  // GROUP BY s."class"
  // ORDER BY COUNT(*) desc

  const students = await prisma.student.groupBy({
    by: ["class"],
    _count: true,
    where: {
      jobId: null
    },
    orderBy: {
      _count: { id: "desc" }
    }
  });

  console.log(students);
})();