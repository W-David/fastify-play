/*
  Warnings:

  - You are about to drop the column `size` on the `file` table. All the data in the column will be lost.
  - Added the required column `urlPath` to the `File` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `file` DROP COLUMN `size`,
    ADD COLUMN `urlPath` VARCHAR(255) NOT NULL;
