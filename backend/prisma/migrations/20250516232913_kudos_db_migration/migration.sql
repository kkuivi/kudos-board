-- CreateTable
CREATE TABLE "KudosBoard" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "category" TEXT NOT NULL,
    "image" TEXT NOT NULL,
    "author" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "KudosBoard_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "KudosMessage" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "message" TEXT NOT NULL,
    "image" TEXT NOT NULL,
    "upvotes" INTEGER NOT NULL DEFAULT 0,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "boardId" INTEGER NOT NULL,

    CONSTRAINT "KudosMessage_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "KudosMessage" ADD CONSTRAINT "KudosMessage_boardId_fkey" FOREIGN KEY ("boardId") REFERENCES "KudosBoard"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
