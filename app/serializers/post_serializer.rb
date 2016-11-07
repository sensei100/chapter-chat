class PostSerializer < ActiveModel::Serializer
  attributes :id, :content, :user_id, :book_id

  has_one :book 
  has_many :comments
  
end
