class UserSerializer < ActiveModel::Serializer
  attributes :id, :username, :email, :password

  has_many :books
  has_many :posts
end
