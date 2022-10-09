class CreateApiVehicles < ActiveRecord::Migration[7.0]
  def change
    create_table :api_vehicles do |t|
      t.integer :user_id
      t.string :numberplate
      t.string :chasisnumber
      t.string :model

      t.timestamps
    end
  end
end
