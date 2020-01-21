class CreateFrameworks < ActiveRecord::Migration[6.0]
  def change
    create_table :frameworks do |t|
      t.string :name
      t.integer :votes

      t.timestamps
    end
  end
end
