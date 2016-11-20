class BookSerializer < ActiveModel::Serializer
  attributes :id, :title, :author, :user_id
  
end
