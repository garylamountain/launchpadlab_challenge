class CreateVotes < ActiveRecord::Migration[6.0]
  def change
    create_table :votes do |t|
      t.string :framework
      t.string :email

      t.timestamps
    end
  end
end
