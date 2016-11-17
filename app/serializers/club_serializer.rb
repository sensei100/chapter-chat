class ClubSerializer < ActiveModel::Serializer
  attributes :id, :name, :location, :current_book

  has_many :users
  has_many :books
  has_one :current_book
  
end
