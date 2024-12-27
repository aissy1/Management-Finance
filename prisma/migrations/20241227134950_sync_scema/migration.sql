/*
  Warnings:

  - Added the required column `Subject` to the `Invoices` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Invoices" ADD COLUMN     "Subject" TEXT NOT NULL;
