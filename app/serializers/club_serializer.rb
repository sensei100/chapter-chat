class ClubSerializer < ActiveModel::Serializer
  attributes :id, :name, :location

  has_many :users
  has_many :books
  
end
