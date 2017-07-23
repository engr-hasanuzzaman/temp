class CreateUsers < ActiveRecord::Migration[5.1]
  def change
    create_table :users do |t|
      t.integer :type, default: 0
      t.string :email, null: false

      t.timestamps
    end
  end
end
