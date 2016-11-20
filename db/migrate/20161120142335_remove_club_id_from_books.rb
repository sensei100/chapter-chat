class RemoveClubIdFromBooks < ActiveRecord::Migration[5.0]
  def change
    remove_column :books, :club_id, :integer
  end
end
