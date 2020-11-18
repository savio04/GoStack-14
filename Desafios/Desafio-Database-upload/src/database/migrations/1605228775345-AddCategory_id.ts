import {MigrationInterface, QueryRunner, TableColumn, TableForeignKey} from "typeorm";

export class AltercategoryTocategoryid1604980865730 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<any> {
      await queryRunner.addColumn('transactions', new TableColumn({
        name: 'category_id',
        type: 'uuid',
        isNullable:true
      }))

      await queryRunner.createForeignKey('transactions', new TableForeignKey({
        name: 'CategotyAlter',
        columnNames: ['category_id'],
        referencedColumnNames: ['id'],
        referencedTableName: 'categories',
        onDelete: 'SET NULL',
        onUpdate: 'CASCADE'
      }))
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
      await queryRunner.dropForeignKey('category', 'CategotyAlter')
      await queryRunner.dropColumn('transactions', 'category_id')
    }
}

