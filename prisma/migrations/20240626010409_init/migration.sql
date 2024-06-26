/*
  Warnings:

  - Added the required column `createdById` to the `CategoriesOnPosts` table without a default value. This is not possible if the table is not empty.
  - Added the required column `createdById` to the `TagsOnPosts` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `categoriesonposts` ADD COLUMN `createdById` INTEGER NOT NULL;

-- AlterTable
ALTER TABLE `tagsonposts` ADD COLUMN `createdById` INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE `CategoriesOnPosts` ADD CONSTRAINT `CategoriesOnPosts_createdById_fkey` FOREIGN KEY (`createdById`) REFERENCES `User`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `TagsOnPosts` ADD CONSTRAINT `TagsOnPosts_createdById_fkey` FOREIGN KEY (`createdById`) REFERENCES `User`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
