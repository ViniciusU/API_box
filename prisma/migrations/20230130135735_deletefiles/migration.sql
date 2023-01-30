/*
  Warnings:

  - You are about to drop the `category` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `equipments` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `imagens` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `mischaracterize` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE `equipments` DROP FOREIGN KEY `equipments_model_fkey`;

-- DropForeignKey
ALTER TABLE `imagens` DROP FOREIGN KEY `imagens_equipment_id_fkey`;

-- DropForeignKey
ALTER TABLE `mischaracterize` DROP FOREIGN KEY `mischaracterize_equipment_id_fkey`;

-- DropTable
DROP TABLE `category`;

-- DropTable
DROP TABLE `equipments`;

-- DropTable
DROP TABLE `imagens`;

-- DropTable
DROP TABLE `mischaracterize`;
