
class AddClubIdToUsers < ActiveRecord::Migration[5.0]
  def change
    add_column :users, :club_id, :integer
  end
end
