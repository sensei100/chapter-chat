class BookSerializer < ActiveModel::Serializer
  attributes :id, :title, :author, :user_id, :club_id

  has_many :posts
  
end
