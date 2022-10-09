class CreateInspections < ActiveRecord::Migration[7.0]
  def change
    create_table :inspections do |t|
      t.integer :user_id
      t.integer :vehicle_id
      t.string :offence
      t.integer :fine
      t.integer :servicecharge
      t.boolean :status

      t.timestamps
    end
  end
end
