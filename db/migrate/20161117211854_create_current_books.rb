class CreateCurrentBooks < ActiveRecord::Migration[5.0]
  def change
    create_table :current_books do |t|
      t.string :title
      t.string :author
      t.integer :club_id

      t.timestamps
    end
  end
end
