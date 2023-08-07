/*
  Warnings:

  - You are about to drop the column `type_placeId` on the `place` table. All the data in the column will be lost.
  - You are about to drop the `type_place` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE `place` DROP FOREIGN KEY `place_type_placeId_fkey`;

-- AlterTable
ALTER TABLE `place` DROP COLUMN `type_placeId`,
    ADD COLUMN `place_typeId` VARCHAR(191) NULL;

-- DropTable
DROP TABLE `type_place`;

-- CreateTable
CREATE TABLE `place_type` (
    `id` VARCHAR(191) NOT NULL,
    `nameType` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `place` ADD CONSTRAINT `place_place_typeId_fkey` FOREIGN KEY (`place_typeId`) REFERENCES `place_type`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;
