import {MigrationInterface, QueryRunner} from "typeorm";

export class init1678406638310 implements MigrationInterface {
    name = 'init1678406638310'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "user" ("id" SERIAL NOT NULL, "firstName" character varying NOT NULL, "lastName" character varying NOT NULL, "isActive" boolean NOT NULL DEFAULT true, "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), "deleted_at" TIMESTAMP, CONSTRAINT "PK_cace4a159ff9f2512dd42373760" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "photo" ("id" SERIAL NOT NULL, "title" character varying NOT NULL, "description" character varying NOT NULL, "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), "deleted_at" TIMESTAMP, "user_id" integer, CONSTRAINT "PK_723fa50bf70dcfd06fb5a44d4ff" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TYPE "public"."photo_tags_tag_type_enum" AS ENUM('portrait', 'nature', 'cartoon')`);
        await queryRunner.query(`CREATE TABLE "photo_tags" ("id" SERIAL NOT NULL, "tag_type" "public"."photo_tags_tag_type_enum" NOT NULL DEFAULT 'portrait', "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), "deleted_at" TIMESTAMP, "photo_id" integer, CONSTRAINT "PK_0e0b297089e979d788fac346ec6" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "photo" ADD CONSTRAINT "FK_c8c60110b38af9f778106552c39" FOREIGN KEY ("user_id") REFERENCES "user"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "photo_tags" ADD CONSTRAINT "FK_a2bb7871d82754a42f7a076266c" FOREIGN KEY ("photo_id") REFERENCES "photo"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "photo_tags" DROP CONSTRAINT "FK_a2bb7871d82754a42f7a076266c"`);
        await queryRunner.query(`ALTER TABLE "photo" DROP CONSTRAINT "FK_c8c60110b38af9f778106552c39"`);
        await queryRunner.query(`DROP TABLE "photo_tags"`);
        await queryRunner.query(`DROP TYPE "public"."photo_tags_tag_type_enum"`);
        await queryRunner.query(`DROP TABLE "photo"`);
        await queryRunner.query(`DROP TABLE "user"`);
    }

}
