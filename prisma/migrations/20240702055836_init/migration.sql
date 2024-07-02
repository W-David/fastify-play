/*
  Warnings:

  - The primary key for the `categoriesonposts` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `tagsonposts` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - Added the required column `id` to the `CategoriesOnPosts` table without a default value. This is not possible if the table is not empty.
  - Added the required column `id` to the `TagsOnPosts` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE `categoriesonposts` DROP FOREIGN KEY `CategoriesOnPosts_categoryId_fkey`;

-- DropForeignKey
ALTER TABLE `categoriesonposts` DROP FOREIGN KEY `CategoriesOnPosts_createdById_fkey`;

-- DropForeignKey
ALTER TABLE `categoriesonposts` DROP FOREIGN KEY `CategoriesOnPosts_postId_fkey`;

-- DropForeignKey
ALTER TABLE `tagsonposts` DROP FOREIGN KEY `TagsOnPosts_createdById_fkey`;

-- DropForeignKey
ALTER TABLE `tagsonposts` DROP FOREIGN KEY `TagsOnPosts_postId_fkey`;

-- DropForeignKey
ALTER TABLE `tagsonposts` DROP FOREIGN KEY `TagsOnPosts_tagId_fkey`;

-- AlterTable
ALTER TABLE `categoriesonposts` DROP PRIMARY KEY,
    ADD COLUMN `id` INTEGER NOT NULL AUTO_INCREMENT,
    MODIFY `postId` INTEGER NULL,
    MODIFY `categoryId` INTEGER NULL,
    MODIFY `createdById` INTEGER NULL,
    ADD PRIMARY KEY (`id`);

-- AlterTable
ALTER TABLE `tagsonposts` DROP PRIMARY KEY,
    ADD COLUMN `id` INTEGER NOT NULL AUTO_INCREMENT,
    MODIFY `postId` INTEGER NULL,
    MODIFY `tagId` INTEGER NULL,
    MODIFY `createdById` INTEGER NULL,
    ADD PRIMARY KEY (`id`);

-- AddForeignKey
ALTER TABLE `CategoriesOnPosts` ADD CONSTRAINT `CategoriesOnPosts_postId_fkey` FOREIGN KEY (`postId`) REFERENCES `Post`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `CategoriesOnPosts` ADD CONSTRAINT `CategoriesOnPosts_categoryId_fkey` FOREIGN KEY (`categoryId`) REFERENCES `Category`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `CategoriesOnPosts` ADD CONSTRAINT `CategoriesOnPosts_createdById_fkey` FOREIGN KEY (`createdById`) REFERENCES `User`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `TagsOnPosts` ADD CONSTRAINT `TagsOnPosts_postId_fkey` FOREIGN KEY (`postId`) REFERENCES `Post`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `TagsOnPosts` ADD CONSTRAINT `TagsOnPosts_tagId_fkey` FOREIGN KEY (`tagId`) REFERENCES `Tag`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `TagsOnPosts` ADD CONSTRAINT `TagsOnPosts_createdById_fkey` FOREIGN KEY (`createdById`) REFERENCES `User`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;
