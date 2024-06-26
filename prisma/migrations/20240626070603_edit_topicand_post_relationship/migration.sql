/*
  Warnings:

  - You are about to drop the `_Topics` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropIndex
DROP INDEX "_Topics_B_index";

-- DropIndex
DROP INDEX "_Topics_AB_unique";

-- DropTable
PRAGMA foreign_keys=off;
DROP TABLE "_Topics";
PRAGMA foreign_keys=on;

-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Post" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "title" TEXT NOT NULL,
    "content" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    CONSTRAINT "Post_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_Post" ("content", "createdAt", "id", "title", "updatedAt", "userId") SELECT "content", "createdAt", "id", "title", "updatedAt", "userId" FROM "Post";
DROP TABLE "Post";
ALTER TABLE "new_Post" RENAME TO "Post";
CREATE TABLE "new_Topic" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "topicName" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "backgroundColor" TEXT NOT NULL,
    "textColor" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    "postId" TEXT,
    CONSTRAINT "Topic_postId_fkey" FOREIGN KEY ("postId") REFERENCES "Post" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);
INSERT INTO "new_Topic" ("backgroundColor", "createdAt", "description", "id", "textColor", "topicName", "updatedAt") SELECT "backgroundColor", "createdAt", "description", "id", "textColor", "topicName", "updatedAt" FROM "Topic";
DROP TABLE "Topic";
ALTER TABLE "new_Topic" RENAME TO "Topic";
CREATE UNIQUE INDEX "Topic_topicName_key" ON "Topic"("topicName");
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
