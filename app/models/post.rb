class Post < ApplicationRecord

  belongs_to :book
  belongs_to :user
  has_many :comments
  
end
