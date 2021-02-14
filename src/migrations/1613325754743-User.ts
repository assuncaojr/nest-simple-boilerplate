/* eslint-disable max-len, indent */
import { MigrationInterface, QueryRunner } from 'typeorm';

export class User1613325754743 implements MigrationInterface {
    name = 'User1613325754743'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("CREATE TABLE `users` (`id` int NOT NULL AUTO_INCREMENT, `firstName` varchar(120) NOT NULL, `lastName` varchar(120) NOT NULL, `email` varchar(120) NOT NULL, `password` varchar(255) NOT NULL, `isActive` tinyint NOT NULL DEFAULT 1, UNIQUE INDEX `IDX_97672ac88f789774dd47f7c8be` (`email`), PRIMARY KEY (`id`)) ENGINE=InnoDB");
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("DROP INDEX `IDX_97672ac88f789774dd47f7c8be` ON `users`");
        await queryRunner.query("DROP TABLE `users`");
    }

}
